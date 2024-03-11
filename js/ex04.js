
var diasDaSemana = ["Domingo", "Segunda-feira", "Terça-feira", "Quarta-feira", "Quinta-feira", "Sexta-feira", "Sábado"];

var dataInput = prompt("Digite a data no formato DD/MM/AAAA:");


var arrayData = dataInput.split("/");
var dia = parseInt(arrayData[0]);
var mes = parseInt(arrayData[1]) - 1; 
var ano = parseInt(arrayData[2]);


var data = new Date(ano, mes, dia);





var diaDaSemana = data.getDay();


var diaDaSemanaPorExtenso = diasDaSemana[diaDaSemana];


var dataAtual = new Date();


var idade = dataAtual.getFullYear() - ano;


if (dataAtual.getMonth() < mes || (dataAtual.getMonth() === mes && dataAtual.getDate() < dia)) {
    idade--;
}


alert("O dia da semana em " + dataInput + " é " + diaDaSemanaPorExtenso);
alert("A pessoa tem " + idade + " anos.");
