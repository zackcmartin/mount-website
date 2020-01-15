$(window).scroll(function() {
    if ($(window).scrollTop() > 0) {
        $("nav").removeClass("navbar-custom");
        $("nav").addClass("navbar-shrink");
    }
    else {
        $("nav").removeClass("navbar-shrink");
        $("nav").addClass("navbar-custom");  
    }
})