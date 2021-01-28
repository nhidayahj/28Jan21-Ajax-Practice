let loadArticleButton = document.querySelector('#load-article-btn');
loadArticleButton.addEventListener('click', function(){
    axios.get('article.json').then(function(response){
        // cache response.data into a variable
        let article = response.data;
        let articleHTML = `<h1>${article.title}<h1>
        <h2>By: ${article.author} </h2>
        <div>
            ${article.content}
        </div>`;

        let articleDiv = document.querySelector('#article');
        articleDiv.innerHTML = articleHTML;

        // console.log(response.data);
        // console.log("Author:", response.data.author);
        // console.log("Title", response.data.title);
        // console.log("Content", response.data.content);
    })
})