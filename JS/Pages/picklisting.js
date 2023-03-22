var lockedDivs = {
    "mainDiv": "locked",
    "shophDiv": "unlocked",
};

async function compileTeamSlotData() {
    await waitGlobalData();

    var oN = curOrderNum++;
    await getTBAData("event/" + JSON.parse(localStorage.getItem("closestComp")).key + "/teams", oN);
    var teams = getOrder(oN);
}

function toggleFiltersDiv() {
    var filtersDiv = document.getElementById("filtersDiv");

    if (filtersDiv.style.bottom == "-600px") {
        filtersDiv.style.bottom = "-280px";
        document.getElementById("filtersArrow").setAttribute("class", "flippedVertically");
    } else {
        filtersDiv.style.bottom = "-600px";
        document.getElementById("filtersArrow").setAttribute("class", "");
    }
}

compileTeamSlotData();