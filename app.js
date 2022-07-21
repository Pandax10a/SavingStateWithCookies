// setting up cookies' key
Cookies.set(`selection`, ``);

// setting up a variable for each of the 3 button using unique id
let chosen_pokemon_1 = document.querySelector(`#pokemon_1`);
chosen_pokemon_1.addEventListener(`click`, set_to_pikachu);

let chosen_pokemon_2 = document.querySelector(`#pokemon_2`);
chosen_pokemon_2.addEventListener(`click`, set_to_charizard);

let chosen_pokemon_3 = document.querySelector(`#pokemon_3`);
chosen_pokemon_3.addEventListener(`click`, set_to_squirtle);

let chosen_nothing = document.getElementById(`nothing`);
chosen_nothing.addEventListener(`click`, set_to_nothing);

// setting up a function to correspond to each of the 3 id, sets a value to selection key in cookie on click
function set_to_pikachu () {
    Cookies.set(`selection`, `Pikachu`);
    location.href = `selection.html`;
}

function set_to_charizard () {
    Cookies.set(`selection`, `Charizard`);
    location.href = `selection.html`;
}

function set_to_squirtle () {
    Cookies.set(`selection`, `Squirtle`);
    location.href = `selection.html`;
}

/* added another button along with variable and function to send user to next page to test for empty string or undefined value
of the key `selection` in cookies */
function set_to_nothing () {
    Cookies.set(`selection`);
    location.href = `selection.html`;
}