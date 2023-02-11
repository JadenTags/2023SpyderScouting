var globalDataStored;

//GET CUR/CLOSEST COMP AND STORE IN LOCAL STORAGE
async function storeGlobalData() {
    if (!localStorage.getItem("closestComp")) {
        await getClosestCompData(1622);
    }

    globalDataStored = true;
}

async function waitGlobalData() {
    while (!globalDataStored) {
        await wait(100);
    }
}

storeGlobalData();