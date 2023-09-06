import pizzaOPerations from "../services/pizza-operations.js";
async function printPizzas() {
  const allPizzas = await pizzaOPerations.getPizzas();
  const div = document.getElementById('pizza-output');
  console.log(allPizzas);
  for(var pizza of allPizzas){
    const card = createCard(pizza);
    div.appendChild(card);
  }
}
printPizzas();

const printTotal =(pizzas) => pizzas.reduce((sum,pizza)=>sum+parseFloat(pizza.price),0);

function printBasket(){
  const basketDiv = document.getElementById('basket');
  basketDiv.innerHTML = '';
  const pizzasInCart = pizzaOPerations.pizzas.filter(pizza=>pizza.isAddedInCart);
  pizzasInCart.forEach(pizza=>{
    const pTag = printItem(pizza);
    // console.log(pTag);
    basketDiv.appendChild(pTag);
  })
  const total = printTotal(pizzasInCart).toFixed(2);
  console.log(total);
  const pTag = document.createElement('p');
  pTag.innerText = ` Total : ${total} AND GST : ${total*0.18}
  Amount to Pay : ${parseFloat(total)+parseFloat(total*0.18)}`;
  basketDiv.appendChild(pTag);
}

function printItem(pizza){
  const pTag = document.createElement('p');
  pTag.innerText = `Pizza Name : ${pizza?.name}, Pizza Price : ${pizza?.price}`;
  // console.log(pTag.innerText);
  return pTag;
}

function addToCart(){
 console.log("add called",this);
 const currentButton = this;
 const pizzaid = currentButton.getAttribute('pizza-id');
 pizzaOPerations.searchPizza(pizzaid);
 console.log(pizzaid);
 printBasket();
}
function createCard(pizza){
  // <div class="col-4">
  // </div>
const colDiv = document.createElement('div');
colDiv.className ='col-4';

// dynamically create html element
const cardDiv = document.createElement("div");
cardDiv.className = "card";
cardDiv.style = {width:'18rem',margin:'4px',boxShadow:'4px 4px'};
cardDiv.style = {};
const img = document.createElement('img');
img.src = pizza.url;
img.className = "card-img-top";
cardDiv.appendChild(img);
const cardBody = document.createElement('div');
cardBody.className = "card-body";
const h5 = document.createElement('h5');
h5.className = "card-title";
h5.innerHTML = pizza.name;
cardBody.appendChild(h5);
cardDiv.appendChild(cardBody);
const pTag = document.createElement('p');
pTag.className = "card-text";
pTag.innerText = pizza.desc;
cardBody.appendChild(pTag);
const button = document.createElement('button');
button.className = "btn btn-primary";
button.innerHTML = 'Add to cart';
// button.id = pizza.id 
// custum attribute
button.setAttribute('pizza-id',pizza.id);
button.addEventListener('click',addToCart);
cardBody.appendChild(button);
colDiv.appendChild(cardDiv);
return colDiv;

// <div class="card" style="width: 18rem;">
//   <img src="..." class="card-img-top" alt="...">
//   <div class="card-body">
//     <h5 class="card-title">Card title</h5>
//     <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
//     <a href="#" class="btn btn-primary">Go somewhere</a>
//   </div>
// </div>



}