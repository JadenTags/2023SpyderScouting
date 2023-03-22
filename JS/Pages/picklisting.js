var lockedDivs = {
    "mainDiv": "locked",
    "shophDiv": "unlocked",
};

function compileTeamSlotData() {
    
}

function toggleFiltersDiv() {
    var filtersDiv = document.getElementById("filtersDiv");

    if (filtersDiv.style.bottom == "-300px") {
        filtersDiv.style.bottom = "0px";
        document.getElementById("filtersArrow").setAttribute("class", "flippedVertically");
    } else {
        filtersDiv.style.bottom = "-300px";
        document.getElementById("filtersArrow").setAttribute("class", "");
    }
}