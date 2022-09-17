let images = {
  banana: "images/banana.jpg",
  orange: "images/orange.jpg",
  watermelon: "images/watermelon.jpg",
};

function photoDisplay(){
  document.getElementById("photo").setAttribute("src", images.banana,);
  document.getElementById("photo1").setAttribute("src", images.orange,);
  document.querySelector("#photo2").setAttribute("src", images.watermelon,);   
 };
photoDisplay();
let groceries = [
  {
      fruitName: "Orange",
      price: 40,
      weight: 1.5
  },
  {
      fruitName: "Banana",
      price: 60,
      weight: 1.7
  },
  {
      fruitName: "Watermelon",
      price: 50,
      weight:1.2
  }
];


const displayFruits= () =>{
  let element = document.getElementById("output");
  let order = document.getElementById("order").value;
  element.innerHTML="";
  let sorted = groceries.sort((fruit1, fruit2,)=>{
    if(fruit1[order] > fruit2[order])
      return 1
    else if (fruit1[order] < fruit2[order])
      return -1
    else
      return 0;
  });
  sorted.forEach(fruit=>{
    element.innerHTML +=`<p>Name:<b>${fruit.fruitName}</b>, Price:<b>Ksh.${fruit.price}</b>, Weight:<b>${fruit.weight}(g)</b></p>`
  })
};
document.getElementById("load").addEventListener("click",displayFruits);

