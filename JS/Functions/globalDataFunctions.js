var globalDataStored;

//GET CUR/CLOSEST COMP AND STORE IN LOCAL STORAGE
async function storeGlobalData() {
    await getClosestCompData(1622); //COMMENT OUT IF OFFLINE
    
    globalDataStored = true;
}

async function waitGlobalData() {
    while (!globalDataStored) {
        await wait(100);
    }
}

storeGlobalData();