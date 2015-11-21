/**
 * Created by iva on 11/21/15.
 */


$(document).ready(function(){
  console.log("hiiiiiii!");
  $("#cars").hide();
  $("#taxis").hide();
  $("#walks").hide();
  $("#row4").hide();
  $("#row5").hide();

  $("#carTrips").click(function(){
      $("#row4").hide();
      $("#row5").hide();
      $("#taxis").hide();
      $("#walks").hide();
      $("#cars").show();

  });

  $("#taxiTrips").click(function(){
    $("#row4").hide();
    $("#row5").hide();
    $("#cars").hide();
    $("#walks").hide();
    $("#taxis").show();
  });

  $("#walkTrips").click(function(){
    $("#row4").hide();
    $("#row5").hide();
    $("#cars").hide();
    $("#taxis").hide();
    $("#walks").show();
  });

  $("#allTrips").click(function(){
    $("#cars").show();
    $("#taxis").show();
    $("#walks").show();
    $("#row4").show();
    $("#row5").show();
  });

});