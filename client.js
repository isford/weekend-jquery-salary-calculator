console.log('JS Loaded');

$(document).ready(readyNow);

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
    $('#appFn').append(`<td>${person.firstName}</td>`);
    $('#appLn').append(`<td>${person.lastName}</td>`);
    $('#appId').append(`<td>${person.id}</td>`);
    $('#appTitle').append(`<td>${person.title}</td>`);
    $('#appSalary').append(`<td>${person.annualSalary}</td>`);

    // CLEAR INPUT
    $('#firstIn').val('');
    $('#lastIn').val('');
    $('#idIn').val('');
    $('#titleIn').val('');
    $('#salaryIn').val('');

    //TESTER FOR CLICK EVENT
    console.log(person.firstName , person.lastName , person.id , person.title , person.annualSalary )

    
}

// function newTableRow(){
//     append(`<tr class = "newTable">
//                 <td class = "newTable" id = "appFn"></td>
//                 <td class = "newTable" id = "appLn"></td>
//                 <td class = "newTable" id = "appId"></td>
//                 <td class = "newTable" id = "appTitle"></td>
//                 <td class = "newTable" id = "appSalary"></td>
//                 <td></td>
//                 </tr>`)
// }HOW TO ADD NEW ROW ON BUTTON CLICK?


function readyNow(){
    console.log('JQ Loaded')

    $('#submit').on('click', submitInfo )

    // $('.parentTable').on('click', '.newTable', newTableRow);  NOT DONE YET
}