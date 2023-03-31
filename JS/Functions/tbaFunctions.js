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

    var closestComp = getOrder(orderNum).reverse().sort((x, y) => new Date(x.start_date).getTime() - new Date(y.start_date).getTime()).filter(x => new Date(x.end_date).getTime() >= testDate.getTime())[0];

    if (!closestComp) {
        return [];
    } if (JSON.stringify(closestComp) != localStorage.getItem("closestComp")) {
        var difference = Math.floor((new Date(closestComp.start_date).getTime() - testDate.getTime()) / (1000 * 60 * 60 * 24));
        localStorage.setItem("closestComp", JSON.stringify(closestComp));
        localStorage.setItem("difference", difference);
    }
}