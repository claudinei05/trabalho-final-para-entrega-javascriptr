let recados = [];

const formCadRecados = document.getElementById("formRecados-1");
const descricao = document.getElementById("Desc");
const detalhamento = document.getElementById("Det");
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
  salvarRecados(e);
  criaRecado();
});
const buscaLocalStorage = () => {
  let buscaLocalStorage1 = JSON.parse(localStorage.getItem("recados") || "[]");
  return buscaLocalStorage1;
};

function criaRecado() {
  let recados = buscaLocalStorage();
  let tbody = document.getElementById("tableBody");
  let numero = 1;
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
    numero++;
  }
}

const salvarRecados = (event) => {
  event.preventDefault();
  console.log("passou pelo evento");
  mensErro.innerHTML = "";
  console.log(formCadRecados);
  // const thId=formCadRecados.thId.value
  const thDesc = formCadRecados.Desc.value;
  const thDet = formCadRecados.Det.value;
  const erros = [];

  if (!thDesc || thDesc.length < 4) {
    erros.push("<p>Descrição invalida<p>");
  }
  if (!thDet || thDet.length <= 0) {
    erros.push("<p>Preencha o campo de Detalhamento<p>");
  }
  if (erros.length > 0) {
    mensErro.innerHTML = erros.join(" ");
    return;
  }

  const recado3 = buscaLocalStorage();
  recado3.push({ id: recado3.length + 1, desc: thDesc, det: thDet });
  atLocalStorage(recado3);
  alert("Recado inserido com sucesso");
  criaRecado();
  console.log(recado3);
};

let apagar = (id) => {
  const buscarRecados = buscaLocalStorage();
  const indexRecados = buscarRecados.findIndex((recados) => recados.id === id);
  if (indexRecados < 0) return;
  buscarRecados.splice(indexRecados, 1);
  atLocalStorage(buscarRecados);
  alert("Recado removido");
  criaRecado();
};
