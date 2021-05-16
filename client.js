console.log('JS Loaded');//JS Test

$(document).ready(readyNow);//Loading JQ

let employeeArray = [];//Array to push employees on when finding sum



function submitInfo(){
    console.log('Submit button clicked')//Submit button test

    //GETTER//Person object with all relevant data
const person = {
    firstName : $('#firstIn').val(),
    lastName : $('#lastIn').val(),
    id : $('#idIn').val(),
    title : $('#titleIn').val(),
    annualSalary : $('#salaryIn').val()
}
    
    //Properly appending info to new row in DOM
     $('.table').append(`<tr class = "nRow" >
                <td id = "appFn">${person.firstName}</td>
                <td id = "appLn">${person.lastName}</td>
                <td id = "appId">${person.id}</td>
                <td id = "appTitle">${person.title}</td>
                <td id = "appSalary">${person.annualSalary}</td>
                <td><button class="btn btn-danger" id = "deleteBtn" >Delete</button></td>
            </tr>`)

    // CLEAR INPUT
    $('#firstIn').val('');
    $('#lastIn').val('');
    $('#idIn').val('');
    $('#titleIn').val('');
    $('#salaryIn').val('');

    //Test to make sure all entered info if being properly 'grabbed' from input boxes
    console.log(person.firstName , person.lastName , person.id , person.title , person.annualSalary )

    //How to find monthly total from salary, get total, and add to previous
    let total = 0;
    function monthlyTotal(array){
        for (let i = 0; i < array.length; i++){
        total = array[i].annualSalary;
        total = Number(total);
        total += total;
        total = total/12}
        $('.monthly').append(total)
       return total;
    }
    //adds person to array for getting total salary sum
    employeeArray.push(person);

    //Call on monthlyTotal function to get salary values
    monthlyTotal(employeeArray)
}

 
//OLD CODE 'Weird comment in and out from IDE'
// function newTableRow(){
//    $('.table').append(`<tr>
//                 <td class = "newColumn" >${person.firstName}</td>
//                 <td class = "newColumn" >${person.lastName}</td>
//                 <td class = "newColumn" >${person.id}</td>
//                 <td class = "newColumn" >${person.title}</td>
//                 <td class = "newColumn" >${person.annualSalary}</td>
//                 <td>HI</td>
//             </tr>`)
// }


//Function for getting from click event
function readyNow(){
    console.log('JQ Loaded')

    $('#submit').on('click', submitInfo)

    $('.table').on('click', '#deleteBtn', deleteInfo);

    // $('.table').on('click', '.newTable', newTableRow)

    // $('.parentTable').on('click', '.newTable', newTableRow);  NOT DONE YET
}

//Function to delete info from input boxes
function deleteInfo(){
    console.log('Delete Button Clicked')
     $(this).closest('.nRow').remove();
}
