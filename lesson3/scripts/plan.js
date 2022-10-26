let images = {
    logo: "images/logo.webp",
  };
  
  function photoDisplay(){
    document.getElementById("logo").setAttribute("src", images.logo,); 
   };
  photoDisplay()
let d = new Date();
let year = d.getFullYear();
document.querySelector("#year").innerHTML = year;
let lastModified = document.lastModified;
document.getElementById("modified").innerHTML = lastModified;
