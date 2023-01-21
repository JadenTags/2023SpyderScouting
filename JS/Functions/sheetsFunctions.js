var gsHeaders = new Headers({
    'Content-Type': 'application/x-www-form-urlencoded',
});
var authCodeLink = 'https://accounts.google.com/o/oauth2/token';
var gsApiRoot = 'https://sheets.googleapis.com';
var refreshTokenBody = 'grant_type=refresh_token&client_id=' + config.clientId + '&client_secret=' + config.clientSecret + '&refresh_token=' + config.refreshToken;

async function getGsKey(orderNum) {
    fetch(authCodeLink, {
      method: 'POST',
      headers: gsHeaders,
      body: refreshTokenBody
    })
      .then(reponse => reponse.json())
      .then(data => {
        
        var gsKey = new Headers({
          Authorization: 'Bearer ' + data.access_token,
        });
        
        orders[orderNum] = gsKey;
      });
  
    while (!orders[orderNum]) {
        await wait(100);
    }
}

async function getSheetData(gsId, sheet, mainOrderNum) {
  var http = gsApiRoot + '/v4/spreadsheets/' + gsId + '/values/' + sheet;

  var orderNum = curOrderNum++;
  await getGsKey(orderNum);

  fetch(http, {
    method: 'GET',
    headers: getOrder(orderNum),
  }) 
    .then(response => response.json())
    .then(data => {
      if (!data.range) {
        console.log("GET NEW REFRESH KEY");
      }

      if (!data.values) {
        orders[mainOrderNum] = "none";
      } else {
        orders[mainOrderNum] = data.values;
      }
    });

    while (!orders[mainOrderNum]) {
        await wait(100);
    }
}

async function appendData(gsId, sheet, data) {
  var http = gsApiRoot + "/v4/spreadsheets/" + gsId + "/values/" + sheet + "!A1:B2:append?valueInputOption=RAW";
  
  var orderNum = curOrderNum++;
  await getGsKey(orderNum);
  
  fetch(http, {
    method: 'POST',
    headers: getOrder(orderNum),
    body: JSON.stringify({"values": [data]})
  })
    .then(response => response.json())
    .then(data => {
      
      if (!data.spreadsheetId) {
        console.log("GET NEW REFRESH KEY");
      }
    });
}

async function clearData(gsId, sheet) {
  var http = gsApiRoot + "/v4/spreadsheets/" + gsId + "/values/" + sheet + "!A1:Z100000:clear";
  
  var orderNum = curOrderNum++;
  await getGsKey(orderNum);
  
  fetch(http, {
    method: 'POST',
    headers: getOrder(orderNum)
  })
    .then(response => response.json())
    .then(data => {
      if (!data.spreadsheetId) {
        console.log("GET NEW REFRESH KEY");
      }
    });
}