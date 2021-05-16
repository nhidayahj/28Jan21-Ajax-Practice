// GET all tv shows 
async function loadData() {
    let response = await axios.get('https://api.tvmaze.com/shows');
    return response.data;
}

// show random shows upon load

