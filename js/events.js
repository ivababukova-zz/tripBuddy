/**
 * Created by kriso on 10/11/15.
 */

$(document).ready(function(){
    $("#createCarTrip").click(function(){
        $("#createTripHome").hide();
        $("#createCarTripPage").show();
}
    );

    $("#loginButton").click(function(){
        $("#createTripHome").show();
        $("#navbar").show();
        $("#mainpage").hide();
    });

    $('#datepicker').datepicker();

    $("#uniqueTrip").click(function(){
        $("#datepicker").show();
        });
    $(".sound").keypress(function(){
        var audio = document.getElementById("audio");
        audio.play();
    })

});
