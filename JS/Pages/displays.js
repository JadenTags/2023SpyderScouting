const dataTableWithMatchFormat = {
    "General": {
        "DIMS": "",
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
            "ATPT%": {
                "ATPT": "",
                "NA": "",
                "INFO": [[2], "%"]
            },
            "INFO": [[1, 1], "NESTED"]
        },
        "Engaged%": {
            "Eng": "",
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
            "ATPT%": {
                "Docked": "",
                "Parked": "",
                "NA": "",
                "INFO": [[2], "%"]
            },
            "INFO": [[1, 1], "NESTED"]
        },
        "Engaged%": {
            "Eng": "",
            "NE": "",
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

    orderNum = curOrderNum++;
    await getSheetData(config.matchGSID, sheetName, orderNum);
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
    console.log(headerOrder, teamData)
    var table = document.createElement("table");
    var outSideLecounterTwo = 0;
    var outSideLecounter = 0;
    var lastNested;
    var lastNDNested;

    Object.keys(teamData).forEach(section => {
        var outCounter = 0;
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
            console.log(header, headerInfo)
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

                                if (leCounter != 0 || (subHeader && outSideLecounter != 0)) {
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
                    console.log(outSideLecounterTwo)

                    let miniTable = document.createElement("table");
                    let miniRow = document.createElement("tr");
                    let miniData = document.createElement("td");

                    miniData.setAttribute("class", "miniInfoData");
                    miniData.style.backgroundColor = color["singleCellData"];
                    miniData.appendChild(document.createTextNode("ND"));
                    console.log(heightsObj[section][header].split("|")[outSideLecounterTwo])
                    var height = parseInt(heightsObj[section][header].split("|")[outSideLecounterTwo++].replace("px", "")) - (cellHeight * 2 + 1 + parseInt(marginTopSpacing.replace("px", "")));

                    if (outSideLecounterTwo != 0) {
                        height += parseInt(marginTopSpacing.replace("px", ""));
                    }

                    console.log(height)
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
        miniSectionData.style.width = displayTableWidth / 2 + "vw";
        miniSectionData.style.height = sectionHeight + "px";
        miniSectionTable.style.marginRight = marginTopSpacing;
        miniSectionTable.style.marginTop = marginTopSpacing;

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

                innerTable.style.marginTop = marginTopSpacing;

                innerRow.appendChild(innerData);
                innerTable.appendChild(innerRow);
                headerData.appendChild(innerTable);
            }

            miniHeaderRow.appendChild(headerData);
            miniHeaderTable.appendChild(miniHeaderRow);
        });
        miniHeaderData.appendChild(miniHeaderTable);
        sectionRow.appendChild(miniHeaderData);

        headerTable.appendChild(sectionRow);
    });

    headerTable.style.backgroundColor = "black";
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
                    heightsObj[section][header] = Math.round(Object.keys(headerInfo).filter(x => x != "INFO").length * cellHeight / Object.values(headerInfo).filter(x => x && typeof x == "boolean").length) * Object.values(headerInfo).filter(x => x && typeof x == "boolean").length + "px";
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

    var headers = Object.keys(data).slice(0, data["INFO"][0].shift());
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

//CHANGE YEARLY
function compileAllTeamData(team, match, pre, pit) {
    var data = JSON.parse(JSON.stringify(dataTableWithMatchFormat));
    pre = pre.slice(1);
    pit = pit.slice(1);
    match = match.slice(1);
    
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
        data["General"]["DIMS"] = JSON.parse(pre[1]).join("\" x ") + "\"";
        if (JSON.parse(pre[1]).filter(x => x != null).length == 0) {
            delete data["General"]["DIMS"];
        }

        //DB INFO
        fillNewestData(data["General"]["DB Info"], "Type", pre[2], "none");
        fillNewestData(data["General"]["DB Info"], "Motor", pre[3], "none");
        checkEmpty(data["General"], "DB Info");

        if (pit) {
            //OTF AUTO
            fillNewestData(data["General"]["OTF Auto"], "Can", pre[6], pit[10]);
            fillNewestData(data["General"]["OTF Auto"], "Duration", pre[7], pit[11]);
            fillNewestData(data["General"]["OTF Auto"], "Reliability", pre[8], pit[12]);
            checkEmpty(data["General"], "OTF Auto");

            //PLAYSTYLES
            fillNewestHaveData(data["General"], "Playstyles", pre[20], pit[19]);
        } else {
            //OTF AUTO
            fillNewestData(data["General"]["OTF Auto"], "Can", pre[6], "none");
            fillNewestData(data["General"]["OTF Auto"], "Duration", pre[7], "none");
            fillNewestData(data["General"]["OTF Auto"], "Reliability", pre[8], "none");
            
            //PLAYSTYLES
            fillNewestHaveData(data["General"], "Playstyles", pre[20], "none");
        }
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
    data["Autonomous"]["Docked"]["ATPT%"]["ATPT"] = getPercent(dockSuccess["Docked"] + dockSuccess["Failed Dock"], dockSuccessArray.length);
    data["Autonomous"]["Docked"]["ATPT%"]["NA"] = getPercent(dockSuccess["none"], dockSuccessArray.length);
    
    dockSuccessArray = match.map(x => x[5]).filter(x => x != "none");
    dockSuccess = getFreqObj(dockSuccessArray, ["Docked", "Failed Dock"]);
    data["Autonomous"]["Docked"]["Success%"]["Success"] = getPercent(dockSuccess["Docked"], dockSuccessArray.length);
    data["Autonomous"]["Docked"]["Success%"]["Fail"] = getPercent(dockSuccess["Failed Dock"], dockSuccessArray.length);
    if (sum(Object.values(dockSuccess)) == 0) {
        delete data["Autonomous"]["Docked"]["Success%"];
        data["Autonomous"]["Docked"]["INFO"] = [[1], "NESTED"];
    }

    //ENGAGED
    var engagedArray = match.map(x => x[6]).filter(x => x != "none");
    var engaged = getFreqObj(engagedArray, ["TRUE", "FALSE"]);
    data["Autonomous"]["Engaged%"]["Eng"] = getPercent(engaged["TRUE"], engagedArray.length);
    data["Autonomous"]["Engaged%"]["NE"] = getPercent(engaged["FALSE"], engagedArray.length);
    if (sum(Object.values(engaged)) == 0) {
        delete data["Autonomous"]["Engaged%"];
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
    if (Object.values(data["Teleop"]["Playstyle%"]).filter(x => x.includes("%") && x != "0%" && typeof x == "string").length == 0) {
        delete data["Teleop"]["Playstyle%"];
    }

    //ENDGAME
    var teleDocksArray = match.map(x => x[12]).filter(x => x != "none" && ["Failed Dock", "Docked"].includes(x));
    var teleDocks = getFreqObj(teleDocksArray, ["Docked", "Failed Dock"]);
    data["Teleop"]["Endgame"]["Success%"]["Success"] = getPercent(teleDocks["Docked"], teleDocksArray.length);
    data["Teleop"]["Endgame"]["Success%"]["Fail"] = getPercent(teleDocks["Failed Dock"], teleDocksArray.length);
    if (sum(Object.values(teleDocks)) == 0) {
        delete data["Teleop"]["Endgame"]["Success%"];
        data["Teleop"]["Endgame"]["INFO"] = [[1], "NESTED"];
    }

    var teleEndgameArray = match.map(x => x[12]).filter(x => x != "Failed Dock");
    var teleEndgame = getFreqObj(teleEndgameArray, ["Docked", "Parked", "none"]);
    data["Teleop"]["Endgame"]["ATPT%"]["Docked"] = getPercent(teleEndgame["Docked"], teleEndgameArray.length);
    data["Teleop"]["Endgame"]["ATPT%"]["Parked"] = getPercent(teleEndgame["Parked"], teleEndgameArray.length);
    data["Teleop"]["Endgame"]["ATPT%"]["NA"] = getPercent(teleEndgame["none"], teleEndgameArray.length);

    //ENGAGED
    engagedArray = match.map(x => x[13]).filter(x => x != "none");
    engaged = getFreqObj(engagedArray, ["TRUE", "FALSE"]);
    data["Teleop"]["Engaged%"]["Eng"] = getPercent(engaged["TRUE"], engagedArray.length);
    data["Teleop"]["Engaged%"]["NE"] = getPercent(engaged["FALSE"], engagedArray.length);
    if (Object.values(data["Teleop"]["Engaged%"]).filter(x => x.includes("%") && x != "0%" && typeof x == "string").length == 0) {
        delete data["Teleop"]["Engaged%"];
    }

    //PENALTIES
    storeScoringStats(data["Teleop"]["Penalties"], match.map(x => x[15]).filter(x => x != "none"));
    delete data["Teleop"]["Penalties"]["ACC"];
    delete data["Teleop"]["Penalties"]["Min"];
    delete data["Teleop"]["Penalties"]["Rng"];
    if (Object.keys(data["Teleop"]["Penalties"]).length <= 1) {
        delete data["Teleop"]["Penalties"];
    }

    //CARDS
    var cards = getFreqObj(match.map(x => x[16]).filter(x => x != "none"), ["Red", "Yellow"]);
    data["Teleop"]["Cards"]["R"] = cards["Red"] + Math.floor(cards["Yellow"] / 2);
    data["Teleop"]["Cards"]["Y"] = cards["Yellow"] % 2 == 1;

    //AGGRESSIVE
    var aggressiveArray = match.map(x => x[17]).filter(x => x != "none");
    var aggressive = getFreqObj(aggressiveArray, ["TRUE", "FALSE"]);
    data["Teleop"]["Aggro%"]["Yes"] = getPercent(aggressive["TRUE"], aggressiveArray.length);
    data["Teleop"]["Aggro%"]["No"] = getPercent(aggressive["FALSE"], aggressiveArray.length);

    return data;
}

//CHANGE YEARLY
function compilePrePitTeamData(team, pre, pit) {
    var data = JSON.parse(JSON.stringify(dataTableWithoutMatchFormat));
    pre = pre.slice(1);
    pit = pit.slice(1);
    
    if (pre) {
        pre = pre.filter(x => x[0] == team);
        pre = pre[pre.length - 1];
    } if (pit) {
        pit = pit.filter(x => x[0] == team);
        pit = pit[pit.length - 1];

        if (!pit) {
            pit = ["none", "none", "none", "none", "none", "none", "none", "none", "none", "none", "none", "none", "none", "none", "none", "none", "none", "none", "none", "none", "none", "none", "none", "none", "none", "none", "none", "none", "none", "none", "none"];
        }
    } 

    ////////////////////////////////////////////////////////GENERAL
    //DIMENSIONS
    data["General"]["DIMS"] = JSON.parse(pre[1]).join("\" x ") + "\"";
    if (JSON.parse(pre[1]).filter(x => x != null).length == 0) {
        delete data["General"]["DIMS"];
    }

    //DB INFO
    fillNewestData(data["General"]["DB Info"], "Type", pre[2], "none");
    fillNewestData(data["General"]["DB Info"], "Motor", pre[3], "none");
    checkEmpty(data["General"], "DB Info");

    //GOM
    fillNewestSingleData(data["General"], "GOM", pre[4], "none");

    //OTF AUTO
    fillNewestData(data["General"]["OTF Auto"], "Can", pre[6], pit[10]);
    fillNewestData(data["General"]["OTF Auto"], "Duration", pre[7], pit[11]);
    fillNewestData(data["General"]["OTF Auto"], "Reliability", pre[8], pit[12]);
    checkEmpty(data["General"], "OTF Auto");

    ////////////////////////////////////////////////////////AUTONOMOUS
    //SET POS
    fillNewestSingleData(data["Auto"], "Set Pos", pre[13], pit[17]);

    //SETUP
    fillNewestSingleData(data["Auto"], "Setup", pre[11], pit[15]);
    if (data["Auto"]["Setup"]) {
        data["Auto"]["Setup"] = JSON.parse(data["Auto"]["Setup"]).map(x => x.substring(0, 2)).join("|");
    }

    //DOCK
    fillNewestSingleData(data["Auto"], "Dock", pre[9], pit[13]);

    if (data["Auto"]["Dock"] == "TRUE") {
        //ENGAGE
        fillNewestSingleData(data["Auto"], "Engage", pre[10], pit[14]);
    } else {
        delete data["Auto"]["Engage"];
    }

    ////////////////////////////////////////////////////////TELEOP
    //CYCLE
    fillNewestSingleData(data["Teleop"], "Cycle", pre[14], pit[18]);

    //CONE
    fillNewestData(data["Teleop"]["Cone"], "array", pre[15], pit[4]);
    if (data["Teleop"]["Cone"]["array"] != "") {
        let coneHeaders = Object.keys(data["Teleop"]["Cone"]).filter(x => x != "INFO" && x != "array");
        let coneReaches = JSON.parse(data["Teleop"]["Cone"]["array"]);
        let counter = 0;

        coneHeaders.forEach(header => {
            if (!coneReaches[counter++]) {
                delete data["Teleop"]["Cone"][header];
            }
        });

        delete data["Teleop"]["Cone"]["array"];
    } else {
        delete data["Teleop"]["Cone"];
    } if (Object.keys(data["Teleop"]["Cone"]).length == 1) {
        delete data["Teleop"]["Cone"];
    }
    
    //CUBE
    fillNewestData(data["Teleop"]["Cube"], "array", pre[16], pit[5]);
    if (data["Teleop"]["Cube"]["array"] != "") {
        let coneHeaders = Object.keys(data["Teleop"]["Cube"]).filter(x => x != "INFO" && x != "array");
        let coneReaches = JSON.parse(data["Teleop"]["Cube"]["array"]);
        let counter = 0;

        coneHeaders.forEach(header => {
            if (!coneReaches[counter++]) {
                delete data["Teleop"]["Cube"][header];
            }
        });

        delete data["Teleop"]["Cube"]["array"];
    } else {
        delete data["Teleop"]["Cube"];
    } if (Object.keys(data["Teleop"]["Cube"]).length == 1) {
        delete data["Teleop"]["Cube"];
    }

    //PREFERRED PLAYSTYLE
    fillNewestSingleData(data["Teleop"], "Pref PS", pre[17], pit[21]);

    //ABLE PLAYSTYLE
    fillNewestHaveData(data["Teleop"], "Able PS", pre[20], pit[19])

    //DOCK
    fillNewestSingleData(data["Teleop"], "Dock", pre[21], pit[22]);

    //DOCK TIME
    fillNewestSingleData(data["Teleop"], "Dock Time", pre[23], pit[2]);

    //ENGAGE
    fillNewestSingleData(data["Teleop"], "Engage", pre[22], pit[23]);

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
    data["Avg"] = Math.round(made.reduce((x, y) => x + y) / made.length * 10) / 10;

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

function fillNewestSingleData(obj, key, pre, pit) {
    if (pit != "none") {
        obj[key] = pit;
    } else if (pre != "none") {
        obj[key] = pre;
    } else {
        delete obj[key];
    }
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
    if (Object.keys(obj[key]).length == 1) {
        delete obj[key];
    }
}

async function allianceSearch() {
    var teams = [];

    for (var i = 1; i <= 3; i++) {
        teams.push(document.getElementById("allianceTeam" + i + "SearchInput").value);
    }

    var dataTableDiv = document.getElementById("allianceSearchDataTableDiv");

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

    orderNum = curOrderNum++;
    await getSheetData(config.matchGSID, sheetName, orderNum);
    var matchForms = getOrder(orderNum).filter(x => teams.includes(x[1]) || x[1] == "Team Number");

    if (preForms + pitForms + matchForms == "") {
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
        var teamData;
        var clone;
        if (noMatch && noPrePit) {
            teamData = {
                "General": {},
                "Autonomous": {},
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
        "Autonomous": [],
        "Teleop": [],
    }
    var groups = ["General", "Autonomous", "Teleop"];

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
                } else if (!Object.keys(section).includes(header)) {
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

function test() {
    document.getElementById("allianceTeam1SearchInput").setAttribute("value", "1");
    document.getElementById("allianceTeam2SearchInput").setAttribute("value", "10");
    document.getElementById("allianceTeam3SearchInput").setAttribute("value", "24");

    eval(document.getElementById("allianceSearchSearchButton").getAttribute("onclick"));
}

test();