function mudarDeCor() {
    let entradaDoUsuario = prompt("Digite uma cor em hexadecimal (#ff0000) ou em nome em inglês (red):");

    
    if (entradaDoUsuario === null) {
        return;
    }

    // Remove espaços extras antes e depois da entrada do usuário
    entradaDoUsuario = entradaDoUsuario.trim();

    // Verifica se a entrada do usuário é um código hexadecimal ou um nome de cor em inglês
    let validaHexadecimal = /^#[0-9A-F]{6}$/i.test(entradaDoUsuario);
    let corEmIngles = /^(aqua|black|blue|fuchsia|gray|green|lime|maroon|navy|olive|orange|purple|red|silver|teal|white|yellow)$/i.test(entradaDoUsuario);

    if (validaHexadecimal || corEmIngles) {
        document.body.style.backgroundColor = entradaDoUsuario;
    } else {
        alert("Por favor, insira uma cor válida em hexadecimal (#ff0000) ou um nome de cor em inglês (red).");
    }
}

// Chama a função ao carregar a página (opcional)
window.onload = mudarDeCor;