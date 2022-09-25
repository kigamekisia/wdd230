let d = new Date();
let year = d.getFullYear();
document.querySelector("#currentyear").innerHTML = year;
let lastModified = document.lastModified;
document.getElementById("modified").innerHTML = lastModified;