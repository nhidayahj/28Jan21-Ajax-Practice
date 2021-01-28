let button = document.querySelector('#load-btn');
let url = "https://jsonplaceholder.typicode.com/posts";
button.addEventListener('click', function(){
    let postParentDiv = document.querySelector("#all-posts");
    axios.get(url).then(function(response){
        for (let p of response.data) {
            let htmlFragment = `
             <div class="card mt-3 p-1">
                <div class="card-title">${p.title}</div>
                <div class="card-body">${p.body}</div>
            </div>
            `

            postParentDiv.innerHTML += htmlFragment;
        }
    })
})