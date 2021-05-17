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


// check if image is available 
function checkImg(show) {
    if (show.hasOwnProperty('image')) {
        console.log("image exists")
        return `
         <img class="card-img-top" src="${show.image.medium}" alt="Card image cap">
        `
    } else {
        console.log("image not exists")
        return `<img class="card-img-top" src="${show.image.medium}" alt="Card image cap">
        `
    }
}


// get shows based on the genre selected
function filterGenre(shows, genre) {
    let foundShow=[];
    // user selects genre from dropdown
    for (let show of shows) {
        if (show.genres.includes(genre)) {
            foundShow.push({
                id:show.id,
                title:show.name,
                image:show.image.medium,
                ratings:show.rating.average,
                genres:show.genres,
                summary:show.summary
            });
        }
    }
    return foundShow;
    // display shows that user select
}