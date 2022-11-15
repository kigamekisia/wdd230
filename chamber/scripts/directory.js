const requestURL = 'json/data.json';
const cards = document.querySelector('.cards');


fetch(requestURL)
.then(function (response) {
return response.json();
})
.then(function (jsonObject) {
    const members = jsonObject["members"];
    console.table(jsonObject); // temporary checking for valid response and data parsing
    members.forEach(displayMembers);
  
});



function displayMembers(members) {
    // Create elements to add to the document
    let card = document.createElement('div');
    let companyName = document.createElement('h2');
    let photo = document.createElement('img');
    let address = document.createElement('p');
    let contact = document.createElement('p');
    let membership = document.createElement('p');
    let a = document.createElement('a')

  
    // Change the textContent property of the h2 element to contain the prophet's full name
    companyName.textContent = `${members.name}`;
  
    // Build the image attributes by using the setAttribute method for the src, alt, and loading attribute values. (Fill in the blank with the appropriate variable).
    photo.setAttribute('src', members.image);
    photo.setAttribute('alt', `${members.name} logo`);
    photo.setAttribute('loading', 'lazy');
    address.innerText = `Adress: ${members.address}`;
    contact.innerText = `Contact: ${members.contact}`;
    membership.innerText = `Membership Level: ${members.membershiplevel}`;
    a.setAttribute('href', `${members.websiteurl}`);
    a.setAttribute("target", "_blank");
    a.textContent = (`Website`);
  
    // Add/append the section(card) with the h2 element
    card.appendChild(companyName);
    card.appendChild(photo);
    card.appendChild(membership);
    card.appendChild(address);
    card.appendChild(contact);
    card.appendChild(a);

    
  
    // Add/append the existing HTML div with the cards class with the section(card)
    document.querySelector('div.cards').appendChild(card);
  }
//Button
const gridbutton = document.querySelector("#grid");
const listbutton = document.querySelector("#list");
const display = document.querySelector(".cards");

// The following code could be written cleaner. How? We may have to simplfiy our HTMl and think about a default view.

gridbutton.addEventListener("click", () => {
	// example using arrow function
	display.classList.add("grid");
	display.classList.remove("list");
});

listbutton.addEventListener("click", showList); // example using defined function

function showList() {
	display.classList.add("list");
	display.classList.remove("grid");
}
