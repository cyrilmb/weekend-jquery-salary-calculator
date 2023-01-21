$(document).ready(onReady);

let empArr = [
  {
    firstName: `Olga`,
    lastName: `of Kiev`,
    idNumber: 777,
    title: `Countess`,
    annualSalary: 444,
  },
];

function onReady() {
  console.log(`gettin reedddy`);

  render();

  $(`#salaryForm`).on(`submit`, onAddEmployee);
  $(document).on(`click`, `#deleteEmpButton`, onDeleteEmployee);
}

function onAddEmployee(evt) {
  evt.preventDefault();
  console.log(`in onAddEmployee`);

  let newEmp = {
    firstName: $(`#firstNameInput`).val(),
    lastName: $(`#lastNameInput`).val(),
    idNumber: Number($(`#idNumberInput`).val()),
    title: $(`#titleInput`).val(),
    annualSalary: Number($(`#annualSalaryInput`).val()),
  };

  $(`#firstNameInput`).val(``);
  $(`#lastNameInput`).val(``);
  $(`#idNumberInput`).val(``);
  $(`#titleInput`).val(``);
  $(`#annualSalaryInput`).val(``);

  empArr.push(newEmp);
  console.log(`New Employee:`, empArr);

  render();
}

function onDeleteEmployee() {
  let indexOfEmpArr = $(this).parent().parent().index();

  empArr.splice(indexOfEmpArr, 1);

  console.log(`deleted empolyee`, empArr);

  render();
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
            <td>$${emp.annualSalary}</td>
            <td>
                <button id="deleteEmpButton">
                    Delete
                </button>
            </td>
        </tr>
    `);
  }
}
