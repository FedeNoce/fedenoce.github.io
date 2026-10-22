# One-time setup (both free, ~5 minutes total)

## 1. Create the Google Sheet that will collect responses

1. Go to [sheets.new](https://sheets.new) (creates a blank spreadsheet).
2. Name it whatever you like (e.g. "FreeTalk user study responses").
3. Copy its **Sheet ID** from the URL:
   `https://docs.google.com/spreadsheets/d/`**`THIS_PART_IS_THE_ID`**`/edit`

## 2. Deploy the Apps Script as a Web App

1. Go to [script.new](https://script.new) (creates a blank Apps Script project).
2. Delete the placeholder code and paste in the contents of `apps_script.gs` (same folder
   as this file).
3. Replace `PASTE_YOUR_GOOGLE_SHEET_ID_HERE` at the top with the Sheet ID from step 1.
4. Click **Deploy -> New deployment**.
5. Click the gear icon next to "Select type" -> choose **Web app**.
6. Set:
   - **Execute as:** Me
   - **Who has access:** Anyone
7. Click **Deploy**. The first time, Google will ask you to authorize the script
   (click through "Advanced" -> "Go to ... (unsafe)" if it shows the unverified-app
   warning -- this is your own script, it's safe).
8. Copy the **Web app URL** it gives you (looks like
   `https://script.google.com/macros/s/AKfycb.../exec`).

## 3. Wire it into the site

Open `app.js` and replace the placeholder at the top:

```js
const SUBMIT_URL = "PASTE_YOUR_APPS_SCRIPT_WEB_APP_URL_HERE";
```

with the URL from step 2.8. That's it -- every submission now appends rows to the
"Test1" and "Test2" tabs of your Sheet automatically.

## Notes

- If you ever edit `apps_script.gs` after deploying, you need to **Deploy -> Manage
  deployments -> edit (pencil) -> New version -> Deploy** again for the changes to take
  effect on the existing URL.
- The browser can't read the response from an Apps Script Web App called this way (it's
  sent as a "fire and forget" request to dodge CORS preflight issues), so the page always
  shows "Thank you" shortly after submitting even if something went wrong server-side.
  Check the Sheet periodically while testing to confirm rows are actually appearing; if
  they aren't, re-check the deployment's "Execute as / Who has access" settings.
