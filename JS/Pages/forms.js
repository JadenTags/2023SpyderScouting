const formDivs = {};
const elementsCycle = ["either", "cube", "cone"];
var lockedDivs = {
    "mainDiv": "locked",
    "preDiv": "unlocked",
    "matchDiv": "unlocked",
};
var submittedForms = {};
var curDiv = "mainDiv";
var notifColor = "#eb776e";
var borderColor = "#c5c7c5";

async function fillTeamDropdown(selector) {
    var dropdown = document.getElementById(selector + "TeamNumDropdown");
    var orderNum = curOrderNum++;
    await getSheetData(sheetID, "ASSIGNMENTS", orderNum);
    var teams = getOrder(orderNum);

    if (teams != "none") {
        teams = teams[0];
    }

    if (teams != "none" && !dropdown && document.getElementById(selector + "NoTeamsDiv").style.display != "none") {
        unlockDiv(lockedDivs, curDiv, selector + "Div")
        document.getElementById(selector + "NoTeamsDiv").style.display = "none";
        await refreshForm(selector);
        dropdown = document.getElementById(selector + "TeamNumDropdown");
    }

    if (teams != "none" && dropdown && document.getElementById(selector + "NoTeamsDiv").style.display == "none") {
        if (dropdown.childNodes.length == 0) {
            dropdown.innerHTML = "";
            await teams.forEach(team => {
                let option = document.createElement("option");
                option.value = team;
                option.innerHTML = "#" + team;
                dropdown.appendChild(option);
            });
        } else {
            var childNodes = [];
            var toRemove = [];

            dropdown.childNodes.forEach(option => {
                let num = option.value.toString();
                
                if (!teams.includes(num)) {
                    toRemove.push(option);
                } else {
                    childNodes.push(num);
                }
            });

            toRemove.forEach(option => option.remove());

            teams.filter(x => !childNodes.includes(x) && x != "").forEach(team => {
                if (!preTeams.includes(team)) {
                    let option = document.createElement("option");
                    option.value = team;
                    option.innerHTML = "#" + team;
                    dropdown.appendChild(option);
                }
            });
        }

        if (dropdown.childNodes.length == 0) {
            lockDiv(lockedDivs, curDiv, selector + "Div");
            document.getElementById(selector + "FormDiv").remove();
            document.getElementById(selector + "NoTeamsDiv").style.display = "inline";
        }
           
        changeTeamName(selector);
    } else if (document.getElementById(selector + "FormDiv")) {
        lockDiv(lockedDivs, curDiv, selector + "Div");
        document.getElementById(selector + "FormDiv").remove();
        document.getElementById(selector + "NoTeamsDiv").style.display = "inline";
    }
}

function submitForm(selector) {
    var form = [];
    var end = false;
    
    if (selector == "pre") {
        //TEAM NUM
        form.push(document.getElementById("preTeamNumDropdown").value);

        //DIMENSIONS
        var unit = document.getElementById("dimensionsUnitDropdown").value;
        var dimensions = [];
        ["length", "width"].forEach(dimension => {
            let element = document.getElementById(dimension + "Input");

            if (isNaN(parseInt(element.value)) && element.value != "") {
                dimensions.push("");

                element.style.border = "1px solid " + notifColor;
                showElement("dimensionsNotifText");
                end = true
            } else {
                element.style.border = "1px solid " + borderColor;
                var value = parseInt(element.value);

                if (unit == "Centimeters") {
                    value = value / 2.54;
                }
                
                dimensions.push(Math.round(value * 10) / 10);
            }
        });

        if (!dimensions.includes("")) {
            hideElement("dimensionsNotifText");
        }

        form.push(JSON.stringify(dimensions));

        //DB TYPE
        var dbType = document.getElementById("drivebaseDropdown").value;
        if (dbType != "Other") {
            form.push(dbType);
        } else {
            form.push(document.getElementById("drivebaseTypeInput").value);
        }
        
        //DB NOTES
        form.push(document.getElementById("drivebaseNotes").value);
        
        //NO AUTO
        form.push(document.getElementById("noAutoButton").value == true);


        if (!form[form.length - 1]) {
            //AUTO GENERATING AUTO
            form.push(document.getElementById("autoGenButton").value == true);

            //CLIMB TYPE
            if (document.getElementById("autoClimbButton").value) {
                form.push(getGroupButtonValue("autoClimbTypeButton"));
            } else {
                form.push("");
            }
        } else {
            form.push("");
            form.push("");
        }

        //REACHES
        var cones = [];
        var cubes = [];
        ["High", "Mid", "Bot"].forEach(row => {
            ["cone", "cube"].forEach(type => {
                if (document.getElementById(type + row + "RowButton").value) {
                    if (type == "cone") {
                        cones.push(true)
                    } else {
                        cubes.push(true);
                    }
                } else {
                    if (type == "cone") {
                        cones.push(false)
                    } else {
                        cubes.push(false);
                    }
                }
            });
        });
        form.push(JSON.stringify(cones));
        form.push(JSON.stringify(cubes));

        //PREFERRED GAME PIECE
        form.push(getGroupButtonValue("preferGPButton"));

        //CAN PICKUP TIPPED CONES
        form.push(document.getElementById("canPickupTippedConesButton").value == true);

        //PREFERRED PLAYSTYLE
        form.push(getGroupButtonValue("preferButton"));

        //ROBOT PIC
        if (!document.getElementById("robotPic").files[0]) {
            document.getElementById("roboPicNotifDiv").style.display = "initial";
            end = true;
        } else {
            uploadFile(document.getElementById("robotPic").files[0], form[0] + ".jpg", roboPicsFolderId);
            document.getElementById("roboPicNotifDiv").style.display = "none";
        }

        //EXTRA NOTES
        form.push(document.getElementById("preExtraNotes").value);

        //USER
        form.push(localStorage.getItem("user"));

        if (end) {
            return true;
        }
        appendData(sheetID, "PRE", form);
        lockDiv(lockedDivs, curDiv, selector + "Div");
    } else if (selector == "matchInPerson") {
        //TEAM NUMBER
        var teamNum = getGroupButtonValue("inPersonAllianceButton");
        console.log(document.getElementById("matchFormButtonSelectionDiv").style.display)
        if (["none"].indexOf(document.getElementById("matchFormButtonSelectionDiv").style.display) == -1) {
            if (!teamNum) {
                showElement("inPersonTeamNumNotifDiv");
                changeNotif("inPersonTeamNumNotif", "You Did Not Select a Team!");
                end = true;
            } else if (isNaN(parseInt(teamNum))) {
                showElement("inPersonTeamNumNotifDiv");
                changeNotif("inPersonTeamNumNotif", "You Did Not Select a Valid Team!");
                end = true;
            } else {
                hideElement("inPersonTeamNumNotifDiv");
                changeNotif("inPersonTeamNumNotif", "");
            }
            form.push(teamNum);
        } else {
            teamNum = document.getElementById("inPersonTeamNumInput").value;

            if (teamNum == "") {
                showElement("inPersonTeamNumNotifDiv");
                changeNotif("inPersonTeamNumNotif", "You Did Not Input a Team!");
                end = true;
            } else if (isNaN(parseInt(teamNum))) {
                showElement("inPersonTeamNumNotifDiv");
                changeNotif("inPersonTeamNumNotif", "You Did Not Input a Valid Team!");
                end = true;
            } else {
                hideElement("inPersonTeamNumNotifDiv");
                changeNotif("inPersonTeamNumNotif", "");
            }
            form.push(teamNum);
        }

        //MATCH NUMBER
        form.push(document.getElementById("inPersonMatchNumInput").value);

        if (form[form.length - 1] == "") {
            changeNotif("inPersonMatchNotif", "You Did Not Input a Match!");
            end = true;
        } else if (isNaN(parseInt(form[form.length - 1]))) {
            changeNotif("inPersonMatchNotif", "You Did Not Input a Valid Match!");
            end = true;
        } else {
            changeNotif("inPersonMatchNotif", "");
        }

        //LEFT COMMUNITY
        form.push(document.getElementById("inPersonLeftCommunityButton").value == true);

        //SCORES
        var cones = [];
        var cubes = [];

        ["Cones", "Cubes"].forEach(type => {
            ["Top", "Mid", "Bot"].forEach(row => {
                let score = [];

                ["Made", "Miss"].forEach(scoreType => {
                    score.push(document.getElementById("inPersonAuto" + type + row + "Row" + scoreType + "Counter").innerHTML);
                });

                if (type == "Cones") {
                    cones.push(score);
                } else {
                    cubes.push(score);
                }
            }); 
        });
        form.push(JSON.stringify(cones));
        form.push(JSON.stringify(cubes));

       //ENDING
        form.push(document.getElementById("inPersonAutoDockedButton").value == true);

        //ENGAGED
        if (form[form.length - 1]) {
            form.push(document.getElementById("inPersonAutoEngagedButton").value == true);
        }  else {
            form.push("");
        }
        
        //TELE SCORES
        cones = [];
        cubes = [];

        ["Cones", "Cubes"].forEach(type => {
            ["Top", "Mid", "Bot"].forEach(row => {
                let score = [];

                ["Made", "Miss"].forEach(scoreType => {
                    score.push(document.getElementById("inPersonTele" + type + row + "Row" + scoreType + "Counter").innerHTML);
                });

                if (type == "Cones") {
                    cones.push(score);
                } else {
                    cubes.push(score);
                }
            }); 
        });
        form.push(JSON.stringify(cones));
        form.push(JSON.stringify(cubes));

        //ALMOST TIPPED
        var almostTipped = [];
        ["NonCharge", "Charge"].forEach(tipType => {
            almostTipped.push(document.getElementById("inPerson" + tipType + "TipCounter").innerHTML)
        });
        form.push(JSON.stringify(almostTipped));

        //PLAYSTYLE
        form.push(getGroupButtonValue("inPersonTelePlaystyleButton"));
        var playstyle = form[form.length - 1];

        //FAILURES
        form.push(getGroupButtonValue("matchInPersonTagButton"));
        var failure = form[form.length - 1];

        //EXTRA NOTES
        form.push(document.getElementById("matchInPersonExtraNotes").value);

        //USER
        form.push(localStorage.getItem("user"));

        if (failure != "" || playstyle == "Defensive") {
            let counter = 0;
            form = form.map(x => {
                if (![0, 1, 2, 3, 4, 5, 6, 10, 11, 12, 13].includes(counter++)) {
                    return "";
                } else {
                    return x;
                }
            });
        }

        if (end) {
            return true;
        }

        appendData(sheetID, stage, form);
        lockDiv(lockedDivs, curDiv, "matchDiv");
    }
}

async function secureSubmit(selector) {
    var button = document.getElementById(selector + "SubmitButton");
    
    if (button.value != 1) {
        button.setAttribute("class", "selectedButton " + button.getAttribute("class"));
        button.innerHTML = "Are You Sure?";
        button.value = 1;
        document.getElementById(selector + "UndoSubmitButton").style.display = "initial";
    } else {
        if (!submitForm(selector)) {
            if (selector == "pre") {
                var orderNum = curOrderNum++;
                await getSheetData(sheetID, "ASSIGNMENTS", orderNum);
                var team = document.getElementById(selector + "TeamNumDropdown").value;
                var temp = getOrder(orderNum);
                var teams = temp[0].filter(x => parseInt(x) != team && x != "");
                var orderNum = curOrderNum++;
                await getSheetData(sheetID, "ASSIGNMENTS", orderNum);
                await clearData(sheetID, "ASSIGNMENTS");
                var orderNum = curOrderNum++;
                await getSheetData(sheetID, "ASSIGNMENTS", orderNum);

                while (getOrder(orderNum) != "none") {
                    await wait(500);
                    var orderNum = curOrderNum++;
                    await getSheetData(sheetID, "ASSIGNMENTS", orderNum);
                }

                appendData(sheetID, "ASSIGNMENTS", teams);
            } if (selector.includes("match")) {
                document.getElementById("matchFormDiv").remove();
                document.getElementById("matchRefreshDiv").style.display = "inline-block";
            } else {
                document.getElementById(selector + "FormDiv").remove();
                
                document.getElementById(selector + "RefreshDiv").style.display = "inline-block";
            }

        } else {
            undoSubmit(selector);
            window.scrollTo(0, 0);
        }
    }
}

function undoSubmit(selector) {
    var button = document.getElementById(selector + "SubmitButton");

    button.setAttribute("class", button.getAttribute("class").split(" ").splice(1));
    button.innerHTML = "Submit";
    button.value = 0;
    document.getElementById(selector + "UndoSubmitButton").style.display = "none";
}

function refreshForm(selector) { //TODO: REDO
    if (selector.includes("match")) {
        selector = "match";
    }

    document.getElementById(selector + "RefreshDiv").style.display = "none";
    document.getElementById(selector + "Div").appendChild(formDivs[selector].cloneNode(true));
    
    if (selector == "pre") {
        fillTeamDropdown(selector);
    }

    unlockDiv(lockedDivs, curDiv, selector + "Div");
}

async function changeTeamName(selector) {
    if (!document.getElementById(selector + "TeamName")) {
        return;
    }

    var orderNum = curOrderNum++;
    await getTBAData("team/frc" + document.getElementById(selector + "TeamNumDropdown").value, orderNum);
    document.getElementById(selector + "TeamName").innerHTML = getOrder(orderNum).nickname;
}

async function cycleCheckDropdown(selector) {
    while (true) {
        await fillTeamDropdown(selector);
        
        await wait(10000);
    }
}

function adjustMatchPlural() {
    var matchesLabel = document.getElementById("matchesLabel");
    if (document.getElementById("matchInput").value == "1") {
        matchesLabel.innerHTML = "Match";
    } else {
        matchesLabel.innerHTML = "Matches";
    }
}

function leftCycleSetup(num) {
    var element = document.getElementById("requiredSetup" + num);
    if (!element.value) {
        element.value = 0;
    }
    
    element.value = (parseInt(element.value) + 2) % 3;
    element.setAttribute("src", "../Images/" + elementsCycle[element.value] + ".png");

    var classes = element.getAttribute("class");
    if (elementsCycle[element.value] == "cone") {
        element.setAttribute("class", "cone " + classes);
    } else if (classes.includes("cone ")) {
        element.setAttribute("class", classes.replace("cone ", ""));
    }
}

function rightCycleSetup(num) {
    var element = document.getElementById("requiredSetup" + num);
    if (!element.value) {
        element.value = 0;
    }
    
    element.value = (parseInt(element.value) + 1) % 3;
    element.setAttribute("src", "../Images/" + elementsCycle[element.value] + ".png");

    var classes = element.getAttribute("class");
    if (elementsCycle[element.value] == "cone") {
        element.setAttribute("class", "cone " + classes);
    } else if (classes.includes("cone ")) {
        element.setAttribute("class", classes.replace("cone ", ""));
    }
}

function toggleGamePiece(gpId) {
    var gamepiece = document.getElementById(gpId);
    
    if (gamepiece.style.opacity == "0") {
        gamepiece.style.opacity = "100%";
    } else {
        gamepiece.style.opacity = "0";
    }
}

async function changeMatchAllianceButtons(selector) {
    await waitGlobalData();

    var compLvl = "qm";
    if (stage == "FINALS") {
        compLvl = document.getElementById("matchFormFinalDropdown").value;
    }

        var orderNum = curOrderNum++;
        await getTBAData("event/" + JSON.parse(localStorage.getItem("closestComp")).key + "/matches", orderNum);
    var match = getOrder(orderNum).filter(x => x.comp_level == compLvl); //&& x.comp_level == null

    if (stage == "FINALS") {
        match = match.filter(x => x.set_number == parseInt(document.getElementById(selector + "MatchNumInput").value))[0];
    } else {
        match = match.filter(x => x.match_number == parseInt(document.getElementById(selector + "MatchNumInput").value))[0];
    }
    
    if (!match) {
        hideElement(selector + "MatchInnerDiv");
        changeNotif(selector + "MatchNotif", "That Is Not A Valid Match!");
        document.getElementById(selector + "MatchNumInput").style.border = "1px solid #eb776e";
        return;
    } else {
        changeNotif(selector + "MatchNotif", "")
        document.getElementById(selector + "MatchNumInput").style.border = "1px solid #c5c7c5";
    }


    Object.keys(match.alliances).forEach(key => {
        var alliance = match.alliances[key];
        var counter = 1;

        alliance.team_keys.forEach(team => {
            let button = document.getElementById(selector + key[0].toUpperCase() + key.slice(1) + counter++ + "Button");
            button.innerHTML = team.replace("frc", "");
            button.setAttribute("onclick", button.getAttribute("onclick").replace("return;", ""));
        });
    });
    
    showElement(selector + "MatchInnerDiv");

    var scoutedTeams = [];
    
    var orderNum = curOrderNum++;
    await getSheetData(sheetID, stage, orderNum);
    getOrder(orderNum).forEach(form => {
        if (form[1] == document.getElementById(selector + "MatchNumInput").value) {
            scoutedTeams.push(form[0]);
        }
    });

    Array.from(document.getElementsByClassName("inPersonAllianceButton")).forEach(button => {
        if (scoutedTeams.includes(button.innerHTML)) {
            button.innerHTML = "OK";
            button.setAttribute("onclick", "return;" + button.getAttribute("onclick"));

            if (button.getAttribute("class").includes("selectedButton")) {
                togglePushButton(button.id);
            }
        }
    });
}

function changeCounter(counterId, isAdding) {
    var counter = document.getElementById(counterId);
    var counterValue = parseInt(counter.innerHTML);

    if (isAdding) {
        counter.innerHTML = counterValue + 1;
    } else if (counterValue > 0) {
        counter.innerHTML = counterValue - 1;
    }
}

async function storeForms() {
    while (!buttonsActivated) {
        await wait(100);
    }

    var forms = ["pre",  "match"];
    for (var i = 0; i < forms.length; i++) {
        let form = forms[i];

        while (!document.getElementById(form + "FormDiv")) {
            await wait(100);
        }

        formDivs[form] = document.getElementById(form + "FormDiv").cloneNode(true);
    };
}

function displayAutoScoresDiv(selector) {
    var selection = document.getElementById("autoScoresDropdown" + selector).value;
    var childNodes = document.getElementById("autoScoresDropdown" + selector).childNodes;

    for (var i = 1; i < childNodes.length; i += 2) {
        var node = childNodes[i];

        if (node.value != selection) {
            hideElement(node.value + "ScoresDiv" + selector);
        } else {
            showElement(node.value + "ScoresDiv" + selector);
        }
    }
}

async function adjustStage() {
    if (stage == "WARMUPS" || tbaNotWorking) {
        document.getElementById("inPersonTeamNumInput").style.display = "initial";
        
        document.getElementById("inPersonTeamNumInputDiv").style.display = "initial";

        document.getElementById("inPersonMatchNumInput").setAttribute("onchange", "");

        document.getElementById("inPersonMatchInnerDiv").style.display = "none";

        document.getElementById("matchUseInputButton").style.display = "none";
    } 
    
    if (!tbaNotWorking) {
        if (stage != "FINALS" && document.getElementById("matchFormFinalDropdown")) {
            document.getElementById("matchFormFinalDropdownDiv").remove();
        } else if (document.getElementById("matchFormFinalDropdownDiv")) {
            await waitGlobalData();

            var suffixes = [];
        
            var orderNum = curOrderNum++;
            await getTBAData("event/" + JSON.parse(localStorage.getItem("closestComp")).key + "/matches", orderNum);
            getOrder(orderNum).forEach(match => {
                if (!suffixes.includes(match.comp_level)) {
                    suffixes.push(match.comp_level);
                }
            });
        
            Array.from(document.getElementById("matchFormFinalDropdown").childNodes).forEach(node => {
                if (!suffixes.includes(node.value)) {
                    node.remove();
                }
            });
        }
    }
}

function checkDisplayDrivebaseInput() {
    if (document.getElementById("drivebaseDropdown").value == "Other") {
        showElement("drivebaseTypeInput");
    } else {
        hideElement("drivebaseTypeInput");
    }
}

adjustStage();
storeForms();
cycleCheckDropdown("pre");