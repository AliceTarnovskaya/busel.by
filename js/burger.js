'use strict';

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


let button = document.getElementById("clickblock");
let navmenu = document.getElementById("b");
let number = 1;
let i = -1;
$(button).click(function () {
    number++
    if (number % 2 == 0) {
        $(b).css("display", "block");
        $(b).css("transition-duration", "1s");

    } else {
        $(b).css("display", "none");

    }
    

$(window).resize(function () {
    if ($(window).width() >= 840) {
        $(b).css("display", "block");

    } else if ($(window).width() < 840) {
        $(b).css("display", "none");
        $(".burger__line_third").show();
        $(".burger__line_first").css('top', '0');
        $(".burger__line_second").css('bottom', '9px');
        $(".burger__line_first").css('transform', 'rotate(0)');
        $(".burger__line_second").css('transform', 'rotate(0)');
    }
});