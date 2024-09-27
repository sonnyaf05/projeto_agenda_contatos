const form = document.getElementById('form-pessoa');
let linhas = '';

form.addEventListener('submit', function(e) {
    e.preventDefault();

    adicionaLinha();
    atualizaTabela();
});

function adicionaLinha() {
    const inputNomePessoa = document.getElementById('nome-pessoa');
    const inputNumeroTelefone = document.getElementById('numero-telefone');

    let linha = '<tr>';
    linha += `<td>${inputNomePessoa.value}</td>`;
    linha += `<td>${inputNumeroTelefone.value}</td>`;
    linha += `</tr>`;

    linhas += linha;

    inputNomePessoa.value = '';
    inputNumeroTelefone.value = '';
};

function atualizaTabela() {
    const corpoTabela = document.querySelector('tbody');
    corpoTabela.innerHTML = linhas;
};