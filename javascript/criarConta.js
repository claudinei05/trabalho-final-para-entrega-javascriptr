class Validator {
  constructor() {
    this.validations = ["data-min-length"];
  }
  //iniciar validação de todos os campos
  validate(form) {
    //pegar os inputs
    let inputs = form.getElementsByTagName("input");

    //htmlcollection -> array
    let inputsArray = [...inputs];

    //lopp nos inputs e valdação mediante ao que for encontrado
    inputsArray.forEach(function (input) {
      //loop de todas as validação existente
      for (let i = 0; this.validations.length > i; i++) {
        //verifica se a validação atual existe no input
        if (input.getAttribute(this.validations[i]) != null) {
          //1 data-min-length->minilength
          //2 limpa a estring para virar um metodo
          let method = this.validations[i]
            .replace("data-", "")
            .replace("-", "");

          //valor do input
          let value = input.getAttribute(this.validations[i]);

          //invocar o metodo
          this[method](input, value);
        }
      }
    }, this);
  }

  //verifica se um input tem um numero minimo de caracteres
  minlength(input, minValue) {
    let inputLength = input.value.length;

    let erroMensage = `O campo precisa ter pelo menos ${minValue} caracteres`;

    if (inputLength < minValue) {
      console.log(erroMensage);
      this.printMessage(input, erroMensage);
    }
  }

  //metodo vai imprimir mensagen de erro na tela
  printMessage(input, msg) {
    let template = document.querySelector(".error-validation").cloneNode(true);
    template.textContent = msg;

    let inputParent = input.parentNode;
    template.classList.remove("template");

    inputParent.appendChild(template);
  }
}

let form = document.getElementById("register-form");
let submit = document.getElementById("submit");

let validator = new Validator();

// // evento que dispara as validações
submit.addEventListener("click", function (e) {
  e.preventDefault();
  console.log("funcionou");
  validator.validate(form);
});

// let user = [
//   {
//       username: 'adriano',
//       password: '123',
//       messages: []
//   }

// ]

// let newMessage =
// {
//   description: 'First',
//   detail: 'last'
// }

// user[0].messages.push(newMessage)

// console.log(user[0].messages)
