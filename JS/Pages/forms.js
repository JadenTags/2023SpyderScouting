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
        var dimensions = [document.getElementById("lengthInput").value, document.getElementById("widthInput").value, document.getElementById("heightInput").value];
        
        dimensions.forEach(dimension => {
            if (dimension != "" && isNaN(parseInt(dimension))) {
                showElement("dimensionsNotifText");
                document.getElementById("lengthInput").style.border = "1px solid #eb776e";
                document.getElementById("widthInput").style.border = "1px solid #eb776e";
                document.getElementById("heightInput").style.border = "1px solid #eb776e";
                end = true;
            }
        });

        if (!end) {
            hideElement("dimensionsNotifText");
            document.getElementById("lengthInput").style.border = "1px solid #888888";
            document.getElementById("widthInput").style.border = "1px solid #888888";
            document.getElementById("heightInput").style.border = "1px solid #888888";
        }

        form.push(JSON.stringify(dimensions.map(x => parseFloat(x))));
    
        //DRIVEBASE TYPE
        form.push(document.getElementById("dbTypeInput").value);
        
        //DRIVEBASE MOTORS
        form.push(document.getElementById("dbMotorInput").value);
    
        //HAS GOM
        form.push(document.getElementById("hasGOMButton").value == true);
    
        //NO AUTO
        form.push(document.getElementById("noAutoButton").value == true);

        if (!form[form.length - 1]) {
            //CAN CREATE AUTO
            form.push(document.getElementById("canCreateAutoButton").value == true);

            if (form[form.length - 1] ) {
                //AUTO CREATING TIME
                form.push(document.getElementById("matchInput").value);

                if (isNaN(parseInt(form[form.length - 1]))) {
                    showElement("preMatchesNotifText");
                    document.getElementById("matchInput").style.border = "1px solid #eb776e";
                    end = true;
                } else {
                    hideElement("preMatchesNotifText");
                    document.getElementById("matchInput").style.border = "1px solid #888888";
                }

                //RELIABILITY LEVEL
                form.push(document.getElementById("reliabilitySlider").value);
            } else {
                for (var i = 0; i < 2; i++) {
                    form.push("");
                }
            }

            //AUTO DOCKING
            form.push(document.getElementById("canDockButtonAuto").value == true);

            if (form[form.length - 1]) {
                //AUTO ENGAGING
                form.push(document.getElementById("canEngageButtonAuto").value == true);
            } else {
                form.push("");
            }
            
            //REQUIRED SETUP
            var setup = [];
            ["One", "Two", "Three", "Four"].forEach(num => {
                setup.push(elementsCycle[document.getElementById("requiredSetup" + num).value]);
            });

            form.push(JSON.stringify(setup.map(x => {
                if (!x) {return "either";} else {return x;}
            })));

            //FIXED POS
            form.push(document.getElementById("setPosButton").value == true);


            if (form[form.length - 1]) {
                //FIELD POS
                var posCoords = JSON.stringify(document.getElementById("fieldPin").value);
                if (!posCoords) {
                    posCoords = "";
                }
    
                form.push(posCoords);
            } else {
                form.push("");
            }
        } else {
            for (var i = 0; i < 8; i++) {
                form.push("");
            }
        }

        //CYCLE TIME
        var cycleTime = document.getElementById("cycleTimeInput").value;

        if (cycleTime != "" && isNaN(parseInt(cycleTime))) {
            showElement("pitCycleTimeNotifText");
            document.getElementById("cycleTimeInput").style.border = "1px solid #eb776e";
            end = true;
        } else {
            hideElement("pitCycleTimeNotifText");
            document.getElementById("cycleTimeInput").style.border = "1px solid #888888";
        }

        if (cycleTime != "") {
            cycleTime = parseInt(cycleTime);
        }

        form.push(cycleTime);

        //CONE REACH
        var coneReach = [];
        ["High", "Mid", "Bot"].forEach(row => {
            coneReach.push(document.getElementById("cone" + row + "RowButton").value == true);
        });
        form.push(JSON.stringify(coneReach));
        
        //CUBE REACH
        var cubeReach = [];
        ["High", "Mid", "Bot"].forEach(row => {
            cubeReach.push(document.getElementById("cube" + row + "RowButton").value == true);
        });
        form.push(JSON.stringify(cubeReach));

        //PREFERRED PLAYSTYLE
        var preferredPlaystyle;
        Array.from(document.getElementsByClassName("preferButton")).forEach(button => {
            if (button.value) {
                preferredPlaystyle = button.innerHTML;
            }
        });
        if (!preferredPlaystyle) {
            preferredPlaystyle = "";
        }

        form.push(preferredPlaystyle);

        //PREFERRED GAME PIECE
        var preferredGamePiece;
        Array.from(document.getElementsByClassName("preferGPButton")).forEach(button => {
            if (button.value) {
                preferredGamePiece = button.innerHTML;
            }
        });
        if (!preferredGamePiece) {
            preferredGamePiece = "none";
        }

        form.push(preferredGamePiece);

        //ABLE PLAYSTYLES
        var ablePlaystyles = [];
        ["Off", "Def"].forEach(playstyle => {
            let button = document.getElementById("able" + playstyle + "Button");

            if (button.value) {
                ablePlaystyles.push(button.innerHTML);
            }
        });
        if (ablePlaystyles.length == 0) {
            ablePlaystyles = "";
        } else {
            ablePlaystyles = JSON.stringify(ablePlaystyles);
        }

        form.push(ablePlaystyles);

        if (form[form.length - 1].includes["Defensive"]) {
            //DEFENSE STRATEGY NOTES 
            form.push(document.getElementById("defenseStrategyNotes").value);
        } else {
            form.push("");
        }

        //TELE DOCKING
        form.push(document.getElementById("canDockButtonTele").value == true);

        if (form[form.length - 1]) {
            //TELE ENGAGING
            form.push(document.getElementById("canEngageButtonTele").value == true);
    
            //TELE DOCKING TIME
            form.push(document.getElementById("balanceTimeInput").value);
        } else {
            for (var i = 0; i < 2; i++) {
                form.push("");
            }
        }

        //EXTRA NOTES
        form.push(document.getElementById("preExtraNotes").value);

        if (end) {
            return true;
        }
        form = form.map(x => {
            if (x == ""  && typeof x != typeof true) {
                return "none";
            } else {
                return x;
            }
        });

        appendData(config.preGSID, sheetName, form);
        lockDiv(lockedDivs, curDiv, selector + "Div");
    } else if (selector == "pit") {
        //TEAM NUM
        form.push(document.getElementById("pitTeamNumDropdown").value);

        //DRIVEBASE PROBLEMS
        form.push(document.getElementById("dbProblemsButton").value == true);

        if (form[form.length - 1]) {
            //DRIVEBASE PROBLEMS NOTES
            form.push(document.getElementById("dbProblemsNotes").value);
        } else {
            form.push("");
        }

        //GAME OBJECT MANIPULATOR PROBLEMS
        form.push(document.getElementById("gomProblemsButton").value == true);

        if (form[form.length - 1]) {
            //CONE REACH CHANGES
            var coneReach = [];
            ["High", "Mid", "Bot"].forEach(row => {
                coneReach.push(document.getElementById("cone" + row + "RowButtonChange").value == true);
            });
            form.push(JSON.stringify(coneReach));
            
            //CUBE REACH CHANGES
            var cubeReach = [];
            ["High", "Mid", "Bot"].forEach(row => {
                cubeReach.push(document.getElementById("cube" + row + "RowButtonChange").value == true);
            });
            form.push(JSON.stringify(cubeReach));
        } else {
            for (var i = 0; i < 2; i++) {
                form.push("");
            }
        }

        //OTHER PROBLEMS
        form.push(document.getElementById("otherProblemsButton").value == true);

        if (form[form.length - 1]) {
            //OTHER PROBLEMS NOTES
            form.push(document.getElementById("otherProblemsNotes").value == true);
        } else {
            form.push("");
        }

        //AUTO CHANGES
        form.push(document.getElementById("autoChangesButton").value == true);

        if (form[form.length - 1]) {
            //NO AUTO
            form.push(document.getElementById("noAutoChangesButton").value == true);

            if (!form[form.length - 1]) {
                //CAN CREATE AUTO
                form.push(document.getElementById("canCreateAutoButtonChanges").value == true);

                if (form[form.length - 1] ) {
                    //AUTO CREATING TIME
                    form.push(document.getElementById("matchInputChanges").value);

                    if (form[11] != "" && isNaN(parseInt(form[11]))) {
                        showElement("pitMatchesNotifText");
                        document.getElementById("MatchInputChanges").style.border = "1px solid #eb776e";
                        end = true;
                    } else {
                        hideElement("pitMatchesNotifText");
                        document.getElementById("matchInputChanges").style.border = "1px solid #888888";
                    }

                    //RELIABILITY LEVEL
                    form.push(document.getElementById("reliabilitySlider").value);
                } else {
                    for (var i = 0; i < 2; i++) {
                        form.push("");
                    }
                }

                //AUTO DOCKING
                form.push(document.getElementById("canDockButtonAutoChanges").value == true);

                if (form[form.length - 1]) {
                    //AUTO ENGAGING
                    form.push(document.getElementById("canEngageButtonAutoChanges").value == true);
                } else {
                    form.push("");
                }
                
                //REQUIRED SETUP
                var setup = [];
                ["One", "Two", "Three", "Four"].forEach(num => {
                    setup.push(elementsCycle[document.getElementById("requiredSetup" + num + "Changes").value]);
                });

                form.push(JSON.stringify(setup.map(x => {
                    if (!x) {return "either";} else {return x;}
                })));

                //FIXED POS
                form.push(document.getElementById("setPosButtonChanges").value == true);


                if (form[form.length - 1]) {
                    //FIELD POS
                    var posCoords = JSON.stringify(document.getElementById("fieldPinChanges").value);
                    if (!posCoords) {
                        posCoords = "";
                    }
        
                    form.push(posCoords);
                } else {
                    form.push("");
                }
            } else {
                for (var i = 0; i < 8; i++) {
                    form.push("");
                }
            }
        } else {
            for (var i = 0; i < 9; i++) {
                form.push("");
            }
        }

        //CYCLE TIME
        form.push(document.getElementById("cycleTimeInputChanges").value);

        if (form[form.length - 1] != "" && isNaN(parseInt(form[form.length - 1]))) {
            showElement("pitCycleTimeNotifTextChanges");
            document.getElementById("cycleTimeInputChanges").style.border = "1px solid #eb776e";
            end = true;
        } else {
            hideElement("pitCycleTimeNotifTextChanges");
            document.getElementById("cycleTimeInputChanges").style.border = "1px solid #888888";
        }
        
        //ABLE PLAYSTYLES
        var ablePlaystyles = [];
        ["Off", "Def"].forEach(playstyle => {
            let button = document.getElementById("able" + playstyle + "ButtonChanges");

            if (button.value) {
                ablePlaystyles.push(button.innerHTML);
            }
        });
        if (ablePlaystyles.length == 0) {
            ablePlaystyles = "";
        } else {
            ablePlaystyles = JSON.stringify(ablePlaystyles);
        }

        form.push(ablePlaystyles);

        //DEFENSE STRATEGY NOTES
        if (form[form.length - 1] != "" && form[form.length - 1].includes("Defensive")) {
            form.push(document.getElementById("defenseStrategyNotesChanges").value)
        } else {
            form.push("");
        }

        //PREFERRED PLAYSTYLE
        var preferredPlaystyle;
        Array.from(document.getElementsByClassName("preferButtonChanges")).forEach(button => {
            if (button.value) {
                preferredPlaystyle = button.innerHTML;
            }
        });
        if (!preferredPlaystyle) {
            preferredPlaystyle = "";
        }

        form.push(preferredPlaystyle);

        //TELE DOCKING
        form.push(document.getElementById("canDockButtonTeleChanges").value == true);

        //ENGAGE
        if (form[form.length - 1]) {
            form.push(document.getElementById("canEngageButtonTeleChanges").value == true);

            form.push(document.getElementById("balanceTimeInputChanges").value);
            
            if (form[form.length - 1] != "" && isNaN(parseInt(form[form.length - 1]))) {
                showElement("balanceTimeNotifTextChanges");
                document.getElementById("balanceTimeInputChanges").style.border = "1px solid #eb776e";
                end = true;
            } else {
                hideElement("pitCycleTimeNotifTextChanges");
                document.getElementById("balanceTimeInputChanges").style.border = "1px solid #888888";
            }
        } else {
            for (var i = 0; i < 3; i++) {
                form.push("");
            }
        }

        //EXTRA NOTES
        form.push(document.getElementById("pitExtraNotes").value);

        if (end) {
            return true;
        }
        
        form = form.map(x => {
            if (x == "" && typeof x != typeof true) {
                return "none";
            } else {
                return x;
            }
        });

        appendData(config.pitGSID, sheetName, form);
        lockDiv(lockedDivs, curDiv, selector + "Div");
    } else if (selector == "matchInPerson") {
        //MATCH NUMBER
        form.push(document.getElementById("inPersonMatchNumInput").value);

        //TEAM NUMBER
        var teamNum;

        if (document.getElementById("inPersonTeamNumInput")) {
            teamNum = document.getElementById("inPersonTeamNumInput").value;
        } else {
            Array.from(document.getElementsByClassName("inPersonAllianceButton")).forEach(button => {
                if (button.value) {
                    teamNum = button.innerHTML;
                }
            });
            if (isNaN(parseInt(teamNum))) {
                changeNotif("inPersonTeamNumNotif", "You Did Not Select a Valid Team!");
                end = true;
            } else {
                changeNotif("inPersonTeamNumNotif", "");
            }
        }
        
        form.push(teamNum);

        //LEFT COMMUNITY
        form.push(document.getElementById("inPersonLeftCommunityButton").value == true);

        //AUTO CONES
        var autoCones = [];
        ["Top", "Mid", "Bot"].forEach(row => {
            let record = [];

            ["Made", "Miss"].forEach(shot => {
                record.push(document.getElementById("inPersonAutoCones" + row + "Row" + shot + "Counter").innerHTML);
            });

            autoCones.push(record);
        });
        form.push(JSON.stringify(autoCones));

        //AUTO CUBES
        var autoCubes = [];
        ["Top", "Mid", "Bot"].forEach(row => {
            let record = [];

            ["Made", "Miss"].forEach(shot => {
                record.push(document.getElementById("inPersonAutoCubes" + row + "Row" + shot + "Counter").innerHTML);
            });

            autoCubes.push(record);
        });
        form.push(JSON.stringify(autoCubes));
        
        //AUTO ENDING
        var autoEnd;
        Array.from(document.getElementsByClassName("inPersonAutoEndgameButton")).forEach(button => {
            if (button.value) {
                autoEnd = button.innerHTML;
            }
        });
        form.push(autoEnd);

        //AUTO ENGAGED
        if (form[form.length - 1] == "Docked") {
            form.push(document.getElementById("inPersonAutoEngagedButton").value == true);
        } else {
            form.push("");
        }

        //TELE CONES
        var teleCones = [];
        ["Top", "Mid", "Bot"].forEach(row => {
            let record = [];

            ["Made", "Miss"].forEach(shot => {
                record.push(document.getElementById("inPersonTeleCones" + row + "Row" + shot + "Counter").innerHTML);
            });

            teleCones.push(record);
        });
        form.push(JSON.stringify(teleCones));

        //TELE CUBES
        var teleCubes = [];
        ["Top", "Mid", "Bot"].forEach(row => {
            let record = [];

            ["Made", "Miss"].forEach(shot => {
                record.push(document.getElementById("inPersonTeleCubes" + row + "Row" + shot + "Counter").innerHTML);
            });

            teleCubes.push(record);
        });
        form.push(JSON.stringify(teleCubes));

        //TIPPED OVER NON CS
        form.push(document.getElementById("inPersonNonChargeTipCounter").innerHTML);

        //TIPPED OVER CS
        form.push(document.getElementById("inPersonChargeTipCounter").innerHTML);

        //PLAYSTYLE
        var playstyle;
        Array.from(document.getElementsByClassName("inPersonTelePlaystyleButton")).forEach(button => {
            if (button.value) {
                playstyle = button.innerHTML;
            }
        });
        form.push(playstyle);
        
        //ENDGAME
        var endgame;
        Array.from(document.getElementsByClassName("inPersonTeleEndgameButton")).forEach(button => {
            if (button.value) {
                endgame = button.innerHTML;
            }
        });
        form.push(endgame);

        //TELE ENGAGED
        if (form[form.length - 1] == "Docked") {
            form.push(document.getElementById("inPersonTeleEngagedButton").value == true);
        } else {
            form.push("");
        }

        //FAILURE
        var failure;
        Array.from(document.getElementsByClassName("matchInPersonTagButton")).forEach(button => {
            if (button.value) {
                failure = button.innerHTML;
            }
        });
        form.push(failure);

        //PENS
        form.push(document.getElementById("penaltiesInput").value);
        
        if (isNaN(parseInt(form[form.length - 1])) && form[form.length - 1] != "") {
            changeNotif("penaltiesNotifText", "That Is Not A Valid Number!");
            end = true;
        } else {
            changeNotif("penaltiesNotifText", "");
        }

        //CARDED
        var carded;
        Array.from(document.getElementsByClassName("inPersonMatchCardButton")).forEach(button => {
            if (button.value) {
                carded = button.innerHTML;
            }
        });
        form.push(carded);

        //PLAYED AGGRESSIVE
        form.push(document.getElementById("inPersonAggressiveButton").value == true);

        //OTHER NOTES
        form.push(document.getElementById("matchInPersonExtraNotes").value);

        if (end) {
            return true;
        }
        
        if (playstyle == "Defensive") {
            var counter = 0;

            form = form.map(x => {
                if ([0, 1, 11, 18].includes(counter++)) {
                    return x;
                } else {
                    return "";
                }
            });
        }

        if (failure) {
            var counter = 0;
            form = form.map(x => {
                if ([0, 1, 14, 18].includes(counter++)) {
                    return x;
                } else {
                    return "";
                }
            });
        }

        form = form.map(x => {
            if (["", undefined].includes(x)) {
                return "none";
            } else {
                return x;
            }
        });

        var tempName = sheetName;
        if (isFinals) {
            tempName += "FINALS";
        }

        appendData(config.matchGSID, tempName, form);
        lockDiv(lockedDivs, curDiv, "matchDiv");
    } else if (selector.includes("matchonline")) {
        //MATCH NUMBER
        form.push(document.getElementById("onlineMatchNumInput").value);

        //TEAM NUMBER
        var teamNum;
        Array.from(document.getElementsByClassName("onlineAllianceButton")).forEach(button => {
            if (button.value) {
                teamNum = button.innerHTML;
            }
        });
        if (isNaN(parseInt(teamNum))) {
            changeNotif("onlineTeamNumNotif", "You Did Not Select a Valid Team!");
            end = true;
        } else {
            changeNotif("onlineTeamNumNotif", "");
        }
        form.push(teamNum);
        
        //OTHER NOTES
        form.push(document.getElementById("matchInPersonExtraNotes").value);

        if (end) {
            return true;
        }
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
            if (["pre", "pit"].includes(selector)) {
                var orderNum = curOrderNum++;
                await getSheetData(config.assignmentsGSID, selector + sheetName, orderNum);
                var team = document.getElementById(selector + "TeamNumDropdown").value;
                
                await clearData(config.assignmentsGSID, selector + sheetName);
                appendData(config.assignmentsGSID, selector + sheetName, getOrder(orderNum)[0].filter(x => parseInt(x) != team && x != ""));
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

function refreshForm(selector) {
    if (selector.includes("match")) {
        selector = "match";
    }

    document.getElementById(selector + "RefreshDiv").style.display = "none";
    document.getElementById(selector + "Div").appendChild(formDivs[selector].cloneNode(true));
    
    if (selector == "pre") {``
        activatePin("field", "fieldPin");
        fillTeamDropdown(selector);
    } else if (selector == "pit") {
        activatePin("fieldChanges", "fieldPinChanges");
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
    
    console.log(match)
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

    var forms = ["pre", "pit", "match"];
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

removeFinalsDropdown();
checkFinalsDropdown();
storeForms();
activatePin("field", "fieldPin");
activatePin("fieldChanges", "fieldPinChanges");
cycleCheckDropdown("pre");
cycleCheckDropdown("pit");