const MATCHHEADERS = ["TEAM NUM", "MATCH NUM", "LEFT COMMUNITY", "AUTO CONES", "AUTO CUBES", "DOCKED", "ENGAGED", "TELE CONES", "TELE CUBES", "TIP", "PLAYSTYLE", "ENDGAME", "ENGAGED", "FAILURE", "EXTRA NOTES"];
const PREHEADERS = ["TEAM NUM", "DIMENSIONS", "DB INFO", "HAS GOM", "NO AUTO", "AUTO GEN", "CLIMB TYPE", "CARGO", "CONE REACHES", "CUBE REACHES", "PREF PLAY", "EXTRA NOTES"];

async function createRegionalFolder() {
    await waitGlobalData();
    
    var closestComp = JSON.parse(localStorage.getItem("closestComp"));
    var name = closestComp.name;

    oN = curOrderNum++;
    await createFile(new Date().getFullYear() + " | " + name, "folder", MAINFOLDERID, oN);
    var regionalFolderID = getOrder(oN).id;
  
    oN = curOrderNum++;
    await createFile("ROBOT PICTURES", "folder", regionalFolderID, oN);
    var regionalRoboPicsFolderId = getOrder(oN).id;
  
    oN = curOrderNum++;
    await createFile(name, "spreadsheet", regionalFolderID, oN);
    var regionalSheetID = getOrder(oN).id;

    var sheets = ["PRE", "WARMUPS", "QUALS", "FINALS", "ASSIGNMENTS"];
    for (var i = 0; i < sheets.length; i++) {
        await batchUpdate(regionalSheetID, {
            "addSheet": {
                "properties": {
                    "title": sheets[i]
                }
            }
        });
    }

    await batchUpdate(regionalSheetID, {
        "deleteSheet": {
            "sheetId": 0
        }
    });

    sheets = ["WARMUPS", "QUALS", "FINALS"];
    for (var i = 0; i < sheets.length; i++) {
        await appendData(regionalSheetID, sheets[i], MATCHHEADERS);
    }
    await appendData(regionalSheetID, "PRE", PREHEADERS);

    oN = curOrderNum;
    await getTBAData("event/" + JSON.parse(localStorage.getItem("closestComp")).key + "/teams", oN);
    appendData(regionalSheetID, "ASSIGNMENTS", getOrder(oN).map(x => parseInt(x.key.replace("frc", ""))).sort((x, y) => x - y).filter(x => x != 1622));

    console.log({
        "ROBO PICS FOLDER ID": regionalRoboPicsFolderId,
        "REGIONAL SHEET ID": regionalFolderID
    });
}
  
// createRegionalFolder();