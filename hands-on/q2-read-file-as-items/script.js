let loadFruits = document.querySelector("#load-fruits");
loadFruits.addEventListener('click', async function(){
    let response = await axios.get("items.txt");
    
    // Q1. Read the content of items.txt and print it to the console
    let fruitItems = response.data; 
    console.log(fruitItems)
    
    // console.log(typeof fruitItems); == string
    let fruitArr = fruitItems.split(",")
    console.log(fruitArr) // gives an Array of fruits
    
    // Q2. Add each fruit inside the file into an unordered list inside your index.html (that is, display each fruit as its own bullet point)
    for (let item of fruitArr) {
        let newFruitItem = ` <li>${item}</li> `
        document.querySelector("#fruits").innerHTML += newFruitItem
    }
})