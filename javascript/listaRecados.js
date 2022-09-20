// let recados = [];

// const formCadRecados = document.getElementById("formRecados-1");
// const descricao = document.getElementById("descriçao");
// const detalhamento = document.getElementById("detalhamento");

// formCadRecados.addEventListener("submit", (e) => {
//   e.preventDefault();

//   const recado = {
//     id: Math.floor(Date.now() / 1000),
//     name: descricao.value,
//     type: Text.value,
//   };
//   recado.push(recado);
//   console.log(recado);
// });

function recados(num, descricao, detalhamento, acao) {
  let tb = document.getElementById("tableBody");
  let qtdlinhas = tb.rows.length;
  let linhas = tb.insertRow(qtdlinhas);

  let cellcodigo = linhas.insertCell(0);
  let celldescricao = linhas.insertCell(1);
  let celldetalhamento = linhas.insertCell(2);
  let cellacao = linhas.insertCell(3);

  cellcodigo.innerHTML = qtdlinhas;
  linhas.innerHTML = num;
  celldescricao.innerHTML = descricao;
  celldetalhamento.innerHTML = detalhamento;
  cellacao.innerHTML = acao;
  cellcodigo.innerHTML = qtdlinhas;
  cellcodigo.innerHTML = qtdlinhas;
  cellcodigo.innerHTML = qtdlinhas;
}
