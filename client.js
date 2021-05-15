console.log('JS Loaded');

$(document).ready(readyNow);

let employeeArray = [];

function submitInfo(){
    console.log('Submit button clicked')

    //GETTER
const person = {
    firstName : $('#firstIn').val(),
    lastName : $('#lastIn').val(),
    id : $('#idIn').val(),
    title : $('#titleIn').val(),
    annualSalary : $('#salaryIn').val()
}

//APPEND TO TABLE
    // $('.table').append(`<tr></tr>`)
    // $('.table').append(`<td>${person.firstName}</td>`);
    // $('.table').append(`<td>${person.lastName}</td>`);
    // $('.table').append(`<td>${person.id}</td>`);
    // $('.table').append(`<td>${person.title}</td>`);
    // $('.table').append(`<td>${person.annualSalary}</td>`);

 
    
    //$('.table').addClass(person.firstName);
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

    //TESTER FOR CLICK EVENT
    console.log(person.firstName , person.lastName , person.id , person.title , person.annualSalary )

    let total = 0;
    function monthlyTotal(array){
        for (let i = 0; i < array.length; i++){
        total = array[i].annualSalary;
        total += Number(total);
        total = total/12}
        $('.monthly').append(total)
       return total;
    }

    employeeArray.push(person);

    // monthlyCost(person.annualSalary);
    monthlyTotal(employeeArray)

 

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


function readyNow(){
    console.log('JQ Loaded')

    $('#submit').on('click', submitInfo)

    $('.table').on('click', '#deleteBtn', deleteInfo);

    // $('.table').on('click', '.newTable', newTableRow)

    // $('.parentTable').on('click', '.newTable', newTableRow);  NOT DONE YET
}

function deleteInfo(){
    console.log('Delete Button Clicked')
     $(this).closest('.nRow').remove();
}

//     let total = 0;
// function monthlyTotal(array){
//         for (let i = 0; i < array.length; i++){
//         total = array[i].annualSalary;
//         total += Number(total);
//         total = total/12;
//         $('.monthly').append(total)}