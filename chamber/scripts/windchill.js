
let tempElement = document.getElementById("temp");
let windElement = document.getElementById("wind");
let chillElement = document.getElementById("chill");

const wind = Math.floor(Math.random() * 100) / 10;
const temp = Math.floor(Math.random() * 100);

tempElement.textContent = temp;
windElement.textContent = wind;

if ((temp <= 50) && (wind > 3.0)) {
    chillElement.textContent = Math.floor((35.74 + (0.6215 * temp) - (35.75 * Math.pow(wind, 0.16)) + (0.4275 * temp * Math.pow(wind, 0.16))) * 10) / 10
} else {
    chillElement.textContent = "N/A"
}

// let temperature = parseFloat(document.getElementById("temp").innerText);
// let windSpeed = parseFloat(document.getElementById("wind").innerText);
// let windChill = "";



// if ((temp <= 50) && (wind > 3.0)) {
//     windChill = 35.74 + (0.6215 * temperature) - 
//     (35.75 * (windSpeed ** 0.16)) + (0.4275 * temperature * (windSpeed ** 0.16)); 
//     windChill = Math.round(windChill);
// } else {
//     windChill = "N/A";
// }
// document.querySelector("#chill").innerHTML = windChill;
