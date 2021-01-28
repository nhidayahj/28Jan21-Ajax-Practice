let button = document.querySelector('#search-btn');
let url = "https://www.omdbapi.com/";
let apiKey = "c56cf955";

button.addEventListener('click', async function(){
    let searchTerms = document.querySelector('#movie-title').value;
    let response = await axios.get(url, {
        'params': {
            's':searchTerms,
            'apiKey': apiKey
        }
    });
    console.log(response.data);
});

