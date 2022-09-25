let d = new Date();
let year = d.getFullYear();
document.querySelector("#year").innerHTML = year;
let lastModified = document.lastModified;
document.getElementById("modified").innerHTML = lastModified;