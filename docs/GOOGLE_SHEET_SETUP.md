# Securely Saving to Google Sheets

Since your frontend app runs in the browser, using a standard Google API key directly exposes it, and standard API keys do not have permissions to write data anyway (only read).

To securely receive data directly into your Google Sheet for free, the best method is to use **Google Apps Script**.

I have slightly updated the `ContactForm` code to send a `text/plain` POST request, which is exactly what Google Apps Script expects to bypass restrictive browser CORS policies.

### Step 1: Add the Script to your Google Sheet
1. Open your Google Sheet: https://docs.google.com/spreadsheets/d/1lI87tEddiH8ZLFm3Yhc9Hg8dGAN7iMR8xBimNKBix9g/edit
2. Name your first tab exactly **`Sheet1`** (or change it in the code below to match your tab name).
3. Set up your columns in Row 1: `Date`, `Full Name`, `Email`, `Phone Number`, `Message`.
4. In the top menu, click **Extensions > Apps Script**.
5. Delete any code in the editor, and paste the following script:

```javascript
function doPost(e) {
  try {
    // 1. Get the sheet by name
    var sheet = SpreadsheetApp.getActiveSpreadsheet().getSheetByName("Sheet1");
    
    // 2. Parse the incoming JSON string from our React app
    var data = JSON.parse(e.postData.contents);
    
    // 3. Append the data to the next available row
    // Make sure the order matches your column headers!
    sheet.appendRow([
      new Date(),           // Column A: Date/Time
      data.fullName || "",  // Column B: Full Name
      data.email || "",     // Column C: Email
      data.phoneNumber || "", // Column D: Phone
      data.message || ""    // Column E: Message
    ]);

    // 4. Return success response
    return ContentService
      .createTextOutput(JSON.stringify({ "status": "success" }))
      .setMimeType(ContentService.MimeType.JSON);

  } catch (error) {
    // Return error response
    return ContentService
      .createTextOutput(JSON.stringify({ "status": "error", "message": error.toString() }))
      .setMimeType(ContentService.MimeType.JSON);
  }
}
```

### Step 2: Deploy the Web App
1. Click the blue **Deploy** button in the top right corner and select **New deployment**.
2. Click the gear icon ⚙️ next to "Select type" and choose **Web app**.
3. Fill out the configuration:
   - **Description**: Contact Form Integration
   - **Execute as**: `Me (your email)`
   - **Who has access**: `Anyone` *(This is required so your public website can send data to it)*
4. Click **Deploy**.
5. *Note: Google will ask you to "Authorize access". Click it, choose your account, click "Advanced", and click "Go to Untitled project (unsafe)". Allow the permissions.*
6. Copy the **Web app URL** it provides you at the end.

### Step 3: Add the URL to your project
Open your `.env` file and paste the copied URL:

```env
VITE_GOOGLE_SHEET_ENDPOINT="https://script.google.com/macros/s/YOUR_LONG_ID_HERE/exec"
```
*(You do not need a `VITE_GOOGLE_SHEET_API_KEY` when using this method, so you can leave it out).*

Your form will now successfully append rows directly into your spreadsheet!
