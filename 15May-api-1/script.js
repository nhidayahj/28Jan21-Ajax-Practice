let allShows;
let cleanList;
window.addEventListener('DOMContentLoaded', async () => {
    allShows = await loadData();
    cleanList = cleanData(allShows)
    console.log("clean data: ", cleanList)
    // get 12 random show 
    let arr = [];
    while (arr.length < 12) {
        let r = Math.floor(Math.random() * 241);
        if (!arr.includes(r)) {
            arr.push(r);
        }
    }
    console.log("Random show index: ", arr);
    // display tv cards 
    for (let i of arr) {
        showCard = `
            <div class="col-3 mt-3 mb-3">
                <div class="card" style="width: 18rem;">
                <img class="card-img-top" src="${allShows[i].image.medium}" alt="Card image cap">
                    <div class="card-body">
                        <h5 class="card-title">${allShows[i].name}</h5>
                        <p class="card-body">Genre: ${allShows[i].genres.join(', ')}</p>
                        <button type="button" class="btn btn-primary" data-toggle="modal" data-target="#${allShows[i].id}" 
                        >Read More</button>
                    </div>
                </div>
            </div>

            <div class="modal fade" id="${allShows[i].id}" tabindex="-1" role="dialog" aria-hidden="true">
            <div class="modal-dialog" role="document">
                <div class="modal-content">
                <div class="modal-header">
                    <h5 class="modal-title">${allShows[i].name}</h5>
                    <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                    <span aria-hidden="true">&times;</span>
                    </button>
                </div>
                <div class="modal-body">
                    ${allShows[i].summary}
                </div>
                <div class="modal-footer">
                    <button type="button" class="btn btn-secondary" data-dismiss="modal">Close</button>
                    <button type="button" class="btn btn-primary">Save changes</button>
                </div>
                </div>
            </div>
            </div>
        `
        document.getElementById('content').innerHTML += showCard;
    }

    // display dropdown menu items 
    let allGenres = getGenre(allShows);
    let dropdownOptions = document.querySelector('#tv-genre-menu')
    allGenres.map(g => {
        let menuItem = `
        <button class="dropdown-item genre" type="button"  
        value="${g}" id="${g.toLowerCase()}">${g}</button>
       `
        dropdownOptions.innerHTML += menuItem;
    })

    document.addEventListener('click', function (event) {
        if (event.target.matches('.genre')) {
            // clear the search field if user selects from dropdown instead
            document.querySelector("#search-field").value = ""
            console.log("selected genre: ", event.target.value);
            let shows = filterGenre(cleanList, event.target.value);
            console.log(shows)
            displayResult(shows, event.target.value);
            showTVCards(shows)

        }
    })


    document.querySelector('#search-btn').addEventListener('click', async function () {
        let searchTitle = document.querySelector('#search-field').value.toString();
        console.log("query search: ", searchTitle);
        let searchVal = await searchShow(searchTitle);
        console.log(searchVal)
        showTVCards(searchVal);
        displayResult(searchVal, searchTitle);
    })

})

