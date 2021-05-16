let allShows;

window.addEventListener('DOMContentLoaded', async () => {
    allShows = await loadData();
    console.log(allShows);
    // get 12 random show 
    let arr = [];
    while (arr.length < 12) {
        let r = Math.floor(Math.random() * 241);
        if (!arr.includes(r)) {
            arr.push(r);
        }
    }
    console.log("Random show index: ", arr);
    for (let i of arr) {
        showCard = `
            <div class="col-3 mt-3 mb-3">
                <div class="card" style="width: 18rem;">
                <img class="card-img-top" src="${allShows[i].image.medium}" alt="Card image cap">
                    <div class="card-body">
                        <h5 class="card-title">${allShows[i].name}</h5>
                        <a href="#" class="btn btn-primary" id=${allShows[i].id}>Read More</a>
                    </div>
                </div>
            </div>
        `
        document.getElementById('content').innerHTML += showCard;
    }
})
