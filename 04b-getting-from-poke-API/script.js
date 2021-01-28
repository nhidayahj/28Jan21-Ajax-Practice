let button = document.querySelector('#search-btn');
let url = "https://pokeapi.co/api/v2/pokemon/";

button.addEventListener('click', async function(){
    // extract out what we searching for
    let pokemonName = document.querySelector("#pokemon-name").value;
    let response = await axios.get(url + pokemonName);
    let HTMLfragment = `<h1>${response.data.name}</h1>
            <h2>Weight: ${response.data.weight}</h2>
            <img src="${response.data.sprites.front_default}"/>`

    let resultDiv = document.querySelector("#result");
    resultDiv.innerHTML = HTMLfragment;
})

