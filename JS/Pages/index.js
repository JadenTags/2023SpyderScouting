async function login() {
    var userInput = document.getElementById("userInput");
    var passInput = document.getElementById("passInput");
    var user = userInput.value.toLowerCase();
    var pass = passInput.value;

    if (user == "" && pass == "") {
        changeNotif("notifText", "You did not enter anything!");
        userInput.style.border = "1px solid #eb776e";
        passInput.style.border = "1px solid #eb776e";
        return;
    } else if (user == "") {
        changeNotif("notifText", "You did not enter a username!");
        userInput.style.border = "1px solid #eb776e";
        passInput.style.border = "1px solid #c5c7c5";
        return;
    } else if (pass == "") {
        changeNotif("notifText", "You did not enter a password!");
        userInput.style.border = "1px solid #c5c7c5";
        passInput.style.border = "1px solid #eb776e";
        return;
    }
    
    var users = {};
 
    let orderNum = curOrderNum++;
    await getSheetData(config.userDatabaseGSID, "sheet1", orderNum);
    getOrder(orderNum).forEach(pairs => {
        users[pairs[0].toLowerCase()] = pairs[1];
    });

    if (Object.keys(users).includes(user)) {
        if (users[user] == pass) {
            localStorage.setItem("user", user[0].toUpperCase() + user.slice(1));
            window.location.replace("../../Pages/home.html");
        } else {
            changeNotif("notifText", "That is not the correct password!");
            userInput.style.border = "1px solid #c5c7c5";
            passInput.style.border = "1px solid #eb776e";
            return;
        }
    } else {
        changeNotif("notifText", "There is no user with that username!");
        userInput.style.border = "1px solid #eb776e";
        passInput.style.border = "1px solid #c5c7c5";
        return;
    }
}