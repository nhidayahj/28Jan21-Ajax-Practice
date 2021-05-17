// GET all tv shows 

async function loadData() {
    let response = await axios.get('https://api.tvmaze.com/shows');
    return response.data;
}

// get genres array for dropdown
function getGenre(shows) {
    let allGenres = [];
    for (let show of shows) {
        for (let i of show.genres) {
            if (!allGenres.includes(i)) {
                allGenres.push(i)
            } 
            continue;
        }
    }
    return allGenres;
}

