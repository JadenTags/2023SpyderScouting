const dataTableWithMatchFormat = {
    "General": {
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
    "Autonomous": {
        "Mobility%": {
            "GOT": "",
            "NG": "",
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
            "Attempt%": {
                "ATPT": "",
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
};
const blueDataTableColors = {
    "singleCellHeader": "#a2abf6",
    "singleCellData": "#d2d6fa",
    "singleCellDataAlt": "#e3e6ff",
    "spacer": "#8590ed",
};
var lockedDivs = {
    "mainDiv": "locked",
    "teamSearchDiv": "unlocked",
};
const marginTopSpacing = "2px";
const cellHeight = 30;
const tableWidth = 30;

async function teamSearch() {
    var team = document.getElementById("teamSearchInput").value;

    if (false) {
        //TODO: Verify Team (check if valid team, have data, and is numbers)

        //TODO: IF NOT HAVE DATA, ONLY USE PRE/PIT DATA
    }

    var orderNum = curOrderNum++;
    await getTBAData("team/frc" + team, orderNum);
    var data = getOrder(orderNum);

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

    var teamData = compileAllTeamData(team, matchForms, preForms, pitForms);
    var titleTable = buildHeaderTable(getHeightObj(teamData));
    var data = buildTeamTable(teamData, blueDataTableColors);
    document.body.appendChild(data);
}

function buildTeamTable(teamData, color) {
    var table = document.createElement("table");

    Object.keys(teamData).forEach(section => {
        let sectionInfo = teamData[section];
        let sectionRow = document.createElement("tr");

        Object.keys(sectionInfo).forEach(header => {
            let headerInfo = sectionInfo[header];
            let headerRow = document.createElement("tr");
            let headerData = document.createElement("td");
            
            if (typeof headerInfo != "object") {
                let miniTable = document.createElement("table");
                let miniRow = document.createElement("tr");
                let miniData = document.createElement("td");
                
                if (headerInfo == "SPACER") {
                    miniData.setAttribute("class", "spacer");
                    miniData.style.backgroundColor = color["spacer"];
                    
                    miniData.appendChild(document.createTextNode(header));
                } else {
                    miniData.setAttribute("class", "miniInfoData");
                    miniData.style.backgroundColor = color["singleCellData"];
                    
                    miniData.appendChild(document.createTextNode(headerInfo));
                }

                miniData.style.height = cellHeight + "px";
                miniData.style.width = tableWidth + "vw";
                miniTable.style.marginTop = marginTopSpacing;

                miniRow.appendChild(miniData);
                miniTable.appendChild(miniRow);
                headerData.appendChild(miniTable);
            } else {
                let type = headerInfo["INFO"][1];
                let miniTable = document.createElement("table");

                if (type == "NORMAL") {
                    let ogLength = headerInfo["INFO"][0].length;

                    while (headerInfo["INFO"][0].length > 0) {
                        let miniMiniTable = createNormalMiniTable(headerInfo, color);

                        if (headerInfo["INFO"][0].length == ogLength - 1) {
                            miniMiniTable.style.marginTop = marginTopSpacing;
                        }

                        miniTable.appendChild(miniMiniTable);
                    }
                } else if (type == "HAVE") {
                    var counter = 0;
                    var headers = Object.keys(headerInfo).filter(x => x != "INFO");
                    headers.forEach(header => {
                        var miniInfoRow = document.createElement("tr");
                        let miniInfoData = document.createElement("td");
                
                        miniInfoData.setAttribute("class", "miniInfoData");
                        miniInfoData.style.height = cellHeight + "px";
                        miniInfoData.style.width = tableWidth + "vw";
                
                        if (counter++ % 2 == 0) {
                            miniInfoData.style.backgroundColor = color["singleCellData"];
                        } else {
                            miniInfoData.style.backgroundColor = color["singleCellDataAlt"];
                        }
                
                        miniInfoData.appendChild(document.createTextNode(header));
                        miniInfoRow.appendChild(miniInfoData);
                        miniTable.appendChild(miniInfoRow);
                    });

                    miniTable.style.marginTop = marginTopSpacing;
                } else if (type == "%") {
                    var counter = 0;

                    var headers = Object.keys(headerInfo).filter(x => x != "INFO");
                    headers.forEach(header => {
                        if (headerInfo[header] != "0%") {
                            let percentageRow = document.createElement("tr");

                            let miniInfoHeader = document.createElement("td");
                            miniInfoHeader.appendChild(document.createTextNode(header));
                            
                            miniInfoHeader.setAttribute("class", "miniInfoHeader");
                            miniInfoHeader.style.backgroundColor = color["singleCellHeader"];
                            miniInfoHeader.style.fontSize = "15px";
                            miniInfoHeader.style.height = (cellHeight * headers.length) * convertPercent(headerInfo[header]) + "px";
                            miniInfoHeader.style.width = tableWidth * 3 / 5 + "vw";

                            percentageRow.appendChild(miniInfoHeader);

                            let miniInfoPercentage = document.createElement("td");
                            miniInfoPercentage.appendChild(document.createTextNode(headerInfo[header]));
                            
                            miniInfoPercentage.setAttribute("class", "miniInfoHeader");
                            miniInfoPercentage.style.fontSize = "15px";
                            miniInfoPercentage.style.height = (cellHeight * headers.length) * convertPercent(headerInfo[header]) + "px";
                            miniInfoPercentage.style.width = tableWidth * 2 / 5 + "vw";

                            if (counter++ % 2 == 0) {
                                miniInfoPercentage.style.backgroundColor = color["singleCellData"];
                            } else {
                                miniInfoPercentage.style.backgroundColor = color["singleCellDataAlt"];
                            }

                            percentageRow.appendChild(miniInfoPercentage)

                            miniTable.appendChild(percentageRow);
                        }
                    });

                    miniTable.style.marginTop = marginTopSpacing;
                } else if (type == "NESTED") {
                    Object.keys(headerInfo).filter(x => x != "INFO").forEach(header => {
                        let miniRow = document.createElement("tr");
                        let miniData = document.createElement("td");
                        
                        miniData.setAttribute("class", "spacer");
                        miniData.style.backgroundColor = color["spacer"];
                        miniData.appendChild(document.createTextNode(header));
        
                        miniData.style.height = cellHeight + "px";
                        miniData.style.width = tableWidth + "vw";
                        miniTable.style.marginTop = marginTopSpacing;
        
                        miniRow.appendChild(miniData);
                        miniTable.appendChild(miniRow);

                        let miniPercentageRow = document.createElement("tr");
                        let miniPercentageData = document.createElement("td");
                        let miniMiniTable = document.createElement("table");

                        var counter = 0;
                        var headers = Object.keys(headerInfo[header]).filter(x => x != "INFO");
                        headers.forEach(innerHeader => {
                            if (headerInfo[header] != "0%") {
                                let percentageRow = document.createElement("tr");

                                let miniMiniInfoHeader = document.createElement("td");
                                miniMiniInfoHeader.appendChild(document.createTextNode(innerHeader));
                                
                                miniMiniInfoHeader.setAttribute("class", "miniInfoHeader");
                                miniMiniInfoHeader.style.backgroundColor = color["singleCellHeader"];
                                miniMiniInfoHeader.style.fontSize = "15px";
                                miniMiniInfoHeader.style.height = (cellHeight * headers.length) * convertPercent(headerInfo[header][innerHeader]) + "px";
                                miniMiniInfoHeader.style.width = tableWidth * 3 / 5 + "vw";

                                percentageRow.appendChild(miniMiniInfoHeader);

                                let miniMiniInfoPercentage = document.createElement("td");
                                miniMiniInfoPercentage.appendChild(document.createTextNode(headerInfo[header][innerHeader]));
                                
                                miniMiniInfoPercentage.setAttribute("class", "miniInfoHeader");
                                miniMiniInfoPercentage.style.fontSize = "15px";
                                miniMiniInfoPercentage.style.height = (cellHeight * headers.length) * convertPercent(headerInfo[header][innerHeader]) + "px";
                                miniMiniInfoPercentage.style.width = tableWidth * 2 / 5 + "vw";

                                if (counter++ % 2 == 0) {
                                    miniMiniInfoPercentage.style.backgroundColor = color["singleCellData"];
                                } else {
                                    miniMiniInfoPercentage.style.backgroundColor = color["singleCellDataAlt"];
                                }

                                percentageRow.appendChild(miniMiniInfoPercentage)

                                miniMiniTable.appendChild(percentageRow);
                            }
                        });

                        miniPercentageData.appendChild(miniMiniTable);
                        miniPercentageRow.appendChild(miniPercentageData);
                        miniTable.appendChild(miniPercentageRow);
                    });
                } else {
                    // console.log(type)
                }

                headerData.appendChild(miniTable);
            }

            headerRow.appendChild(headerData);
            sectionRow.appendChild(headerRow);
        });

        table.appendChild(sectionRow);
    });

    table.style.width = tableWidth + "vw";
    table.style.backgroundColor = "black";
    table.style.borderRight = marginTopSpacing + " solid black";
    table.style.borderBottom = marginTopSpacing + " solid black";

    return table;
}

function buildHeaderTable(heightObj) {
    console.log(heightObj)
}

function getHeightObj(data) {
    var heightsObj = structuredClone(dataTableWithMatchFormat);

    Object.keys(data).forEach(section => {
        let sectionInfo = data[section];

        Object.keys(sectionInfo).forEach(header => {
            let headerInfo = sectionInfo[header];

            if (typeof headerInfo != "object") {
                heightsObj[section][header] = cellHeight + "px";

                if (headerInfo == "SPACER") {
                    heightsObj[section][header] += "SPACER";
                }
            } else {
                let type = headerInfo["INFO"][1];
                if (type == "NORMAL") {
                    heightsObj[section][header] = headerInfo["INFO"][0].length * 2 * cellHeight + "px";
                } else if (type == "HAVE") {
                    heightsObj[section][header] = Object.values(headerInfo).filter(x => x != "INFO").length * cellHeight + "px";
                } else if (type == "%") {
                    heightsObj[section][header] = Object.values(headerInfo).filter(x => x != "0%" && x != "INFO").length * cellHeight + "px";
                } else if (type == "NESTED") {
                    let height = 0;

                    Object.keys(headerInfo).filter(x => x != "INFO").forEach(key => {
                        height += Object.keys(headerInfo[key]).length * cellHeight;
                    });


                    heightsObj[section][header] = height + "px";
                } else {
                    // console.log(headerInfo, type);
                }
            }
        });
    });

    return heightsObj;
}

function convertPercent(percent) {
    return parseInt(percent.replace("%", "")) / 100;
}

function createNormalMiniTable(data, color) {
    var miniTable = document.createElement("table");

    var headers = Object.keys(data).slice(0, data["INFO"][0].shift());
    var miniHeaderRow = document.createElement("tr");
    headers.forEach(header => {
        let miniHeaderData = document.createElement("td");

        miniHeaderData.setAttribute("class", "miniInfoHeader");
        miniHeaderData.style.backgroundColor = color["singleCellHeader"];
        miniHeaderData.style.height = cellHeight + "px";
        miniHeaderData.style.width = tableWidth / headers.length + "vw";

        miniHeaderData.appendChild(document.createTextNode(header));
        miniHeaderRow.appendChild(miniHeaderData);
    });
    miniTable.appendChild(miniHeaderRow)

    var miniInfoRow = document.createElement("tr");
    var counter = 0;
    headers.forEach(header => {
        let miniInfoData = document.createElement("td");

        miniInfoData.setAttribute("class", "miniInfoData");
        miniInfoData.style.height = cellHeight + "px";

        if (counter++ % 2 == 0) {
            miniInfoData.style.backgroundColor = color["singleCellData"];
        } else {
            miniInfoData.style.backgroundColor = color["singleCellDataAlt"];
        }

        miniInfoData.appendChild(document.createTextNode(data[header]));
        miniInfoRow.appendChild(miniInfoData);

        delete data[header];
    });
    miniTable.appendChild(miniInfoRow)
    
    return miniTable;
}

function compileAllTeamData(team, match, pre, pit) {
    var data = JSON.parse(JSON.stringify(dataTableWithMatchFormat));
    pre = pre.slice(1);
    pit = pit.slice(1);
    match = match.slice(1);

    //TODO: GET DATA FROM BOTH FORMS AND UPATE ORIGINAL INFORMATION AND RETURN NEW OBJ
    
    if (match) {
        match = match.filter(x => x[1] == team);
    } if (pre) {
        pre = pre.filter(x => x[0] == team);
        pre = pre[pre.length - 1];
    } if (pit) {
        pit = pit.filter(x => x[0] == team);
        pit = pit[pit.length - 1];
    }

    ////////////////////////////////////////////////////////GENERAL
    if (pre) {
        //DIMENSIONS
        data["General"]["Dimensions"] = JSON.parse(pre[1]).join("\" x ") + "\"";

        //DB INFO
        fillNewestData(data["General"]["DB Info"], "Type", pre[2], "none");
        fillNewestData(data["General"]["DB Info"], "Motor", pre[3], "none");
        checkEmpty(data["General"], "DB Info");

        //OTF AUTO
        fillNewestData(data["General"]["OTF Auto"], "Can", pre[6], pit[10]);
        fillNewestData(data["General"]["OTF Auto"], "Duration", pre[7], pit[11]);
        fillNewestData(data["General"]["OTF Auto"], "Reliability", pre[8], pit[12]);
        checkEmpty(data["General"], "OTF Auto");
        
        //PLAYSTYLES
        fillNewestHaveData(data["General"], "Playstyles", pre[19], pit[19]);
    } else {
        data["General"] = {
            "Failure%": {
                "MF": "",
                "CF": "",
                "NS": "",
                "N": "",
                "INFO": [[4], "%"]
            },
            "Matches": "",
        }
    }

    //FAILURES
    var failuresArray = match.map(x => x[14]);
    var failures = getFreqObj(failuresArray, ["Mech Fail", "Comm Fail", "No Show", "none"]);
    data["General"]["Failure%"]["MF"] = getPercent(failures["Mech Fail"], failuresArray.length);
    data["General"]["Failure%"]["CF"] = getPercent(failures["Comm Fail"], failuresArray.length);
    data["General"]["Failure%"]["NS"] = getPercent(failures["No Show"], failuresArray.length);
    data["General"]["Failure%"]["N"] = getPercent(failures["none"], failuresArray.length);

    //MATCHES
    data["General"]["Matches"] = match.length;

    ////////////////////////////////////////////////////////AUTONOMOUS

    //MOBILITY%
    var mobilityArray = match.map(x => x[2]).filter(x => x != "none");
    var mobility = getFreqObj(mobilityArray, ["TRUE", "FALSE"]);
    data["Autonomous"]["Mobility%"]["GOT"] = getPercent(mobility["TRUE"], mobilityArray.length);
    data["Autonomous"]["Mobility%"]["NG"] = getPercent(mobility["FALSE"], mobilityArray.length);

    //CUBE
    storeScoringStats(data["Autonomous"]["CUBE Top Row"], match.map(x => x[4]).filter(x => x != "none").map(x => JSON.parse(x)[0]));
    storeScoringStats(data["Autonomous"]["CUBE Mid Row"], match.map(x => x[4]).filter(x => x != "none").map(x => JSON.parse(x)[1]));
    storeScoringStats(data["Autonomous"]["CUBE Bot Row"], match.map(x => x[4]).filter(x => x != "none").map(x => JSON.parse(x)[2]));

    //CONE
    storeScoringStats(data["Autonomous"]["CONE Top Row"], match.map(x => x[3]).filter(x => x != "none").map(x => JSON.parse(x)[0]));
    storeScoringStats(data["Autonomous"]["CONE Mid Row"], match.map(x => x[3]).filter(x => x != "none").map(x => JSON.parse(x)[1]));
    storeScoringStats(data["Autonomous"]["CONE Bot Row"], match.map(x => x[3]).filter(x => x != "none").map(x => JSON.parse(x)[2]));

    //DOCKED
    var dockSuccessArray = match.map(x => x[5]);
    var dockSuccess = getFreqObj(dockSuccessArray, ["Docked", "none"]);
    data["Autonomous"]["Docked"]["Attempt%"]["ATPT"] = getPercent(dockSuccess["Docked"] + dockSuccess["Failed Dock"], dockSuccessArray.length);
    data["Autonomous"]["Docked"]["Attempt%"]["NA"] = getPercent(dockSuccess["none"], dockSuccessArray.length);
    
    var dockSuccessArray = match.map(x => x[5]).filter(x => x != "none");
    var dockSuccess = getFreqObj(dockSuccessArray, ["Docked", "Failed Dock"]);
    data["Autonomous"]["Docked"]["Success%"]["Success"] = getPercent(dockSuccess["Docked"], dockSuccessArray.length);
    data["Autonomous"]["Docked"]["Success%"]["Fail"] = getPercent(dockSuccess["Failed Dock"], dockSuccessArray.length);
    if (Object.keys(dockSuccess).length == 0) {
        delete data["Autonomous"]["Docked"]["Success%"];
        data["Autonomous"]["Docked"]["INFO"] = [[1], "NESTED"];
    }

    //ENGAGED
    var engagedArray = match.map(x => x[6]).filter(x => x != "none");
    var engaged = getFreqObj(engagedArray, ["TRUE", "FALSE"]);
    data["Autonomous"]["Engaged%"]["Engaged"] = getPercent(engaged["TRUE"], engagedArray.length);
    data["Autonomous"]["Engaged%"]["NE"] = getPercent(engaged["FALSE"], engagedArray.length);
    if (Object.keys(engagedArray).length == 0) {
        delete data["Autonomous"]["Engaged%"];
        // data["Autonomous"]["Engaged%"]["INFO"] = [[1], "NESTED"];
    }

    ////////////////////////////////////////////////////////TELEOP

    //CUBE
    storeScoringStats(data["Teleop"]["CUBE Top Row"], match.map(x => x[8]).filter(x => x != "none").map(x => JSON.parse(x)[0]));
    storeScoringStats(data["Teleop"]["CUBE Mid Row"], match.map(x => x[8]).filter(x => x != "none").map(x => JSON.parse(x)[1]));
    storeScoringStats(data["Teleop"]["CUBE Bot Row"], match.map(x => x[8]).filter(x => x != "none").map(x => JSON.parse(x)[2]));

    //CONE
    storeScoringStats(data["Teleop"]["CONE Top Row"], match.map(x => x[7]).filter(x => x != "none").map(x => JSON.parse(x)[0]));
    storeScoringStats(data["Teleop"]["CONE Mid Row"], match.map(x => x[7]).filter(x => x != "none").map(x => JSON.parse(x)[1]));
    storeScoringStats(data["Teleop"]["CONE Bot Row"], match.map(x => x[7]).filter(x => x != "none").map(x => JSON.parse(x)[2]));

    //ALMOST TIPPED
    var almostTippedCS = match.map(x => parseInt(x[9])).filter(x => !isNaN(x));
    var almostTippedNonCS = match.map(x => parseInt(x[10])).filter(x => !isNaN(x));
    data["Teleop"]["Almost Tipped"]["Type%"]["CS"] = getPercent(almostTippedCS, almostTippedNonCS);
    data["Teleop"]["Almost Tipped"]["Type%"]["Non-CS"] = getPercent(almostTippedNonCS, almostTippedCS);
    
    var almostTippedAll = match.map(x => x[9]);
    var almostTippedOccur = 0;

    for (var i = 0; i < almostTippedCS.length; i++) {
        if (almostTippedCS[i] > 0 || almostTippedNonCS[i] > 0) {
            almostTippedOccur++;
        }
    }

    data["Teleop"]["Almost Tipped"]["Tip%"]["Tip"] = getPercent(almostTippedOccur, almostTippedAll.length);
    data["Teleop"]["Almost Tipped"]["Tip%"]["NT"] = getPercent(almostTippedAll.length - almostTippedOccur, almostTippedAll.length);
    if (almostTippedOccur == 0) {
        delete data["Teleop"]["Almost Tipped"]["Type%"];
        data["Teleop"]["Almost Tipped"]["INFO"] = [[1], "NESTED"];
    }

    //PLAYSTYLES
    var playstyleArray = match.map(x => x[11]).filter(x => x != "none");
    var playstyle = getFreqObj(playstyleArray, ["Offensive", "Hybrid", "Defensive"]);
    data["Teleop"]["Playstyle%"]["Off"] = getPercent(playstyle["Offensive"], playstyleArray.length);
    data["Teleop"]["Playstyle%"]["Hyb"] = getPercent(playstyle["Hybrid"], playstyleArray.length);
    data["Teleop"]["Playstyle%"]["Def"] = getPercent(playstyle["Defensive"], playstyleArray.length);

    //ENDGAME
    var teleDocksArray = match.map(x => x[12]).filter(x => x != "none" && ["Failed Dock", "Docked"].includes(x));
    var teleDocks = getFreqObj(teleDocksArray, ["Docked", "Failed Dock"]);
    data["Teleop"]["Endgame"]["Success%"]["Success"] = getPercent(teleDocks["Docked"], teleDocksArray.length);
    data["Teleop"]["Endgame"]["Success%"]["Fail"] = getPercent(teleDocks["Failed Dock"], teleDocksArray.length);

    var teleEndgameArray = match.map(x => x[12]).filter(x => x != "Failed Dock");
    var teleEndgame = getFreqObj(teleEndgameArray, ["Docked", "Parked", "none"]);
    data["Teleop"]["Endgame"]["Attempt%"]["Docked"] = getPercent(teleEndgame["Docked"], teleEndgameArray.length);
    data["Teleop"]["Endgame"]["Attempt%"]["Parked"] = getPercent(teleEndgame["Parked"], teleEndgameArray.length);
    data["Teleop"]["Endgame"]["Attempt%"]["NA"] = getPercent(teleEndgame["none"], teleEndgameArray.length);

    //ENGAGED
    engagedArray = match.map(x => x[13]).filter(x => x != "none");
    engaged = getFreqObj(engagedArray, ["TRUE", "FALSE"]);
    data["Teleop"]["Engaged%"]["Engaged"] = getPercent(engaged["TRUE"], engagedArray.length);
    data["Teleop"]["Engaged%"]["NE"] = getPercent(engaged["FALSE"], engagedArray.length);

    //PENALTIES
    storeScoringStats(data["Teleop"]["Penalties"], match.map(x => x[15]).filter(x => x != "none"));
    delete data["Teleop"]["Penalties"]["ACC"];
    delete data["Teleop"]["Penalties"]["Min"];
    delete data["Teleop"]["Penalties"]["Rng"];

    //CARDS
    var cards = getFreqObj(match.map(x => x[16]).filter(x => x != "none"), ["Red", "Yellow"]);
    data["Teleop"]["Cards"]["Reds"] = cards["Red"] + Math.floor(cards["Yellow"] / 2);
    data["Teleop"]["Cards"]["Yellow"] = cards["Yellow"] % 2 == 1;

    //AGGRESSIVE
    var aggressiveArray = match.map(x => x[17]).filter(x => x != "none");
    var aggressive = getFreqObj(aggressiveArray, ["TRUE", "FALSE"]);
    data["Teleop"]["Aggressive%"]["Yes"] = getPercent(aggressive["TRUE"], aggressiveArray.length);
    data["Teleop"]["Aggressive%"]["No"] = getPercent(aggressive["FALSE"], aggressiveArray.length);

    return data;
}

//CHANGE YEARLY
function storeScoringStats(data, obj) {
    var made = obj.map(x => parseInt(x[0]));
    var miss = obj.map(x => parseInt(x[1]));
    
    if (made.length == 0 && miss.length == 0) {
        Object.keys(data).forEach(key => {
            delete data[key];
        });

        data["INFO"] = [[0], "NORMAL"];

        return;
    }

    data["Min"] = Math.min(...made);
    data["Max"] = Math.max(...made);

    if (data["Min"] == data["Max"]) {
        var always = data["Min"];
        Object.keys(data).forEach(key => {
            delete data[key];
        });

        data["Always"] = always;
        data["INFO"] = [[1], "NORMAL"];

        return;
    }
    data["Avg"] = Math.round(made.reduce((x, y) => x + y) / made.length);

    var totalDiff = 0;
    made.forEach(score => {
        totalDiff += Math.abs(data["Avg"] - score);
    });
    totalDiff /= made.length;
    
    var top = Math.round(data["Avg"] + totalDiff);
    if (top > data["Max"]) {
        top = data["Max"];
    }

    var bot = Math.round(data["Avg"] - totalDiff);
    if (bot < data["Min"]) {
        bot = data["Min"];
    }

    if (bot == top) {
        data["Rng"] = top;
    } else {
        data["Rng"] = bot + " - " + top;
    }
    data["ACC"] = getPercent(made, miss);
}

function fillNewestData(obj, key, pre, pit) {
    if (pit != "none") {
        obj[key] = pit;
    } else if (pre != "none") {
        obj[key] = pre;
    } else {
        obj["INFO"][0][Object.keys(obj).indexOf(key)]--;

        if (obj["INFO"][0][Object.keys(obj).indexOf(key)] == 0) {
            obj["INFO"][0] = obj["INFO"][0].slice(0, Object.keys(obj).indexOf(key)).concat(obj["INFO"][0].splice(Object.keys(obj).indexOf(key) + 1, Object.keys(obj).length - 1));
        }

        delete obj[key];
    }
}

function fillNewestHaveData(obj, key, pre, pit) {
    if (pit != "none") {
        pit = JSON.parse(pit);

        Object.keys(obj[key]).forEach(header => {
            if (header != "INFO") {
                if (pit.includes(header)) {
                    obj[key][header] = true;
                } else {
                    delete obj[key][header];
                }
            }
        });
    } else if (pre != "none") {
        pre = JSON.parse(pre);

        Object.keys(obj[key]).forEach(header => {
            if (header != "INFO") {
                if (pre.includes(header)) {
                    obj[key][header] = true;
                } else {
                    delete obj[key][header];
                }
            }
        });
    } else {
        delete obj[key];
    }
}

function getFreqObj(obj, neededKeys) {
    var freqObj = {};

    obj.filter(x => x != "INFO").forEach(key => {
        if (!freqObj[key]) {
            freqObj[key] = 1;
        } else {
            freqObj[key]++;
        }
    });

    var haveKeys = Object.keys(freqObj);

    neededKeys.filter(x => !haveKeys.includes(x)).forEach(key => {
        freqObj[key] = 0;
    });

    return freqObj;
}

function sum(array) {
    return array.reduce((x, y) => x + y);
}

function getPercent(percent, whole) {
    if (typeof percent == typeof {}) {
        percent = sum(percent);
        whole = sum(whole) + percent;

        if (whole == 0) {
            return "0%";
        }

        return Math.round(percent / whole * 100) + "%";
    } else {
        if (!percent || !whole || whole == 0) {
            return "0%";
        }

        return Math.round(percent / whole * 100 ) + "%";
    }
}

function checkEmpty(obj, key) {
    if (obj.length == 1) {
        delete obj[key];
    }
}


//REMOVE LATER
function test() {
    document.getElementById("teamSearchInput").setAttribute("value", "1");
    eval(document.getElementById("teamSearchSearchButton").getAttribute("onclick"));
}

test();