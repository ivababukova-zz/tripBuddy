/**
 * Created by iva on 11/11/15.
 */

function hideElement(id) {
  document.getElementById(id).style.display = 'none';
  if(id === "startPage") {
    showElement('loginPage');
  }
}

function showElement(id) {
  document.getElementById(id).style.display = 'block';
}

// this is for log in
function getLocalProfile(id){
  console.log("zdrasti");
  //var profileImgSrc      = localStorage.getItem("pictures/navbar/userAvatar.png");
  //var profileName        = "TestUser";

  $("#startPage").css({"display":"none"});
  hideElement(id);
  hideElement('sth');
  showElement('navbar');
  showElement('createTripHome');
}


var display = 'block';

function setDisplay() {
  return 'block';
}