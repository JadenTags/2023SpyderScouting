var lockedDivs = {
    "mainDiv": "locked",
    "compMapDiv": "locked",
    "teamSearchDiv": "locked",
    "teamRankingsDiv": "unlocked",
};
var teamRankingsTableHeaders = ["Rank", "RPs", "#", "Name","DQs", "Record"];

//MAKE ONCLICK THAT TEAM SEARCHES
async function fillTeamRankingsTable() {
    await waitGlobalData();

    //RANKING, TEAM NUMBER, TEAM NAME, DQS, RECORD

    var orderNum = curOrderNum++;
    await getTBAData("event/" + JSON.parse(localStorage.getItem("closestComp")).key + "/rankings", orderNum);
    
    var table = document.getElementById("teamRankingsTable");

    var tr = document.createElement("tr");

    teamRankingsTableHeaders.forEach(header => {
        let td = document.createElement("td");
        td.appendChild(document.createTextNode(header));
        td.setAttribute("class", "teamRankingsHeader")

        tr.appendChild(td);
    });
    table.appendChild(tr);

    var teams = getOrder(orderNum).rankings;
    var counter = 0;

    teams.forEach(team => {
        let tr = document.createElement("tr");

        if (counter++ % 2 == 1) {
            tr.setAttribute("class", "grayTR");
        } if (team.team_key == "frc1622") {
            tr.setAttribute("class", "teamTR");
        }
        
        //RANK
        let td = document.createElement("td");
        td.appendChild(document.createTextNode(team.rank));
        td.style.fontSize = "80px";
        td.style.fontWeight = "bolder";
        tr.appendChild(td)
        
        //RPs
        td = document.createElement("td");
        td.appendChild(document.createTextNode(team.extra_stats[0]));
        tr.appendChild(td)

        //TEAM NUM
        td = document.createElement("td");
        td.appendChild(document.createTextNode(team.team_key.replace("frc", "")));
        tr.appendChild(td)

        //TEAM NAME
        td = document.createElement("td");
        td.id = team.rank + "NameCell";
        td.style.flex = "";
        td.style.width = "200vw";
        tr.appendChild(td)

        //DQs
        td = document.createElement("td");
        td.appendChild(document.createTextNode(team.dq));
        tr.appendChild(td)

        //Record
        td = document.createElement("td");
        td.appendChild(document.createTextNode(Object.values(team.record).reverse().join(" - ")));
        tr.appendChild(td)


        table.appendChild(tr);
    });

    var orderNum = curOrderNum++;
    await getTBAData("event/" + JSON.parse(localStorage.getItem("closestComp")).key + "/teams", orderNum);
    var teamNames = {};
    getOrder(orderNum).forEach(team => {
        teamNames[team.key] = team.nickname;
    })
    teams.forEach(team => {
        document.getElementById(team.rank + "NameCell").innerHTML = teamNames[team.team_key];
    })
}

fillTeamRankingsTable();