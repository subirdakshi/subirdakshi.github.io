$("#menu ul").click(function () {
    var menu = document.getElementById("menu");
    var nav = document.getElementById("nav");
    $(this).toggleClass("open");
    $(".nav").toggleClass("toggle");
    $(".nav").click(() => {
        $("#menu ul").removeClass("open");
        $(".nav").removeClass("toggle");
    });

});


var prevScrollpos = window.pageYOffset;
window.onscroll = function () {
    var currentScrollPos = window.pageYOffset;
    if (prevScrollpos > currentScrollPos) {
        document.getElementById("menu").classList.remove('leftMinus');
    } else {
        document.getElementById("menu").classList.add('leftMinus');
    }
    prevScrollpos = currentScrollPos;

    if (prevScrollpos > 1500) {
        $('.arrow').addClass('show');
    } else {
        $('.arrow').removeClass('show');
    }
}

function scrlltop() {
    $('html').scrollTop(0);
}