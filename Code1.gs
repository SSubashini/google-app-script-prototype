var spreadSheetId = "";

function doGet() {
  return HtmlService
      .createTemplateFromFile('index')
      .evaluate()
      .setSandboxMode(HtmlService.SandboxMode.IFRAME);
}

function createSpreadsheet() {
    var spreadSheet = SpreadsheetApp.create('Yahoo! Summit');
    spreadSheetId = spreadSheet.getId();
}
/*
function fillDataFromJsonFile() {
  
}

function fillSheetWithData() {
  var sheet = SpreadsheetApp.getActiveSheet();
  
  // var data = new google.visualization.DataTable();
  var jsonData = UrlFetchApp.fetch("https://ne1-devsummitbe-002.ysm.pool.ne1.yahoo.com:9999/summit/196767AdcenterImpressionShare.json");
        // $.getJSON( "https://ne1-devsummitbe-002.ysm.pool.ne1.yahoo.com:9999/summit/196767AdcenterImpressionShare.json", 
        //           function( jsonData ) {
  Logger.log("jsonData: " + jsonData);
  Logger.log("jsonData.getContentText: " + jsonData.getContentText());
            Logger.log("Extracting data from table: " + jsonData.tableSchema[0].tableName);
            sheet.appendRow(jsonData.tableSchema[0].columns);
            
            for (var i = 0; i<jsonData.tableSet[0].rows.length; i++) {
              sheet.appendRow(jsonData.tableSet[0].rows[i].row);
            };
        // });
}
*/
function getData() {
  return SpreadsheetApp
      .openById(spreadSheetId)
      .getActiveSheet()
      .getDataRange()
      .getValues();
}