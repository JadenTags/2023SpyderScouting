const dataTableWithMatchFormat = {
    "General": {
        "Name": "",
        "Team#": "",
        "Dimensions": "",
        "DB Info": {
            "Type": "",
            "Motor": "",
            "INFO": [[1, 1], "NORMAL"]
        },
        "OTF Auto": {
            "Can": "",
            "Duration": "",
            "Reliability": "",
            "INFO": [[1, 1, 1], "NORMAL"]
        },
        "Set Pos": "", //USE MAP?
        "Playstyles": {
            "Offensive": "",
            "Defensive": "",
            "INFO": [[2], "HAVE"]
        },
        "Matches": "",
        "Failures%": {
            "MF": "",
            "CF": "",
            "NS": "",
            "N": "",
            "INFO": [[4], "%"]
        }
    },
    "Autonomous": {
        "Mobility": "",
        "Cones": "SPACER",
        "CUBE Top": {
            "Min": "",
            "Max": "",
            "Avg": "",
            "Rng": "",
            "ACC": "",
            "INFO": [[3, 2], "NORMAL"]
        },
        "CUBE Mid Row": {
            "Min": "",
            "Max": "",
            "Avg": "",
            "Rng": "",
            "ACC": "",
            "INFO": [[3, 2], "NORMAL"]
        },
        "CUBE Bot Row": {
            "Min": "",
            "Max": "",
            "Avg": "",
            "Rng": "",
            "ACC": "",
            "INFO": [[3, 2], "NORMAL"]
        },
        "Cubes": "SPACER",
        "CONE Top": { //DISPLAY AS TOP
            "Min": "",
            "Max": "",
            "Avg": "",
            "Rng": "",
            "ACC": "",
            "INFO": [[3, 2], "NORMAL"]
        },
        "CONE Mid Row": {
            "Min": "",
            "Max": "",
            "Avg": "",
            "Rng": "",
            "ACC": "",
            "INFO": [[3, 2], "NORMAL"]
        },
        "CONE Bot Row": {
            "Min": "",
            "Max": "",
            "Avg": "",
            "Rng": "",
            "ACC": "",
            "INFO": [[3, 2], "NORMAL"]
        },
        "Docked": {
            "Success%": {
                "Success": "",
                "Fail": "",
                "INFO": [[2], "%"]
            },
            "Attempt%": {
                "Attepmted": "",
                "NA": "",
                "INFO": [[2], "%"]
            },
            "INFO": [[1, 1], "NESTED"]
        },
        "Engaged%": {
            "Engaged": "",
            "NE": "",
            "INFO": [[2], "%"]
        },
    },
    "Teleop": {
        "Cones": "SPACER",
        "CUBE Top": { //DISPLAY AS TOP
            "Min": "",
            "Max": "",
            "Avg": "",
            "Rng": "",
            "ACC": "",
            "INFO": [[3, 2], "NORMAL"]
        },
        "CUBE Mid Row": {
            "Min": "",
            "Max": "",
            "Avg": "",
            "Rng": "",
            "ACC": "",
            "INFO": [[3, 2], "NORMAL"]
        },
        "CUBE Bot Row": {
            "Min": "",
            "Max": "",
            "Avg": "",
            "Rng": "",
            "ACC": "",
            "INFO": [[3, 2], "NORMAL"]
        },
        "Cubes": "SPACER",
        "CONE Top": { //DISPLAY AS TOP
            "Min": "",
            "Max": "",
            "Avg": "",
            "Rng": "",
            "ACC": "",
            "INFO": [[3, 2], "NORMAL"]
        },
        "CONE Mid Row": {
            "Min": "",
            "Max": "",
            "Avg": "",
            "Rng": "",
            "ACC": "",
            "INFO": [[3, 2], "NORMAL"]
        },
        "CONE Bot Row": {
            "Min": "",
            "Max": "",
            "Avg": "",
            "Rng": "",
            "ACC": "",
            "INFO": [[3, 2], "NORMAL"]
        },
        "Almost Tipped": {
            "Type%": {
                "CS": "",
                "Non-CS": "",
                "INFO": [[2], "%"]
            },
            "Tip%": {//WHETHER A ROBOT ALMOST TIPS IN A MATCH OR NOT REGARDLESS OF TIMES
                "Tip": "",
                "NT": "",
                "INFO": [[2], "%"]
            },
            "INFO": [[1, 1], "NESTED"]
        },
        "Playstyle%": {
            "Offensive": "",
            "Hybrid": "",
            "Defensive": "",
            "INFO": [[3], "%"]
        },
        "Endgame": {
            "Success%": { //DOCK ONLY
                "Success": "",
                "Fail": "",
                "INFO": [[2], "%"]
            },
            "Attempt%": {
                "Docked": "",
                "Parked": "",
                "NA": "",
                "INFO": [[2], "%"]
            },
            "INFO": [[1, 1], "NESTED"]
        },
        "Engaged%": {
            "Engaged": "",
            "NE": "",
            "INFO": [[2], "%"]
        },
        "Penalties": {
            "Max": "",
            "Avg": "",
            "INFO": [[2], "NORMAL"]
        },
        "Cards": {
            "Reds": "",
            "Yellow": "", //ONLY IF TEAM IN POSSESSION OF YELLOW
            "INFO": [[2], "NORMAL"]
        },
        "Aggressive%": {
            "Yes": "",
            "No": "",
            "INFO": [[2], "%"]
        }
    }
};
const dataTableWithoutMatchFormat = {
    //TODO: FILL OUT DO WITH ONLY PRE/PIT DATA
}
var lockedDivs = {
    "mainDiv": "locked",
    "teamSearchDiv": "locked",
};

async function teamSearch() {
    var team = document.getElementById("teamSearchInput").value;

    if (false) {
        //TODO: Verify Team (check if valid team, have data, and is numbers)

        //TODO: IF NOT HAVE DATA, ONLY USE PRE/PIT DATA
    }

    var orderNum = curOrderNum++;
    await getTBAData("team/frc" + team, orderNum);
    var data = getOrder(orderNum);
    console.log(data)

    //TEAM NAME
    document.getElementById("teamSearchTeamName").innerHTML = data.nickname;
    //TEAM NUMBER
    document.getElementById("teamSearchTeamNum").innerHTML = "[" + team + "]";

    //LOCATION INFO
    var locationInfo = document.getElementById("teamSearchLocationInformation");

    locationInfo.innerHTML = [data.school_name, data.address, data.city, data.country].filter(x => x).join(", ");
    locationInfo.style.display = "block";

    //ADDITIONAL INFO
    var additionalInfo = document.getElementById("teamSearchAdditionalInformation");
    var additionalString;

    orderNum = curOrderNum++;
    await getTBAData("team/frc" + team + "/robots", orderNum);
    var robotName = getOrder(orderNum).robot_name;

    if (data.rookie_year) {
        additionalString = "Started in " + data.rookie_year;
    } if (data.motto) {
        if (!additionalString) {
            additionalString = "Motto: \"" + data.motto + "\"";
        } else {
            additionalString += ", Motto: \"" + data.motto + "\""
        }
    } if (robotName) {
        if (!additionalString) {
            additionalString = "Robot Name: " + robotName;
        } else {
            additionalString += "<br>Robot Name: " + robotName;
        }
    }

    additionalInfo.innerHTML = additionalString;
    additionalInfo.style.display = "block";

    orderNum = curOrderNum++;
    await getSheetData(config.preGSID, sheetName, orderNum);
    var preForms = getOrder(orderNum);

    orderNum = curOrderNum++;
    await getSheetData(config.pitGSID, sheetName, orderNum);
    var pitForms = getOrder(orderNum);

    orderNum = curOrderNum++;
    await getSheetData(config.matchGSID, sheetName, orderNum);
    var matchForms = getOrder(orderNum);

    compileAllTeamData(team, matchForms, preForms, pitForms);
}

async function compileAllTeamData(team, match, pre, pit) {
    pre = pre.slice(1);
    pit = pit.slice(1);
    match = match.slice(1);

    console.log(Object.keys(dataTableWithMatchFormat["General"]), dataTableWithMatchFormat["General"])
    //TODO: GET DATA FROM BOTH FORMS AND UPATE ORIGINAL INFORMATION AND RETURN NEW OBJ
    
    if (match) {
        match = match.filter(x => x[1] == team);
    } if (pre) {
        pre = pre.filter(x => x[1] == team);
    } if (pit) {
        pit = pit.filter(x => x[1] == team);
    }

    console.log(match, pre ,pit)
}