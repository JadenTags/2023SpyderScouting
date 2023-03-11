const dataTableWithMatchFormat = {
    "General": {
        "Team": "",
        "DIM": "",
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
        "Cones": {
            "Top": "",
            "Mid": "",
            "Low": "",
            "INFO": [[1, 1, 1], "HAVE"]
        },
        "Cubes": {
            "Top": "",
            "Mid": "",
            "Low": "",
            "INFO": [[1, 1, 1], "HAVE"]
        },
        "Pref PS": "",
        "Pref GP": "",
        "Playstyles": {
            "Offensive": "",
            "Defensive": "",
            "INFO": [[1, 1], "HAVE"]
        },
        "Failure%": {
            "MF": "",
            "CF": "",
            "NS": "",
            "N": "",
            "INFO": [[4], "%"]
        },
        "Matches": ""
    },
    "Auto": {
        "Mobility%": {
            "Got": "",
            "Not": "",
            "INFO": [[2], "%"]
        },
        "Cones": "SPACER",
        "CUBE Top Row": {
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
        "CONE Top Row": { //DISPLAY AS TOP
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
            "ATPT%": {
                "ATPT": "",
                "Not": "",
                "INFO": [[2], "%"]
            },
            "INFO": [[1, 1], "NESTED"]
        },
        "Engaged%": {
            "ENG": "",
            "Not": "",
            "INFO": [[2], "%"]
        },
    },
    "Teleop": {
        "Cones": "SPACER",
        "CUBE Top Row": { //DISPLAY AS TOP
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
        "CONE Top Row": { //DISPLAY AS TOP
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
                "Not": "",
                "INFO": [[2], "%"]
            },
            "Tip%": {//WHETHER A ROBOT ALMOST TIPS IN A MATCH OR NOT REGARDLESS OF TIMES
                "Tip": "",
                "Not": "",
                "INFO": [[2], "%"]
            },
            "INFO": [[1, 1], "NESTED"]
        },
        "Playstyle%": {
            "Off": "",
            "Hyb": "",
            "Def": "",
            "INFO": [[3], "%"]
        },
        "Endgame": {
            "Success%": { //DOCK ONLY
                "Success": "",
                "Fail": "",
                "INFO": [[2], "%"]
            },
            "ATPT%": {
                "Docked": "",
                "Parked": "",
                "NA": "",
                "INFO": [[2], "%"]
            },
            "INFO": [[1, 1], "NESTED"]
        },
        "Engaged%": {
            "ENG": "",
            "Not": "",
            "INFO": [[2], "%"]
        },
        "Penalties": {
            "Max": "",
            "Avg": "",
            "INFO": [[2], "NORMAL"]
        },
        "Cards": {
            "R": "",
            "Y": "", //ONLY IF TEAM IN POSSESSION OF YELLOW
            "INFO": [[2], "NORMAL"]
        },
        "Aggro%": {
            "Yes": "",
            "No": "",
            "INFO": [[2], "%"]
        }
    }
};
const dataTableWithoutMatchFormat = {
    "General": {
        "Team": "",
        "DIM": "",
        "DB Info": {
            "Type": "",
            "Motor": "",
            "INFO": [[1, 1], "NORMAL"]
        },
        "Has Arm": "",
        "OTF Auto": {
            "Can": "",
            "Duration": "",
            "Reliability": "",
            "INFO": [[1, 1, 1], "NORMAL"]
        }
    },
    "Auto": {
        "Setup": "",
        "Dock": "",
        "Engage": "",
    },
    "Teleop": {
        "Cycle": "",
        "Cone": {
            "Top": "",
            "Mid": "",
            "Bottom": "",
            "INFO": [[1, 1, 1], "HAVE"]
        },
        "Cube": {
            "Top": "",
            "Mid": "",
            "Bottom": "",
            "INFO": [[1, 1, 1], "HAVE"]
        },
        "Pref PS": "",
        "Pref GP": "",
        "Able PS": {
            "Offense": "",
            "Defense": "",
            "INFO": [[1, 1], "HAVE"]
        },
        "Dock": "",
        "Dock Time": "",
        "Engage": "",
    }
};
const blueDataTableColors = {
    "singleCellHeader": "#a2abf6",
    "singleCellData": "#d2d6fa",
    "singleCellDataAlt": "#e3e6ff",
    "sectionHeader": "#c4c4c4",
    "spacer": "#8590ed",
};
var lockedDivs = {
    "mainDiv": "locked",
    "teamSearchDiv": "unlocked",
};
const marginTopSpacing = "2px";
const cellHeight = 30;
const tableWidth = 24;
const displayTableWidth = 16;
const percentageColorOrder = ["#7286D3", "#8EA7E9", "#E4EDF1", "#FF9F9F", "#FD8A8A"];

async function teamSearch() {
    var oN = curOrderNum++;
    await getSheetData(config.preGSID, sheetName, oN);
    var preForm = getOrder(oN).slice(1);
    
    var oN = curOrderNum++;
    await getSheetData(config.pitGSID, sheetName, oN);
    var pitForm = getOrder(oN).slice(1);
    
    var oN = curOrderNum++;
    await getSheetData(config.matchGSID, "VENTURAWARMUP", oN); // sheetName
    var matchForm = getOrder(oN).slice(1);

    compileData(preForm, pitForm, matchForm, "1388");
}

function compileData(preForm, pitForm, matchForm, team) {
    var match = matchForm.filter(form => form[1] == team);
    var pre = preForm.filter(form => form[0] == team);
    var pit = pitForm.filter(form => form[0] == team);

    if (pre.length > 0) {
        pre = pre[pre.length - 1];
    } if (pit.length > 0) {
        pit = pit[pre.length - 1];
    }

    var data;
    
    if (match.length > 0) {
        //TODO: DO ALL
        data = structuredClone(dataTableWithMatchFormat);

        ///////////////////////////GENERAL
        //TEAM
        data["General"]["Team"] = team;

        //DIMENSIONS
        if (pre[1] != "none") {
            var dims = JSON.parse(pre[1]).filter(dim => dim);

            if (dims.length > 0) {
                data["General"]["DIM"] = dims.join(" | ");
            } else {
                delete data["General"]["DIM"];
            }
        } else {
            delete data["General"]["DIM"];
        }

        //DB INFO
        fillNewestData(data["General"]["DB Info"], "Type", pre[2], "none");
        fillNewestData(data["General"]["DB Info"], "Motor", pre[3], "none");
        checkEmpty(data["General"], "DB Info");

        //OTF AUTO
        fillNewestData(data["General"]["OTF Auto"], "Cam", pre[6], pit[10]);
        fillNewestData(data["General"]["OTF Auto"], "Duration", pre[7], pit[11]);
        fillNewestData(data["General"]["OTF Auto"], "Relaibility", pre[8], pit[12]);
        checkEmpty(data["General"], "OTF Auto");

        
        //CONES
        fillNewestData(data["General"]["Cones"], "Array", pre[15], pit[4]);
        if (!data["General"]["Cones"]["Array"]) {
            delete data["General"]["Cones"];
        } else {

        }

        //CUBES
        fillNewestData(data["General"]["Cubes"], "Array", pre[16], pit[5]);
        if (!data["General"]["Cubes"]["Array"]) {
            delete data["General"]["Cubes"];
        } else {
            var counter = 0;
            JSON.parse(data["General"]["Cubes"]["Array"]).forEach(have => {
                console.log(have)
            });
        }
        
        // "Cones": {
        //     "Top": "",
        //     "Mid": "",
        //     "Low": "",
        //     "INFO": [[1, 1, 1], "HAVE"]
        // },
        // "Cubes": {
        //     "Top": "",
        //     "Mid": "",
        //     "Low": "",
        //     "INFO": [[1, 1, 1], "HAVE"]
        // },

        console.log(data)
    } else if (pre.length > 0) {
        //TODO: DO without match
        data = structuredClone(dataTableWithoutMatchFormat);
    } else {
        //TODO: no data
    }
}

function fillNewestData(data, key, pre, pit) {
    console.log(pre, pre != "none")
    if (pit != "none" && pit) {
        data[key] = pit;
    } else if (pre != "none" && pre) {
        data[key] = pre;
    } else {
        delete data[key];
    }
}


function checkEmpty(data, key) {
    if (Object.keys(header => header != "INFO").length == 0) {
        delete(data[key]);
    }
}

teamSearch();