

async function buscarPokemon() {

    const id = document.querySelector("idPokemon").value

const pokemon = await getEmAPI("https://pokeapi/co/api/v2/pokemon/", id)

document.querySelector("#imagempokemon").src = pokemon.sprites.front_default

}

async function getEmAPI(url, id) {

    const fetchResposta = await fetch(url + id)
    const respostaEmJSON = await fetchResposta.json()

    return respostaEmJSON

}