var globalDataStored;

//GET CUR/CLOSEST COMP AND STORE IN LOCAL STORAGE
async function storeGlobalData() {
    if (!localStorage.getItem("closestComp")) {
        await getClosestCompData(1622); //COMMENT OUT IF OFFLINE
    } if (!localStorage.getItem("closestCompMatches")) {
        var orderNum = curOrderNum++;
        await getTBAData("event/" + JSON.parse(localStorage.getItem("closestComp")).key + "/matches", orderNum);
        localStorage.setItem("closestCompMatches", JSON.stringify(getOrder(orderNum)));
    }

    globalDataStored = true;
}

async function waitGlobalData() {
    while (!globalDataStored) {
        await wait(100);
    }
}

storeGlobalData();