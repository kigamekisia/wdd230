let images = {
  kigame: "images/kigame_profile.jpg",
  orange: "images/orange.jpg",
  watermelon: "images/watermelon.jpg",
};

function photoDisplay(){
  document.getElementById("photo").setAttribute("src", images.kigame,); 
 };
photoDisplay()
let d = new Date;
let dayName = daynames[d.getDay()];
let monthName= months[d.getMonth()];
year = d.getFullYear();
document.getElementById("date").textContent = year;