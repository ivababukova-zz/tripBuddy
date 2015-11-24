/**
 * Created by iva on 11/21/15.
 */


$(document).ready(function(){
  $("#carTripsButton").click(function(){

    $("#TaxiTrips").hide();
    $("#walkTrips").hide();
    $("#carTrips").show();

  });

  $("#taxiTripsButton").click(function(){
    $("#TaxiTrips").show();
    $("#walkTrips").hide();
    $("#carTrips").hide();
  });

  $("#walkTripsButton").click(function(){
    $("#TaxiTrips").hide();
    $("#walkTrips").show();
    $("#carTrips").hide();
  });

  $("#allTripButton").click(function(){
    $("#TaxiTrips").show();
    $("#walkTrips").show();
    $("#carTrips").show();
  });

});