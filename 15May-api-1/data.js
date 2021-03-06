// GET all tv shows 
let homeUrl = "https://8000-coral-spider-nmtnohdq.ws-us04.gitpod.io/15May-api-1/"

async function loadData() {
    let response = await axios.get('https://api.tvmaze.com/shows');
    return response.data;
}

function cleanData(shows) {
    let cleanShows = [];
    shows.map(s => {
        cleanShows.push({
            id: s.id,
            title: s.name,
            ratings: s.rating.average,
            image: s.image,
            genre: s.genres,
            summary: s.summary
        })
    })
    return cleanShows;
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




// get shows based on the genre selected
function filterGenre(shows, genre) {
    let foundShow = [];
    // user selects genre from dropdown
    for (let show of shows) {
        if (show.genre.includes(genre)) {
            foundShow.push(show);
        }
    }
    return foundShow;
}

// alert function for filter result
function displayResult(shows, name) {
        let result = `
        <div class="alert alert-info mt-3" role="alert">
            <b>${name}:</b> ${shows.length} search result(s) found   
        </div>
        
        `
        document.querySelector('#genre-result').innerHTML = result;
    
}

// display search result cards
function showTVCards(shows) {
    
    document.getElementById('content').style.display = "none";
    let showsArr = [];
    for (let show of shows) {
        if (show.image != null ) {
            showsArr.push(
                `
                           <div class="col-3 mt-3 mb-3">
                               <div class="card" style="width: 18rem;">
                               <img class="card-img-top" src="${show.image.medium}" alt="Card image cap">
                                   <div class="card-body">
                                       <h5 class="card-title">${show.title}</h5>
                                       <button class="btn btn-primary" data-toggle="modal" data-target="#${show.id}" >Read More</button>
                                   </div>
                               </div>
                           </div>

                           <div class="modal fade" id="${show.id}" tabindex="-1" role="dialog" aria-hidden="true">
                            <div class="modal-dialog" role="document">
                                <div class="modal-content">
                                <div class="modal-header">
                                    <h5 class="modal-title">${show.title}</h5>
                                    <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                                    <span aria-hidden="true">&times;</span>
                                    </button>
                                </div>
                                <div class="modal-body">
                                    <div>
                                        <img src="${show.image.medium}" alt="Card image cap">
                                    </div>
                                    <div>
                                        <p><b>Genre:</b> ${show.genre.join(', ')}</p>
                                        <p><b>Ratings:</b> ${show.ratings}</p>
                                        <p><b>Plot:</b> ${show.summary}</p>
                                    </div>
                                </div>
                                <div class="modal-footer">
                                    <button type="button" class="btn btn-secondary" data-dismiss="modal">Close</button>
                                </div>
                                </div>
                            </div>
                            </div>
                       `
            )
        }
        else {
            showsArr.push(
                `
                           <div class="col-3 mt-3 mb-3">
                               <div class="card" style="width: 18rem;">
                               <img class="card-img-top" src=".." alt="Card image cap">
                                   <div class="card-body">
                                       <h5 class="card-title">${show.title}</h5>
                                       <button class="btn btn-primary" data-toggle="modal" data-target="#${show.id}">Read More</button>
                                   </div>
                               </div>
                           </div>

                           <div class="modal fade" id="${show.id}" tabindex="-1" role="dialog" aria-hidden="true">
                            <div class="modal-dialog" role="document">
                                <div class="modal-content">
                                <div class="modal-header">
                                    <h5 class="modal-title">${show.title}</h5>
                                    <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                                    <span aria-hidden="true">&times;</span>
                                    </button>
                                </div>
                                <div class="modal-body">
                                   
                                    <div>
                                        <p><b>Genre:</b> ${show.genre.join(', ')}</p>
                                        <p><b>Ratings:</b> ${show.ratings}</p>
                                        <p><b>Plot:</b> ${show.summary}</p>
                                    </div>
                                </div>
                                <div class="modal-footer">
                                    <button type="button" class="btn btn-secondary" data-dismiss="modal">Close</button>
                                </div>
                                </div>
                            </div>
                            </div>
                       `
            )
        }
    }
    document.getElementById('selectedGenre').innerHTML = showsArr;

}

// filter show based on user's search query 
async function searchShow(title) {
    let filterSearch=[];
    let response = await axios.get('https://api.tvmaze.com/search/shows?', {
        params: {
            q:title
        }
    })
    response.data.map(s => {
        filterSearch.push({
            id: s.show.id,
            title: s.show.name,
            ratings: s.show.rating.average,
            image: s.show.image,
            genre: s.show.genres,
            summary: s.show.summary
        })
    })
    return filterSearch;
    // return filterSearch;
}
