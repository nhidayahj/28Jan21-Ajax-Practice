# Run the server
```
python3 -m http.server
```

# Setting up Axios

Be sure to include `axios.js` before our own `script.js` because our `script.js` will depend on `axios.js`

```
<script src="https://cdnjs.cloudflare.com/ajax/libs/axios/0.19.2/axios.min.js"></script>
<script src="script.js"></script>
```

# Load a file
```
axios.get('data.txt').then(function(response){
    // code to execute when the file finishes loading
    // the content of the file will be available at response.data
})
```

## Relative Filepath
Usually we provide a **relative filepath** as the first argument to `axios.get()`. This means
that axios will start searching for the file in the **same folder** as the JS file that is
running.

# Load a JSON file
If axios detects that the file is a JSON file, it will automatically convert the `data` to a JavaScript object.

```
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
})
```

A JavaScript object is the same as a Python dictionary, except that you access the key by `.`

```
let o = {
    'name':'Ah Kow',
    'age':32
}

// to access the name key is:
// in Python we have to do: o["name"]
console.log(o.name)
```

# Fetching from API endpoint

An API endpoint is just a URL. The special thing about such URLs is that they return a JSON file.

The very act of accessing an endpoint is also known as **consuming** the end point.

# Steps in using a new API

1. Try it out in the browser address bar

2. Copy and paste the raw response into JSON Pathfinder for analysis

3. Decide the trigger to load the data (for example: click on a button)

4. Create the event listener for the trigger and then use axios to fetch the data
   (either promises or await/async)

5. Once the data is loaded in, then act on it. Maybe:
    * Append it to an existing element
    * Replace an existing element
    * Use it to change the attribute of an element etc.