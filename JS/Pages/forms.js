const formDivs = {
    "pre": document.getElementById("preFormDiv").cloneNode(true),
    "pit": document.getElementById("pitFormDiv").cloneNode(true),
    "match": document.getElementById("matchFormDiv").cloneNode(true),
};
const elementsCycle = ["either", "cube", "cone"];
var lockedDivs = {
    "mainDiv": "locked",
    "preDiv": "unlocked",
    "pitDiv": "unlocked",
    "matchDiv": "locked",
};
var curDiv = "mainDiv";

async function fillTeamDropdown(selector) {
    var dropdown = document.getElementById(selector + "TeamNumDropdown");
    var orderNum = curOrderNum++;
    await getSheetData(config.assignmentsGSID, selector + sheetName, orderNum);
    var teams = getOrder(orderNum);

    if (teams != "none" && !dropdown && document.getElementById(selector + "NoTeamsDiv").style.display != "none") {
        unlockDiv(lockedDivs, curDiv, selector + "Div")
        document.getElementById(selector + "NoTeamsDiv").style.display = "none";
        await refreshForm(selector);
        dropdown = document.getElementById(selector + "TeamNumDropdown");
    }

    if (teams != "none" && dropdown && document.getElementById(selector + "NoTeamsDiv").style.display == "none") {
        teams = teams[0]
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
                let option = document.createElement("option");
                option.value = team;
                option.innerHTML = "#" + team;
                dropdown.appendChild(option);
            });
        }

        changeTeamName(selector);
    } else if (document.getElementById(selector + "FormDiv")) {
        lockDiv(lockedDivs, curDiv, selector + "Div");
        document.getElementById(selector + "FormDiv").remove();
        document.getElementById(selector + "NoTeamsDiv").style.display = "inline";
        return;
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

        if (!form[5]) {
            //CAN CREATE AUTO
            form.push(document.getElementById("canCreateAutoButton").value == true);

            if (form[6] ) {
                //AUTO CREATING TIME
                form.push(document.getElementById("matchInput").value);

                //RELIABILITY LEVEL
                form.push(document.getElementById("reliabilitySlider").value);
            } else {
                for (var i = 0; i < 2; i++) {
                    form.push("");
                }
            }

            //AUTO DOCKING
            form.push(document.getElementById("canDockButtonAuto").value == true);

            if (form[9]) {
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


            if (form[12]) {
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
            showElement("cycleTimeNotifText");
            document.getElementById("cycleTimeInput").style.border = "1px solid #eb776e";
            end = true;
        } else {
            hideElement("cycleTimeNotifText");
            document.getElementById("cycleTimeInput").style.border = "1px solid #888888";
        }

        form.push(parseFloat(cycleTime));

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
            preferredPlaystyle = "none";
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
            ablePlaystyles = "none";
        }

        form.push(JSON.stringify(ablePlaystyles));

        if (form[19].includes["Defensive"]) {
            //DEFENSE STRATEGY NOTES 
            form.push(document.getElementById("defenseStrategyNotes").value);
        } else {
            form.push("");
        }

        //TELE DOCKING
        form.push(document.getElementById("canDockButtonTele").value == true);

        if (form[21]) {
            //TELE ENGAGING
            form.push(document.getElementById("canEngageButtonTele").value == true);

            if (form[22]) {
                //TELE AUTO ENGAGE
                form.push(document.getElementById("hasAutoBalanceButton").value == true);
            } else {
                form.push("");
            }
    
            //TELE DOCKING TIME
            form.push(document.getElementById("balanceTimeInput").value);
        } else {
            for (var i = 0; i < 3; i++) {
                form.push("");
            }
        }

        //EXTRA NOTES
        form.push(document.getElementById("preExtraNotes").value);

        if (end) {
            return true;
        }

        form = form.map(x => {
            if (x == "") {
                return "none";
            } else {
                return x;
            }
        });

        appendData(config.preGSID, sheetName, form);
        lockDiv(lockedDivs, curDiv, selector + "Div");
    } else if (selector == "pit") {
        lockDiv(lockedDivs, curDiv, selector + "Div");
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
            }

            document.getElementById(selector + "FormDiv").remove();
            
            document.getElementById(selector + "RefreshDiv").style.display = "inline-block";
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
    document.getElementById(selector + "RefreshDiv").style.display = "none";
    document.getElementById(selector + "Div").appendChild(formDivs[selector].cloneNode(true));
    activatePin("field", "fieldPin");
    fillTeamDropdown(selector);
    unlockDiv(lockedDivs, curDiv, selector + "Div");
}

async function changeTeamName(selector) {
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

activatePin("field", "fieldPin");
activatePin("fieldChanges", "fieldPinChanges");
cycleCheckDropdown("pre");
cycleCheckDropdown("pit");