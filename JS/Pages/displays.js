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
        "Cubes": "SPACER",
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
        "Cones": "SPACER",
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
                "SCS": "",
                "Fail": "",
                "INFO": [[2], "%"]
            },
            "ATPT%": {
                "ATPT": "",
                "Not": "",
                "INFO": [[2], "%"]
            },
            "INFO": [[], "NESTED"]
        },
        "Engaged%": {
            "ENG": "",
            "Not": "",
            "INFO": [[2], "%"]
        }
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
        "Cargo AVG": "",
        "Points AVG": "",
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
                "SCS": "",
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
        }
    }
};
const dataTableWithoutMatchFormat = {
    "General": {
        "DIMS": "",
        "DB Info": {
            "Type": "",
            "Motor": "",
            "INFO": [[1, 1], "NORMAL"]
        },
        "GOM": "",
        "OTF Auto": {
            "Can": "",
            "Duration": "",
            "Reliability": "",
            "INFO": [[1, 1, 1], "NORMAL"]
        }
    },
    "Auto": {
        "Set Pos": "",
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
    var team = document.getElementById("teamSearchInput").value;
    var dataTableDiv = document.getElementById("teamSearchDataTableDiv");
    var locationInfo = document.getElementById("teamSearchLocationInformation");
    var additionalInfo = document.getElementById("teamSearchAdditionalInformation");
    dataTableDiv.innerHTML = "";

    document.getElementById("teamSearchTeamName").innerHTML = "Searching...";
    document.getElementById("teamSearchTeamNum").innerHTML = "";
    locationInfo.innerHTML = "";
    additionalInfo.innerHTML = "";
    hideElement("teamSearchNotifDiv");
    document.getElementById("teamSearchInput").style.border = "1px solid #c5c7c5";
    changeNotif("teamSearchNotifText", "T");

    if (isNaN(parseInt(team))) {
        showElement("teamSearchNotifDiv");
        document.getElementById("teamSearchInput").style.border = "1px solid #eb776e";
        changeNotif("teamSearchNotifText", "That is Not a Number!");

        document.getElementById("teamSearchTeamName").innerHTML = "Enter A Team";
        return;
    }

    var orderNum = curOrderNum++;
    await getTBAData("team/frc" + team, orderNum);
    var data = getOrder(orderNum);

    if (data["Error"]) {
        showElement("teamSearchNotifDiv");
        document.getElementById("teamSearchInput").style.border = "1px solid #eb776e";
        changeNotif("teamSearchNotifText", "That is Not a Valid Team!");

        document.getElementById("teamSearchTeamName").innerHTML = "Enter A Team";
        return;
    }

    //TEAM NAME
    document.getElementById("teamSearchTeamName").innerHTML = data.nickname;
    //TEAM NUMBER
    document.getElementById("teamSearchTeamNum").innerHTML = "[" + team + "]";

    //LOCATION INFO
    locationInfo.innerHTML = [data.school_name, data.address, data.city, data.country].filter(x => x).join(", ");
    locationInfo.style.display = "block";

    //ADDITIONAL INFO
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

    var tempName = sheetName;
    if (isFinals) {
        tempName += "FINALS";
    }

    orderNum = curOrderNum++;
    await getSheetData(config.matchGSID, tempName, orderNum);
    var matchForms = getOrder(orderNum);
    
    var noMatch = matchForms.filter(x => x[1] == team).length == 0;
    var noPrePit = pitForms.filter(x => x[0] == team).length == 0 && preForms.filter(x => x[0] == team).length == 0;
    
    var teamData;
    var clone;
    if (noMatch && noPrePit) {
        showElement("teamSearchNotifDiv");
        document.getElementById("teamSearchInput").style.border = "1px solid #eb776e";
        changeNotif("teamSearchNotifText", "This Team Has No Data!");

        return;
    } else if (noMatch) {
        teamData = compilePrePitTeamData(team, preForms, pitForms);
        clone = dataTableWithoutMatchFormat;
    } else {
        teamData = compileAllTeamData(team, matchForms, preForms, pitForms);
        clone = dataTableWithMatchFormat;
    }

    var heightObj = getHeightObj(teamData, clone);
    var titleTable = buildHeaderTable(heightObj, blueDataTableColors);
    var data = buildTeamTable(teamData, blueDataTableColors, heightObj, null);
    
    var tble = document.createElement("table");
    var row = document.createElement("tr");
    var title = document.createElement("td");
    var dataData = document.createElement("td");

    tble.style.margin = "auto";

    title.appendChild(titleTable);
    dataData.appendChild(data);
    row.appendChild(title);
    row.appendChild(dataData);
    tble.appendChild(row);
    dataTableDiv.appendChild(tble);
}

function buildTeamTable(teamData, color, heightsObj, headerOrder) {
    var table = document.createElement("table");
    var outSideLecounterTwo = 0;
    var outSideLecounter = 0;
    var lastNested;
    var lastNDNested;

    Object.keys(teamData).forEach(section => {
        let sectionInfo = teamData[section];
        let sectionRow = document.createElement("tr");

        let iterateThrough = Object.keys(sectionInfo);
        if (headerOrder) {
            iterateThrough = headerOrder[section];
        }

        iterateThrough.forEach(header => {
            let subHeader;
            if (header.includes("|")) {
                subHeader = header.split("|")[1];
                header = header.split("|")[0];
            }


            let headerInfo = sectionInfo[header];
            let headerRow = document.createElement("tr");
            let headerData = document.createElement("td");
            
            if (typeof headerInfo != "object") {
                let miniTable = document.createElement("table");
                let miniRow = document.createElement("tr");
                let miniData = document.createElement("td");

                if (header == "DIMS") {
                    headerInfo = headerInfo.replaceAll("\"", "").replaceAll(" x ", "|");
                }
                
                if (headerInfo == "SPACER") {
                    miniData.setAttribute("class", "spacer");
                    miniData.style.backgroundColor = color["spacer"];
                    
                    miniData.appendChild(document.createTextNode(header));
                    miniData.style.height = heightsObj[section][header].replace("SPACER", "");
                } else {
                    miniData.setAttribute("class", "miniInfoData");
                    miniData.style.backgroundColor = color["singleCellData"];
                    
                    miniData.appendChild(document.createTextNode(headerInfo));
                    miniData.style.height = heightsObj[section][header];
                }
                
                miniData.style.width = tableWidth + "vw";
                miniTable.style.marginTop = marginTopSpacing;

                miniRow.appendChild(miniData);
                miniTable.appendChild(miniRow);
                headerData.appendChild(miniTable);
            } else {
                let type = headerInfo["INFO"][1];
                let displayForm = headerInfo["INFO"][0];

                let miniTable = document.createElement("table");
                if (type == "NORMAL") {
                    let ogLength = headerInfo["INFO"][0].length;

                    while (headerInfo["INFO"][0].length > 0) {
                        let miniMiniTable = createNormalMiniTable(headerInfo, color, (parseInt(heightsObj[section][header].replace("px", ""))) / ogLength / 2 + "px");

                        if (headerInfo["INFO"][0].length == ogLength - 1) {
                            miniMiniTable.style.marginTop = marginTopSpacing;
                        }

                        miniTable.appendChild(miniMiniTable);
                    }
                } else if (type == "HAVE") {
                    var height = Math.round(parseInt(heightsObj[section][header].replace("px", "")) / Object.values(headerInfo).filter(x => x && typeof x == "boolean").length);
                    var counter = 0;
                    var headers = Object.keys(headerInfo).filter(x => x != "INFO");
                    headers.forEach(header => {
                        var miniInfoRow = document.createElement("tr");
                        let miniInfoData = document.createElement("td");
                
                        miniInfoData.setAttribute("class", "miniInfoData");
                        miniInfoData.style.height = height + "px";
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
                    var headers = Object.keys(headerInfo).filter(x => x != "INFO" && headerInfo[x] != "0%");

                    var widths = headers.map(x => Math.round(convertPercent(headerInfo[x]) * tableWidth));
                    while (sum(widths) < tableWidth) {
                        widths[widths.indexOf(Math.max(...widths))]++;
                    }

                    var percentageOuterRow = document.createElement("tr");
                    var percentageOuterData = document.createElement("td");
                    var percentageTable = document.createElement("table");

                    var barOuterRow = document.createElement("tr");
                    var barOuterData = document.createElement("td");
                    var barTable = document.createElement("table");
                    var barRow = document.createElement("tr");

                    headers.forEach(innerHeader => {
                        let percentageRow = document.createElement("tr");

                        let miniInfoHeader = document.createElement("td");
                        miniInfoHeader.appendChild(document.createTextNode(innerHeader));
                        
                        miniInfoHeader.setAttribute("class", "miniInfoHeader");
                        miniInfoHeader.style.backgroundColor = color["singleCellHeader"];
                        miniInfoHeader.style.height = (parseInt(heightsObj[section][header].replace("px", "")) - cellHeight - 1) / headers.length + "px";
                        miniInfoHeader.style.width = tableWidth / 2 + "vw";

                        percentageRow.appendChild(miniInfoHeader);

                        let miniInfoPercentage = document.createElement("td");
                        miniInfoPercentage.appendChild(document.createTextNode(headerInfo[innerHeader]));
                        
                        miniInfoPercentage.setAttribute("class", "miniInfoPercent");
                        miniInfoPercentage.style.width = tableWidth / 2 + "vw";
                        miniInfoPercentage.style.backgroundColor = percentageColorOrder[counter];

                        percentageRow.appendChild(miniInfoPercentage)

                        percentageTable.appendChild(percentageRow);
                        
                        let miniBarPercentage = document.createElement("td");
                        miniBarPercentage.setAttribute("class", "miniInfoHeader");
                        miniBarPercentage.style.backgroundColor = percentageColorOrder[counter];
                        miniBarPercentage.style.height = cellHeight + "px";
                        miniBarPercentage.style.width = widths[counter++] + "vw";
                        miniBarPercentage.style.borderTop = "1px solid black";

                        barRow.appendChild(miniBarPercentage);
                        percentageOuterData.appendChild(percentageTable);
                        percentageOuterRow.appendChild(percentageOuterData);
                    });
                    
                    miniTable.appendChild(percentageOuterRow);
                    barTable.appendChild(barRow);
                    barOuterData.appendChild(barTable);
                    barOuterRow.appendChild(barOuterData);
                    miniTable.appendChild(barOuterRow);
                    miniTable.style.marginTop = marginTopSpacing;
                } else if (type == "NESTED") {
                    var leCounter = 0;
                    Object.keys(headerInfo).filter(x => x != "INFO").forEach(innerHeader => {
                        if (subHeader) {
                            innerHeader = subHeader;
                        }

                        if (!subHeader || (subHeader && leCounter == 0)) {
                            if (header != lastNested) {
                                outSideLecounter = 0;
                            } if (subHeader) {
                                leCounter = outSideLecounter;
                            }
                            let nd = false;
                            lastNested = header;
                            
                            var counter = 0;
                            var headers = Object.keys(headerInfo[innerHeader]).filter(x => x != "INFO" && headerInfo[innerHeader][x] != "0%");
                            if (headers[0] == "0") {
                                headers = ["N"];
                                headerInfo[innerHeader] = {};
                                headerInfo[innerHeader]["N"] = "D";
                                nd = true;
                            }
                            
                            var innerHeaderOuterData = document.createElement("td");
                            var innerHeaderTable = document.createElement("table");
                            var innerHeaderRow = document.createElement("tr");
                            var innerHeaderData = document.createElement("td");
                            innerHeaderData.appendChild(document.createTextNode(innerHeader));

                            if (!nd) {
                                innerHeaderData.setAttribute("class", "miniInfoHeader");
                                innerHeaderData.style.backgroundColor = color["spacer"];
                                innerHeaderData.style.height = cellHeight + "px";
                                innerHeaderData.style.width = tableWidth + "vw";

                                innerHeaderRow.appendChild(innerHeaderData);
                            }

                            innerHeaderTable.style.marginTop = marginTopSpacing;

                            innerHeaderTable.appendChild(innerHeaderRow);
                            innerHeaderOuterData.appendChild(innerHeaderTable);
                            miniTable.appendChild(innerHeaderOuterData);
        
                            var widths = headers.map(x => Math.round(convertPercent(headerInfo[innerHeader][x]) * tableWidth));
                            
                            var widthsCounter = 0;
                            while (sum(widths) < tableWidth) {
                                widths[widthsCounter++]++;
                            }
        
                            var percentageOuterRow = document.createElement("tr");
                            var percentageOuterData = document.createElement("td");
                            var percentageTable = document.createElement("table");
        
                            var barOuterRow = document.createElement("tr");
                            var barOuterData = document.createElement("td");
                            var barTable = document.createElement("table");
                            var barRow = document.createElement("tr");
                            headers.forEach(innerInnerHeader => {
                                let percentageRow = document.createElement("tr");
        
                                let miniInfoHeader = document.createElement("td");
                                let miniInfoText = document.createTextNode(innerInnerHeader);
                                
                                miniInfoHeader.setAttribute("class", "miniInfoHeader");
                                miniInfoHeader.style.backgroundColor = color["singleCellHeader"];
                                var height = parseInt(heightsObj[section][header].split("|")[leCounter].replace("px", "")) - (cellHeight * 2 + 1 + parseInt(marginTopSpacing.replace("px", "")));

                                if (leCounter == 0 || (subHeader && outSideLecounter == 0)) {
                                    height += parseInt(marginTopSpacing.replace("px", ""));
                                }

                                miniInfoHeader.style.height = height / headers.length + "px";
                                miniInfoHeader.style.width = tableWidth / 2 + "vw";

                                if (nd) {
                                    miniInfoHeader.style.height = height + cellHeight * 2 + 1 + "px";
                                    miniInfoHeader.style.width = tableWidth + "vw";
                                    miniInfoText = document.createTextNode('ND');
                                    miniInfoHeader.setAttribute("class", "miniInfoData");
                                    miniInfoHeader.style.backgroundColor = color["singleCellData"];
                                }
                                miniInfoHeader.appendChild(miniInfoText);
        
                                percentageRow.appendChild(miniInfoHeader);
        
                                let miniInfoPercentage = document.createElement("td");
                                miniInfoPercentage.appendChild(document.createTextNode(headerInfo[innerHeader][innerInnerHeader]));
                                miniInfoPercentage.setAttribute("class", "miniInfoPercent");
                                miniInfoPercentage.style.width = tableWidth / 2 + "vw";
                                miniInfoPercentage.style.backgroundColor = percentageColorOrder[counter];

                                if (!nd) {
                                    percentageRow.appendChild(miniInfoPercentage);
                                }
        
        
                                percentageTable.appendChild(percentageRow);
                                
                                let miniBarPercentage = document.createElement("td");

                                if (!nd) {
                                    miniBarPercentage.setAttribute("class", "miniInfoHeader");
                                    miniBarPercentage.style.backgroundColor = percentageColorOrder[counter];
                                    miniBarPercentage.style.height = cellHeight + "px";
                                    miniBarPercentage.style.width = widths[counter++] + "vw";
                                    miniBarPercentage.style.borderTop = "1px solid black";
                                }

        
                                barRow.appendChild(miniBarPercentage);
                                percentageOuterData.appendChild(percentageTable);
                                percentageOuterRow.appendChild(percentageOuterData);
                            });
                            
                            miniTable.appendChild(percentageOuterRow);
                            barTable.appendChild(barRow);
                            barOuterData.appendChild(barTable);
                            barOuterRow.appendChild(barOuterData);
                            miniTable.appendChild(barOuterRow);

                            leCounter++;
                            outSideLecounter++;
                        }
                    });
                } else if (headerInfo["INFO"] == "ND") {
                    if (lastNDNested != header) {
                        outSideLecounterTwo = 0;
                    }
                    lastNDNested = header;

                    let miniTable = document.createElement("table");
                    let miniRow = document.createElement("tr");
                    let miniData = document.createElement("td");

                    miniData.setAttribute("class", "miniInfoData");
                    miniData.style.backgroundColor = color["singleCellData"];
                    miniData.appendChild(document.createTextNode("ND"));
                    var height = parseInt(heightsObj[section][header].split("|")[outSideLecounterTwo++].replace("px", "")) - (cellHeight * 2 + 1 + parseInt(marginTopSpacing.replace("px", "")));

                    if (outSideLecounterTwo != 0) {
                        height += parseInt(marginTopSpacing.replace("px", ""));
                    }

                    miniData.style.height = height + cellHeight * 2 + 3 - Object.keys(headerInfo).length + "px";
                    
                    miniData.style.width = tableWidth + "vw";
                    miniTable.style.marginTop = marginTopSpacing;
    
                    miniRow.appendChild(miniData);
                    miniTable.appendChild(miniRow);
                    headerData.appendChild(miniTable);
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
    table.style.border = marginTopSpacing + " solid black";
    table.style.borderTop = "0 solid black";
    table.style.borderLeft = "0 solid black";

    return table;
}

function buildHeaderTable(heightObj, color) {
    var headerTable = document.createElement("table");

    Object.keys(heightObj).forEach(section => {
        let sectionInfo = heightObj[section];
        let sectionRow = document.createElement("tr");

        let miniSectionTable = document.createElement("table");
        let miniSectionRow = document.createElement("tr");
        let miniSectionData = document.createElement("td");
        let sectionHeight = 0;

        Object.values(sectionInfo).forEach(x => {
            if (x.includes("SPACER")) {
                sectionHeight += parseInt(x.replace("pxSPACER", ""));
            } else if (x.includes("|")) {
                sectionHeight += sum(x.split("|").map(y => parseInt(y.replace("px", ""))));
            } else {
                sectionHeight += parseInt(x.replace("px", ""));
            }

            sectionHeight += parseInt(marginTopSpacing.replace("px", ""));
        });

        sectionHeight -= parseInt(marginTopSpacing.replace("px", ""));

        miniSectionData.setAttribute("class", "sectionData");
        miniSectionData.style.backgroundColor = color["sectionHeader"];
        miniSectionData.style.width = displayTableWidth * 3 / 4 + "vw";
        miniSectionData.style.height = sectionHeight + "px";
        miniSectionTable.style.borderTop = marginTopSpacing + " solid black";

        miniSectionData.appendChild(document.createTextNode(section));
        miniSectionRow.appendChild(miniSectionData);
        miniSectionTable.appendChild(miniSectionRow);
        sectionRow.appendChild(miniSectionTable);

        let miniHeaderData = document.createElement("td");
        let miniHeaderTable = document.createElement("table");
        Object.keys(sectionInfo).forEach(header => {

            let height = sectionInfo[header];
            let miniHeaderRow = document.createElement("tr");
            let headerData = document.createElement("td");

            if (typeof height != "object") {
                let innerTable = document.createElement("table");
                let innerRow = document.createElement("tr");
                let innerData = document.createElement("td");

                innerData.setAttribute("class", "sectionHeader");
                innerData.style.backgroundColor = color["sectionHeader"];
                innerData.style.width = displayTableWidth + "vw";
                innerData.style.height = height;
                if (height.includes("SPACER")) {
                    innerData.style.height = height.replace("SPACER", "");
                    innerData.style.color = color["sectionHeader"];
                    innerData.appendChild(document.createTextNode("ello"));
                } else if (header.includes("CUBE") || header.includes("CONE")) { //CHANGE YEARLY
                    innerData.appendChild(document.createTextNode(header.replace("CONE", "").replace("CUBE", "")));
                } else if (height.split("px")[1] != "") {
                    innerData.style.height = sum(height.split("|").map(x => parseInt(x.replace("px", "")))) + "px";
                    innerData.appendChild(document.createTextNode(header));
                } else {
                    innerData.appendChild(document.createTextNode(header));
                }

                innerTable.style.borderTop = marginTopSpacing + " solid black";
                innerTable.style.borderLeft = marginTopSpacing + " solid black";

                innerRow.appendChild(innerData);
                innerTable.appendChild(innerRow);
                headerData.appendChild(innerTable);
            }

            miniHeaderRow.appendChild(headerData);
            miniHeaderTable.appendChild(miniHeaderRow);
        });
        miniSectionData.style.textAlign = "center";
        miniHeaderData.appendChild(miniHeaderTable);
        sectionRow.appendChild(miniHeaderData);

        headerTable.appendChild(sectionRow);
    });

    headerTable.style.backgroundColor = color["sectionHeader"];
    headerTable.style.border = marginTopSpacing + " solid black";
    headerTable.style.borderTop = "0 solid black";

    return headerTable;
}

function getHeightObj(data, clone) {
    var heightsObj = structuredClone(clone);

    Object.keys(data).forEach(section => {
        let sectionInfo = data[section];

        Object.keys(sectionInfo).forEach(header => {
            let headerInfo = sectionInfo[header];
            if (typeof headerInfo != "object") {
                if (headerInfo == "ND") {
                    heightsObj[section][header] = "0px";
                } else {
                    heightsObj[section][header] = cellHeight + "px";
    
                    if (headerInfo == "SPACER") {
                        heightsObj[section][header] += "SPACER";
                    }
                }
            } else {
                let type = headerInfo["INFO"][1];
                if (type == "NORMAL") {
                    heightsObj[section][header] = headerInfo["INFO"][0].length * 2 * cellHeight + "px";
                } else if (type == "HAVE") {
                    heightsObj[section][header] = Math.round(Object.keys(headerInfo).filter(x => x != "INFO").length * cellHeight) + "px";
                } else if (type == "%") {
                    heightsObj[section][header] = Math.ceil(Object.keys(headerInfo).filter(x => x != "INFO" && x != "0%").length / 2) * 2 * cellHeight + cellHeight + 1 + "px";
                } else if (type == "NESTED" || heightsObj[section][header]["INFO"] == "ND") {

                    var adder = cellHeight * 2 + 1 + parseInt(marginTopSpacing.replace("px", ""));
                    var heights = []

                    Object.keys(headerInfo).filter(x => x != "INFO").forEach(innerHeader => {
                        if (headerInfo[innerHeader] == "ND") {
                            heights.push("0px");
                        } else {
                            heights.push(Math.ceil(Object.keys(headerInfo[innerHeader]).filter(x => x != "INFO" && x != "0%").length / 2) * 2 * cellHeight + adder + "px");

                            if (heights.length == 1) {
                                heights[0] = parseInt(heights[0].replace("px", "")) - parseInt(marginTopSpacing.replace("px", "")) + "px";
                            }
                        }
                    });

                    heightsObj[section][header] = heights.join("|");
                } else {
                    // console.log(headerInfo, type);
                }
            }
        });
    });

    Object.keys(heightsObj).forEach(key => {
        Object.keys(heightsObj[key]).forEach(subkey => {
            height = heightsObj[key][subkey];

            try {
                if (!height.includes("px")) {
                    delete heightsObj[key][subkey];
                }
            } catch {
                delete heightsObj[key][subkey];
            }
        });
    });

    return heightsObj;
}

function convertPercent(percent) {
    return parseInt(percent.replace("%", "")) / 100;
}

function createNormalMiniTable(data, color, height) {
    var miniTable = document.createElement("table");

    var headers = Object.keys(data).filter(x => x != "INFO").slice(0, data["INFO"][0].shift());
    var miniHeaderRow = document.createElement("tr");
    headers.forEach(header => {
        let miniHeaderData = document.createElement("td");

        miniHeaderData.setAttribute("class", "miniInfoHeader");
        miniHeaderData.style.backgroundColor = color["singleCellHeader"];
        miniHeaderData.style.height = height;
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
        miniInfoData.style.height = height;

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

//TODO: DO ALL OF THE COMPILE PREPIT

//CHANGE YEARLY
function compileAllTeamData(team, match, pre, pit) {
    pre = pre.slice(1).filter(x => x[0] == team);
    pit = pit.slice(1).filter(x => x[0] == team);
    match = match.slice(1).filter(x => x[1] == team);

    pre = pre[pre.length - 1];
    pit = pit[pit.length - 1];

    if (!pit) {
        pit = ["none", "none", "none", "none", "none", "none", "none", "none", "none", "none", "none", "none", "none", "none", "none", "none", "none", "none", "none", "none", "none", "none", "none", "none", "none", "none", "none", "none", "none", "none", "none", "none"]
    }

    //TODO: DO ALL
    var data = structuredClone(dataTableWithMatchFormat);

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
    fillNewestData(data["General"]["OTF Auto"], "Can", pre[6], pit[10]);
    fillNewestData(data["General"]["OTF Auto"], "Duration", pre[7], pit[11]);
    fillNewestData(data["General"]["OTF Auto"], "Relaibility", pre[8], pit[12]);
    checkEmpty(data["General"], "OTF Auto");
   
    //CONES
    fillNewestHaveData(data["General"], "Cones", pre[15], pit[4]);


    //CUBES
    fillNewestHaveData(data["General"], "Cubes", pre[16], pit[5]);


    //PREFERRED PLAYSTYLE
    fillNewestData(data["General"], "Pref PS", pre[17], pit[21]);
   
    //PREF GP
    fillNewestData(data["General"], "Pref GP", pre[18], "none");
    if (data["General"]["Pref GP"] == "No Preference") {
        data["General"]["Pref GP"] = "No Pref";
    }

    //PLAYSTYLES
    fillNewestHaveData(data["General"], "Playstyles", pre[19], pit[19]);
   
    //FAILURE%
    var equivObj = {
        "Mech Fail": "MF",
        "Comm Fail": "CF",
        "No Show": "NS",
        "none": "N"
    };


    fillPercentData(data["General"], "Failure%", match.map(x => x[14]), equivObj);


    //MATCHES
    data["General"]["Matches"] = match.length;
   
    ///////////////////////////AUTO
    //MOBILITY%
    equivObj = {
        "TRUE": "Got",
        "FALSE": "Not"
    };


    fillPercentData(data["Auto"], "Mobility%", match.map(x => x[2]).filter(x => x != "none"), equivObj);


    //CUBES
    var autoCubes = match.map(x => x[4]).filter(x => x != "none").map(x => JSON.parse(x));
    fillScoreData(data["Auto"]["CUBE Top Row"], autoCubes.map(x => x[0]));
    fillScoreData(data["Auto"]["CUBE Mid Row"], autoCubes.map(x => x[1]));
    fillScoreData(data["Auto"]["CUBE Bot Row"], autoCubes.map(x => x[2]));


    //CONES
    var autoCones = match.map(x => x[3]).filter(x => x != "none").map(x => JSON.parse(x));


    fillScoreData(data["Auto"]["CONE Top Row"], autoCones.map(x => x[0]));
    fillScoreData(data["Auto"]["CONE Mid Row"], autoCones.map(x => x[1]));
    fillScoreData(data["Auto"]["CONE Bot Row"], autoCones.map(x => x[2]));


    //SUCCESS%
    equivObj = {
        "Docked": "SCS",
        "Failed Dock": "Fail"
    };


    fillPercentData(data["Auto"]["Docked"], "Success%", match.map(x => x[5]).filter(x => ["Docked", "Failed Dock"].includes(x)), equivObj);
   
    //ATTEMPT%
    equivObj = {
        "Docked": "ATPT",
        "none": "Not"
    };


    fillPercentData(data["Auto"]["Docked"], "ATPT%", match.map(x => x[5]).map(x => {if (x == "Failed Dock") {return "Docked"} else {return x}}), equivObj);


    //ENGAGED%
    equivObj = {
        "TRUE": "ENG",
        "FALSE": "Not"
    };


    fillPercentData(data["Auto"], "Engaged%", match.map(x => x[6]).filter(x => x != "none"), equivObj);
   
    ///////////////////////////TELEOP
    //CUBES
    autoCubes = match.map(x => x[8]).filter(x => x != "none").map(x => JSON.parse(x));
    fillScoreData(data["Teleop"]["CUBE Top Row"], autoCubes.map(x => x[0]));
    fillScoreData(data["Teleop"]["CUBE Mid Row"], autoCubes.map(x => x[1]));
    fillScoreData(data["Teleop"]["CUBE Bot Row"], autoCubes.map(x => x[2]));


    //CONES
    var autoCones = match.map(x => x[7]).filter(x => x != "none").map(x => JSON.parse(x));


    fillScoreData(data["Teleop"]["CONE Top Row"], autoCones.map(x => x[0]));
    fillScoreData(data["Teleop"]["CONE Mid Row"], autoCones.map(x => x[1]));
    fillScoreData(data["Teleop"]["CONE Bot Row"], autoCones.map(x => x[2]));


    //CARGO AVG
    var cAve = 0;
    
    ["CUBE", "CONE"].forEach(type => {
        ["Top", "Mid", "Bot"].forEach(row => {
            if (data["Teleop"][type + " " + row + " Row"]["Avg"]) {
                cAve += data["Teleop"][type + " " + row + " Row"]["Avg"];
            } else {
                cAve += data["Teleop"][type + " " + row + " Row"]["Always"];
            }
        });
    });

    data["Teleop"]["Cargo AVG"] = Math.round(cAve * 10) / 10;

    //CARGO POINTS AVERAGE
    var cPointsAve = 0;
    
    ["CUBE", "CONE"].forEach(type => {
        ["Top", "Mid", "Bot"].forEach(row => {
            var ave;

            if (data["Teleop"][type + " " + row + " Row"]["Avg"]) {
                ave = data["Teleop"][type + " " + row + " Row"]["Avg"];
            } else {
                ave = data["Teleop"][type + " " + row + " Row"]["Always"];
            }

            if (row == "Top") {
                ave *= 6;
            } else if (row == "Mid") {
                ave *= 4;
            } else {
                ave *= 3;
            }

            cPointsAve += ave;
        });
    });

    

    data["Teleop"]["Points AVG"] = Math.round(cPointsAve * 10) / 10;
    //TYPE%
    var csArray = match.map(x => x[9]).filter(x => x != "none").map(x => parseInt(x)).reduce((x, y) => x + y);
    var noncsArray = match.map(x => x[10]).filter(x => x != "none").map(x => parseInt(x)).reduce((x, y) => x + y);
    var csPercent = csArray / (csArray + noncsArray);
    var noncsPercent = noncsArray / (csArray + noncsArray);
   
    if (isNaN(percent)) {
        delete data["Teleop"]["Almost Tipped"]["Type%"];
    } else {
        data["Teleop"]["Almost Tipped"]["Type%"]["CS"] = csPercent;
        data["Teleop"]["Almost Tipped"]["Type%"]["Not"] = noncsPercent;
    }


    //TIP%
    var length = match.map(x => x[9]).filter(x => x != "none").length + match.map(x => x[10]).filter(x => x != "none").length;
    var percent = Math.round((csArray + noncsArray) / length * 100) + "%";


    if (isNaN(percent)) {
        delete data["Teleop"]["Almost Tipped"]["Tip%"];
    } else {
        data["Teleop"]["Almost Tipped"]["Tip%"]["Tip"] = percent;
        data["Teleop"]["Almost Tipped"]["Tip%"]["Not"] = 1 - percent;
    }

    checkEmpty(data["Teleop"], "Almost Tipped");


    //PLAYSTYLE
    equivObj = {
        "Offensive": "Off",
        "Defensive": "Def",
        "Hybrid": "Hyb"
    };


    fillPercentData(data["Teleop"], "Playstyle%", match.map(x => x[11]).filter(x => x != "none"), equivObj);


    //SUCCESS%
    equivObj = {
        "Docked": "SCS",
        "Failed Dock": "Fail"
    };


    fillPercentData(data["Teleop"]["Endgame"], "Success%", match.map(x => x[12]).filter(x => ["Docked", "Failed Dock"].includes(x)), equivObj);


    //ATTEMPT%
    equivObj = {
        "Docked": "Docked",
        "Parked": "Parked",
        "none": "NA"
    };


    fillPercentData(data["Teleop"]["Endgame"], "ATPT%", match.map(x => x[12]).map(x => {if (x == "Failed Dock") {return "Docked"} else {return x}}), equivObj);


    //ENGAGED%
    equivObj = {
        "TRUE": "ENG",
        "FALSE": "Not"
    };


    fillPercentData(data["Teleop"], "Engaged%", match.map(x => x[13]).filter(x => x != "none"), equivObj);

    //PENALTIES
    var pens = match.map(x => x[15]).filter(x => x != "none").map(x => parseInt(x));
    if (pens.length != 0) {
        data["Teleop"]["Penalties"]["Max"] = Math.max(...pens);


        data["Teleop"]["Penalties"]["Avg"] = Math.round(pens.reduce((x, y) => x + y) / pens.length);
    } else {
        delete data["Teleop"]["Penalties"];
    }

    //CARDS
    var cards = match.map(x => x[16]).filter(x => x != "none");
    if (cards.length != 0) {
        var occurences = getOccurencesObj(cards, ["Red", "Yellow"]);
        data["Teleop"]["Cards"]["R"] = occurences["Red"] + (occurences["Yellow"] / 2);
        data["Teleop"]["Cards"]["Y"] = occurences["Yellow"] % 2 == 1;
    } else {
        delete data["Teleop"]["Cards"];
    }

    return data;
}


//CHANGE YEARLY
function fillScoreData(data, match) {
    match = match.map(x => x.map(y => parseInt(y)));

    //MIN | MAX | RNG | AVG | ACC
    data["Min"] = Math.min(...match.map(x => x[0]));
    data["Max"] = Math.max(...match.map(x => x[0]));
    if (data["Min"] == data["Max"]) {
        data["Always"] = data["Min"];


        Object.keys(data).filter(x => x != "INFO" && x != "Always").forEach(x => {
            delete data[x];
        });
        data["INFO"] = [[2], "NORMAL"];
    } else {
        var made = match.map(x => x[0]);

        if (made.length == 0) {
            ["Avg", "Rng", "ACC"].forEach(x => {
                delete data[x];
            });

            return;
        }

        if (made.length == 0) {
            data["Avg"] = 0;
        } else {
            data["Avg"] = Math.round(made.reduce((x, y) => x + y) / made.length * 10) / 10;
        }


        var mad = Math.round(made.map(x => Math.abs(data["Avg"] - x)).reduce((x, y) => x + y) / made.length * 10) / 10;
        var higher = Math.round(data["Avg"] + mad );
        var lower = Math.round(data["Avg"] - mad);


        if (higher > data["Max"]) {
            higher = data["Max"];
        } if (lower < data["Min"]) {
            lower = data["Min"];
        }


        data["Rng"] = lower + "-" + higher;

        data["ACC"] = Math.round(made.reduce((x, y) => x + y) / (made.reduce((x, y) => x + y) + match.map(x => x[1]).reduce((x, y) => x + y)) * 100) + "%";
    }
}


function fillNewestHaveData(data, key, pre, pit) {
    fillNewestData(data[key], "Array", pre, pit);
    if (!data[key]["Array"]) {
        delete data[key];
    } else {
        var counter = 0;
        var haveList = JSON.parse(data[key]["Array"]);
        Object.keys(data[key]).filter(newKey => newKey != "Array" && key != "INFO").map(newKey => {
            if (!haveList[counter++]) {
                delete data[key][newKey];
            } else {
                data[key][newKey] = true;
            }
        });


        delete data[key]["Array"];


        if (Object.keys(data[key]).length == 1) {
            delete data[key];
        } else {
            data[key]["INFO"] = [[0], "HAVE"];
        }
    }

    checkEmpty(data, key);
}


function fillPercentData(data, key, matches, equivObj) {
    if (matches.length != 0) {
        var occurencesObj = getOccurencesObj(matches, Object.keys(equivObj));
       
        Object.keys(occurencesObj).forEach(x => {
            let percent = occurencesObj[x] / matches.length;
           
            if (percent == 0) {
                delete data[key][equivObj[x]];
            } else {
                data[key][equivObj[x]] = Math.round(percent * 100) + "%";
            }
        });
    } else {
        delete data[key];
    }
}

function fillNewestData(data, key, pre, pit) {
    if (pit != "none" && pit) {
        data[key] = pit;
    } else if (pre != "none" && pre) {
        data[key] = pre;
    } else {
        delete data[key];
    }
}

function getOccurencesObj(data, keys) {
    var occurencesObj = {};


    keys.forEach(key => {
        occurencesObj[key] = 0;
    });


    data.forEach(point => {
        occurencesObj[point]++;
    });


    return occurencesObj;
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

function checkEmpty(data, key) {
    delete data[key];
    if (Object.keys(data).map(header => header != "INFO").length == 0) {
        // delete data[key];
    }
}

async function allianceSearch(divId) {
    var teams = [];

    for (var i = 1; i <= 3; i++) {
        teams.push(document.getElementById("allianceTeam" + i + "SearchInput").value);
    }

    var dataTableDiv = document.getElementById(divId);

    dataTableDiv.innerHTML = "";
    hideElement("allianceSearchNotifDiv");
    document.getElementById("allianceTeam1SearchInput").style.border = "1px solid #c5c7c5";
    document.getElementById("allianceTeam2SearchInput").style.border = "1px solid #c5c7c5";
    document.getElementById("allianceTeam3SearchInput").style.border = "1px solid #c5c7c5";
    changeNotif("allianceSearchNotifText", "");

    if (teams.includes("")) {
        var counter = 0;

        for (var i = 1; i <= 3; i++) {
            if (teams[i - 1] == "") {
                document.getElementById("allianceTeam" + i + "SearchInput").style.border = "1px solid #eb776e";
                counter++;
            }
        }

        if (counter == 1) {
            changeNotif("allianceSearchNotifText", "Please Enter a Team!");
        } else {
            changeNotif("allianceSearchNotifText", "Please Enter Teams!");
        }

        showElement("allianceSearchNotifDiv");
        return;
    }

    var nonNumbers = teams.map(team => isNaN(parseInt(team)) && team != "");
    if (nonNumbers.includes(true)) {
        var counter = 0;

        for (var i = 1; i <= 3; i++) {
            if (nonNumbers[i - 1]) {
                document.getElementById("allianceTeam" + i + "SearchInput").style.border = "1px solid #eb776e";
                counter++;
            }
        }

        if (counter == 1) {
            changeNotif("allianceSearchNotifText", "That is Not a Number!");
        } else {
            changeNotif("allianceSearchNotifText", "Those Aren't Numbers!");
        }

        showElement("allianceSearchNotifDiv");
        return;
    }

    var passed = [];
    var multiples = false;
    var multiple;
    teams.forEach(x => {
        if (!passed.includes(x)) {
            passed.push(x);
        } else {
            multiples = true;
            multiple = x;
        }
    });
    if (multiples) {
        for (var i = 1; i <= 3; i++) {
            if (teams[i - 1] == multiple) {
                document.getElementById("allianceTeam" + i + "SearchInput").style.border = "1px solid #eb776e";
            }
        }
        
        changeNotif("allianceSearchNotifText", "You Have Multiples!");
        showElement("allianceSearchNotifDiv");
        return;
    }

    var counter = 0
    for (var i = 0; i < 3; i++) {
        if (document.getElementById("allianceTeam" + (i + 1) + "SearchInput").style.border != "1px solid #eb776e") {
            var orderNum = curOrderNum++;
            await getTBAData("team/frc" + teams[i], orderNum);
            var data = getOrder(orderNum);
    
            if (data["Error"]) {
                if (counter >= 1) {
                    changeNotif("allianceSearchNotifText", "Those Aren't Valid Teams!");
                } else {
                    changeNotif("allianceSearchNotifText", "That is Not a Valid Team!");
                }
    
                showElement("allianceSearchNotifDiv");
                document.getElementById("allianceTeam" + (i + 1) + "SearchInput").style.border = "1px solid #eb776e";
                counter++;
            }
        }
    }

    if (counter > 0) {
        return;
    }

    var orderNum = curOrderNum++;
    await getSheetData(config.preGSID, sheetName, orderNum);
    var preForms = getOrder(orderNum).filter(x => teams.includes(x[0]) || x[0] == "TEAM NUM");

    orderNum = curOrderNum++;
    await getSheetData(config.pitGSID, sheetName, orderNum);
    var pitForms = getOrder(orderNum).filter(x => teams.includes(x[0]) || x[0] == "TEAM NUM");

    var tempName = sheetName;
    if (isFinals) {
        tempName += "FINALS"
    }

    orderNum = curOrderNum++;
    await getSheetData(config.matchGSID, tempName, orderNum);
    var matchForms = getOrder(orderNum).filter(x => teams.includes(x[1]) || x[1] == "Team Number");

    if (preForms.slice(1) + pitForms.slice(1) + matchForms.slice(1) == "") {
        for (var i = 1; i <= 3; i++) {
            document.getElementById("allianceTeam" + i + "SearchInput").style.border = "1px solid #eb776e";
        }

        changeNotif("allianceSearchNotifText", "No Data!");

        showElement("allianceSearchNotifDiv");
        return;
    }
    
    teams.forEach(team => {
        var noMatch = matchForms.filter(x => x[1] == team).length == 0;
        var noPrePit = pitForms.filter(x => x[0] == team).length == 0 && preForms.filter(x => x[0] == team).length == 0;
        let teamData;
        var clone;
        var allNones = true;

        matchForms.filter(x => x[1] == team).forEach(submission => {
            if (submission[3] != "none") {
                allNones = false;
            }
        });


        if ((noMatch && noPrePit) || allNones) {
            teamData = {
                "General": {},
                "Auto": {},
                "Teleop": {},
            };
            clone = dataTableWithMatchFormat;
        } else if (noMatch) {
            teamData = compilePrePitTeamData(team, preForms, pitForms);
            clone = dataTableWithoutMatchFormat;
        } else {
            teamData = compileAllTeamData(team, matchForms, preForms, pitForms);
            clone = dataTableWithMatchFormat;
        }

        clone["General"]["Team"] = team;
        teamData["General"]["Team"] = team;
        teams[teams.indexOf(team)] = [teamData, clone];
    });

    var headerOrder = fillMissingHeaders(teams.map(x => x[0]));
    teams.forEach(team => {
        teams[teams.indexOf(team)][1] = getHeightObj(teams[teams.indexOf(team)][0], teams[teams.indexOf(team)][0]);
    });

    var maxHeights = compareHeights(teams.map(x => x[1]));

    var table = document.createElement("table");
    var tr = document.createElement("tr");
    let headerTd = document.createElement("td");
    headerTd.appendChild(buildHeaderTable(maxHeights, blueDataTableColors));
    tr.appendChild(headerTd);

    teams.map(x => x[0]).forEach(team => {
        let td = document.createElement("td");

        td.appendChild(buildTeamTable(team, blueDataTableColors, maxHeights, headerOrder));
        tr.appendChild(td);
    });

    table.appendChild(tr);
    dataTableDiv.appendChild(table);
}

function compareHeights(heights) {
    var maxHeights = {};

    Object.keys(heights[0]).forEach(section => {
        maxHeights[section] = {};

        Object.keys(heights[0][section]).forEach(header => {
            
            var headerHeights = [heights[0][section][header], heights[1][section][header], heights[2][section][header]].map(x => x.replaceAll("px", "").replace("SPACER", ""));

            if (headerHeights.map(x => x.includes("|")).includes(true)) {
                var min = Math.max(...headerHeights.map(x => x.split("|").length));
                var maxNestedHeights = [];

                var heightsArrays = headerHeights.map(x => {
                    let heights = [...x.split("|")];
                    
                    while (heights.length < min) {
                        heights.push(0);
                    }

                    return heights.map(y => parseInt(y));
                });

                for (var i = 0; i < min; i++) {
                    maxNestedHeights.push(Math.max(...heightsArrays.map(x => x[i])));
                }

                maxHeights[section][header] = maxNestedHeights.join("px|") + "px";
            } else {
                maxHeights[section][header] = Math.max(...headerHeights) + "px";
            }
        });
    });

    return maxHeights;
}

function fillMissingHeaders(objs) {
    var allHeaders = {
        "General": [],
        "Auto": [],
        "Teleop": [],
    }
    var groups = ["General", "Auto", "Teleop"];

    objs.forEach(obj => {
        let counter = 0;

        Object.keys(obj).forEach(key => {
            Object.keys(obj[key]).forEach(header => {
                if (Object.values(obj[key][header]).filter(x => typeof x == "object").length > 1) {
                    Object.keys(obj[key][header]).forEach(x => {
                        let id = header + "|" + x;
                        
                        if (!allHeaders[groups[counter]].includes(id)) {
                            allHeaders[groups[counter]].push(id);
                        }
                    });
                } else if (!allHeaders[groups[counter]].includes(header)) {
                    allHeaders[groups[counter]].push(header);
                }
            });

            counter++;
        });
    });

    objs.forEach(obj => {
        var counter = 0;

        Object.values(obj).forEach(section => {
            allHeaders[groups[counter]].forEach(header => {
                if (header.includes("|")) {
                    var mainHeader = header.split("|")[0];
                    var subHeader = header.split("|")[1];

                    if (!section[mainHeader]) {
                        section[mainHeader] = [];
                    }
                    
                    if (!section[mainHeader][subHeader]) {
                        section[mainHeader][subHeader] = "ND";
                    }
                } else if (!Object.keys(section).includes(header) || Object.keys(section[header]).length == 1) {
                    section[header] = "ND";
                }
            });

            counter++;
        });
    });

    Object.keys(allHeaders).forEach(section => {
        allHeaders[section] = allHeaders[section].filter(x => !x.includes("INFO"));
    });

    return allHeaders;
}

async function fillMatchDropdown() {
    var dropdown = document.getElementById("matchSearchMatchNumDropdown");
    var oN = curOrderNum++;
    await getTBAData("team/frc1622/event/" + JSON.parse(localStorage.getItem("closestComp")).key + "/matches", oN);
    var teamMatches = getOrder(oN);

    var counter = 0;
    teamMatches.map(x => x.match_number).sort((x, y) => x - y).forEach(match => {
        let option = document.createElement("option");

        if (teamMatches[counter++].actual_time != null) {
            option.style.color = "#787878";
        }

        option.value = match;
        option.innerHTML = "#" + match;
        dropdown.appendChild(option);
    });
}

function test() {
    // document.getElementById("teamSearchInput").setAttribute("value", "1622");
    // eval(document.getElementById("teamSearchSearchButton").getAttribute("onclick"));

    document.getElementById("allianceTeam1SearchInput").setAttribute("value", "1622");
    document.getElementById("allianceTeam2SearchInput").setAttribute("value", "7130");
    document.getElementById("allianceTeam3SearchInput").setAttribute("value", "8006");

    eval(document.getElementById("allianceSearchSearchButton").getAttribute("onclick"));
}

test();
fillMatchDropdown();