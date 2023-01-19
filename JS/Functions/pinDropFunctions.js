function activatePin(boardId, pinId) {
    var pin = document.getElementById(pinId);
    
    pin.style.left = "-50px";
    pin.style.top = "-50px";

    document.getElementById(boardId).addEventListener("click", function(event) {
        pin.style.left = event.pageX + "px";
        pin.style.top = event.pageY + "px";

        pin.value = [event.pageX - document.getElementById(boardId).getBoundingClientRect().x, event.pageY - document.getElementById(boardId).getBoundingClientRect().y];
    });

    document.getElementById(pinId).addEventListener("click", function(event) {
        if (event.pageX - document.getElementById(boardId).getBoundingClientRect().x >= 0 && event.pageY - document.getElementById(boardId).getBoundingClientRect().y >= 0) {
            pin.style.left = event.pageX + "px";
            pin.style.top = event.pageY + "px";
            pin.value = [event.pageX - document.getElementById(boardId).getBoundingClientRect().x, event.pageY - document.getElementById(boardId).getBoundingClientRect().y];
        }
    });
}