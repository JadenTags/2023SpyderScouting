var pressedButtons = {};

function activateButtons() {
    buttons = Array.from(document.getElementsByClassName("button"));

    buttons.forEach(button => {
        let onclickFormat = "(async () => {" + "toggleButton('" + button.getAttribute("id") + "');";
        button.getAttribute("onclick").split(" ").forEach(command => {
            onclickFormat += "await " + command;
        });
        onclickFormat += "toggleButton('" + button.getAttribute("id") + "');" + "})();";

        button.setAttribute("onclick", onclickFormat);
    });
}

function toggleButton(buttonId) {
    button = document.getElementById(buttonId);

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

activateButtons();