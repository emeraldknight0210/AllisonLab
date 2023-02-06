function animation_on_scroll() {
    var targetElement = document.querySelectorAll(".scrolling_animation");
  
    for (var i = 0; i < targetElement.length; i++) {
        var windowHeight = window.innerHeight;
        var elementTop = targetElement[i].getBoundingClientRect().top;
        var requiredHeight = 10;
    
        if (elementTop < windowHeight - requiredHeight) {
            targetElement[i].classList.add("active");
        } else {
            targetElement[i].classList.remove("active");
      }
    }
}
  
window.addEventListener("scroll", animation_on_scroll);
