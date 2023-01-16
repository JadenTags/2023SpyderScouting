function checkSidebar() {
    if (!localStorage.getItem("visitedHome")) {
        localStorage.setItem("visitedHome", true);
    } else {
        sidebar.style.marginLeft = "0";
        menubars.style.opacity = "0";
        x.style.opacity = "100";
    }
}

checkSidebar();