let btn = document.querySelector("#load-btn");
btn.addEventListener('click', function(){
    // we can use axios inside script.js because we have included
    // axios.min.js in the html file

    // use axios to get the file 'data.txt' and then WHEN it's finished,
    // call the callback function which is given as the first argument to
    // the then() function
    axios.get('data.txt').then(function(response){
        console.log("File loading is done")
        document.querySelector('#content').value = response.data;
    });  

})

let loadHTMLButton = document.querySelector("#load-html");
loadHTMLButton.addEventListener('click', function(){
    axios.get('snippet.html').then(function(response){
        let articleElement = document.querySelector('#article');
        articleElement.innerHTML =  response.data;
    })
})