var driveHeaders = new Headers({
    'Content-Type': 'application/x-www-form-urlencoded',
});
var driveAuthCodeLink = 'https://accounts.google.com/o/oauth2/token';
var driveApiRoot = 'https://www.googleapis.com';
var driveRefreshTokenBody = 'grant_type=refresh_token&client_id=' + config.clientId + '&client_secret=' + config.clientSecret + '&refresh_token=' + config.driveRefreshToken;

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

async function uploadFile(media, mainOrderNum) {
    var http = driveApiRoot + '/upload/drive/v3/files?uploadType=media';
  
    var orderNum = curOrderNum++;
    await getGsKey(orderNum);
    console.log(media)
  
    // fetch(http, {
    //   method: 'POST',
    //   headers: getOrder(orderNum),
    //   body: media,
    // }) 
    //   .then(response => response.json())
    //   .then(data => {
    //     console.log(data)
    //   });
  }
  