$(document).ready(onReady);

let empArr = [
  {
    firstName: `Olga`,
    lastName: `of Kiev`,
    idNumber: 777,
    title: `Princess`,
    annualSalary: 444,
  },
  {
    firstName: `Lady`,
    lastName: `Bathory`,
    idNumber: 666,
    title: `Countess`,
    annualSalary: 999,
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

function getMoSal() {
  let employeeSal = 0;
  for (let i = 0; i < empArr.length; i++) {
    employeeSal += empArr[i].annualSalary;
  }
  let moEmpSal = employeeSal / 12;
  if (moEmpSal > 20000) {
    console.log(`over $20K`);
    $(`.inline`).addClass(`red`);
  } else {
    $(`.inline`).removeClass(`red`);
  }
  return ` $` + Math.round(100 * moEmpSal) / 100;
}

console.log(getMoSal(empArr));

function render() {
  console.log(`in render`, empArr);

  $(`#salaryTableBody`).empty();

  for (let emp of empArr) {
    $(`#salaryTableBody`).append(`
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

  $(`#monthlyCost`).empty();
  $(`#monthlyCost`).append(getMoSal);
}
