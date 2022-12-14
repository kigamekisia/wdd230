const requestURL = 'https://byui-cit230.github.io/lessons/lesson-09/data/latter-day-prophets.json';
const cards = document.querySelector(".cards");


fetch(requestURL)
.then(function (response) {
return response.json();
})
.then(function (jsonObject) {
    const prophets = jsonObject["prophets"];
    console.table(jsonObject); // temporary checking for valid response and data parsing
    prophets.forEach(displayProphets);
  
});



function displayProphets(prophet) {
    // Create elements to add to the document
    let card = document.createElement('section');
    let h2 = document.createElement('h2');
    let photo = document.createElement('img');
    let dateofbirth = document.createElement('h4');
    let placeofbirth = document.createElement('h4');
  
    // Change the textContent property of the h2 element to contain the prophet's full name
    h2.textContent = `${prophet.name} ${prophet.lastname}`;
  
    // Build the image attributes by using the setAttribute method for the src, alt, and loading attribute values. (Fill in the blank with the appropriate variable).
    photo.setAttribute('src', prophet.imageurl);
    photo.setAttribute('alt', 'Portait of ' + `${prophet.name} ${prophet.lastname} ${prophet.order}the Latter-day President`);
    photo.setAttribute('loading', 'lazy');
    dateofbirth.innerText = `Date of Birth: ${prophet.birthdate}`;
    placeofbirth.innerText = `Place of Birth: ${prophet.birthplace}`;
  
    // Add/append the section(card) with the h2 element
    card.appendChild(h2);
    card.appendChild(dateofbirth);
    card.appendChild(placeofbirth);
    card.appendChild(photo);
    
  
    // Add/append the existing HTML div with the cards class with the section(card)
    document.querySelector('div.cards').appendChild(card);
  }