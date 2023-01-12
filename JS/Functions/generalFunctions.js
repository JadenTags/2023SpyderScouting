var orders = {};
var curOrderNum = 0;

function getOrder(orderNum) {
  var temp = orders[orderNum];
  delete orders[orderNum];

  return temp;
}

function changeNotif(notifId, text) {
  var notif = document.getElementById(notifId);

  if (text) {
    notif.style.color = "#eb776e";
    notif.innerHTML = text;
  } else {
    notif.style.color = "white";
  }
}

function wait(ms) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve();
    }, ms
    );
  });
}

function toggleSidebar() {
  var sidebar = document.getElementById("sidebar");
  var menubars = document.getElementById("menubars");
  var x = document.getElementById("x");

  if (sidebar.style.marginLeft == "0px") {
    sidebar.style.marginLeft = "-200px";
    menubars.style.opacity = "100";
    x.style.opacity = "0";
  } else {
    sidebar.style.marginLeft = "0";
    menubars.style.opacity = "0";
    x.style.opacity = "100";
  }
}

function setGreeting() {
  console.log(new Date().getTime());
}

setGreeting();