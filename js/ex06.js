const usuarios = [
    { username: 'eduardo', password: '123456' },
    { username: 'felipe', password: 'abcdef' },
    { username: 'maria', password: '123456' }
];

const login = () => {
    const username = prompt('Digite o usuário:');
    const password = prompt('Digite a senha:');

    let isValid = false;
    for (let i = 0; i < usuarios.length; i++) {
        if (usuarios[i].username === username && usuarios[i].password === password) {
            isValid = true;
            break;
        }
    }

    if (isValid) {
        alert('Usuário logado com sucesso!');
    } else {
        alert('Usuário ou senha inválidos.');
    }
};

// window.onload = login;

const resultado = login(usuarios)