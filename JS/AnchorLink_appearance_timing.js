myID = document.getElementById("jump_link");

var myScrollFunc = function () {
    var y = window.scrollY;
    if (y >= 300) {
        myID.className = "anchor show"
    } else {
        myID.className = "anchor hide"
    }
};

window.addEventListener("scroll", myScrollFunc);