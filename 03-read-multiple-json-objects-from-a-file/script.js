// document.querySelector('#load-employee-btn').addEventListener('click', function(){
//     axios.get('employees.json').then(function(response){
 
//        for (let eachEmployee of response.data) {
//            let htmlSnippet = `<div class="card" style="width: 18rem;">
//             <div class="card-body">
//                 <h5 class="card-title">${eachEmployee.name}</h5>
//                 <div class="card-text">
//                     <ul>
//                         <li>Job Title:${eachEmployee.job_title}</li>
//                         <li>Salary:${eachEmployee.salary}</li>
//                     </ul>
//                 </div>
//             </div>
//             </div>`


//             let employeeDiv = document.querySelector("#employees");
//             // alternative: employeeDiv.innerHTML = employeeDiv.innerHTML + htmlSnippet
//             employeeDiv.innerHTML += htmlSnippet;
//        }

//     })
// })

document.querySelector('#load-employee-btn').addEventListener('click', async function(){

    let response = await axios.get('employees.json');
    updateDisplay(response.data);
   

});

// employees is an array of employee JSON object
function updateDisplay(employees) {
      for (let eachEmployee of employees) {
           let htmlSnippet = `<div class="card" style="width: 18rem;">
            <div class="card-body">
                <h5 class="card-title">${eachEmployee.name} <button>Edit</button></h5>
                <div class="card-text">
                    <ul>
                        <li>Job Title:${eachEmployee.job_title}</li>
                        <li>Salary:${eachEmployee.salary}</li>
                    </ul>
                </div>
            </div>
            </div>`


            let employeeDiv = document.querySelector("#employees");
            // alternative: employeeDiv.innerHTML = employeeDiv.innerHTML + htmlSnippet
            employeeDiv.innerHTML += htmlSnippet;
       }
}