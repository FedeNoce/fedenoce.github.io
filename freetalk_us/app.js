// FreeTalk user study -- single-page app, no framework, no build step.
// Data flow: build a random Test-1 subset + fixed Test-2 set -> walk the participant
// through both -> POST one JSON payload to a Google Apps Script Web App at the end.

// ---------------------------------------------------------------------------
// CONFIG -- fill this in once you've deployed the Apps Script (see SETUP.md)
// ---------------------------------------------------------------------------
const SUBMIT_URL = "https://script.google.com/macros/s/AKfycbyB84ryECxiEJNtdRgmsxEIbe7YBicgoTIZR_px_WgF5PjNnrDnR4xUdwoQjnIdqp0s/exec";

// ---------------------------------------------------------------------------
// Content manifest
// ---------------------------------------------------------------------------
const CLIPS = [
  { id: "M003_angry_3_001",     emotion: "Angry" },
  { id: "M003_happy_3_001",     emotion: "Happy" },
  { id: "M005_sad_3_001",       emotion: "Sad" },
  { id: "M005_surprised_3_001", emotion: "Surprised" },
  { id: "M007_disgusted_3_001", emotion: "Disgusted" },
  { id: "M007_contempt_3_001",  emotion: "Contempt" },
  { id: "W029_fear_3_001",      emotion: "Fear" },
  { id: "W029_contempt_3_001",  emotion: "Contempt" },
  { id: "W033_happy_3_001",     emotion: "Happy" },
  { id: "W033_angry_3_001",     emotion: "Angry" },
  { id: "W035_surprised_3_001", emotion: "Surprised" },
  { id: "W035_sad_3_001",       emotion: "Sad" },
];

const BASELINES = ["scantalk", "emoposeface"];
const N_TEST1_SHOWN = 16; // how many of the 12*2=24 pairs each participant judges

const TEST2_ITEMS = [
  "thanos_photo", "id_005_ex_angry", "thanos_fear", "Alien_angry2",
  "id_003_photo", "id_002_surprised2", "FLAME_sample_remeshed_surprised2",
  "FLAME_sample_remeshed_ex_angry", "arnold_angry2", "F2_photo",
  "F2_ex_angry", "id_005_angry2",
];

// ---------------------------------------------------------------------------
// Helpers
// ---------------------------------------------------------------------------
function shuffle(arr) {
  const a = arr.slice();
  for (let i = a.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [a[i], a[j]] = [a[j], a[i]];
  }
  return a;
}

function uuid() {
  return "xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx".replace(/[xy]/g, (c) => {
    const r = (Math.random() * 16) | 0;
    const v = c === "x" ? r : (r & 0x3) | 0x8;
    return v.toString(16);
  });
}

function $(id) { return document.getElementById(id); }
function show(id) {
  document.querySelectorAll(".screen").forEach((s) => (s.hidden = true));
  $(id).hidden = false;
  window.scrollTo(0, 0);
}

// ---------------------------------------------------------------------------
// Build this participant's randomized session
// ---------------------------------------------------------------------------
function buildTest1Plan() {
  const pool = [];
  for (const clip of CLIPS) {
    for (const baseline of BASELINES) {
      pool.push({ clip, baseline });
    }
  }
  const picked = shuffle(pool).slice(0, N_TEST1_SHOWN);
  return picked.map((item) => {
    const freetalkIsLeft = Math.random() < 0.5;
    return {
      clipId: item.clip.id,
      emotion: item.clip.emotion,
      baseline: item.baseline,
      // "A" = left half of the composited video, "B" = right half
      freetalkSide: freetalkIsLeft ? "A" : "B",
      video: `videos/test1/${item.baseline}/${item.clip.id}_${freetalkIsLeft ? "ftleft" : "ftright"}.mp4`,
    };
  });
}

function buildTest2Plan() {
  return shuffle(TEST2_ITEMS).map((name) => ({
    name,
    video: `videos/test2/${name}.mp4`,
  }));
}

// ---------------------------------------------------------------------------
// State
// ---------------------------------------------------------------------------
const session = {
  participantId: uuid(),
  startedAt: new Date().toISOString(),
  test1Plan: [],
  test2Plan: [],
  test1Responses: [],
  test2Responses: [],
};

let t1Index = 0;
let t2Index = 0;
let t1Choice1 = null; // lip-sync
let t1Choice2 = null; // emotion
let t2Score1 = null; // lip-sync 1-5
let t2Score2 = null; // emotion 1-5

// ---------------------------------------------------------------------------
// Test 1 flow
// ---------------------------------------------------------------------------
function renderTest1Step() {
  const item = session.test1Plan[t1Index];
  $("t1-index").textContent = t1Index + 1;
  $("t1-total").textContent = session.test1Plan.length;
  $("t1-progress-bar").style.width = `${((t1Index) / session.test1Plan.length) * 100}%`;
  $("t1-emotion").textContent = item.emotion;
  $("t1-emotion2").textContent = item.emotion;

  $("t1-video").src = item.video;
  $("t1-video").load();

  t1Choice1 = null;
  t1Choice2 = null;
  document.querySelectorAll("#t1-q1-buttons .btn-choice").forEach((b) => b.classList.remove("selected"));
  document.querySelectorAll("#t1-q2-buttons .btn-choice").forEach((b) => b.classList.remove("selected"));
  $("t1-next").disabled = true;
}

function maybeEnableT1Next() {
  $("t1-next").disabled = !(t1Choice1 && t1Choice2);
}

document.querySelectorAll("#t1-q1-buttons .btn-choice").forEach((btn) => {
  btn.addEventListener("click", () => {
    t1Choice1 = btn.dataset.choice;
    document.querySelectorAll("#t1-q1-buttons .btn-choice").forEach((b) => b.classList.toggle("selected", b === btn));
    maybeEnableT1Next();
  });
});
document.querySelectorAll("#t1-q2-buttons .btn-choice").forEach((btn) => {
  btn.addEventListener("click", () => {
    t1Choice2 = btn.dataset.choice;
    document.querySelectorAll("#t1-q2-buttons .btn-choice").forEach((b) => b.classList.toggle("selected", b === btn));
    maybeEnableT1Next();
  });
});

$("t1-next").addEventListener("click", () => {
  const item = session.test1Plan[t1Index];
  session.test1Responses.push({
    clipId: item.clipId,
    baseline: item.baseline,
    freetalkSide: item.freetalkSide,
    lipsyncChoice: t1Choice1,
    lipsyncPreferredFreetalk: t1Choice1 === item.freetalkSide,
    emotionChoice: t1Choice2,
    emotionPreferredFreetalk: t1Choice2 === item.freetalkSide,
  });
  t1Index++;
  if (t1Index < session.test1Plan.length) {
    renderTest1Step();
  } else {
    showTest2Intro();
  }
});

// ---------------------------------------------------------------------------
// Test 2 flow
// ---------------------------------------------------------------------------
function buildRatingButtons(container, onPick) {
  container.innerHTML = "";
  for (let i = 1; i <= 5; i++) {
    const b = document.createElement("button");
    b.className = "btn-rating";
    b.textContent = i;
    b.addEventListener("click", () => {
      container.querySelectorAll(".btn-rating").forEach((x) => x.classList.toggle("selected", x === b));
      onPick(i);
    });
    container.appendChild(b);
  }
  const labels = document.createElement("div");
  labels.className = "rating-scale-labels";
  labels.innerHTML = "<span>1 = bad</span><span>5 = excellent</span>";
  container.appendChild(labels);
}

function renderTest2Step() {
  const item = session.test2Plan[t2Index];
  $("t2-index").textContent = t2Index + 1;
  $("t2-total").textContent = session.test2Plan.length;
  $("t2-progress-bar").style.width = `${(t2Index / session.test2Plan.length) * 100}%`;

  $("t2-video").src = item.video;
  $("t2-video").load();

  t2Score1 = null;
  t2Score2 = null;
  $("t2-next").disabled = true;

  buildRatingButtons($("t2-q1-rating"), (v) => { t2Score1 = v; maybeEnableT2Next(); });
  buildRatingButtons($("t2-q2-rating"), (v) => { t2Score2 = v; maybeEnableT2Next(); });
}

function maybeEnableT2Next() {
  $("t2-next").disabled = !(t2Score1 && t2Score2);
}

$("t2-next").addEventListener("click", () => {
  const item = session.test2Plan[t2Index];
  session.test2Responses.push({
    item: item.name,
    lipsyncScore: t2Score1,
    emotionScore: t2Score2,
  });
  t2Index++;
  if (t2Index < session.test2Plan.length) {
    renderTest2Step();
  } else {
    submitResults();
  }
});

// ---------------------------------------------------------------------------
// Transitions
// ---------------------------------------------------------------------------
function startTest1() {
  session.test1Plan = buildTest1Plan();
  t1Index = 0;
  show("screen-test1");
  renderTest1Step();
}

function startTest2() {
  session.test2Plan = buildTest2Plan();
  t2Index = 0;
  show("screen-test2");
  renderTest2Step();
}

function showTest1Intro() { show("screen-test1-intro"); }
function showTest2Intro() { show("screen-test2-intro"); }

function submitResults() {
  show("screen-submit");
  session.finishedAt = new Date().toISOString();

  const payload = JSON.stringify(session);

  if (SUBMIT_URL.startsWith("PASTE_")) {
    $("submit-status").textContent = "No submission endpoint configured.";
    $("error-payload").value = payload;
    show("screen-error");
    return;
  }

  fetch(SUBMIT_URL, {
    method: "POST",
    mode: "no-cors", // Apps Script Web Apps don't return CORS headers; fire-and-forget
    headers: { "Content-Type": "text/plain;charset=utf-8" },
    body: payload,
  })
    .then(() => show("screen-done"))
    .catch(() => {
      $("error-payload").value = payload;
      show("screen-error");
    });

  // no-cors responses are always opaque (can't confirm success), so show "done" after
  // a short delay regardless -- the request was sent either way.
  setTimeout(() => show("screen-done"), 1200);
}

$("btn-start").addEventListener("click", showTest1Intro);
$("btn-start-test1").addEventListener("click", startTest1);
$("btn-start-test2").addEventListener("click", startTest2);
