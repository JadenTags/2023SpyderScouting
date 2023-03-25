const dataTableWithMatchFormat = {
    "General": {
        "Team": "",
        "Name": "",
        "DIM": {
            "Length": "",
            "Width": "",
            "INFO": [[1, 1], "NORMAL"]
        },
        "DB Type": "",
        "Auto-Gen": "",
        "Bal Type": "",
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
        "Dock": {
            "SCS": "",
            "Fail": "",
            "INFO": [[2], "%"]
        },
        "Engaged%": {
            "ENG": "",
            "Not": "",
            "INFO": [[2], "%"]
        },
        "AVG Score": ""
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
        "Score": {
            "Max": "",
            "Min": "",
            "Avg": "",
            "INFO": [[2, 1], "NORMAL"]
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

const redDataTableColors = {
    "singleCellHeader": "#f6a2a2",
    "singleCellData": "#fad2d2",
    "singleCellDataAlt": "#ffe3e3",
    "sectionHeader": "#c4c4c4",
    "spacer": "#ed8585",
};
var lockedDivs = {
    "mainDiv": "locked",
    "teamSearchDiv": "unlocked",
    "allianceSearchDiv": "unlocked",
    "matchSearchDiv": "unlocked",
    "formsDisplayDiv": "unlocked",
};
var nameHeight = "45px";
const marginTopSpacing = "2px";
const cellHeight = 30;
const tableWidth = 24;
const displayTableWidth = 16;
const percentageBlueColorOrder = ["#7286D3", "#8EA7E9", "#E4EDF1", "#FF9F9F", "#FD8A8A"];
const percentageRedColorOrder = ["#FD8A8A", "#FF9F9F", "#E4EDF1", "#8EA7E9", "#7286D3"];
var formsDisplayMatchForms = [];
var matchNums = [];
var formsDisplayMatchIndex = 0;
var matchFormHeight;

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
    await getSheetData(sheetID, "PRE", orderNum);
    var preForms = getOrder(orderNum);

    orderNum = curOrderNum++;
    await getSheetData(sheetID, localStorage.getItem("displayData"), orderNum);
    var matchForms = getOrder(orderNum);
    var noMatch = matchForms.filter(x => x[0] == team).length == 0;
    var noPre = preForms.filter(x => x[0] == team).length == 0;
    
    var teamData;
    if (noMatch && noPre) {
        showElement("teamSearchNotifDiv");
        document.getElementById("teamSearchInput").style.border = "1px solid #eb776e";
        changeNotif("teamSearchNotifText", "This Team Has No Data!");

        return;
    } else {
        teamData = compileAllTeamData(team, matchForms, preForms);
    } 
    // else if (noMatch) {
    //     teamData = compilePrePitTeamData(team, preForms);
    //     clone = dataTableWithoutMatchFormat;
    // }

    var heightObj = getHeightObj(teamData, teamData);
    var titleTable = buildHeaderTable(heightObj, blueDataTableColors);
    var data = buildTeamTable(teamData, blueDataTableColors, heightObj, null, percentageBlueColorOrder, tableWidth);
    
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

async function fillTeamNameCell(teamNum) {
    var orderNum = curOrderNum++;
    await getTBAData("team/frc" + teamNum, orderNum);
    var data = getOrder(orderNum);

    document.getElementById("teamNameCell" + teamNum).innerHTML = data["nickname"];
}

function buildTeamTable(teamData, color, heightsObj, headerOrder, percentColor, tabWidth) {
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
                
                if (heightsObj[section][header].includes("SPACER")) {
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

                if (header == "Name") {
                    miniData.id = "teamNameCell" + teamData["General"]["Team"];
                    miniData.style.fontSize = "3vw";
                    miniData.style.height = nameHeight;
                    fillTeamNameCell(teamData["General"]["Team"]);
                }
                
                miniData.style.width = tabWidth + "vw";
                miniTable.style.marginTop = marginTopSpacing;

                miniRow.appendChild(miniData);
                miniTable.appendChild(miniRow);
                headerData.appendChild(miniTable);
            } else {
                if (headerInfo["INFO"] != "ND") {
                    headerInfo["INFO"][0] = headerInfo["INFO"][0].filter(x => x != 0);
                }

                let type = headerInfo["INFO"][1];

                let miniTable = document.createElement("table");
                if (type == "NORMAL") {
                    let ogLength = headerInfo["INFO"][0].length;
                    let copy = structuredClone(headerInfo);

                    while (headerInfo["INFO"][0].length > 0) {
                        let miniMiniTable = createNormalMiniTable(headerInfo, color, (parseInt(heightsObj[section][header].replace("px", ""))) / ogLength / 2 + "px", tabWidth);

                        if (headerInfo["INFO"][0].length == ogLength - 1) {
                            miniMiniTable.style.marginTop = marginTopSpacing;
                        }

                        miniTable.appendChild(miniMiniTable);
                    }

                    teamData[section][header] = copy;
                } else if (type == "HAVE") {
                    var height = Math.round(parseInt(heightsObj[section][header].replace("px", "")) / Object.values(headerInfo).filter(x => x && typeof x == "boolean").length);
                    var counter = 0;
                    var headers = Object.keys(headerInfo).filter(x => x != "INFO" && headerInfo[x]);
                    headers.forEach(header => {
                        var miniInfoRow = document.createElement("tr");
                        let miniInfoData = document.createElement("td");
                
                        miniInfoData.setAttribute("class", "miniInfoData");
                        miniInfoData.style.height = height + "px";
                        miniInfoData.style.width = tabWidth + "vw";
                
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

                    var widths = headers.map(x => Math.round(convertPercent(headerInfo[x]) * tabWidth));
                    while (sum(widths) < tabWidth) {
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
                        miniInfoHeader.style.width = tabWidth / 2 + "vw";

                        percentageRow.appendChild(miniInfoHeader);

                        let miniInfoPercentage = document.createElement("td");
                        miniInfoPercentage.appendChild(document.createTextNode(headerInfo[innerHeader]));
                        
                        miniInfoPercentage.setAttribute("class", "miniInfoPercent");
                        miniInfoPercentage.style.width = tabWidth / 2 + "vw";
                        miniInfoPercentage.style.backgroundColor = percentColor[counter];

                        percentageRow.appendChild(miniInfoPercentage)

                        percentageTable.appendChild(percentageRow);
                        
                        let miniBarPercentage = document.createElement("td");
                        miniBarPercentage.setAttribute("class", "miniInfoHeader");
                        miniBarPercentage.style.backgroundColor = percentColor[counter];
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
                                innerHeaderData.style.width = tabWidth + "vw";

                                innerHeaderRow.appendChild(innerHeaderData);
                            }

                            innerHeaderTable.style.marginTop = marginTopSpacing;

                            innerHeaderTable.appendChild(innerHeaderRow);
                            innerHeaderOuterData.appendChild(innerHeaderTable);
                            miniTable.appendChild(innerHeaderOuterData);
        
                            var widths = headers.map(x => Math.round(convertPercent(headerInfo[innerHeader][x]) * tabWidth));
                            
                            var widthsCounter = 0;
                            while (sum(widths) < tabWidth) {
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
                                miniInfoHeader.style.width = tabWidth / 2 + "vw";

                                if (nd) {
                                    miniInfoHeader.style.height = height + cellHeight * 2 + 1 + "px";
                                    miniInfoHeader.style.width = tabWidth + "vw";
                                    miniInfoText = document.createTextNode('ND');
                                    miniInfoHeader.setAttribute("class", "miniInfoData");
                                    miniInfoHeader.style.backgroundColor = color["singleCellData"];
                                }
                                miniInfoHeader.appendChild(miniInfoText);
        
                                percentageRow.appendChild(miniInfoHeader);
        
                                let miniInfoPercentage = document.createElement("td");
                                miniInfoPercentage.appendChild(document.createTextNode(headerInfo[innerHeader][innerInnerHeader]));
                                miniInfoPercentage.setAttribute("class", "miniInfoPercent");
                                miniInfoPercentage.style.width = tabWidth / 2 + "vw";
                                miniInfoPercentage.style.backgroundColor = percentColor[counter];

                                if (!nd) {
                                    percentageRow.appendChild(miniInfoPercentage);
                                }
        
        
                                percentageTable.appendChild(percentageRow);
                                
                                let miniBarPercentage = document.createElement("td");

                                if (!nd) {
                                    miniBarPercentage.setAttribute("class", "miniInfoHeader");
                                    miniBarPercentage.style.backgroundColor = percentColor[counter];
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
                    
                    miniData.style.width = tabWidth + "vw";
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

    table.style.width = tabWidth + "vw";
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
                    } if (header == "Name") {
                        heightsObj[section][header] = nameHeight;
                    } if (header == "EXTRA NOTES") {
                        heightsObj[section][header] = "400px";
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
    if (percent) {
        return parseInt(percent.replace("%", "")) / 100;
    }
}

function createNormalMiniTable(data, color, height, tabWidth) {
    var miniTable = document.createElement("table");

    var headers = Object.keys(data).filter(x => x != "INFO").slice(0, data["INFO"][0].shift());
    var miniHeaderRow = document.createElement("tr");
    headers.forEach(header => {
        let miniHeaderData = document.createElement("td");

        miniHeaderData.setAttribute("class", "miniInfoHeader");
        miniHeaderData.style.backgroundColor = color["singleCellHeader"];
        miniHeaderData.style.height = height;
        miniHeaderData.style.width = tabWidth / headers.length + "vw";

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
function compileAllTeamData(team, match, pre) {
    pre = pre.slice(1).filter(x => x[0] == team);
    pre = pre[pre.length - 1];
    match = match.slice(1).filter(x => x[0] == team);

    match.forEach(submission => {
        let counter = 0;

        while (submission.length < 16) {
            if (!submission[counter++]) {
                submission.push("");
            }
        }
    });

    var data = structuredClone(dataTableWithMatchFormat);

    ///////////////////////////GENERAL
    //TEAM
    data["General"]["Team"] = team;

    if (pre) {
        let counter = 0;
        while (pre.length < 16) {
            if (!pre[counter++]) {
                pre.push("");
            }
        }

        //DIMENSIONS
        var dims = JSON.parse(pre[1]);
        fillData(data["General"]["DIM"], "Length", dims[0], 0);
        fillData(data["General"]["DIM"], "Width", dims[1], 1);
        checkEmpty(data["General"], "DIM");
    
        //DB INFO
        fillData(data["General"], "DB Type", pre[2], null);
    
        //AUTO GENERATING AUTO
        fillData(data["General"], "Auto-Gen", pre[5], null);

        //BAL TYPE
        fillData(data["General"], "Bal Type", pre[6], null);
    
        //CONES REACHES
        var cones = JSON.parse(pre[7]);
        var coneHeaders = Object.keys(data["General"]["Cones"]);
        for (var i = 0; i < cones.length; i++) {
            data["General"]["Cones"][coneHeaders[i]] = cones[i];
        }

        if (Object.values(cones).filter(x => x && typeof x == "boolean").length == 0) {
            delete data["General"]["Cones"];
        }
    
        //CUBES REACHES
        var cubes = JSON.parse(pre[8]);
        var cubeHeaders = Object.keys(data["General"]["Cubes"]);
        for (var i = 0; i < cubes.length; i++) {
            data["General"]["Cubes"][cubeHeaders[i]] = cubes[i];
        }

        if (Object.values(cubes).filter(x => x && typeof x == "boolean").length == 0) {
            delete data["General"]["Cubes"];
        }
        
        //PREFERRED PLAYSTYLE
        fillData(data["General"], "Pref PS", pre[9], null);
        
        //PREFERRED GP
        fillData(data["General"], "Pref GP", pre[10], null);
    } else {
        ["DIM", "DB Type", "Auto-Gen", "Bal Type", "Cones", "Cubes", "Pref PS"].forEach(preData => {
            delete data["General"][preData];
        });
    } if (match.length != 0) {
        //FAILURE%
        fillPercentData(data["General"], "Failure%", match.map(x => x[13]), {
            "Mech Fail": "MF",
            "Comm Fail": "CF",
            "No Show": "NS",
            "": "N"
        });
    
        //MATCHES
        data["General"]["Matches"] = match.length;
        
        ///////////////////////////AUTO
        //MOBILITY%
        fillPercentData(data["Auto"], "Mobility%", match.map(x => x[2]).filter(x => x != ""), {
            "TRUE": "Got",
            "FALSE": "Not"
        });
    
        //CONES
        fillScoreData(data["Auto"]["CONE Top Row"], match.filter(x => x[7] != "").map(x => JSON.parse(x[3])[0])); 
        fillScoreData(data["Auto"]["CONE Mid Row"], match.filter(x => x[7] != "").map(x => JSON.parse(x[3])[1]));
        fillScoreData(data["Auto"]["CONE Bot Row"], match.filter(x => x[7] != "").map(x => JSON.parse(x[3])[2]));
    
        //CUBES
        fillScoreData(data["Auto"]["CUBE Top Row"], match.filter(x => x[7] != "").map(x => JSON.parse(x[4])[0])); 
        fillScoreData(data["Auto"]["CUBE Mid Row"], match.filter(x => x[7] != "").map(x => JSON.parse(x[4])[1]));
        fillScoreData(data["Auto"]["CUBE Bot Row"], match.filter(x => x[7] != "").map(x => JSON.parse(x[4])[2]));
         
        //DOCK
        fillPercentData(data["Auto"], "Dock", match.map(x => x[5]).filter(x => x != ""), {
            "Docked": "SCS",
            "Failed Dock": "Fail"
        });
    
        //Engaged%
        fillPercentData(data["Auto"], "Engaged%", match.map(x => x[6]).filter(x => x != ""), {
            "TRUE": "ENG",
            "FALSE": "Not"
        });
    
        //SCORE
        var score = 0;
        ["CONE", "CUBE"].forEach(type => {
            ["Top", "Mid", "Bot"].forEach(row => {
                let scored = data["Auto"][type + " " + row + " Row"];
                if (!isNaN(scored["Always"])) {
                    scored = scored["Always"];
                } else {
                    scored = scored["Avg"]
                }
    
                if (row == "Top") {
                    scored *= 6;
                } else if (row == "Mid") {
                    scored *= 4;
                } else {
                    scored *= 3;
                }
    
                score += scored;
            });
        });
    
        if (data["Auto"]["Mobility%"]) {
            if (data["Auto"]["Mobility%"]["Got"]) {
                if (convertPercent(data["Auto"]["Mobility%"]["Got"]) >= 0.5) {
                    score += 3;
                }
            }
        }
        
        data["Auto"]["AVG Score"] = Math.round(score * 10) / 10;
        if (isNaN(data["Auto"]["AVG Score"])) {
            delete data["Auto"]["AVG Score"];
        }
        
        ///////////////////////////Teleop
        //CONES
        fillScoreData(data["Teleop"]["CONE Top Row"], match.filter(x => x[7] != "").map(x => JSON.parse(x[7])[0])); 
        fillScoreData(data["Teleop"]["CONE Mid Row"], match.filter(x => x[7] != "").map(x => JSON.parse(x[7])[1]));
        fillScoreData(data["Teleop"]["CONE Bot Row"], match.filter(x => x[7] != "").map(x => JSON.parse(x[7])[2]));
    
        //CUBES
        fillScoreData(data["Teleop"]["CUBE Top Row"], match.filter(x => x[7] != "").map(x => JSON.parse(x[8])[0])); 
        fillScoreData(data["Teleop"]["CUBE Mid Row"], match.filter(x => x[7] != "").map(x => JSON.parse(x[8])[1]));
        fillScoreData(data["Teleop"]["CUBE Bot Row"], match.filter(x => x[7] != "").map(x => JSON.parse(x[8])[2]));
    
        //CARGO AVG
        var cAve = 0;
        ["CONE", "CUBE"].forEach(type => {
            ["Top", "Mid", "Bot"].forEach(row => {
                let scored = data["Teleop"][type + " " + row + " Row"];
                if (!isNaN(scored["Always"])) {
                    scored = scored["Always"];
                } else {
                    scored = scored["Avg"];
                }
                cAve += scored;
            });
        });
        
        data["Teleop"]["Cargo AVG"] = Math.round(cAve * 10) / 10;
        if (isNaN(data["Teleop"]["Cargo AVG"])) {
            delete data["Teleop"]["Cargo AVG"];
        }
    
        //ALMOST TIPPED
        
        if (match.filter(x => x[9] != "").map(x => JSON.parse(x[9]).map(y => parseInt(y))).map(x => x[0]).length == 0) {
            delete data["Teleop"]["Almost Tipped"];
        } else {
            var tipData = match.filter(x => x[9] != "").map(x => JSON.parse(x[9]).map(y => parseInt(y)));
            var total = sum(tipData.map(x => x[0])) + sum(tipData.map(x => x[1]));
            data["Teleop"]["Almost Tipped"]["Type%"]["Not"] = Math.round(sum(tipData.map(x => x[0])) / total) + "%";
            if (isNaN(data["Teleop"]["Almost Tipped"]["Type%"]["Not"])) {
                delete data["Teleop"]["Almost Tipped"]["Type%"];
            } else {
                data["Teleop"]["Almost Tipped"]["Type%"]["CS"] = Math.round(sum(tipData.map(x => x[0])) / total) + "%"; 
            }
    
            var temp = tipData.map(x => {
                if (sum(x) > 0) {
                    return "t";
                } else {
                    return "f";
                }
            });
    
            fillPercentData(data["Teleop"]["Almost Tipped"], "Tip%", temp, {
                "t": "Tip",
                "f": "Not",
            });
        }
    
        //PLAYSTYLE
        fillPercentData(data["Teleop"], "Playstyle%", match.map(x => x[10]).filter(x => x != ""), {
            "Offensive": "Off",
            "Defensive": "Def",
            "Hybrid": "Hyb",
        });
    
        //SUCCESS%
        fillPercentData(data["Teleop"]["Endgame"], "Success%", match.map(x => x[11]).filter(x => ["Failed Dock", "Docked"].includes(x)), {
            "Docked": "SCS",
            "Failed Dock": "Fail"
        });
    
        //ATTEMPT%
        temp = match.map(x => x[11]).map(x => {
            if (x == "Failed Dock") {
                return "Docked";
            } else {
                return x;
            }
        });
    
        fillPercentData(data["Teleop"]["Endgame"], "ATPT%", temp, {
            "Docked": "Docked",
            "Parked": "Parked",
            "": "NA",
        });
    
        //ENGAGED
        fillPercentData(data["Teleop"], "Engaged%", match.map(x => x[12]).filter(x => x != ""), {
            "TRUE": "ENG",
            "FALSE": "Not",
        });
    
        //REMOVE
        delete data["Teleop"]["Penalties"];
    
        //SCORE
        score = 0;
        var minScore = 0;
        var maxScore = 0;
        ["CONE", "CUBE"].forEach(type => {
            ["Top", "Mid", "Bot"].forEach(row => {
                let scored = data["Teleop"][type + " " + row + " Row"];
                let minScored;
                let maxScored;
                
                if (scored["Always"] >= 0) {
                    minScored = scored["Always"];
                    maxScored = scored["Always"];
                    scored = scored["Always"];
                } else {
                    minScored = scored["Min"];
                    maxScored = scored["Max"];
                    scored = scored["Avg"];
                }
                
                if (row == "Top") {
                    scored *= 5;
                    minScored *= 5;
                    maxScored *= 5;
                } else if (row == "Mid") {
                    scored *= 3;
                    minScored *= 3;
                    maxScored *= 3;
                } else {
                    scored *= 2;
                    minScored *= 2;
                    maxScored *= 2;
                }
    
                score += scored;
                minScore += minScored;
                maxScore += maxScored;
            });
        });
    
        var endgame = getMaxPercent(data["Teleop"]["Endgame"]["ATPT%"]);
    
        if (endgame == "Docked") {
            score += 6;
    
            if (getMaxPercent(data["Teleop"]["Engaged%"]) == "ENG") {
                score += 4;
            }
        } else if (endgame == "Parked") {
            score += 2;
        }
    
        data["Teleop"]["Score"]["Avg"] = Math.round(score * 10) / 10;
        
        if (convertPercent(data["Teleop"]["Endgame"]["ATPT%"]["Docked"]) > 0) {
            maxScore += 6;
    
            if (data["Teleop"]["Engaged%"] && data["Teleop"]["Engaged%"]["ENG"]) {
                if (convertPercent(data["Teleop"]["Engaged%"]["ENG"]) > 0) {
                    maxScore += 4;
                }
            }
        } else if (convertPercent(data["Teleop"]["Endgame"]["ATPT%"]["Parked"]) > 0) {
            score += 2;
        }
        
        data["Teleop"]["Score"]["Max"] = Math.round(maxScore * 10) / 10;
    
        if (data["Teleop"]["Endgame"]["ATPT%"]["Parked"] != "0%") {
            minScore += 2;
        } else if (data["Teleop"]["Endgame"]["ATPT%"]["Engaged"] != "0%") {
            minScore += 6;
    
            if (data["Teleop"]["Engaged%"]["ENG"] != "0%") {
                minScore += 4;
            }
        }
        
        data["Teleop"]["Score"]["Min"] = Math.round(minScore * 10) / 10;
        if (isNaN(data["Teleop"]["Score"]["Min"])) {
            delete data["Teleop"]["Score"];
        }
    } else {
        delete data["Auto"];
        delete data["Teleop"];
        delete data["General"]["Failure%"];
        delete data["General"]["Matches"];
    }
    
    return data;
}

function getMaxPercent(obj) {
    if (obj) {
        return Object.keys(obj).filter(x => x != "INFO").map(x => [x, convertPercent(obj[x])]).sort((x, y) => y[1] - x[1])[0][0];
    }
}

//CHANGE YEARLY
function fillScoreData(data, match) {
    if (match.length == 0) {
        Object.keys(data).filter(x => x != "INFO").forEach(x => {
            delete data[x];
        });

        data["NO"] = "DATA";
        data["INFO"] = [[1], "NORMAL"];

        return;
    }

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

function fillData(data, key, pre, infoIndex) {
    if (pre != "" && typeof pre != typeof null) {
        data[key] = pre;
    } else {
        delete data[key];
        
        if (infoIndex) {
            data["INFO"][0][infoIndex]--;
        }
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
    if (Object.keys(data).map(header => header != "INFO").length == 0) {
        delete data[key];
    }
}

async function allianceSearch(teams, divId, notifSelector, colors, percentColor) {
    if (!teams) {
        var teams = [];
    
        for (var i = 1; i <= 3; i++) {
            teams.push(document.getElementById("allianceTeam" + i + "SearchInput").value);
        }
    }

    var dataTableDiv = document.getElementById(divId);

    dataTableDiv.innerHTML = "";
    hideElement(notifSelector + "SearchNotifDiv");
    document.getElementById("allianceTeam1SearchInput").style.border = "1px solid #c5c7c5";
    document.getElementById("allianceTeam2SearchInput").style.border = "1px solid #c5c7c5";
    document.getElementById("allianceTeam3SearchInput").style.border = "1px solid #c5c7c5";
    changeNotif("allianceSearchNotifText", "");

    if (divId == "alliance") {
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
    }

    var orderNum = curOrderNum++;
    await getSheetData(sheetID, "PRE", orderNum);
    var preForms = getOrder(orderNum);

    orderNum = curOrderNum++;
    await getSheetData(sheetID, localStorage.getItem("displayData"), orderNum);
    var matchForms = getOrder(orderNum);
    if (matchForms.filter(x => teams.includes(x[0])) == "" && preForms.filter(x => teams.includes(x[0])) == "") {
        if (notifSelector == "alliance") {
            for (var i = 1; i <= 3; i++) {
                document.getElementById("allianceTeam" + i + "SearchInput").style.border = "1px solid #eb776e";
            }
        }

        changeNotif("allianceSearchNotifText", "No Data!");

        showElement(notifSelector + "SearchNotifDiv");
        return;
    }
    
    teams.forEach(team => {
        var noMatch = matchForms.filter(x => x[0] == team).length == 0;
        var noPrePit = preForms.filter(x => x[0] == team).length == 0;
        let teamData;
        var allNones = true;

        matchForms.filter(x => x[1] == team).forEach(submission => {
            if (submission[3] != "none") {
                allNones = false;
            }
        });

        if (noMatch && noPrePit) { //  && noPrePit || allNones TODO: FIX THE COMPILE PRE PIT
            teamData = {
                "General": {},
            };
        } else {
            teamData = compileAllTeamData(team, matchForms, preForms);
        }

        teamData["General"]["Team"] = team;
        teams[teams.indexOf(team)] = [teamData, teamData];
    });

    var headerOrder = fillMissingHeaders(teams.map(x => x[0]));
    
    teams.forEach(team => {
        teams[teams.indexOf(team)][1] = getHeightObj(teams[teams.indexOf(team)][0], teams[teams.indexOf(team)][0]);
    });

    var maxHeights = compareHeights(teams.map(x => x[1]));

    var table = document.createElement("table");
    var tr = document.createElement("tr");
    let headerTd = document.createElement("td");
    headerTd.appendChild(buildHeaderTable(maxHeights, colors));
    tr.appendChild(headerTd);

    teams.map(x => x[0]).forEach(team => {
        let td = document.createElement("td");

        td.appendChild(buildTeamTable(team, colors, maxHeights, headerOrder, percentColor, tableWidth));
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
            var headerHeights = [...heights.map(x => x[section][header])].map(x => x.replaceAll("px", "").replace("SPACER", ""));
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
                if (heights[0][section][header].includes("SPACER")) {
                    maxHeights[section][header] = Math.max(...headerHeights) + "pxSPACER";
                } else {
                    maxHeights[section][header] = Math.max(...headerHeights) + "px";
                }
            }
        });
    });

    return maxHeights;
}

function fillMissingHeaders(objs) {
    var allHeaders = {};

    objs.forEach(obj => {
        Object.keys(obj).forEach(group => {
            allHeaders[group] = [];
        });
    })

    var groups = Object.keys(allHeaders);

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

        groups.forEach(group => {
            if (!obj[group]) {
                obj[group] = {};
            }
        })

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
    await waitGlobalData();

    var dropdown = document.getElementById("matchSearchMatchNumDropdown");
    var oN = curOrderNum++;
    await getTBAData("team/frc1622/event/" + JSON.parse(localStorage.getItem("closestComp")).key + "/matches", oN);
    var teamMatches = getOrder(oN);

    if (teamMatches.length == 0) {
        var matchSearchButton = document.getElementById("matchSearchDisplayButton");

        if (matchSearchButton.getAttribute("class").includes("selectedButton")) {
            eval(matchSearchButton.getAttribute("onclick"));
        }

        matchSearchButton.remove();
        document.getElementById("matchSearchSubNavDivider").remove();
        document.getElementById("matchSearchDisplayDiv").remove();
    }

    if (stage == "FINALS") {
        teamMatches = teamMatches.filter(x => x.comp_level == "sf");
    } else {
        teamMatches = teamMatches.filter(x => x.comp_level != "sf");
    }

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

async function matchSearch() {
    await waitGlobalData();

    if (document.getElementById("matchSearchMatchNumDropdown").childNodes.length > 0) {
        var matchNum = document.getElementById("matchSearchMatchNumDropdown").value;
    
        var oN = curOrderNum++;
        await getTBAData("team/frc1622/event/" + JSON.parse(localStorage.getItem("closestComp")).key + "/matches", oN);
        var match;
        
        if (stage == "FINALS") {
            match = getOrder(oN).filter(x => x.match_number == parseInt(matchNum) && x.comp_level == "sf")[0];
        } else {
            match = getOrder(oN).filter(x => x.match_number == parseInt(matchNum))[0];
        }

        if (match.alliances.blue.team_keys.map(x => x.replace("frc", "")).includes("1622")) {
            await allianceSearch(match.alliances.blue.team_keys.map(x => x.replace("frc", "")), "alliedDiv", "match", blueDataTableColors, percentageBlueColorOrder);
            await allianceSearch(match.alliances.red.team_keys.map(x => x.replace("frc", "")), "opposedDiv", "match", redDataTableColors, percentageRedColorOrder);
        } else {
            await allianceSearch(match.alliances.red.team_keys.map(x => x.replace("frc", "")), "alliedDiv", "match", redDataTableColors, percentageRedColorOrder);
            await allianceSearch(match.alliances.blue.team_keys.map(x => x.replace("frc", "")), "opposedDiv", "match", blueDataTableColors, percentageBlueColorOrder);
        }
    }
}

async function formsSearch() {
    var team = document.getElementById("formsDisplayInput").value;
    
    document.getElementById("formsDisplayPreTableDiv").innerHTML = "<br>";
    document.getElementById("formsDisplayMatchTableDiv").innerHTML = "<br>";
    hideElement("formsDisplayMatchNotifDiv");
    document.getElementById("matchFormCounter").innerHTML = 1;
    hideElement("formsDisplayPreNotifDiv");  

    if (team == "") {
        showElement("formsDisplayNotifDiv");
        changeNotif("formsDisplayNotifText", "No Team Entered!");
        return;
    } if (isNaN(parseInt(team))) {
        showElement("formsDisplayNotifDiv");
        changeNotif("formsDisplayNotifText", "Not a Number!");
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
    document.getElementById("formsDisplayTeamName").innerHTML = data.nickname;
    //TEAM NUMBER
    document.getElementById("formsDisplayTeamNum").innerHTML = "[" + team + "]";
    
    var oN = curOrderNum++;
    await getSheetData(sheetID, "PRE", oN);
    var preForms = getOrder(oN).filter(x => x[0] == "TEAM NUM" || x[0] == team);
    var oN = curOrderNum++;
    await getSheetData(sheetID,  localStorage.getItem("displayData"), oN);
    var matchForms = getOrder(oN).filter(x => x[0] == "TEAM NUM" || x[0] == team);

    if (preForms.length == 1 && matchForms.length == 1) {
        showElement("formsDisplayNotifDiv");
        changeNotif("formsDisplayNotifText", "No Data!");
        return;
    }
    
    hideElement("formsDisplayNotifDiv");

    if (preForms.length > 1) {
        var preHeaders = preForms[0].slice(1).map(x => {
            if (x == "DIMENSIONS") {
                return "DIMS";
            } else {
                return x;
            }
        });

        var preForms = preForms[preForms.length - 1].slice(1);
        var preObj = {"PRE": {}};

        while (preForms.length != preHeaders.length) {
            preForms.push("");
        }

        document.getElementById("formsDisplayPreTableDiv").innerHTML = "<br>";

        for (var i = 0; i < preHeaders.length; i++) {
            if (i == 8) {
                preObj["PRE"]["CONE"] = "SPACER";
            } else if (i == 9) {
                preObj["PRE"]["CUBE"] = "SPACER";
            }

            preObj["PRE"][preHeaders[i]] = preForms[i];
        }

        //DIMENSIONS
        var dims = JSON.parse(preForms[0]);
        preObj["PRE"]["DIMS"] = {
            "Length": dims[0],
            "Width": dims[1],
            "INFO": [[1, 1], "NORMAL"]
        }

        //CONE REACHES
        var cones = JSON.parse(preForms[7]);
        preObj["PRE"]["CONE REACHES"] = {
            "HIGH": cones[0],
            "MID": cones[1],
            "LOW": cones[2],
            "INFO": [[1, 1, 1], "NORMAL"]
        }

        //CUBE REACHES
        var cubes = JSON.parse(preForms[8]);
        preObj["PRE"]["CUBE REACHES"] = {
            "HIGH": cubes[0],
            "MID": cubes[1],
            "LOW": cubes[2],
            "INFO": [[1, 1, 1], "NORMAL"]
        }

        var heightObj = getHeightObj(preObj, preObj);
        var table = document.createElement("table");
        var tr = document.createElement("tr");
        var headerTable = document.createElement("td");
        var dataTable = document.createElement("td");

        table.style.margin = "auto";

        headerTable.appendChild(buildHeaderTable(heightObj, blueDataTableColors));
        dataTable.appendChild(buildTeamTable(preObj, blueDataTableColors, heightObj, null, percentageBlueColorOrder, 50));
        tr.appendChild(headerTable);
        tr.appendChild(dataTable);
        table.appendChild(tr);
        document.getElementById("formsDisplayPreTableDiv").appendChild(table);
    } else {
        showElement("formsDisplayPreNotifDiv"); 
    }
    
    if (matchForms.length > 1) {
        formsDisplayMatchForms = [];
        matchNums = [];

        hideElement("formsDisplayMatchNotifDiv");

        var matchHeaders = matchForms[0].map(x => {
            if (x == "LEFT COMMUNITY") {
                return "MOBILE";
            } else if (x == "PLAYSTYLE") {
                return "PS";
            } else if (x == "ENDGAME") {
                return "END";
            } else {
                return x;
            }
        });

        var heights = [];
        
        matchForms.slice(1).forEach(form => {
            var matchObj = {"AUTO": {}, "TELEOP": {}};
    
            while (form.length != matchHeaders.length) {
                form.push("");
            }

            //MATCH NUMS
            matchNums.push(form[1]);

            //MOBILE
            matchObj["AUTO"]["MOBILE"] = form[2];

            //AUTO CONES
            matchObj["AUTO"]["CONES"] = "SPACER";
            if (form[3] != "") {
                var autoCones = JSON.parse(form[3]);

                matchObj["AUTO"]["CONE TOP"] = {
                    "Made": autoCones[0][0],
                    "Miss": autoCones[0][1],
                    "INFO": [[2], "NORMAL"]
                }
                
                matchObj["AUTO"]["CONE MID"] = {
                    "Made": autoCones[1][0],
                    "Miss": autoCones[1][1],
                    "INFO": [[2], "NORMAL"]
                }
                
                matchObj["AUTO"]["CONE LOW"] = {
                    "Made": autoCones[2][0],
                    "Miss": autoCones[2][1],
                    "INFO": [[2], "NORMAL"]
                }
            }

            //AUTO CUBES
            matchObj["AUTO"]["CUBES"] = "SPACER";
            if (form[4] != "") {
                var autoCubes = JSON.parse(form[4]);

                matchObj["AUTO"]["CUBE TOP"] = {
                    "Made": autoCubes[0][0],
                    "Miss": autoCubes[0][1],
                    "INFO": [[2], "NORMAL"]
                }
                
                matchObj["AUTO"]["CUBE MID"] = {
                    "Made": autoCubes[1][0],
                    "Miss": autoCubes[1][1],
                    "INFO": [[2], "NORMAL"]
                }
                
                matchObj["AUTO"]["CUBE LOW"] = {
                    "Made": autoCubes[2][0],
                    "Miss": autoCubes[2][1],
                    "INFO": [[2], "NORMAL"]
                }
            }

            //DOCKED
            matchObj["AUTO"]["DOCKED"] = form[5];

            //ENG
            matchObj["AUTO"]["ENGAGED"] = form[6];

            //TELEOP CONES
            matchObj["TELEOP"]["CONES"] = "SPACER";
            if (form[7] != "") {
                var teleCones = JSON.parse(form[7]);

                matchObj["TELEOP"]["CONE TOP"] = {
                    "Made": teleCones[0][0],
                    "Miss": teleCones[0][1],
                    "INFO": [[2], "NORMAL"]
                }
                
                matchObj["TELEOP"]["CONE MID"] = {
                    "Made": teleCones[1][0],
                    "Miss": teleCones[1][1],
                    "INFO": [[2], "NORMAL"]
                }
                
                matchObj["TELEOP"]["CONE LOW"] = {
                    "Made": teleCones[2][0],
                    "Miss": teleCones[2][1],
                    "INFO": [[2], "NORMAL"]
                }
            }

            //TELEOP CONES
            matchObj["TELEOP"]["CUBES"] = "SPACER";
            if (form[8] != "") {
                var teleCubes = JSON.parse(form[8]);

                matchObj["TELEOP"]["CUBE TOP"] = {
                    "Made": teleCubes[0][0],
                    "Miss": teleCubes[0][1],
                    "INFO": [[2], "NORMAL"]
                }
                
                matchObj["TELEOP"]["CUBE MID"] = {
                    "Made": teleCubes[1][0],
                    "Miss": teleCubes[1][1],
                    "INFO": [[2], "NORMAL"]
                }
                
                matchObj["TELEOP"]["CUBE LOW"] = {
                    "Made": teleCubes[2][0],
                    "Miss": teleCubes[2][1],
                    "INFO": [[2], "NORMAL"]
                }
            }

            //TIP
            if (form[9] != "") {
                var tipData = JSON.parse(form[9]);

                matchObj["TELEOP"]["TIP"] = {
                    "CS": tipData[1],
                    "NON-CS": tipData[0],
                    "INFO": [[1, 1], "NORMAL"]
                }
            }

            //PLAYSTYLE
            matchObj["TELEOP"]["PLAYSTYLE"] = form[10];

            //ENDGAME
            matchObj["TELEOP"]["ENDGAME"] = form[11];

            //TELEOP ENGAGED
            matchObj["TELEOP"]["ENGAGED"] = form[12];

            //FAILURES
            matchObj["TELEOP"]["FAILURE"] = form[13];

            //EXTRA NOTES
            matchObj["TELEOP"]["EXTRA NOTES"] = form[14];

            //USER
            matchObj["TELEOP"]["USER"] = form[15];

            formsDisplayMatchForms.push(matchObj);
        });

        formsDisplayMatchForms = formsDisplayMatchForms.sort((x, y) => parseInt(x["MATCH NUM"]) - parseInt(y["MATCH NUM"]));
        var order = fillMissingHeaders(formsDisplayMatchForms);
        formsDisplayMatchForms.forEach(x => Object.keys(x).forEach(y => Object.keys(x[y]).forEach(z => x[y][z] = replaceND(x[y][z]))));
        matchFormHeight = compareHeights(formsDisplayMatchForms.map(x => getHeightObj(x, order)));
        formsDisplayMatchForms = formsDisplayMatchForms.map(x => buildTeamTable(x, blueDataTableColors, matchFormHeight, order, percentageBlueColorOrder, 50));

        displayMatchForm(0);
    } else {
        showElement("formsDisplayMatchNotifDiv");
        document.getElementById("matchFormCounter").innerHTML = 1;  
    }
}

function replaceND(data) {
    if (data == "ND") {
        return "";
    } else {
        return data;
    }
}

function displayMatchForm(form) { //TODO: FIX MOBILE BUG
    document.getElementById("matchFormCounter").innerHTML = matchNums[form];

    if (!document.getElementById("formDisplaysMatchOuterTable")) {
        var table = document.createElement("table");
        var tr = document.createElement("tr");
        var headerTable = document.createElement("td");
        var dataTable = document.createElement("td");

        table.id = "formDisplaysMatchOuterTable";
        table.style.margin = "auto";
        dataTable.id = "formDisplaysMatchTable";

        headerTable.appendChild(buildHeaderTable(matchFormHeight, blueDataTableColors));
        dataTable.appendChild(formsDisplayMatchForms[form]);
        tr.appendChild(headerTable);
        tr.appendChild(dataTable);
        table.appendChild(tr);
        document.getElementById("formsDisplayMatchTableDiv").appendChild(table);
    } else {
        var dataTable = document.createElement("td");
        dataTable.appendChild(formsDisplayMatchForms[form]);

        var momma = document.getElementById("formDisplaysMatchOuterTable").childNodes[0];
        momma.replaceChild(dataTable, momma.childNodes[1]);
    }
}

function changeMatchFormDisplay(isAdding) {
    if (document.getElementById("formDisplaysMatchOuterTable")) {
        if (isAdding) {
            formsDisplayMatchIndex = (formsDisplayMatchIndex + 1) % formsDisplayMatchForms.length;
        } else if (formsDisplayMatchIndex != 0) {
            formsDisplayMatchIndex--;
        } else {
            formsDisplayMatchIndex = formsDisplayMatchForms.length - 1;
        }

        displayMatchForm(formsDisplayMatchIndex);
    }
}

async function test() {
    // document.getElementById("teamSearchInput").setAttribute("value", "5816");
    // eval(document.getElementById("teamSearchSearchButton").getAttribute("onclick"));

    // document.getElementById("allianceTeam1SearchInput").setAttribute("value", "1622");
    // document.getElementById("allianceTeam2SearchInput").setAttribute("value", "79");
    // document.getElementById("allianceTeam3SearchInput").setAttribute("value", "8006");
    // eval(document.getElementById("allianceSearchSearchButton").getAttribute("onclick"));

    
    // eval(document.getElementById("matchSearchSearchButton").getAttribute("onclick"));
    
    // document.getElementById("formsDisplayInput").setAttribute("value", "599");
    // eval(document.getElementById("formsDisplaySearchButton").getAttribute("onclick"));
}

// test();
fillMatchDropdown();