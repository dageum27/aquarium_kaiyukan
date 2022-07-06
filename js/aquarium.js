var ct = 0;
var imgs = new Array("img/m2c.jpg", "img/m3c.jpg", "img/m4c.jpg", "img/m1c.jpg",);
setTimeout(progress, 3000);
function progress() {
    slider.src = imgs[ct];
    ct++;
    setTimeout(progress, 3000);
    if (ct > 3) {
        ct = 0
    }
};

 


 
 
 $('#prev').click(function () {
    $('#show').stop().animate({ marginLeft: -120 }, 800, function () {
        $('#show a:first').appendTo('#show');
        $('#show').css({ marginLeft: 0 });
    });
});

$('#next').click(function () {
    $('#slid').stop().animate({ marginRight: -240 }, 800, function () {
        $('#slid a:last').prependTo('#slid');
        $('#slid').css({ marginRight: 0 });
    });

    // $('#slid a:last').prependTo('#slid');
    // $('#slid').css('margin-left', -120);
    // $('#slid').stop().animate({ marginLeft: 0 }, 800);
});




// $(document).ready(function () {
//     $("#h_m").click(function () {
//         $("#menu_fade").slideToggle();
//         $("#menu").toggle();
//         $("#x").toggle();
//     });
// });

$(document).ready(function () {
    $("#h_m").click(function () {
        $("#menu_fade").fadeToggle();
        $("#menu").toggle();
        $("#x").toggle();
    });
});




$(document).ready(function () {
    $("#title_box").click(function () {
        $("#news").slideToggle('fast');
        $("#more").toggle();
        $("#close").toggle();
    });
});



$(function () {
    $("#slide1").click(function () {
        $("#1").show();
        $("#2").hide();
        $("#3").hide();
        $("#4").hide();
    });

    $("#slide2").click(function () {
        $("#2").show();
        $("#1").hide();
        $("#3").hide();
        $("#4").hide();
    });

    $("#slide3").click(function () {
        $("#3").show();
        $("#1").hide();
        $("#2").hide();
        $("#4").hide();
    });

    $("#slide4").click(function () {
        $("#4").show();
        $("#1").hide();
        $("#2").hide();
        $("#3").hide();
    });
});


