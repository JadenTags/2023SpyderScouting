function toggleSidebar() {
    var sidebar = document.getElementById("sidebar");
    var menubars = document.getElementById("menubars");
    var x = document.getElementById("x");
  
    if (["0px", ""].includes(sidebar.style.marginLeft)) {
        sidebar.style.transitionDuration = "400ms";
        menubars.style.transitionDuration = "200ms";
        x.style.transitionDuration = "200ms";

        sidebar.style.marginLeft = "-200px";
        menubars.style.opacity = "100";
        x.style.opacity = "0";

        sidebar.style.transitionDuration = "0";
        menubars.style.transitionDuration = "0";
        x.style.transitionDuration = "0";
    } else {
        sidebar.style.transitionDuration = "400ms";
        menubars.style.transitionDuration = "200ms";
        x.style.transitionDuration = "200ms";

        sidebar.style.marginLeft = "0";
        menubars.style.opacity = "0";
        x.style.opacity = "100";

        sidebar.style.transitionDuration = "0";
        menubars.style.transitionDuration = "0";
        x.style.transitionDuration = "0";
    }
}

function setGreeting() {
    var hours = new Date().getHours();
    var greeting = document.getElementById("greetingText");
    var username = localStorage.getItem("user");

    if (username) {
        username = ", " + username;
    } else {
        username = "";
    }

    if (hours >= 5 && hours < 12) {
        greeting.innerHTML = "Good Morning" + username;
    } else if (hours >= 12 && hours < 18) {
        greeting.innerHTML = "Good Afternoon" + username;
    } else if (hours >= 18 || hours < 5) {
        greeting.innerHTML = "Good Evening" + username;
    }
}
  
setGreeting();