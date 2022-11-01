// initialize display elements
const lastVisitDisplay = document.querySelector("#lastvisit");
const visitsDisplay = document.querySelector("#visits");

// get the stored value in localStorage
let numVisits = Number(window.localStorage.getItem("visits"));

// determine if this is the first visit or display the number of visits.
if (numVisits !== 0) {
	visitsDisplay.textContent = numVisits;
} else {
	visitsDisplay.textContent = `This is your first visit!`;
}

// increment the number of visits.
numVisits++;
// store the new number of visits value
localStorage.setItem("visits", numVisits);

lastvisit = localStorage.getItem("lastvist")

if (lastvisit == null) {
    lastvisit = new Date()
} 

lastVisitDisplay.textContent = Math.floor((new Date() - lastvisit) / (1000 * 60 * 60 * 24));
localStorage.setItem("lastvisit", new Date())
