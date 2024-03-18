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

let total = produtos.reduce((acc, produto) => acc + produto.subtotal, 0);



produtos.forEach(produto => {
    alert(`Produto: ${produto.nome}, Quantidade: ${produto.quantidade}, Preço Unitário: R$ ${produto.precoUnitario.toFixed(2)}, Subtotal: R$ ${produto.subtotal.toFixed(2)}`);
});

alert(`Total: R$ ${total.toFixed(2)}`);
