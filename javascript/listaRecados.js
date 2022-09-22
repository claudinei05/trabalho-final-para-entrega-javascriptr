let recados = [];

const formCadRecados = document.getElementById("formRecados-1");
const descricao = document.getElementById("descriçao");
const detalhamento = document.getElementById("detalhamento");
const mensErro = document.getElementById("msg-erro");
const atLocalStorage = (recados) => {
  localStorage.setItem("recados", JSON.stringify(recados));
};
formCadRecados.addEventListener("submit", (e) => {
  e.preventDefault();

  const recado = {
    id: Math.floor(Date.now() / 1000),
    desc: descricao.value,
    det: detalhamento.value,
  };
  recados.push(recado);

  console.log(recado);
  criaRecado();
});
const buscaLocalStorage = () => {
  let buscaLocalStorage1 = JSON.parse(localStorage.getItem("recados") || "[]");
  return buscaLocalStorage1;
};

function criaRecado() {
  let recados = buscaLocalStorage();
  let tbody = document.getElementById("tableBody");
  tbody.innerHTML = "";
  for (const recado of recados) {
    tbody.innerHTML += `
    <tr>
    <th scope="row">${recado.id}</th>
    <td>${recado.desc}</td>
    <td>${recado.det}</td>
    <td>
        <button onclick="editar(${recado.id})">Editar</button>
        <button onclick="apagar(${recado.id})">Apagar</button>


    </td>
    
    `;
  }
}

const salvarRecados = (event) => {
  event.preventDefault();
  console.log("passou pelo evento");
  mensErro.innerHTML = "";
  // const thId=formCadRecados.thId.value
  const thDesc = formCadRecados.Desc.value;
  const thDet = formCadRecados.Det.value;
  const erros = [];

  if (!desc || desc.length < 4) {
    erros.push("<p>Descrição invalida<p>");
  }
  if (!det || det.length <= 0) {
    erros.push("<p>Preencha o campo de Detalhamento<p>");
  }
  if (erros.length > 0) {
    mensErro.innerHTML = erros.join(" ");
    return;
  }
  const recado3 = buscaLocalStorage();
  recado3.push({ id: recado3.length + 1, thDesc, thDet });
  atLocalStorage(recados);
  alert("Recado inserido com sucesso");
  criaRecado();
};
salvarRecados();
let apagar = (id) => {
  const buscarRecados = buscaLocalStorage();
  const indexRecados = buscarRecados.findIndex((recados) => recados.id === id);
  if (indexRecados < 0) return;
  buscarRecados.splice(indexRecados, 1);
  atLocalStorage(buscarRecados);
  alert("Recado removido");
  criaRecado();
};

// function criarTable(num, descricao, detalhamento, acao) {
//   let tb = document.getElementById("tableBody");
//   let qtdlinhas = tb.rows.length;
//   let linhas = tb.insertRow(qtdlinhas);

//   let cellcodigo = linhas.insertCell(0);
//   let celldescricao = linhas.insertCell(1);
//   let celldetalhamento = linhas.insertCell(2);
//   let cellacao = linhas.insertCell(3);

//   cellcodigo.innerHTML = qtdlinhas;
//   linhas.innerHTML = num;
//   celldescricao.innerHTML = descricao;
//   celldetalhamento.innerHTML = detalhamento;
//   cellacao.innerHTML = acao;
//   cellcodigo.innerHTML = qtdlinhas;
//   cellcodigo.innerHTML = qtdlinhas;
//   cellcodigo.innerHTML = qtdlinhas;
//   console.log(tb);
//   console.log(qtdlinhas);
//   console.log(linhas);
//   console.log(cellcodigo);
//   console.log(celldetalhamento);
//   console.log(cellacao);
// }
// criarTable();
