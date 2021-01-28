let loadBtn = document.querySelector('#load-btn');

loadBtn.addEventListener('click', async function(){
    let response1 = await axios.get('file1.txt');
    let response2 = await axios.get('file2.txt');

    // console.log(response1.data, response2.data);
   
    let newTextArea = document.querySelector("#content")
    let contents = `${response1.data}\n${response2.data}
    `
    newTextArea.innerHTML = contents;


}); // end event listener