var tbaHeaders = new Headers({
    "X-TBA-Auth-Key" : config.tbaKey,
});
var tbaKeyBody = 'X-TBA-Auth-Key=' + config.tbaKey;
var tbaApiRoot = 'https://www.thebluealliance.com/api/v3/';

async function getTBAData(link, orderNum) {
    fetch(tbaApiRoot + link, {
        method: 'GET',
        headers: tbaHeaders,
    })
        .then(response => response.json())
        .then(data => {
            if (link.includes('/matches') && matchNum) {
                data.forEach(x => {
                    if (x.match_number >= matchNum) {
                        x.actual_time = null
                    }
                });

                
                orders[orderNum] = data.sort((a, b) => a.match_number - b.match_number);
            } else {
                orders[orderNum] = data;
            }

        });

    while (!orders[orderNum]) {
        await wait(100);
    }
}

async function getClosestCompData(teamNum) {
    var orderNum = curOrderNum++;
    await getTBAData("team/frc" + teamNum + "/events", orderNum);
    var closestComp = getOrder(orderNum).reverse().filter(comp => new Date(comp.end_date).getTime() > testDate.getTime()).sort((a, b) => new Date(a.start_date).getTime() - new Date(b.start_date).getTime())[0];
    // var closestComp = getOrder(orderNum);
    // closestComp = closestComp[closestComp.length - 1]

    if (!closestComp) {
        return [];
    }

    var difference = Math.floor((new Date(closestComp.start_date).getTime() - testDate.getTime()) / (1000 * 60 * 60 * 24));
    localStorage.setItem("closestComp", JSON.stringify(closestComp));
    document.body.appendChild(document.createTextNode(JSON.stringify(closestComp)));
    localStorage.setItem("difference", difference);
}