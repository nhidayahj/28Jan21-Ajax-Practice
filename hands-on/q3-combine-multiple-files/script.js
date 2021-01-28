let loadBtn = document.querySelector("#load-btn")
let itemArr = [];

async function loadData() {
    let response1 = await axios.get("file1.txt");
    let response2 = await axios.get("file2.txt");

    let file1Content = response1.data;
    let file2Content = response2.data;

    file1Content = file1Content.split("\n")
    file2Content = file2Content.split("\n");

    newArr = file1Content.concat(file2Content);
}

loadBtn.addEventListener('click', function(){
    loadData();
    
    for (let i = 0; i<itemArr.length; i++) {
        console.log(itemArr[i])
    }

})