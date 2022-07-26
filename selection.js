// checking what value is stored for the key `selection`
let chosen_pokemon = Cookies.get(`selection`);

if (chosen_pokemon === `Pikachu`) {
    let body_page = document.querySelector(`body`);
    body_page.insertAdjacentHTML(`afterbegin`, `<h1>You Have Selected Pikachu</h1>`);
} else if (chosen_pokemon === `Charizard`) {
    let body_page = document.querySelector(`body`);
    body_page.insertAdjacentHTML(`afterbegin`, `<h1>You Have Selected Charizard</h1>`);
} else if (chosen_pokemon === `Squirtle`) {
    let body_page = document.querySelector(`body`);
    body_page.insertAdjacentHTML(`afterbegin`, `<h1>You Have Selected Squirtle</h1>`);
} else if (chosen_pokemon === `` || `undefined`) {
    let body_page = document.querySelector(`body`);
    body_page.insertAdjacentHTML(`afterbegin`, `<h1>Choose something</h1>`);
}

// added another button to return to index, it it checks for click on the button
let back_to_index = document.getElementById(`choose_again`);
back_to_index.addEventListener(`click`, back_to_index_now);
function back_to_index_now () {
    location.href = `index.html`
}

// saving something so git will push