var lockedDivs = {
    "mainDiv": "locked",
    "shophDiv": "unlocked",
};
var teamTables = {};
var robotImageWidth = 40;

async function createTeamItems() {
    await waitGlobalData();

    var oN = curOrderNum++;
    await getSheetData(sheetID, "PRE", oN);
    var preForms = getOrder(oN);

    oN = curOrderNum++;
    await getSheetData(sheetID, "QUALS", oN);
    var matchForms = getOrder(oN);

    oN = curOrderNum++;
    await getFiles(roboPicsFolderId, oN);
    var pics = {};
    getOrder(oN).items.forEach(pic => {
        pics[pic.title.replace(".jpg", "")] = pic;
    });

    oN = curOrderNum++;
    await getTBAData("event/" + JSON.parse(localStorage.getItem("closestComp")).key + "/teams", oN);
    var teams = getOrder(oN).map(x => compileAllTeamData(x.key.replace("frc", ""), matchForms, preForms));

    for (var i = 0; i < teams.length; i++) {
        let team = teams[i];
        console.log(team)
        var slot = document.createElement("table");
        var slotRow = document.createElement("tr");
        var imgData = document.createElement("td");
        var infoData = document.createElement("td");
        
        //PICTURE
        imgData.style.width = robotImageWidth + "vw";
        if (pics[team["General"]["Team"]]) {
            imgData.appendChild(getRobotImageElement(pics[team["General"]["Team"]]));
        } else {
            var textNode = document.createTextNode("NO IMG");

            imgData.appendChild(textNode);
        }
        slotRow.appendChild(imgData);

        //INFO DATA
        var infoTable = document.createElement("table");

        //TEAM NAME AND NUMBER
        var teamRow = document.createElement("tr");
        var teamData = document.createElement("td");

        teamData.setAttribute("class", "slotTeamName");

        oN = curOrderNum++;
        await getTBAData("team/frc" + team["General"]["Team"], oN);

        teamData.appendChild(document.createTextNode(getOrder(oN).nickname + " [" + team["General"]["Team"] + "]"));
        teamRow.appendChild(teamData);
        infoTable.appendChild(teamRow);

        //DIMENSIONS

        infoTable.style.margin = "auto";

        infoData.appendChild(infoTable);
        slotRow.appendChild(infoData);

        slot.style.width = "100%";
        
        slot.appendChild(slotRow);
        document.body.appendChild(slot);
    };

    //TEAM NAME | TEAM NUM | DIMENSIONS | DB INFO | AUTO GEN | CLIMB TYPE | PREF GP | TIPPED CONES | 
}

function getRobotImageElement(picInfo) {
    var dimRatio = picInfo.imageMediaMetadata.width / picInfo.imageMediaMetadata.height;
    var img = document.createElement("iframe");
    img.setAttribute("src", picInfo.embedLink);

    img.style.height = robotImageWidth * dimRatio + "vw";
    img.style.width = robotImageWidth + "vw";
    
    return img
}

async function compareSearch() {
    while (document.getElementById("compareSearchTableRow") == undefined) {
        await wait(100);
    }

    var teams = [document.getElementById("compareTeam1SearchInput").value, document.getElementById("compareTeam2SearchInput").value].map(x => teamTables[x]);
    var tr = document.getElementById("compareSearchTableRow");

    document.getElementById("compareTeam1SearchInput").style.border = "1px solid #c5c7c5";
    document.getElementById("compareTeam2SearchInput").style.border = "1px solid #c5c7c5";

    if (teams[0] == undefined || teams[1] == undefined) {
        if (teams[0] == undefined){
            document.getElementById("compareTeam1SearchInput").style.border = "1px solid #eb776e";
        }  if (teams[1] == undefined) {
            document.getElementById("compareTeam2SearchInput").style.border = "1px solid #eb776e";
        }

        showElement("compareSearchNotifDiv");
        hideElement("compareSearchTablesDiv");
        return;
    } else {
        hideElement("compareSearchNotifDiv");
        showElement("compareSearchTablesDiv");
    }

    tr.childNodes[1].innerHTML = "";
    tr.childNodes[2].innerHTML = "";
    
    tr.childNodes[1].appendChild(teams[0][0]);
    tr.childNodes[2].appendChild(teams[1][0]);
}

async function createCompareTables() {
    await waitGlobalData();

    var oN = curOrderNum++;
    await getTBAData("event/" + JSON.parse(localStorage.getItem("closestComp")).key + "/teams", oN);
    var teams = getOrder(oN);

    oN = curOrderNum++;
    await getSheetData(sheetID, "PRE", oN);
    var preForms = getOrder(oN);

    oN = curOrderNum++;
    await getSheetData(sheetID, "QUALS", oN);
    var matchForms = getOrder(oN);

    teams = teams.map(x => compileAllTeamData(x.key.replace("frc", ""), matchForms, preForms));
    var teamOrder = fillMissingHeaders(teams, dataTableWithMatchFormat);
    
    while (!teams[0]["Teleop"]["Almost Tipped"]) {
        await wait(100);
    }

    var heightObj = compareHeights(teams.map(x => getHeightObj(x, dataTableWithMatchFormat)));
    
    teams.forEach(team => {
        teamTables[team["General"]["Team"]] = [buildTeamTable(team, blueDataTableColors, heightObj, teamOrder, percentageBlueColorOrder, tableWidth), team];
    });

    var table = document.createElement("table");
    var tr = document.createElement("tr");
    var header = document.createElement("td");
    var team1 = document.createElement("td");
    var team2 = document.createElement("td");

    header.appendChild(buildHeaderTable(heightObj, blueDataTableColors, teamOrder));
    tr.appendChild(header);
    tr.appendChild(team1);
    tr.appendChild(team2);
    table.appendChild(tr);

    team1.id = "teamCompareTeam1Cell";
    team2.id = "teamCompareTeam2Cell";
    table.style.margin = "auto";
    tr.id = "compareSearchTableRow";

    document.getElementById("compareSearchTablesDiv").appendChild(table);
}

function toggleFiltersDiv() {
    var filtersDiv = document.getElementById("filtersDiv");

    if (filtersDiv.style.bottom == "-600px") {
        filtersDiv.style.bottom = "-200px";
        document.getElementById("filtersArrow").setAttribute("class", "flippedVertically");
    } else {
        filtersDiv.style.bottom = "-600px";
        document.getElementById("filtersArrow").setAttribute("class", "");
    }
}

function test() {
    // document.getElementById("compareTeam1SearchInput").setAttribute("value", "4160");
    // document.getElementById("compareTeam2SearchInput").setAttribute("value", "4919");
    // compareSearch();
}

document.onkeydown = function (e) {
    if (e.key == "Enter") {
        if (document.getElementById("compareButton").style.backgroundColor == "rgb(87, 86, 83)") {
            eval(document.getElementById("comparesButton").getAttribute("onclick"));
        }
    }
}

// test();
createTeamItems();
createCompareTables();