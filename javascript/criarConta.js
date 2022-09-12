class Validator {
  constructor() {
    this.validations = [];
  }
}

//iniciar validação de todos os campos
// validate(form) {
//   //pegar os inputs
//   let inputs = form.getElementsByTagName("input");

//   console.log(inputs);

//   //htmlcollection -> array
//   let inputsArray = [...inputs];

//   console.log(inputsArray);
// }

let form = document.getElementById("register-form");
let submit = document.getElementById("submit");

let validator = new Validator();

// evento que dispara as validações
submit.addEventListener("click", function (e) {
  e.preventDefault();
  console.log("funcionou");
  validator.validate(form);
});
