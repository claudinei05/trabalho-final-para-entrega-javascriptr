let recados = [];

const formCadRecados = document.getElementById("formRecados-1");
const descricao = document.getElementById("descriçao");
const detalhamento = document.getElementById("detalhamento");

formCadRecados.addEventListener("submit", (e) => {
  e.preventDefault();

  const recado = {
    id: Math.floor(Date.now() / 1000),
    name: descricao.value,
    type: Text.value,
  };
  recado.push(recado);
  console.log(recado);
});
