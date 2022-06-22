async function consultaPokemon() {
    const id = document.getElementById('numpoke').value;
    // Sem try/catch
    // fetch('https://pokeapi.co/api/v2/pokemon/' + id)
    // .then(function (res) {
    //     return res.json();
    // })
    // .then(function(pokemon){
    //     console.log(pokemon);
    //     //Código entraria aqui
    // })
    // .catch(function(erro){
    //     alert('Erro!');
    //     console.log(erro);
    // });

    try {
        let resposta = await fetch('https://pokeapi.co/api/v2/pokemon/' + id);
        let pokemon = await resposta.json();

        const imgPoke = document.getElementById('imgpoke');
        imgPoke.src = pokemon.sprites.front_default;
        imgPoke.alt = pokemon.name;

        const infoPoke = document.getElementById('infopoke');
        infoPoke.innerHTML = "";

        const listaInfo = document.createElement('ul');
        const infoNome = document.createElement('li');
        const infoDesc = document.createElement('li');

        infoNome.innerText = "Nome: " + pokemon.name;
        infoDesc.innerText = "Peso: " + pokemon.weight;
        listaInfo.appendChild(infoNome);
        listaInfo.appendChild(infoDesc);
        infoPoke.appendChild(listaInfo);
    } catch (erro) {
        console.log(erro);
    }
}