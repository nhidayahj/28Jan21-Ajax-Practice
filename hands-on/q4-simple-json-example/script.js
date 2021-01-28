let loadImg = document.querySelector("#load-image-btn");

loadImg.addEventListener('click', async function(){
    let response = await axios.get('artwork.json')
    //console.log(response.data);

    let artworkTitle = response.data.title; 
    document.querySelector('#title').innerHTML = artworkTitle;
    let artworkImg = response.data.img_url
    document.querySelector("#artwork").innerHTML = `<img src=` 
})