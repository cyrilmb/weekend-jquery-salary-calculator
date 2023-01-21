$(document).ready(onReady);

let empArr = [];

function onReady() {
  console.log(`gettin reedddy`);
}

function onAddEmployee(evt) {
  evt.preventDefault();
  console.log(`in onAddEmployee`);

  let newEmployee = {
    firstName: $(`#firstNameInput`).val(),
    lastName: $(`#lastNameInput`).val(),
  };
}
