$(document).ready(onReady);

let empArr = [];

function onReady() {
  console.log(`gettin reedddy`);

  $(`#salaryForm`).on(`submit`, onAddEmployee);
}

function onAddEmployee(evt) {
  evt.preventDefault();
  console.log(`in onAddEmployee`);

  let newEmp = {
    firstName: $(`#firstNameInput`).val(),
    lastName: $(`#lastNameInput`).val(),
    idNumber: $(`#idNumberInput`).val(),
    title: $(`#titleInput`).val(),
    annualSalary: $(`#annualSalaryInput`).val(),
  };

  $(`#firstNameInput`).val(``);
  $(`#lastNameInput`).val(``);
  $(`#idNumberInput`).val(``);
  $(`#titleInput`).val(``);
  $(`#annualSalaryInput`).val(``);

  empArr.push(newEmp);
  console.log(`New Employee:`, empArr);
}

function render() {
  console.log(`in render`, empArr);

  $(`#salaryTable`).empty();

  for (let emp of empArr) {
    $(`#salaryTable`).append(`
        <tr>
            <td>${emp.firstName}</td>
            <td>${emp.lastName}</td>
            <td>${emp.idNumber}</td>
            <td>${emp.title}</td>
            <td>${emp.annualSalary}</td>
            <td>
                <button id="deleteEmpButton">
                    Delete
                </button>
            </td>
        </tr>
    `);
  }
}
