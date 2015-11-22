/**
 * Created by kriso on 14/11/15.
 */

var carModels= ["Ford Fiesta","Ford Focus","Vauxhall Corsa","Volkswagen Golf","Vauxhall Astra","Nissan Qashqai","Volkswagen Polo","Audi A3",
    "Fiat 500", "Nisan Juke","Mercedes C-Class"];

var times = ["00:00","00:30","01:00","01:30","02:00","02:30","03:00","03:30","04:00","04:30","05:00","05:30","06:00","06:30","07:00","07:30","08:00","08:30","09:00","09:30",
             "10:00","10:30","11:00","11:30","12:00","12:30","13:00", "13:30", "14:00", "14:30", "15:00", "15:30", "16:00", "16:30", "17:30", "18:00", "18:30", "18:00", "18:30", "18:00", "18:30", "18:00", "18:30", "18:00", "18:30", "18:00", "18:30", "18:00", "18:30", "18:00"]

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

    createTime();
}
);

var createTime=function(e){
    var timeDropDown = document.getElementById("timeOptions")
    var timeArrayLength = times.length;
    var htmlString = "";
    for( var i=0; i< timeArrayLength; i++){
        console.log(htmlString);
       htmlString = htmlString.concat(" <li><a href=\"#\">",times[i],"</a></li>")
    }
    timeDropDown.innerHTML = htmlString;
}