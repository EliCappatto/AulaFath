async function gerarUsuario(){
    let resposta = await fetch('https://randomuser.me/api');
    let usuario = await resposta.json();
    
    usuario = usuario.results[0];

    const imgUser = document.getElementById('imguser');
    imgUser.src = usuario.picture.medium;

    document.getElementById('nomeuser').innerText = usuario.name.first;
    document.getElementById('emailuser').innerText = usuario.email;
    document.getElementById('senhauser').innerText = usuario.login.password;
}

async function digiteQuantidade(){
    let resposta = await fetch('https://randomuser.me/api');
    let usuario = await resposta.json();

    quantidade = usuario.results[0];
    
    
}