var sideBarIcon = document.getElementById("menu_button");
var sideNavBar = document.getElementById("sidenavbar");
var mainContent = document.getElementById("main");
var homeIcon = document.getElementById("home");
var closeButton = document.getElementById("close_button");
var sideNavLink1 = document.getElementById("sidenav_link1");
var dropdownArrow1 = document.getElementById("dropdown_arrow1");
var dropdownMenu1 = document.getElementById("dropdown1");
var nav = false;
var dropdown1 = false;

function activeNavIcon() {
    sideBarIcon.classList.add("change");
}
function inactiveNavIcon() {
    sideBarIcon.classList.remove("change");
}

function openNavMobile() {
    sideNavBar.style.width = "100%";
    nav = true;
}
function closeNavMobile() {
    sideNavBar.style.width = "0";
    nav = false;
}
function toggleNavMobile() {
    nav ? closeNavMobile() : openNavMobile();
}

function openNavTablet() {
    sideNavBar.style.width = "130px";
    mainContent.style.marginLeft = "130px";
    homeIcon.style.marginLeft = "-200px";
    sideBarIcon.style.right = "initial";
    sideBarIcon.style.left = "150px";
    nav = true;
    activeNavIcon();
}
function closeNavTablet() {
    sideNavBar.style.width = "0";
    mainContent.style.marginLeft = "0";
    homeIcon.style.marginLeft = "0";
    sideBarIcon.style.right = "25px";
    sideBarIcon.style.left = "initial";
    nav = false;
    inactiveNavIcon();
}
function toggleNavTablet() {
    nav ? closeNavTablet() : openNavTablet();
}

sideBarIcon.addEventListener("click", toggleNavMobile);
mainContent.addEventListener("click", closeNavMobile);
closeButton.addEventListener("click", closeNavMobile);


function activeSideNavArrow1() {
    dropdownArrow1.style.transform = "rotate(90deg) translate(-25%, -25%)";
}
function inactiveSideNavArrow1() {
    dropdownArrow1.style.transform = "rotate(0deg)";
}

function activeDropMenu1() {
    dropdownMenu1.style.display = "flex";
    activeSideNavArrow1();
    dropdown1 = true;
}
function inactiveDropMenu1() {
    dropdownMenu1.style.display = "none";
    inactiveSideNavArrow1();
    dropdown1 = false;
}
function toggleDropMenu1() {
    dropdown1 ? inactiveDropMenu1() : activeDropMenu1();
}
sideNavLink1.addEventListener("click", toggleDropMenu1);


var windowWidth = window.innerWidth;
if (window.innerWidth >=641 && window.innerWidth <= 960) {
    sideBarIcon.removeEventListener("click", toggleNavMobile);
    mainContent.removeEventListener("click", closeNavMobile);
    sideBarIcon.addEventListener("click", toggleNavTablet);
    mainContent.addEventListener("click", closeNavTablet);
    document.getElementById("sidenav_link1").href = "Research.html";
    sideNavLink1.removeEventListener("click", toggleDropMenu1);
}