let images = {
  kigame: "images/kigame_profile.jpg",
  orange: "images/orange.jpg",
  watermelon: "images/watermelon.jpg",
};

function photoDisplay(){
  document.getElementById("photo").setAttribute("src", images.kigame,); 
 };
photoDisplay()
let d = new Date();
let year = d.getFullYear();
document.querySelector("#year").innerHTML = year;
let lastModified = document.lastModified;
document.getElementById("modified").innerHTML = lastModified;