
const primerElemento = document.querySelector('.Topping');


// aquí se le asigno un estilo en linea al elemento tomado con querySelector
primerElemento.style.backgroundColor = 'blue';
primerElemento.style.color = 'lightblue';
primerElemento.style.textTransform = 'uppercase';

// ahora vamos a acceder al texto desde el Dom

const toppingList = document.getElementById('listOfToppings');

//innerText sirve para ver tal cual fuera HTML
console.log(toppingList.innerText);

//textContent es muy parecido a innerText pero muestra los espacios
console.log(toppingList.textContent);

//innerHTML es casi lo mismo pero, esta te muestra exactamento como es que aparece en html
console.log(toppingList.ineerHTML);

// ----------------------------------------------------

// cambiaremos texto desde el DOM

const titulo = document.getElementById(title);
console.log(title);

