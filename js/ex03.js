var diasDaSemana = ["Domingo", "Segunda-feira", "Terça-feira", "Quarta-feira", "Quinta-feira", "Sexta-feira", "Sábado"];

var hoje = new Date();

var DiaDaSemana = hoje.getDay();


var diaDaSemanaPorExtenso = diasDaSemana[DiaDaSemana];


alert("Hoje é " + diaDaSemanaPorExtenso);
