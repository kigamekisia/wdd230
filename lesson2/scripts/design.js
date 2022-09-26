let images = {
    quip: "images/quip_image.jpg",
    momentum: "images/momentum_image.jpg",
    squarespace: "images/squarespace_image.jpg",
  };
  
  function photoDisplay(){
    document.getElementById("first").setAttribute("src", images.quip,); 
    document.getElementById("second").setAttribute("src", images.momentum,); 
    document.getElementById("third").setAttribute("src", images.squarespace,); 
   };
  photoDisplay()
let d = new Date();
let year = d.getFullYear();
document.querySelector("#year").innerHTML = year;
let lastModified = document.lastModified;
document.getElementById("modified").innerHTML = lastModified;