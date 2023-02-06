if (window.innerWidth < 961) {
    document.getElementById("first").appendChild(document.getElementById("button1"));
    document.getElementById("second").appendChild(document.getElementById("button2"));
    document.getElementById("third").appendChild(document.getElementById("button3"));
    document.getElementById("fourth").appendChild(document.getElementById("button4"));
    document.getElementById("fifth").appendChild(document.getElementById("button5"));
    document.getElementById("sixth").appendChild(document.getElementById("button6"));
}


var personalInfo1 = document.getElementById("person1");
var personalInfo2 = document.getElementById("person2");
var personalInfo3 = document.getElementById("person3");
var personalInfo4 = document.getElementById("person4");
var personalInfo5 = document.getElementById("person5");
var personalInfo6 = document.getElementById("person6");
var alumni = document.getElementById("alumni");

var exitButton1 = document.getElementById("button1");
var exitButton2 = document.getElementById("button2");
var exitButton3 = document.getElementById("button3");
var exitButton4 = document.getElementById("button4");
var exitButton5 = document.getElementById("button5");
var exitButton6 = document.getElementById("button6");
var lastExitButton = document.getElementById("last_button");

var descriptionLink1 = document.getElementById("desc1");
var descriptionLink2 = document.getElementById("desc2");
var descriptionLink3 = document.getElementById("desc3");
var descriptionLink4 = document.getElementById("desc4");
var descriptionLink5 = document.getElementById("desc5");
var descriptionLink6 = document.getElementById("desc6");
var lastDescriptionLink = document.getElementById("last_desc");


function openPersonalInfo1() {
    personalInfo1.style.display = "block";
}
function closePersonalInfo1() {
    personalInfo1.style.display = "none";
}


function openPersonalInfo2() {
    personalInfo2.style.display = "block";
}
function closePersonalInfo2() {
    personalInfo2.style.display = "none";
}


function openPersonalInfo3() {
    personalInfo3.style.display = "block";
}
function closePersonalInfo3() {
    personalInfo3.style.display = "none";
}


function openPersonalInfo4() {
    personalInfo4.style.display = "block";
}
function closePersonalInfo4() {
    personalInfo4.style.display = "none";
}


function openPersonalInfo5() {
    personalInfo5.style.display = "block";
}
function closePersonalInfo5() {
    personalInfo5.style.display = "none";
}


function openPersonalInfo6() {
    personalInfo6.style.display = "block";
}
function closePersonalInfo6() {
    personalInfo6.style.display = "none";
}


function openAlumniList() {
    alumni.style.display = "block";
}
function closeAlumniList() {
    alumni.style.display = "none";
}


descriptionLink1.addEventListener("click", openPersonalInfo1);
exitButton1.addEventListener("click", closePersonalInfo1);

descriptionLink2.addEventListener("click", openPersonalInfo2);
exitButton2.addEventListener("click", closePersonalInfo2);

descriptionLink3.addEventListener("click", openPersonalInfo3);
exitButton3.addEventListener("click", closePersonalInfo3);

descriptionLink4.addEventListener("click", openPersonalInfo4);
exitButton4.addEventListener("click", closePersonalInfo4);

descriptionLink5.addEventListener("click", openPersonalInfo5);
exitButton5.addEventListener("click", closePersonalInfo5);

descriptionLink6.addEventListener("click", openPersonalInfo6);
exitButton6.addEventListener("click", closePersonalInfo6);

lastDescriptionLink.addEventListener("click", openAlumniList);
lastExitButton.addEventListener("click", closeAlumniList);

