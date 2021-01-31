
// }); // end of event listener for loadUser button

// let searchBtn = document.querySelector("#search")
// searchBtn.addEventListener('click', function(){
    
// })


function searchBtn(data) {
    let searchBtn = document.querySelector("#search-btn")
    searchBtn.addEventListener('click', () => {
    let userID = parseInt(document.querySelector("#search-id").value);
    let displaySearchedID = document.querySelector("#all-users");
    
    for (let user of data) {
        if (userID == user.userId) {
            let displayResult = `
            <li>First Name: ${user.firstName}</li>
            <li>Last Name: ${user.lastName}</li>
            `
            displaySearchedID.innerHTML = displayResult;
        } 
    }
})
}

let loadUser = document.querySelector("#load-users-btn");
loadUser.addEventListener('click', async function(){
    let response = await axios.get("users.json");
    console.log(response.data);

    for (let name of response.data.users){
        let newData = `
            <li>First Name: ${name.firstName}</li>
            <li>Last Name: ${name.lastName}</li>
            <li>Email Address: ${name.emailAddress}</li>
    ` 
    document.querySelector("#all-users").innerHTML += newData;
    }

    searchBtn(response.data.users);
})


//add event listener for the 'Search' Button 
