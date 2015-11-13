/**
 * Created by iva on 11/11/15.
 */
var kupa = {};

$( document ).ready(function() {
    preload();
});


function preload(){
  console.log(kupa.kupa);

  if(kupa.kupa === undefined) {
    console.log("in preload func");
    $("#startPage").css({"display": 'block'});
    $("#loginPage").css({"display": 'none'});
//    $("#navbar").css({"display": 'none'});
//    $("#createTripHome").css({"display": 'none'});
    $('#body').css({"onload": 'foo()'});
    kupa.kupa = "kupa";
  }
}

// this is for log in
function getLocalProfile(){
  console.log("zdrasti");
  //var profileImgSrc      = localStorage.getItem("pictures/navbar/userAvatar.png");
  //var profileName        = "TestUser";

  $("#startPage").css({"display":'none'});
  $("#loginPage").css({"display":'block'});
//  $("#navbar").css({"display":'block'});
//  $("#createTripHome").css({"display":'block'});

}

function login(){
  kupa = {};
  console.log("*****");
  $("#sth").css({"display":'none'});
  $("#loginPage").css({"display":'none'});
//  $("#navbar").css({"display":'block'});
//  $("#createTripHome").css({"display":'block'});
  isLoggedIn = true;
}

function foo(){
  console.log("in function foo");
}