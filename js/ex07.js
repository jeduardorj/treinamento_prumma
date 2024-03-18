let produtos = [];

while (true) {
    let nomeProduto = prompt("Digite o nome do produto (ou 'fim' para encerrar):");
    if (nomeProduto.toLowerCase() === 'fim') {
        break;
    }
    
    let precoUnitario = parseFloat(prompt("Digite o preço unitário do produto:"));
    let quantidade = parseInt(prompt("Digite a quantidade do produto:"));
    
    let subtotal = precoUnitario * quantidade;
    
    produtos.push({
        nome: nomeProduto,
        precoUnitario: precoUnitario,
        quantidade: quantidade,
        subtotal: subtotal
    });
}


produtos.sort((a, b) => a.nome.localeCompare(b.nome));

let total = produtos.reduce((acc, produto) => acc + produto.subtotal, 0);

console.log(produtos)

produtos.forEach(produto => {
    alert(`Produto: ${produto.nome}, Quantidade: ${produto.quantidade}, Preço Unitário: R$ ${produto.precoUnitario.toFixed(2)}, Subtotal: R$ ${produto.subtotal.toFixed(2)}`);
});

function lista(produtos) {
    let nomes = produtos.map(produto => produto.nome);
    return nomes.join(', ');
}

const mostraLista = lista(produtos);

alert(`Lista de Produtos: ${mostraLista}`);
alert(`Total: R$ ${total.toFixed(2)}`);
