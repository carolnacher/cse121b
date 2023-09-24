/* W02-Task - Profile Home Page */

/* Step 1 - Setup type tasks - no code required */

/* Step 2 - Variables */

let fullName = "Carol Nacher";
let currentYear = "2023";
let profilePicture = "images/carol.jpg";



/* Step 3 - Element Variables */

const nameElement = document.getElementById('name');
const foodElement = document.getElementById('food');
const yearElement = document.querySelector('#year');

const imageElement = document.querySelector('img');

/* Step 4 - Adding Content */

nameElement.innerHTML = `<strong>${fullName}</strong>`;
yearElement.innerHTML = ` <strong>${currentYear}</strong>`;

imageElement.setAttribute('src', profilePicture);


/* Step 5 - Array */

let favoriteFood = ['Pizza','Meat pie','Hamburger','Icecream','BQB'];
foodElement.innerHTML += `<br>${favoriteFood}`;

let itemFavoriteFood = ('Soup');
favoriteFood.push(itemFavoriteFood);
foodElement.innerHTML += `<br>${favoriteFood}`;

favoriteFood.shift();
foodElement.innerHTML += `<br>${favoriteFood}`;

favoriteFood.pop();
foodElement.innerHTML += `<br>${favoriteFood}`;