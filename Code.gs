function doGet() {
  var html = HtmlService.createTemplateFromFile("index").evaluate();
  html.setTitle("Summit Web App Prototype");
  return html; 
}


function getJson(jsonData) {
  Logger.log("Printing json data from getJson: " +jsonData);
  return jsonData;
}


function createAndSendSpreadSheet() {
  // Create a new Google Spreadsheet named Yahoo! Summit'
  var spreadSheet = SpreadsheetApp.create('Yahoo! Summit');
  // Get the URL of the spread sheet.
  var url = spreadSheet.getUrl();

  // Get the email address of the active user - that's you.
  var email = Session.getActiveUser().getEmail();

  // Get the name of the document to use as an email subject line.
  var subject = spreadSheet.getName();

  // Append a new string to the "url" variable to use as an email body.
  var body = 'Link to your spreadsheet: ' + url;

  // Send yourself an email with a link to the document.
  // GmailApp.sendEmail(email, subject, body);
  
  var spreadSheetId = spreadSheet.getId();
  
  return spreadSheetId; 
}

function fillSheetWithData(spreadSheetId, jsonData) {
  Logger.log("jsonData from fillSheetWithData = " + jsonData);
  // var spreadSheetId = createAndSendSpreadSheet();
  Logger.log("spreadSheetId from fillSheetWithData = " + spreadSheetId);
  var spreadSheet = SpreadsheetApp.openById(spreadSheetId);
  var sheet = spreadSheet.getActiveSheet();
  // var sheet = SpreadsheetApp.getActiveSheet();
  Logger.log("Extracting data from table: " + jsonData.tableSchema[0].tableName);
  Logger.log("Writing data to spread sheet");
  sheet.appendRow(jsonData.tableSchema[0].columns);
  Logger.log("Columns: " + jsonData.tableSchema[0].columns);
  for (var i = 0; i<jsonData.tableSet[0].rows.length; i++) {
      sheet.appendRow(jsonData.tableSet[0].rows[i].row);
      Logger.log("Rows: " + jsonData.tableSet[0].rows[i].row);
  };
  return spreadSheet.getUrl();
}
