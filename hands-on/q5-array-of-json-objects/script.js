let loadUserBtn = document.querySelector("#load-users-btn")
loadUserBtn.addEventListener('click', async function(){
    let response = await axios.get("users.json");
    //console.log(response.data);

    let userDataContent = response.data.users;
    console.log(userDataContent);

    for (let i of userDataContent) {
        userData = ` 
        <li>First Name: ${i.firstName}</li>
        <li>Last Name: ${i.lastName}</li>
        <li>Email Address: ${i.emailAddress}</li>`

        document.querySelector("#all-users").innerHTML += userData;
    }
    

}); // end of event listener for loadUser button

let searchBtn = document.querySelector("#search")
searchBtn.addEventListener('click', function(){
    
})