var nome = prompt("Digite seu nome")
var idade = prompt(`${nome} digite sua idade`)

if (isNaN(idade)) {
    alert('Isso não é numero')
    
    idade = prompt(`${nome} digite sua idade`)

   
}
    
if (idade >= 18) {
        alert(`${nome} parabens pode tirar Habilitção`)
} else {
        alert(`Sinto muito ${nome} não pode tirar habilitação`)
}


