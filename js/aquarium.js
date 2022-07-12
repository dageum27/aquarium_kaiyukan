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
    $('#slid').stop().animate({ marginRight: -260 }, 800, function () {
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
    $("#show1").click(function () {
        $("#n1").show();
        $("#n2").hide();
        $("#n3").hide();
        $("#n4").hide();
    });

    $("#show2").click(function () {
        $("#n2").show();
        $("#n1").hide();
        $("#n3").hide();
        $("#n4").hide();
    });

    $("#show3").click(function () {
        $("#n3").show();
        $("#n1").hide();
        $("#n2").hide();
        $("#n4").hide();
    });

    $("#show4").click(function () {
        $("#n4").show();
        $("#n1").hide();
        $("#n2").hide();
        $("#n3").hide();
    });
});


