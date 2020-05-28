'use strict';
$(document).ready(function () {
    let firstCard = document.getElementById("first-card");
    let secondCard = document.getElementById("second-card");
    let thirdCard = document.getElementById("third-card");
    let firstguide = document.getElementById("first-guide");
    let secondguide = document.getElementById("second-guide");
    let thirdguide = document.getElementById("third-guide");
    let left = document.getElementById("left-znak");
    let right = document.getElementById("right-znak");

    $(function () {
        $(".burger").click(function () {
            if (number % 2 == 0) {
                $(".burger__line_third").show();
                $(".burger__line_first").css('top', '0');
                $(".burger__line_second").css('bottom', '9px');
                $(".burger__line_first").css('transform', 'rotate(0)');
                $(".burger__line_second").css('transform', 'rotate(0)');
            } else {

                $(".burger__line_third").hide();
                $(".burger__line_first").css('top', '9px');
                $(".burger__line_second").css('bottom', '9px');
                $(".burger__line_first").css('transform', 'rotate(45deg)');
                $(".burger__line_second").css('transform', 'rotate(-45deg)');
            }

        });
    });

    $(function () {
        $(".burger").click(function () {
            if (number % 2 == 0) {
                $(".burger__line_third").show();
                $(".burger__line_first").css('top', '0');
                $(".burger__line_second").css('bottom', '9px');
                $(".burger__line_first").css('transform', 'rotate(0)');
                $(".burger__line_second").css('transform', 'rotate(0)');
            } else {

                $(".burger__line_third").hide();
                $(".burger__line_first").css('top', '9px');
                $(".burger__line_second").css('bottom', '9px');
                $(".burger__line_first").css('transform', 'rotate(45deg)');
                $(".burger__line_second").css('transform', 'rotate(-45deg)');
            }

        });
    });
    $(function () {
        $(firstCard).click(function () {
            $(firstguide).show(300);
            $(secondguide).hide(300);
            $(thirdguide).hide(300);

        });
        $(secondCard).click(function () {
            $(secondguide).show(300);
            $(firstguide).hide(300);
            $(thirdguide).hide(300);
            $(secondguide).css('display', 'flex');

        });
        $(thirdCard).click(function () {
            $(thirdguide).show(300);
            $(secondguide).hide(300);
            $(firstguide).hide(300);
            $(thirdguide).css('display', 'flex');

        });
    });
    let button = document.getElementById("clickblock");
    let navmenu = document.getElementById("b");
    let upp = document.getElementById("Up");
    let number = 1;
    let numberTwo = 1;
    let i = 1;
    $(button).click(function () {
        number++
        if (number % 2 == 0) {
            $(b).show(300);

        } else {
            $(b).hide(300);
        }
    })

    $(window).resize(function () {
        if ($(window).width() >= 840) {
            $(b).show(0);

        } else if ($(window).width() < 840) {
            $(b).hide(0);
            $(".burger__line_third").show();
            $(".burger__line_first").css('top', '0');
            $(".burger__line_second").css('bottom', '9px');
            $(".burger__line_first").css('transform', 'rotate(0)');
            $(".burger__line_second").css('transform', 'rotate(0)');
        }
    })
    $(window).resize(function () {
        if ($(window).width() <= 1040) {
            $(firstguide).show(300);
            $(secondguide).show(300);
            $(thirdguide).show(300);
        } else if ($(window).width() > 1040) {
            $(firstguide).show(300);
            $(secondguide).hide(300);
            $(thirdguide).hide(300);
        }
    })
    $("#menu").on("click", "#a", function (event) {
        event.preventDefault();
        var id = $(this).attr('href'),
            top = $(id).offset().top;
        $('body,html').animate({
            scrollTop: top
        }, 600);
    });
    $("#UpDownBut").click(function () {

        numberTwo++
        if (numberTwo % 2 == 0) {
            $("#Up").css('transform', 'rotate(0deg)');
        } else {
            $("#Up").css('transform', 'rotate(180deg)');
        }
        if (upp.style.transform == 'rotate(0deg)') {
            document.getElementById("uppp").href = "#header";
        } else if (upp.style.transform == 'rotate(180deg)') {
            document.getElementById("uppp").href = "#footer";
        }
    })
    $("#UpDownBut").on("click", "a", function (event) {
        event.preventDefault();
        var id = $(this).attr('href'),
            top = $(id).offset().top;
        $('body,html').animate({
            scrollTop: top
        }, 600);
    });
})