const form = document.getElementById("register-form");
const email = document.getElementById("email");
const nome = document.getElementById("name");
const senha = document.getElementById("password");
const confSenha = document.getElementById("passconfirmation");
const clickInput1 = document.querySelectorAll("input");
const salvarLocalStorage = (conta) => {
  localStorage.setItem(conta.email, JSON.stringify(conta));
};

clickInput1.forEach(function (input) {
  input.addEventListener("click", () => {
    atualizarValidacao(email);
  });
});

form.addEventListener("submit", (e) => {
  e.preventDefault();

  checkInput();
  const salvarValoresdoLS = {
    email: email.value,
    nome: nome.value,
    senha: senha.value,
    recados: [],
  };

  salvarLocalStorage(salvarValoresdoLS);
});

//Validação de todos os campos
function checkInput() {
  const nomeValue = nome.value;
  const emailValue = email.value;
  const senhaValue = senha.value;
  const confSenhaValue = confSenha.value;

  if (nomeValue === "") {
    errovalidacao(nome, "Preencha esse campo");
  } else {
    salvarValidacao(nome);
  }

  if (emailValue === "") {
    errovalidacao(email, "Preencha esse campo");
  } else {
    salvarValidacao(email);
  }

  if (senhaValue === "") {
    errovalidacao(senha, "Preencha esse campo");
  } else if (senhaValue.length < 8) {
    errovalidacao(senha, "A senha deve ter mais de 8 caracteres");
  } else {
    salvarValidacao(senha);
  }

  if (confSenhaValue === "") {
    errovalidacao(confSenha, "Preencha esse campo");
  } else if (senhaValue !== confSenhaValue) {
    errovalidacao(confSenha, "Senha diferente");
  } else {
    salvarValidacao(confSenha);
  }
}
console.log(checkInput);
//Erros de validação
function errovalidacao(input, message) {
  //parentElement: retorna referencia direta do pai'email' buscando minha <div class="full-box" inteira>
  const formfull_box = input.parentElement;
  const small = formfull_box.querySelector("small");
  small.innerText = message;
}

function salvarValidacao(input) {
  const formfull_box = input.parentElement;
  formfull_box;
}

function atualizarValidacao() {
  const small = form.querySelectorAll("small");
  small.forEach(function (small) {
    small.innerText = "";
  });
}

// // class Validator {
// //   constructor() {
// //     this.validations = ["data-min-length"];
// //   }
// //   //iniciar validação de todos os campos
// //   validate(form) {
// //     //pegar os inputs
// //     let inputs = form.getElementsByTagName("input");

// //     //htmlcollection -> array
// //     let inputsArray = [...inputs];

// //     //lopp nos inputs e valdação mediante ao que for encontrado
// //     inputsArray.forEach(function (input) {
// //       //loop de todas as validação existente
// //       for (let i = 0; this.validations.length > i; i++) {
// //         //verifica se a validação atual existe no input
// //         if (input.getAttribute(this.validations[i]) != null) {
// //           //1 data-min-length->minilength
// //           //2 limpa a estring para virar um metodo
// //           let method = this.validations[i]
// //             .replace("data-", "")
// //             .replace("-", "");

// //           //valor do input
// //           let value = input.getAttribute(this.validations[i]);

// //           //invocar o metodo
// //           this[method](input, value);
// //         }
// //       }
// //     }, this);
// //   }

// //   //verifica se um input tem um numero minimo de caracteres
// //   minlength(input, minValue) {
// //     let inputLength = input.value.length;

// //     let erroMensage = `O campo precisa ter pelo menos ${minValue} caracteres`;

// //     if (inputLength < minValue) {
// //       console.log(erroMensage);
// //       this.printMessage(input, erroMensage);
// //     }
// //   }

// //   //metodo vai imprimir mensagen de erro na tela
// //   printMessage(input, msg) {
// //     let template = document.querySelector(".error-validation").cloneNode(true);
// //     template.textContent = msg;

// //     let inputParent = input.parentNode;
// //     template.classList.remove("template");

// //     inputParent.appendChild(template);
// //   }
// // }

// // let form = document.getElementById("register-form");
// // let submit = document.getElementById("submit");

// // let validator = new Validator();

// // // // evento que dispara as validações
// // submit.addEventListener("click", function (e) {
// //   e.preventDefault();
// //   console.log("funcionou");
// //   validator.validate(form);
// // });

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
