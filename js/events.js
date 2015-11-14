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
        $("#dateAndTime").show();
        $("#datepicker").show();
        $("#weekDays").hide()
        });

    $("#weeklyTrip").click(function(){
        $("#dateAndTime").hide();
        $("#weekDays").show();
    });

    $('#datetimepicker2').datepicker({
        pickDate: false
    });

    $(".sound").keypress(function() {
        var sound = new Audio("sounds/button2.mp3");
        sound.currentTime = 0;
        sound.play();
    });
});
