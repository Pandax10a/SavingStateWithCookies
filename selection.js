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
}