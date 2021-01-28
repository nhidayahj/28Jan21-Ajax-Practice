let loadBtn = document.querySelector("#load-btn")

loadBtn.addEventListener('click', async function(){
    let response = await axios.get("contact.txt");
    
    // check contact.txt output is displayed in console.
    //console.log(response.data);

    let newHTML = response.data
    document.querySelector("#content").innerHTML = newHTML;
})