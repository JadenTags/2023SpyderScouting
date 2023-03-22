var lockedDivs = {
    "mainDiv": "locked",
    "shophDiv": "unlocked",
};

async function compileTeamSlotData() {
    await waitGlobalData();

    var oN = curOrderNum++;
    await getTBAData("event/" + JSON.parse(localStorage.getItem("closestComp")).key + "/teams", oN);
    var teams = getOrder(oN);

    document.getElementById("shopButton").innerHTML = (teams[0].team_number)
}

function toggleFiltersDiv() {
    var filtersDiv = document.getElementById("filtersDiv");

    if (filtersDiv.style.bottom == "-320px") {
        filtersDiv.style.bottom = "0px";
        document.getElementById("filtersArrow").setAttribute("class", "flippedVertically");
    } else {
        filtersDiv.style.bottom = "-320px";
        document.getElementById("filtersArrow").setAttribute("class", "");
    }
}

compileTeamSlotData();