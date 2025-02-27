// Get a reference to the #add-employees-btn element
const addEmployeesBtn = document.querySelector('#add-employees-btn');

//Keeps adding employees
const employees = [];
let total = 0;
let avg;
// Collect employee data
const collectEmployees = function() {

  // Added three prompts for each unit of information we want to request from the user
  const firstName = prompt("Enter the first name of the employee");
  const lastName = prompt("Enter the last name of the employee");
  const salary = prompt("Enter the salary of the employee");

 //Made a combination of input information to have the value of 'employee'
const employee = {
  firstName: firstName,
  lastName: lastName,
  salary: salary,
}

//created a way to contain the array of multiple employees
employees.push(employee);

//added a pop up question to see if user wants to add another employee and loops back to the original prompts until user hits cancel
  const confirmAdd = confirm("Would you like to add another employee?");
  if (confirmAdd === true) {
    collectEmployees();
  } else {
  }
  //needed to return all employees array
  return employees;
}
// Displays the average salary in the console
const displayAverageSalary = function(employees) {
  for ( let employee of employees) {
    total += parseInt (employee.salary);
    avg = total / employees.length;
  }
  console.log(`Average Salary: ${avg}`);
}

// Select a random employee using a randomizing function
const getRandomEmployee = function(employees) {
const randomEmployee = employees[Math.floor(Math.random() * employees.length)];
console.log(`Congratulations ${randomEmployee.firstName} ${randomEmployee.lastName}, the winner of our random drawing!`)
}

/*
  ====================
  STARTER CODE
  Do not modify any of the code below this line:
*/

// Display employee data in an HTML table
const displayEmployees = function(employeesArray) {
  // Get the employee table
  const employeeTable = document.querySelector('#employee-table');

  // Clear the employee table
  employeeTable.innerHTML = '';

  // Loop through the employee data and create a row for each employee
  for (let i = 0; i < employeesArray.length; i++) {
    const currentEmployee = employeesArray[i];

    const newTableRow = document.createElement("tr");

    const firstNameCell = document.createElement("td");
    firstNameCell.textContent = currentEmployee.firstName;
    newTableRow.append(firstNameCell);

    const lastNameCell = document.createElement("td");
    lastNameCell.textContent = currentEmployee.lastName;
    newTableRow.append(lastNameCell);

    const salaryCell = document.createElement("td");
    // Format the salary as currency
    salaryCell.textContent = currentEmployee.salary.toLocaleString("en-US",{
      style:"currency",
      currency:"USD"
    });

    newTableRow.append(salaryCell);

    employeeTable.append(newTableRow);
  }
}

const trackEmployeeData = function() {
  const employees = collectEmployees();

  console.table(employees);

  displayAverageSalary(employees);

  console.log('==============================');

  getRandomEmployee(employees);

  employees.sort(function(a,b) {
    if (a.lastName < b.lastName) {
      return -1;
    } else {
      return 1;
    }
  });

  displayEmployees(employees);
}

// Add event listener to 'Add Employees' button
addEmployeesBtn.addEventListener('click', trackEmployeeData);
