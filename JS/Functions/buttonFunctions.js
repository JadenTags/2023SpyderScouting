var pressedButtons = {};

async function activateButtons() {
    await waitGlobalData();
    
    var buttons = Array.from(document.getElementsByClassName("sidebarButton"));

    buttons.forEach(button => {
        if (button.getAttribute("class").includes("requiresCompElement") && localStorage.getItem("difference") > 0) {
            button.remove();
        }

        if (!button.getAttribute("class").includes("selectedButton")) {
            button.setAttribute("onclick", "window.location.replace('" + button.innerHTML.split(" ")[0].toLowerCase() +".html');")
        }
    });

    buttons = Array.from(document.getElementsByClassName("button"));

    buttons.forEach(button => {
        let onclickFormat = "(async () => {toggleButton('" + button.getAttribute("id") + "');";
        button.getAttribute("onclick").split(" ").forEach(command => {
            onclickFormat += "await " + command;
        });
        onclickFormat += "toggleButton('" + button.getAttribute("id") + "');" + "})();";

        if (button.getAttribute("class").includes("requiresCompElement")) {
            button.setAttribute("onclick", "(async () => {await waitRequiresCompElementsRemoved(); if (document.getElementById('" + button.id + "').getAttribute('onclick') != '') {" + button.getAttribute("onclick") + "}});");
        }

        button.setAttribute("onclick", onclickFormat);
    });

    buttons = Array.from(document.getElementsByClassName("subNavButton"));

    buttons.forEach(button => {
        let divId = button.id.replace("Button", "") + "Div";
        if (button.getAttribute("class").includes("requiresCompElement")) {
            button.setAttribute("onclick", "(async () => {await waitRequiresCompElementsRemoved(); if (document.getElementById('" + button.id + "').getAttribute('onclick') != '') {" + button.getAttribute("onclick") + "}});");
        }

        button.setAttribute("onclick", "var temp = " + JSON.stringify(buttons.map(x => x.id)) + "; for (var i = 0; i < temp.length; i++) {button = temp[i];if (!document.getElementById(button)) {continue;};document.getElementById(button).style.backgroundColor = '#141414';let divId = button.replace('Button', '') + 'Div'; if (divId != '" + divId + "') {hideElement(divId)}};" + button.getAttribute("onclick") + ";toggleElement('" + divId + "'); if (document.getElementById('" + divId + "').style.display == 'none') {document.getElementById('" + button.id + "').style.backgroundColor = '#141414';showElement('mainDiv');curDiv = 'mainDiv';} else {document.getElementById('" + button.id + "').style.backgroundColor = '#575653';hideElement('mainDiv');curDiv = '" + divId + "';}; if (lockedDivs['" + divId + "'] == 'locked' || document.getElementById('mainDiv').style.display != 'none') {lockBody();} else {unlockBody();};window.scrollTo(0, 0);");
    });

    buttons = Array.from(document.getElementsByClassName("pushButton"));

    buttons.forEach(button => {

        if (button.getAttribute("class").includes("requiresCompElement")) {
            button.setAttribute("onclick", "(async () => {await waitRequiresCompElementsRemoved(); if (document.getElementById('" + button.id + "').getAttribute('onclick') != '') {" + button.getAttribute("onclick") + "}});");
        }

        button.setAttribute("onclick", "togglePushButton('" + button.id + "');" + button.getAttribute("onclick"));
    });

    buttons = Array.from(document.getElementsByClassName("groupedButton"));

    buttons.forEach(button => {
        let divId = button.getAttribute("class").split(" ")[0];

        if (button.getAttribute("class").includes("requiresCompElement")) {
            button.setAttribute("onclick", "(async () => {await waitRequiresCompElementsRemoved(); if (document.getElementById('" + button.id + "').getAttribute('onclick') != '') {" + button.getAttribute("onclick") + "}});");
        }

        button.setAttribute("onclick", "" + JSON.stringify(Array.from(document.getElementsByClassName(divId)).map(x => x.id)) + ".forEach(divButton => {if (divButton != '" + button.id + "' && document.getElementById(divButton).getAttribute('class').split(' ').includes('selectedButton')) {togglePushButton(divButton)}}); togglePushButton('" + button.id + "');");
    });
}

function toggleButton(buttonId) {
    var button = document.getElementById(buttonId);

    if (pressedButtons[buttonId] != "" && pressedButtons[buttonId]) {
        button.setAttribute("onclick", pressedButtons[buttonId]);

        pressedButtons[buttonId] = false;

        button.setAttribute("class", button.getAttribute("class").replace("selectedButton ", ""));
    } else {
        button.setAttribute("class", "selectedButton " + button.getAttribute("class"));

        pressedButtons[buttonId] = button.getAttribute("onclick");

        button.setAttribute("onclick", "");
    }
}

function togglePushButton(buttonId) {
    var button = document.getElementById(buttonId);

    if (button.value) {
        button.value = null;
        button.setAttribute("class", button.getAttribute("class").split(" ").splice(1).join(" "));
    } else {
        button.value = true;
        button.setAttribute("class", "selectedButton " + button.getAttribute("class"));
    }
}

activateButtons();