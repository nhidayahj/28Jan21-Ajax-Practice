let allShows;

window.addEventListener('DOMContentLoaded', async() => {
    allShows = await loadData();
    console.log(allShows);
})