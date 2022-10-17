$(document).ready(function(){
    $("#panel1").hide();
    $("#panel2").hide();
    $("#flip").click(function(){
        $("#panel").slideDown("slow");
    //    $("#panel").animate({height: '300px', opacity: '0.4'}, "slow");
    });
    $("n2").click(function(){
        $("#panel1").fadeIn();
    });
    $("n3").click(function(){
        $("#panel2").fadeIn();
    });
    $("n4").click(function(){
        $("#panel3").fadeIn();
    });

    $("end").click(function(){
    //    var div = $("*");
        $("*").animate({height: '100px', opacity: '0.4'}, "slow");
    //    div.animate({width: '100px', opacity: '0.8'}, "slow");
        $("*").fadeOut();
    });     
});