var lockedDivs = {
    "mainDiv": "locked",
    "shophDiv": "unlocked",
};
var teamTables = {};
var heightObj;
var teamOrder;

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

    //TODO: ADD CHECKS
    var teams = [document.getElementById("compareTeam1SearchInput").value, document.getElementById("compareTeam2SearchInput").value];
    var tr = document.getElementById("compareSearchTableRow");

    tr.childNodes[1].innerHTML = "";
    tr.childNodes[2].innerHTML = "";
    tr.childNodes[3].innerHTML = "";
    console.log(tr.childNodes)
    
    tr.childNodes[1].appendChild(teamTables[teams[0]][0]);
    tr.childNodes[2].appendChild(teamTables[teams[1]][0]);
    tr.childNodes[3].appendChild(createComparativeTable(teams));
}

function createComparativeTable(teams) {
    var teamOneData = teamTables[teams[0]][1];
    var teamTwoData = teamTables[teams[1]][1];
    var compareTable = structuredClone(teamOneData);

    console.log(compareTable)
    //TEAM
    compareTable["General"]["Team"] = "";

    //SMALLER SIDE
    var teamOneSide = Math.min(...Object.values(teamOneData["General"]["DIM"]).filter(x => typeof x != "object").map(x => parseInt(x)));
    var teamTwoSide = Math.min(...Object.values(teamTwoData["General"]["DIM"]).filter(x => typeof x != "object").map(x => parseInt(x)));

    if (teamOneSide < teamTwoSide) {
        
    }

    compareTable["General"]["DIM"] = teamOneData["General"]["DIM"]["Length"];

    return buildTeamTable(compareTable, blueDataTableColors, heightObj, teamOrder, percentageBlueColorOrder, tableWidth);
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
    teamOrder = fillMissingHeaders(teams, dataTableWithMatchFormat);
    
    while (!teams[0]["Teleop"]["Almost Tipped"]) {
        await wait(100);
    }

    heightObj = compareHeights(teams.map(x => getHeightObj(x, dataTableWithMatchFormat)));
    
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
    tr.appendChild(document.createElement("td"));
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
    document.getElementById("compareTeam1SearchInput").setAttribute("value", "4160");
    document.getElementById("compareTeam2SearchInput").setAttribute("value", "4141");
    compareSearch();
}

test();
// compileTeamSlotData();
createCompareTables();