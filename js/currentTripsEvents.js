/**
 * Created by iva on 11/21/15.
 */


$(document).ready(function(){
  $("#carTripsButton").click(function(){
    var sound = new Audio("sounds/car.wav");
    sound.currentTime=0;
    sound.play();

    $("#TaxiTrips").hide();
    $("#walkTrips").hide();
    $("#carTrips").show();

  });

  $("#taxiTripsButton").click(function(){
    var sound = new Audio("sounds/taxi.mp3");
    sound.currentTime=0;
    sound.play();
    $("#TaxiTrips").show();
    $("#walkTrips").hide();
    $("#carTrips").hide();
  });

  $("#walkTripsButton").click(function(){
    var sound = new Audio("sounds/walk.mp3");
    sound.currentTime=0;
    sound.play();
    $("#TaxiTrips").hide();
    $("#walkTrips").show();
    $("#carTrips").hide();
  });

  $("#allTripButton").click(function(){
      var sound = new Audio("sounds/all.wav");
      sound.currentTime=0;
      sound.play();
    $("#TaxiTrips").show();
    $("#walkTrips").show();
    $("#carTrips").show();
  });

});