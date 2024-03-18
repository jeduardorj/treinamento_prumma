function mudarDeCor() {
    let entradaDoUsuario = prompt("Digite uma cor em hexadecimal (#ff0000) ou em nome em inglês (red):");

    
    if (entradaDoUsuario === null) {
        return;
    }

   
    entradaDoUsuario = entradaDoUsuario.trim();

    
    let validaHexadecimal = /^#[0-9A-F]{6}$/i.test(entradaDoUsuario);
    let corEmIngles = /^(aqua|black|blue|fuchsia|gray|green|lime|maroon|navy|olive|orange|purple|red|silver|teal|white|yellow)$/i.test(entradaDoUsuario);

    if (validaHexadecimal || corEmIngles) {
        document.body.style.backgroundColor = entradaDoUsuario;
    } else {
        alert("Por favor, insira uma cor válida em hexadecimal (#ff0000) ou um nome de cor em inglês (red).");
    }
}


window.onload = mudarDeCor;