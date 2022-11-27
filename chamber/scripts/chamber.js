let d = new Date(document.lastModified);
let fullDate = d.getMonth() + 1 + "/" + d.getDate() + "/" + d.getFullYear();
document.getElementById("modified").textContent = fullDate;
document.getElementById("year").textContent = new Date().getFullYear();
d = new Date();
let day = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"][d.getDay()];
let month = ["January", "Febuary", "March", "April", "May", "June", "July", "August", "November", "September", "October", "November", "December"][d.getMonth()]
document.getElementById("date").textContent = day + ", " + String(d.getDate()) + " " + month + " " + d.getFullYear();

// banner
if (d.getDay() == 1 || d.getDay() == 2) {
    document.getElementById("banner").style.display = "block";
}

// add spotlight for Gold or Silver members
const spotlightDiv = document.querySelectorAll(".spoth section");
const data = "json/data.json"; 


fetch(data)
    .then(function(response) {
        return response.json();
    })
    .then(function(jsonObject) {
        const businesses = jsonObject['members']

        const filtered = businesses.filter((members) => {
            return members.membershiplevel == "Gold" || members.membershiplevel == "Silver";

        });


        spotlightDiv.forEach((spotlight, index) => {
            const rand = Math.floor(Math.random() * filtered.length);
            const members = filtered[rand];

       

            let name = document.createElement("h2");
            let logo = document.createElement("img");
            let hr = document.createElement('hr');
            let address = document.createElement("p");
            let phone = document.createElement("p");
            let a = document.createElement("a");

            name.textContent = members.name;
            logo.setAttribute('src', members.image);
            logo.setAttribute('alt',` ${members.name} logo`);
            logo.setAttribute('loading', 'lazy');
            address.textContent = members.address;
            phone.textContent = members.contact;
            a.setAttribute('href', `${members.websiteurl}`);
            a.setAttribute("target", "_blank");
            a.textContent = (`Website`);
  

            spotlight.appendChild(name);
            spotlight.appendChild(logo);
            spotlight.appendChild(hr);
            spotlight.appendChild(address);
            spotlight.appendChild(phone);
            spotlight.appendChild(a);

            filtered.splice(rand, 1);
        });
    });