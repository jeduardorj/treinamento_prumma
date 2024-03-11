var anoClt = prompt("Em que ano você nasceu?")

var ano = new Date()
var anoAtual = ano.getFullYear()

var idade = anoAtual - anoClt

alert(idade)