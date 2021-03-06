console.log('JS Loaded');//JS Test

$(document).ready(readyNow);//Loading JQ

let employeeArray = [];//Array to push employees on when finding sum



function submitInfo(){
    console.log('Submit button clicked')//Submit button test

    //GETTER//Person object with all relevant data
let person = {
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
    let mTotal = 0;

    function monthlyTotal(array){
        for (let i = 0; i < array.length; i++){
        mTotal = array[i].annualSalary; //Set total equal to salary value at position i
        mTotal = parseFloat(mTotal);// Set total from string to number
        mTotal = mTotal/12}//Dividing annual salary by 12 to get monthly salary
        mTotal += mTotal;  // Getting the sum of one total and adding to previous
        $('.monthly').append(mTotal)
       return mTotal;
    }

    //Turns output red if over 20,000
    function salaryLimit(){
        if (mTotal > 20000){
            $('.monthly').addClass("turnRed")
        }
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
