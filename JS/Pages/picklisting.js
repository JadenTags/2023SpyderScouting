var lockedDivs = {
    "mainDiv": "locked",
    "shophDiv": "unlocked",
};
var teamTables = {};

async function compileTeamSlotData() {
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

    console.log(teams)
    console.log(teams.map(x => compileAllTeamData(x.key.replace("frc", ""), matchForms, preForms)))

    //TEAM NAME | TEAM NUM | DIMENSIONS | DB INFO | DB NOTES | AUTO GEN | CLIMB TYPE | REACHES | PREF GP | TIPPED CONES | 
}

async function compareSearch() {
    while (document.getElementById("compareSearchTableRow") == undefined) {
        await wait(100);
    }

    var teams = [document.getElementById("compareTeam1SearchInput").value, document.getElementById("compareTeam2SearchInput").value];
    var tr = document.getElementById("compareSearchTableRow");

    if (teamTables[teams[0]] == undefined || teamTables[teams[1]] == undefined) {
        showElement("compareSearchNotifDiv");
        hideElement("compareSearchTablesDiv");
        return;
    } else {
        hideElement("compareSearchNotifDiv");
        showElement("compareSearchTablesDiv");
    }

    tr.childNodes[1].innerHTML = "";
    tr.childNodes[2].innerHTML = "";
    
    tr.childNodes[1].appendChild(teamTables[teams[0]][0]);
    tr.childNodes[2].appendChild(teamTables[teams[1]][0]);
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

// test();
// compileTeamSlotData();
createCompareTables();