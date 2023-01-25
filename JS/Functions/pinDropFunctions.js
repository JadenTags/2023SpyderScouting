function activatePin(boardId, pinId) {
    var pin = document.getElementById(pinId);
    
    pin.style.left = "-50px";
    pin.style.top = "-50px";

    document.getElementById(boardId).addEventListener("click", function(event) {
        pin.style.left = event.pageX + "px";
        pin.style.top = event.pageY + "px";
        
        pin.value = [event.pageX - document.getElementById(boardId).getBoundingClientRect().left, event.pageY - document.getElementById(boardId).getBoundingClientRect().left];
    });

    document.getElementById(pinId).addEventListener("click", function(event) {
        if (event.clientX - document.getElementById(boardId).getBoundingClientRect().left >= 0 && event.clientY - document.getElementById(boardId).getBoundingClientRect().top >= 0) {
            pin.style.left = event.pageX + "px";
            pin.style.top = event.pageY + "px";
            pin.value = [event.clientX - document.getElementById(boardId).getBoundingClientRect().left, event.clientY - document.getElementById(boardId).getBoundingClientRect().top];
        }
    });
}