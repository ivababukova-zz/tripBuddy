/**
 * Created by kriso on 10/11/15.
 */

$(document).ready(function(){
    $("#createCarTrip").click(function(){
        $("#createTripHome").hide();
        $("#createCarTripPage").show();
}
    );

  /*  $("#loginButton").click(function(){
        $("#createTripHome").show();
        $("#navbar").show();
        $("#mainpage").hide();
    });
*/
    $('#datepicker').datepicker();

    $("#uniqueTrip").click(function(){
        $("#datepicker").show();
        });
    $(".sound").keypress(function() {
        var sound = new Audio("sounds/button2.mp3");
        sound.currentTime = 0;
        sound.play();
    });
});
