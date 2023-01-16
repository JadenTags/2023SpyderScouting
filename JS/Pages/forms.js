const formDivs = {
    "pre": document.getElementById("preDivWrapper").cloneNode(true),
    "pit": document.getElementById("pitDivWrapper").cloneNode(true),
    "match": document.getElementById("matchDivWrapper").cloneNode(true),
};

async function fillTeamDropdown(selector) {
    var dropdown = document.getElementById(selector + "TeamNumDropdown");
    
    dropdown.innerHTML = "";
    var orderNum = curOrderNum++;
    await getSheetData(config.assignmentsGSID, selector + sheetName, orderNum);
    
    await getOrder(orderNum)[0].forEach(team => {
        let option = document.createElement("option");
        option.value = team;
        option.innerHTML = "#" + team;
        dropdown.appendChild(option);
    });

    changeTeamName(selector);
}

function submitForm(selector) {
    var form = [];
    
    if (selector == "pre") {
        //TEAM NUM
        form.push(document.getElementById("preTeamNumDropdown").value);
    
        //DIMENSIONS
        form.push(JSON.stringify([document.getElementById("lengthInput").value, document.getElementById("widthInput").value, document.getElementById("heightInput").value]));
    
        //DRIVEBASE TYPE
        form.push(document.getElementById("dbTypeInput").value);
        
        //DRIVEBASE MOTORS
        form.push(document.getElementById("dbMotorInput").value);
    
        //HAS GOM
        form.push(document.getElementById("hasGOMButton").value == true);
    
        //NOTES
        form.push(document.getElementById("preExtraNotes").innerHTML);
        
        appendData(config.preGSID, sheetName, form);
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
        if (["pre", "pit"].includes(selector)) {
            var orderNum = curOrderNum++;
            await getSheetData(config.assignmentsGSID, selector + sheetName, orderNum);
            var team = document.getElementById(selector + "TeamNumDropdown").value;
            
            await clearData(config.assignmentsGSID, selector + sheetName);
            appendData(config.assignmentsGSID, selector + sheetName, getOrder(orderNum)[0].filter(x => parseInt(x) != team));
        }

        submitForm(selector);
        document.getElementById(selector + "DivWrapper").remove();
        
        document.getElementById(selector + "RefreshDiv").style.display = "inline-block";
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
    fillTeamDropdown(selector);
}

async function changeTeamName(selector) {
    var orderNum = curOrderNum++;
    await getTBAData("team/frc" + document.getElementById(selector + "TeamNumDropdown").value, orderNum);
    document.getElementById(selector + "TeamName").innerHTML = getOrder(orderNum).nickname;
}

fillTeamDropdown("pre");