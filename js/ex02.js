// var anoClt = prompt("Em que ano você nasceu?")

// var ano = new Date()
// var anoAtual = ano.getFullYear()

// var idade = anoAtual - anoClt

// alert(idade)

// Data de nascimento 
// ( curiosidade: Os exemplos formam a data de lançamento da primeita versão do javascript )
alert("Responda as perguntas a seguir somente com os numéros respectivos.");

let yearBorn = parseInt(prompt("Em qual ano você nasceu? (Exemplo: 1995)"));
let monthBorn = parseInt(prompt("Em qual mês você nasceu? (Exemplo: 12)"));
let dayBorn = parseInt(prompt("Em qual dia você nasceu? (Exemplo: 04)"));


// Calculo da idade
function calcBirth(year, month, day) {
    // Data atual
    let currentDate = new Date();
    let currentYear = currentDate.getFullYear();
    let currentMonth = currentDate.getMonth() + 1;
    let currentDay = currentDate.getDate();
    let birth = currentYear - year;
    // Verificando se a idade calculada está correta e a corrigindo se não estiver 
    if (currentMonth < month || (currentMonth == month && currentDay < day)) {
        birth--
    };
    return birth
};

let age = calcBirth(yearBorn, monthBorn, dayBorn);


// Dizendo a idade
alert("Você tem " + age + " anos.");