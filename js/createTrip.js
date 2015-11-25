/**
 * Created by kriso on 14/11/15.
 */


var times = ["00:00","00:30","01:00","01:30","02:00","02:30","03:00","03:30","04:00","04:30","05:00","05:30","06:00","06:30","07:00","07:30","08:00","08:30","09:00","09:30",
             "10:00","10:30","11:00","11:30","12:00","12:30","13:00", "13:30", "14:00", "14:30", "15:00", "15:30", "16:00", "16:30", "17:30", "18:00", "18:30", "19:00", "19:30",
             "20:00", "20:30", "21:00", "21:30", "22:00", "22:30", "23:00", "23:30"];

$(document).ready(function() {
        $("#createCarTrip").click(function(){
                $("#createTripHome").hide();
                $("#createCarTripPage").show();
            }
        );
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

        function initialize() {
            var mapProp = {
                center:new google.maps.LatLng(51.508742,-0.120850),
                zoom:5,
                mapTypeId:google.maps.MapTypeId.ROADMAP
            };
            var map=new google.maps.Map(document.getElementById("googleMap"), mapProp);
        }
        google.maps.event.addDomListener(window, 'load', initialize);

    createTime();
    addFreeSeats();
}
);

/*
add options to time drop down
 */
var createTime=function(e){
    var timeDropDown = document.getElementById("timeOptions");
    var timeArrayLength = times.length;
    var htmlString = "";
    for( var i=0; i< timeArrayLength; i++){
       htmlString = htmlString.concat(" <li><a onclick='document.getElementById(\"timeDropDown\").innerHTML=\"" + times[i] + "\";'>",times[i],"</a></li>")
    }
    timeDropDown.innerHTML = htmlString;
};

var addFreeSeats = function(e){
    var seatDropDown = document.getElementById("freeSeats");
    if(seatDropDown != undefined) {
        var htmlString = "";
        for (var j = 1; j < 6; j++) {
            htmlString = htmlString.concat(" <li><a href=\"#\">", j, "</a></li>");
        }
        seatDropDown.innerHTML = htmlString;
    }
};