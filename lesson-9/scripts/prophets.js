const requestURL = 'https://byui-cit230.github.io/lessons/lesson-09/data/latter-day-prophets.json';
const cards = document.querySelector(".cards");


fetch(requestURL)
.then(function (response) {
return response.json();
})
.then(function (jsonObject) {
    const prophets = jsonObject["prophets"];
    console.table(jsonObject);
    prophets.forEach(displayProphets);
  
});



function displayProphets(prophet) {
    
    let card = document.createElement('section');
    let h2 = document.createElement('h2');
    let portrait = document.createElement('img');
    let dateofbirth = document.createElement('h4');
    let placeofbirth = document.createElement('h4');
  
    
    h2.textContent = `${prophet.name} ${prophet.lastname}`;
  
    
    portrait.setAttribute('src', prophet.imageurl);
    portrait.setAttribute('alt', 'Portait of ' + `Portrait of ${prophet.name} ${prophet.lastname} ${prophet.order}th Latter-day President`);
    portrait.setAttribute('loading', 'lazy');
    dateofbirth.innerText = `Date of Birth: ${prophet.birthdate}`;
    placeofbirth.innerText = `Place of Birth: ${prophet.birthplace}`;
  
    
    card.appendChild(h2);
    card.appendChild(dateofbirth);
    card.appendChild(placeofbirth);
    card.appendChild(portrait);
    
  

    document.querySelector('div.cards').appendChild(card);
  }