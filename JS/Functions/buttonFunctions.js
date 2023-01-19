var pressedButtons = {};

function activateButtons() {
    var buttons = Array.from(document.getElementsByClassName("button"));

    buttons.forEach(button => {
        let onclickFormat = "(async () => {" + "toggleButton('" + button.getAttribute("id") + "');";
        button.getAttribute("onclick").split(" ").forEach(command => {
            onclickFormat += "await " + command;
        });
        onclickFormat += "toggleButton('" + button.getAttribute("id") + "');" + "})();";

        button.setAttribute("onclick", onclickFormat);
    });

    buttons = Array.from(document.getElementsByClassName("subNavButton"));

    buttons.forEach(button => {
        let divId = button.id.replace("Button", "") + "Div";

        button.setAttribute("onclick", JSON.stringify(buttons.map(x => x.id)) + ".forEach(button => {document.getElementById(button).style.backgroundColor = '#141414';let divId = button.replace('Button', '') + 'Div'; if (divId != '" + divId + "') {hideElement(divId)}}); lockBody();toggleElement('" + divId + "'); if (document.getElementById('" + divId + "').style.display == 'none') {document.getElementById('" + button.id + "').style.backgroundColor = '#141414';showElement('mainDiv')} else {document.getElementById('" + button.id + "').style.backgroundColor = '#575653';hideElement('mainDiv')};" + button.getAttribute("onclick"));
    });

    buttons = Array.from(document.getElementsByClassName("pushButton"));

    buttons.forEach(button => {
        button.setAttribute("onclick", "togglePushButton('" + button.id + "');" + button.getAttribute("onclick"));
    });

    buttons = Array.from(document.getElementsByClassName("groupedButton"));

    buttons.forEach(button => {
        let divId = button.getAttribute("class").split(" ")[0];
        
        button.setAttribute("onclick", JSON.stringify(Array.from(document.getElementsByClassName(divId)).map(x => x.id)) + ".forEach(divButton => {if (divButton != '" + button.id + "' && document.getElementById(divButton).getAttribute('class').split(' ').includes('selectedButton')) {togglePushButton(divButton)}}); togglePushButton('" + button.id + "');");
    });
}

function toggleButton(buttonId) {
    var button = document.getElementById(buttonId);

    if (pressedButtons[buttonId] != "" && pressedButtons[buttonId]) {
        button.setAttribute("onclick", pressedButtons[buttonId]);

        pressedButtons[buttonId] = false;

        button.setAttribute("class", button.getAttribute("class").split(" ").splice(1).join(" "));
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