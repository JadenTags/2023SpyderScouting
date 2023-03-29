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
    notif.style.display = "initial";
    notif.style.color = "#eb776e";
    notif.innerHTML = text;
  } else {
    notif.style.display = "none";
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

function getGroupButtonValue(groupClass, additionalDiv) {
    var search = document;
    if (additionalDiv) {
        search = document.getElementById(additionalDiv);
    }

    var value;
    Array.from(search.getElementsByClassName(groupClass)).forEach(elem => {
        if (elem.value) {
            value = elem.innerHTML;
        }
    });
    if (!value) {
        value = "";
    }

    return value;
}

function toggleElement(elementId) {
  var element = document.getElementById(elementId);
  
  if (element.style.display == "none") {
    element.style.display = "initial";
  } else {
    element.style.display = "none";
  }
}

function showElement(elementId) {
  document.getElementById(elementId).style.display = "initial";
}

function hideElement(elementId) {
  document.getElementById(elementId).style.display = "none";
}

function lockBody() {
  document.body.style.overflow = "hidden";
  document.body.style.userZoom = "fixed";
  document.body.style.position = "fixed";
  document.body.scrollTo(0, 0);
}

function unlockBody() {
  document.body.style.overflow = "scroll";
  document.body.style.userZoom = "initial";
  document.body.style.position = "initial";
  document.body.scrollTo(0, 0);
}

function lockDiv(lockObj, curDiv, lockDiv) {
  if (curDiv == lockDiv) {
    lockBody();
  }

  lockObj[lockDiv] = "locked";
}

function unlockDiv(lockObj, curDiv, lockDiv) {
  if (curDiv == lockDiv) {
    unlockBody();
  }

  lockObj[lockDiv] = "unlocked";
}

async function checkLogIn() {
  await waitGlobalData();

  if (!localStorage.getItem("user")) {
    document.body.innerHTML = "";
  }
}

function setDisplayData() {
  if (!localStorage.getItem("displayData")) {
    localStorage.setItem("displayData", stage);
  }
}

setDisplayData();