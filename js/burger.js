'use strict';
$(document).ready(function () {
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
    let i = 1;
    $(button).click(function() {
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
})