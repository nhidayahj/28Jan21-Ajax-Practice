let loadImg = document.querySelector("#load-image-btn");

loadImg.addEventListener('click', async function(){
    let response = await axios.get('artwork.json')
    //console.log(response.data);

    let artworkTitle = response.data.title; 
    console.log(artworkTitle)
    document.querySelector('#title').innerHTML = artworkTitle;
    let artworkImg = response.data.image_url
    console.log(artworkImg)
    
    document.querySelector("#artwork").innerHTML = `<img src="${artworkImg}" width='300' height='300'>`; 
})