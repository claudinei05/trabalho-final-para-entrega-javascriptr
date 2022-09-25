Object.keys(localStorage).forEach((key) => {
  console.log(localStorage.getItem(key));
});
/*const form = document.getElementById("from-index");
const msgIndex = documente.getElementById("msg-erro-index");
const inputEmail = document.getElementById("email");
const inputSenha = document.getElementById("password");

form.addEventListener("submit", (e) => {
  e.preventDefault();
  valEmailSenha(e);
  
});
const valEmailSenha = (event) => {
  event.preventDefault();
  console.log("passou pelo evento");
  msgIndex.innerText = "";

  const emailValue = form.email.value;
  const senhaValue = form.password.value;
  const erros=[]
  console.log(emailValue, senhaValue);

  if (!emailValue || emailValue.length <=3) {
    erros.push("<p>Descrição invalida<p>");
  }
  if (!senhaValue || senhaValue.length <= 8) {
    erros.push("<p>Preencha o campo de Detalhamento<p>");
  }
  if (erros.length > 0) {
    mensErro.innerHTML = erros.join(" ");
    return;
   
};
console.log(valEmailSenha);*/

// const usuario = document.getElementById("email");
// const senha = document.getElementById("password");
// const form = document.getElementById("from-index");
// const clickInput1 = document.querySelectorAll("input");

// clickInput1.forEach(function (input) {
//   input.addEventListener("click", () => {
//     atualizarValidacao(email);
//   });
// });

// form.addEventListener("submit", (e) => {
//   e.preventDefault();
//   logarRecados();
// });

// function logarRecados() {
//   const usuarioValue = usuario.value;
//   const senhaValue = senha.value;

//   if (usuarioValue === "") {
//     errovalidacao(email, "Preencha esse campo");
//   } else {
//     salvarValidacao(email);
//   }

//   if (senhaValue === "") {
//     errovalidacao(senha, "Preencha esse campo");
//   } else if (senhaValue.length < 8) {
//     errovalidacao(senha, "A senha deve ter mais de 8 caracteres");
//   } else {
//     salvarValidacao(senha);
//   }
// }
// function errovalidacao(input, message) {
//   //parentElement: retorna referencia direta do pai'email' buscando minha <div class="full-box" inteira>
//   const formfull_box = input.parentElement;
//   const small = formfull_box.querySelector("small");
//   small.innerText = message;
// }

// function salvarValidacao(input) {
//   const formfull_box = input.parentElement;
//   formfull_box;
// }

// // function atualizarValidacao() {
// //   const small = form.querySelectorAll("small");
// //   small.forEach(function (small) {
// //     small.innerText = "";
// //   });
// // }
// // function errovalidacao(mensageErro) {
// //   const erroSmall = document.querySelectorAll("small");
// //   erroSmall.forEach = function (small) {
// //     small.innerText = mensageErro;
// //   };
// // }

// // function salvarValidacao() {
// //   const smallValido = document.querySelectorAll("small");
// //   smallValido.forEach(function (small) {
// //     small.innerText = "";
// //   });
// // }

// // document.getElementById("criar-conta").addEventListener("click", function () {
// //   alert("Clicou");
// // });
// // const email = document.getElementById("email");

// // const bscLocalStorage = (email) => {
// //   localStorage.setItem("email", JSON.stringify(email));
// // };

// // if ((bscLocalStorage = email)) {
// //   console.log("deu certo");
// // }

// // const usuarios = JSON.parse(localStorage.getItem("usuarios1")) || [];
// // const form = document.getElementById(from - index);
