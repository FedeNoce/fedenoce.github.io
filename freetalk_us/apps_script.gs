// Paste this into a new Apps Script project (script.google.com) and deploy it as a Web
// App. It receives each participant's full JSON payload from freetalk_us/app.js and
// writes it out as rows into a Google Sheet -- one row per Test-1 comparison, one row
// per Test-2 rating, so you can analyze per-item results directly in the sheet.
//
// See SETUP.md in this folder for the exact deploy steps (one-time, ~5 minutes).

const SHEET_ID = "PASTE_YOUR_GOOGLE_SHEET_ID_HERE"; // the long id in the sheet's URL

function doPost(e) {
  const data = JSON.parse(e.postData.contents);
  const ss = SpreadsheetApp.openById(SHEET_ID);

  const t1 = getOrCreateSheet(ss, "Test1", [
    "participantId", "startedAt", "finishedAt",
    "clipId", "baseline", "freetalkSide",
    "lipsyncChoice", "lipsyncPreferredFreetalk",
    "emotionChoice", "emotionPreferredFreetalk",
  ]);
  (data.test1Responses || []).forEach((r) => {
    t1.appendRow([
      data.participantId, data.startedAt, data.finishedAt,
      r.clipId, r.baseline, r.freetalkSide,
      r.lipsyncChoice, r.lipsyncPreferredFreetalk,
      r.emotionChoice, r.emotionPreferredFreetalk,
    ]);
  });

  const t2 = getOrCreateSheet(ss, "Test2", [
    "participantId", "startedAt", "finishedAt",
    "item", "lipsyncScore", "emotionScore",
  ]);
  (data.test2Responses || []).forEach((r) => {
    t2.appendRow([
      data.participantId, data.startedAt, data.finishedAt,
      r.item, r.lipsyncScore, r.emotionScore,
    ]);
  });

  return ContentService.createTextOutput(JSON.stringify({ ok: true }))
    .setMimeType(ContentService.MimeType.JSON);
}

function getOrCreateSheet(ss, name, header) {
  let sh = ss.getSheetByName(name);
  if (!sh) {
    sh = ss.insertSheet(name);
    sh.appendRow(header);
    sh.setFrozenRows(1);
  }
  return sh;
}
