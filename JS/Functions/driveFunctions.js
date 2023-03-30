var driveHeaders = new Headers({
    'Content-Type': 'application/x-www-form-urlencoded',
});
var driveAuthCodeLink = 'https://accounts.google.com/o/oauth2/token';
var driveApiRoot = 'https://www.googleapis.com';
var driveRefreshTokenBody = 'grant_type=refresh_token&client_id=' + config.clientId + '&client_secret=' + config.clientSecret + '&refresh_token=' + config.driveRefreshToken;
const MAINFOLDERID = "12QsG1bR36RH8Zm6YWQhBrgOcyOx2B9NE";

async function getGsKey(orderNum) {
    fetch(driveAuthCodeLink, {
      method: 'POST',
      headers: driveHeaders,
      body: driveRefreshTokenBody
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

async function uploadFile(file, name, folderId, mainOrderNum) {
  var http = driveApiRoot + '/upload/drive/v3/files?uploadType=multipart';
  var orderNum = curOrderNum++;
  await getGsKey(orderNum);
  
  var body = new FormData();
  var metaData = {
    name: name, 
    parents: [folderId]
  };
  
  body.append("metadata", new Blob([JSON.stringify(metaData)], {type: "application/json",}));
  body.append("file", file);

  fetch(http, {
    method: 'POST',
    headers: getOrder(orderNum),
    body: body
  })
  .then(response => response.json())
  .then(data => orders[mainOrderNum] = data);

  while (!orders[mainOrderNum]) {
    await wait(100);
  }
}

async function createFile(name, mimeType, folderId, mainOrderNum) {
  var http = driveApiRoot + '/upload/drive/v3/files?uploadType=multipart';
  var orderNum = curOrderNum++;
  await getGsKey(orderNum);
  
  var body = new FormData();
  var metaData = {
    mimeType: "application/vnd.google-apps." + mimeType,
    name: name, 
    parents: [folderId]
  };
  
  body.append("metadata", new Blob([JSON.stringify(metaData)], {type: "application/json",}));

  fetch(http, {
    method: 'POST',
    headers: getOrder(orderNum),
    body: body
  })
    .then(response => response.json())
    .then(data => orders[mainOrderNum] = data);
  
  while (!orders[mainOrderNum]) {
    await wait(100);
  }
}

async function getFiles(folderId, mainOrderNum) {
  var http = driveApiRoot + "/drive/v2/files?q='" + folderId + "'+in+parents";
  var orderNum = curOrderNum++;
  await getGsKey(orderNum);
  
  fetch(http, {
    method: 'GET',
    headers: getOrder(orderNum)
  })
    .then(response => response.json())
    .then(data => orders[mainOrderNum] = data);
  
  while (!orders[mainOrderNum]) {
    await wait(100);
  }
}