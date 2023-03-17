const formDivs = {};
const elementsCycle = ["either", "cube", "cone"];
var lockedDivs = {
    "mainDiv": "locked",
    "preDiv": "unlocked",
    "pitDiv": "unlocked",
    "matchDiv": "unlocked",
};
var submittedForms = {};
var curDiv = "mainDiv";
var onlineSelectedMatch;
var cyclingOnline;
var notifColor = "#eb776e";
var borderColor = "#c5c7c5";

async function fillTeamDropdown(selector) {
    var dropdown = document.getElementById(selector + "TeamNumDropdown");
    var orderNum = curOrderNum++;
    await getSheetData(config.assignmentsGSID, selector + sheetName, orderNum);
    var teams = getOrder(orderNum);
    var preTeams;

    if (teams != "none") {
        teams = teams[0];
    }

    if (selector == "pit" && teams != "none") {
        orderNum = curOrderNum++;
        await getSheetData(config.preGSID, sheetName, orderNum);
        var temp = getOrder(orderNum);
        preTeams = teams.filter(x => !temp.map(z => z[0]).includes(x));
        var needPreNotifText = document.getElementById("needToPreNotifText");

        needPreNotifText.style.display = "initial";

        if (preTeams.length == 1) {
            needPreNotifText.innerHTML = "Team " + preTeams[0] + " Needs To Be Pre-Scouted!";
        } else if (preTeams.length == 2) {
            needPreNotifText.innerHTML = "Teams " + preTeams[0] + " and " + preTeams[1] + " Need To Be Pre-Scouted!";
        } else if (preTeams.length > 2) {
            var filling = "";
            for (var i = 1; i < preTeams.length - 1; i++) {
                filling += preTeams[i] + ", ";
            }

            needPreNotifText.innerHTML = "Teams " + preTeams[0] + ", " + filling + "and " + preTeams[preTeams.length - 1] + " Need To Be Pre-Scouted!";
        } else {
            needPreNotifText.style.display = "none";
        }
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
                if (selector != "pit" || !preTeams.includes(team)) {
                    let option = document.createElement("option");
                    option.value = team;
                    option.innerHTML = "#" + team;
                    dropdown.appendChild(option);
                }
            });
        } else {
            var childNodes = [];
            var toRemove = [];

            dropdown.childNodes.forEach(option => {
                let num = option.value.toString();
                
                if (!teams.includes(num) || (selector == "pit" && preTeams.includes(num))) {
                    toRemove.push(option);
                } else {
                    childNodes.push(num);
                }
            });

            toRemove.forEach(option => option.remove());

            teams.filter(x => !childNodes.includes(x) && x != "").forEach(team => {
                if (selector != "pit" || !preTeams.includes(team)) {
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
    } if (document.getElementById(selector + "NoTeamsDiv").style.display != "none") {
        if (selector == "pit") {
            orderNum = curOrderNum++;
            await getSheetData(config.assignmentsGSID, "pre" + sheetName, orderNum);
            teams = getOrder(orderNum);
            var textElem = document.getElementById("pitNoTeamsText");

            if (teams == "none") {
                textElem.innerHTML = "There Are No More Teams To Pit-Scout!";
            } else {
                textElem.innerHTML = "There Are Still More Teams To Pre-Scout!";
            }
        } else if (selector == "pre") {
            orderNum = curOrderNum++;
            await getSheetData(config.assignmentsGSID, "pit" + sheetName, orderNum);
            teams = getOrder(orderNum);

            var textElem = document.getElementById("preNoTeamsText");

            if (teams == "none") {
                textElem.innerHTML = "There Are No More Teams To Pre-Scout!";
            } else {
                textElem.innerHTML = "There Are Still More Teams To Pit-Scout!";
            }
        }
    }
}

function submitForm(selector) {
    var form = [];
    var end = false;
    
    if (selector == "pre") {
        //TEAM NUM
        form.push(document.getElementById("preTeamNumDropdown").value);

        //DIMENSIONS
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
                dimensions.push(element.value);
            }
        });

        if (!dimensions.includes("")) {
            hideElement("dimensionsNotifText");
        }

        form.push(JSON.stringify(dimensions));

        //DB TYPE
        form.push(document.getElementById("dbTypeInput").value);

        //HAS GOM
        form.push(document.getElementById("hasGOMButton").value == true);
        
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

        //CARGO CYCLED
        form.push(document.getElementById("cargoCycledInput").value);

        if (isNaN(parseInt(form[form.length - 1])) && form[form.length - 1] != "") {
            document.getElementById("cargoCycledInput").style.border = "1px solid " + notifColor;
            showElement("cargoCycledNotifText");
            end = true;
        } else {
            document.getElementById("cargoCycledInput").style.border = "1px solid " + borderColor;
            hideElement("cargoCycledNotifText");
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

        //PREFERRED PLAYSTYLE
        form.push(getGroupButtonValue("preferButton"));

        //EXTRA NOTES
        form.push(document.getElementById("preExtraNotes").value);
        
        console.log(form)
        
        if (end) {
            return true;
        }
        
        appendData(config.preGSID, sheetName, form);
        lockDiv(lockedDivs, curDiv, selector + "Div");
    } else if (selector == "pit") {
        end = true;
        //TEAM NUM
        form.push(document.getElementById("pitTeamNumDropdown").value);

        //DB CHANGES


        if (end) {
            return true;
        }

        appendData(config.pitGSID, sheetName, form);
        lockDiv(lockedDivs, curDiv, selector + "Div");
    } else if (selector == "matchInPerson") {
        //TEAM NUMBER
        var teamNum = getGroupButtonValue("inPersonAllianceButton");

        if (!teamNum) {
            if (document.getElementById("inPersonTeamNumInput")) {
                teamNum = document.getElementById("inPersonTeamNumInput").value;
            } else {
                changeNotif("inPersonTeamNumNotif", "You Did Not Select Team!");
            }
            // end = true;
        } else if (isNaN(parseInt(teamNum))) {
            changeNotif("inPersonTeamNumNotif", "You Did Not Select a Valid Team!");
            // end = true;
        } else {
            changeNotif("inPersonTeamNumNotif", "");
        }
        form.push(teamNum);

        //MATCH NUMBER
        form.push(document.getElementById("inPersonMatchNumInput").value);

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
        form.push(getGroupButtonValue("inPersonAutoEndgameButton"));

        //ENGAGED
        if (form[form.length - 1] == "Docked") {
            form.push(document.getElementById("inPersonAutoEngagedButton").value == true);
        }  else {
            form.push("");
        }

        var tempName = sheetName;
        if (isFinals) {
            tempName += "FINALS";
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

        //ENDGAME
        form.push(getGroupButtonValue("inPersonTeleEndgameButton"));

        //ENGAGED
        if (form[form.length - 1] == "Docked") {
            form.push(document.getElementById("inPersonTeleEngagedButton").value == true);
        } else {
            form.push("");
        }

        //FAILURES
        form.push(getGroupButtonValue("matchInPersonTagButton"));
        var failure = form[form.length - 1];

        //PENALTIES
        form.push(document.getElementById("penaltiesInput").value);

        if (isNaN(parseInt(form[form.length - 1])) && form[form.length - 1] != "") {
            dimensions.push("");

            document.getElementById("penaltiesInput").style.border = "1px solid " + notifColor;
            showElement("penaltiesNotifDiv");
            end = true
        } else {
            document.getElementById("penaltiesInput").style.border = "1px solid " + borderColor;
            hideElement("penaltiesNotifDiv");
        }

        //EXTRA NOTES
        form.push(document.getElementById("matchInPersonExtraNotes").value);

        if (failure != "" || playstyle == "Defensive") {
            let counter = 0;
            form = form.map(x => {
                if (![0, 1, 10, 13, 15].includes(counter++)) {
                    return "";
                } else {
                    return x;
                }
            });
        }

        console.log(form, playstyle, failure)

        if (end) {
            return true;
        }

        appendData(config.matchGSID, tempName, form);
        lockDiv(lockedDivs, curDiv, "matchDiv");
    } else if (selector.includes("matchonline")) {
    }
}

function getGroupButtonValue(groupClass, additionalDiv) {
    var search = document;
    if (additionalDiv) {
        search = document.getElementById(additionalDiv);
    }

    var value;
    Array.from(search.getElementsByClassName(groupClass)).forEach(elem => {
        if (elem.value) {
            value = elem.innerHTML;
        }
    });
    if (!value) {
        value = "";
    }

    return value;
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
            if (["pre", "pit"].includes(selector)) {
                var orderNum = curOrderNum++;
                await getSheetData(config.assignmentsGSID, selector + sheetName, orderNum);
                var team = document.getElementById(selector + "TeamNumDropdown").value;
                var temp = getOrder(orderNum);
                var teams = temp[0].filter(x => parseInt(x) != team && x != "");
                var orderNum = curOrderNum++;
                await getSheetData(config.assignmentsGSID, selector + sheetName, orderNum);
                await clearData(config.assignmentsGSID, selector + sheetName);
                var orderNum = curOrderNum++;
                await getSheetData(config.assignmentsGSID, selector + sheetName, orderNum);

                while (getOrder(orderNum) != "none") {
                    await wait(500);
                    var orderNum = curOrderNum++;
                    await getSheetData(config.assignmentsGSID, selector + sheetName, orderNum);
                }

                appendData(config.assignmentsGSID, selector + sheetName, teams);
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
    } else if (selector == "pit") {
        // activatePin("fieldChanges", "fieldPinChanges");
        // fillTeamDropdown(selector);
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
    var orderNum = curOrderNum++;
    await getTBAData("event/" + JSON.parse(localStorage.getItem("closestComp")).key + "/matches", orderNum);

    var compLvl = "qm";
    if (isFinals) {
        compLvl = document.getElementById("matchFormFinalDropdown").value;
    }

    var match = getOrder(orderNum).filter(x => x.comp_level == compLvl); //&& x.comp_level == null
    if (isFinals) {
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
            if (selector == "online") {
                if (submittedForms[document.getElementById("onlineMatchNumInput").value].includes(team.replace("frc", ""))) {
                    let button = document.getElementById(selector + key[0].toUpperCase() + key.slice(1) + counter + "Button");
                    button.innerHTML = "OK";
                    button.setAttribute("onclick", "return;" + button.getAttribute("onclick"));

                    if (button.getAttribute("class").includes("selectedButton")) {
                        togglePushButton(selector + key[0].toUpperCase() + key.slice(1) + counter + "Button");
                        hideElement(selector + key[0].toUpperCase() + key.slice(1) + counter + "FormDiv");
                        showElement("onlineSelectFormDiv");
                    }

                    counter++;
                } else {
                    let button = document.getElementById(selector + key[0].toUpperCase() + key.slice(1) + counter++ + "Button");
                    button.innerHTML = team.replace("frc", "");
                    button.setAttribute("onclick", button.getAttribute("onclick").replace("return;", ""));
                }
            } else {
                document.getElementById(selector + key[0].toUpperCase() + key.slice(1) + counter++ + "Button").innerHTML = team.replace("frc", "");
            }
        });
    });
    
    showElement(selector + "MatchInnerDiv");
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

    var forms = ["pre",  "match"];//"pit",
    for (var i = 0; i < forms.length; i++) {
        let form = forms[i];

        while (!document.getElementById(form + "FormDiv")) {
            await wait(100);
        }

        formDivs[form] = document.getElementById(form + "FormDiv").cloneNode(true);
    };
}

async function fillOnlineMatchDropdown() {
    await waitGlobalData();

    var dropdown = document.getElementById("onlineMatchNumInput");

    var orderNum = curOrderNum++;
    await getTBAData("event/" + JSON.parse(localStorage.getItem("closestComp")).key + "/matches", orderNum);
    var matches = getOrder(orderNum).filter(x => x.comp_level == "qm");
    
    orderNum = curOrderNum++;
    await getSheetData(config.onlineMatchScoutGSID, sheetName, orderNum);
    var selectedMatches = getOrder(orderNum)[0];
    matches = matches.filter(x => !selectedMatches.includes(x.match_number.toString()));

    orderNum = curOrderNum++;
    await getSheetData(config.matchGSID, sheetName, orderNum);
    var forms = getOrder(orderNum).splice(1);
    matches.forEach(match => {
        submittedForms[match.match_number] = [];
    });

    forms.forEach(form => {
        if (Object.keys(submittedForms).includes(form[0])) {
            submittedForms[form[0]].push(form[1]);
        }
    });

    if (dropdown.childNodes.length == 0) {
        Object.keys(submittedForms).forEach(key => {
            if (submittedForms[key].length < 6) {
                let option = document.createElement("option");
                option.value = key;
                option.innerHTML = key;
                dropdown.appendChild(option);
            }
        });
    } else {
        var removeCurMatch;
        var curMatch = document.getElementById("onlineMatchNumInput").value;
        var toRemove = [];

        if (!Object.keys(submittedForms).includes(curMatch) || selectedMatches.includes(curMatch)) {
            removeCurMatch = true;
        }

        dropdown.childNodes.forEach(node => {
            if (submittedForms[node.innerHTML].length >= 6 || !Object.keys(submittedForms).includes(node.innerHTML) || (parseInt(node.innerHTML) == curMatch && removeCurMatch && curMatch != onlineSelectedMatch)) {
                toRemove.push(node);
            }
        });

        toRemove.forEach(node => {
            node.remove();
        })

        Object.keys(submittedForms).forEach(key => {
            if (submittedForms[key].length < 6 && !Array.from(dropdown.childNodes).map(x => x.innerHTML).includes(key) && !selectedMatches.includes(key)) {
                insertOnlineMatch(key, dropdown);
            }
        });
    }
    
    storeSelectedMatch();
    changeMatchAllianceButtons('online');
}

async function cycleCheckOnlineMatchDropdown() {
    timeOnline();
    cyclingOnline = true;

    while (true) {
        if (!document.getElementById("onlineMatchFormButton").getAttribute("class").includes("selectedButton") || document.getElementById("matchDiv").style.display == "none") {
            cyclingOnline = false;
            document.getElementById("onlineMatchNumInput").innerHTML = "";
            storeSelectedMatch();
            break;
        }

        await fillOnlineMatchDropdown();
        
        await wait(10000);
    }
}

async function timeOnline() {
    await wait(1200000);

    if (cyclingOnline) {
        eval(document.getElementById("onlineMatchFormButton").getAttribute("onclick"));
    }
}

function insertOnlineMatch(key, dropdown) {
    let option = document.createElement("option");
    option.value = key;
    option.innerHTML = key;
    
    var foundNode;
    dropdown.childNodes.forEach(node => {
        if (parseInt(node.innerHTML) > parseInt(key) && !foundNode) {
            foundNode = node;
        }
    });

    if (!foundNode) {
        dropdown.appendChild(option);
    } else {
        dropdown.insertBefore(option, foundNode);
    }
}

async function storeSelectedMatch() {
    var newlySelectedMatch = document.getElementById("onlineMatchNumInput").value;

    var orderNum = curOrderNum++;
    await getSheetData(config.onlineMatchScoutGSID, sheetName, orderNum);
    var selectedMatches = getOrder(orderNum);

    if (selectedMatches == "none") {
        selectedMatches = [];
    } else {
        selectedMatches = selectedMatches[0];
    }

    selectedMatches = selectedMatches.filter(x => x != onlineSelectedMatch);
    selectedMatches.push(newlySelectedMatch);
    await clearData(config.onlineMatchScoutGSID, sheetName);
    appendData(config.onlineMatchScoutGSID, sheetName, selectedMatches);

    onlineSelectedMatch = newlySelectedMatch;
}

//ONLY USE TO FILL ASSIGNMENTS BEFORE A COMP
async function fillPreAssignments() {
    await waitGlobalData();

    var orderNum = curOrderNum++;
    await getTBAData("event/" + JSON.parse(localStorage.getItem("closestComp")).key + "/teams", orderNum);
    appendData(config.assignmentsGSID, "pre" + sheetName, getOrder(orderNum).map(x => x.key.replace("frc", "")));
}

function removeFinalsDropdown() {
    if (!isFinals) {
        document.getElementById("matchFormFinalDropdown").remove();
    }
}

async function checkFinalsDropdown() {
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

removeFinalsDropdown();
// checkFinalsDropdown();
storeForms();
cycleCheckDropdown("pre");
// cycleCheckDropdown("pit");