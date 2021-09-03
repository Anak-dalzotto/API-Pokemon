const {databaseConnections} = require ("./connections")

async function salvarPokemons (pokemon) {
  const queryInsertPokemon = `INSERT INTO cappacita.pokemons (nome_pokemon, tipo_pokemon, fraqueza, resistência) VALUES ("${pokemon.nome}", "${pokemon.tipo}", "${pokemon.fraqueza}", "${pokemon.resistencia}")`

  const result = await databaseConnections.raw(queryInsertPokemon)
  console.log (result)

  if (result) {
      return {
          nome: pokemon.nome,
          tipo: pokemon.tipo,
          fraqueza: pokemon.fraqueza,
          resistencia: pokemon.resistencia,
          hp: pokemon.hp,
          id: result[0].insertId
      }
  } else {
      console.error ("Deu erro!")
      return {
          error: "Erro na inserção"
      }
  }
}

async function mostrarPokemon (id) {
    const querySelectPokemon = `SELECT * FROM pokemons WHERE id = ${id}`
    const result = await databaseConnections.raw(querySelectPokemon)

    return result[0]
}

async function mostrarPokemons () {
    const querySelectAllPokemons = `SELECT * FROM pokemons`
    const result = await databaseConnections.raw(querySelectAllPokemons)
    return result[0] 
}
/*
function atualizarPokemon (id, pokemon) {
    pokemons[id] = pokemon
    return pokemon 
}

function deletarPokemon(id) {
    sequence._id = sequence._id -1
    const pokemonDeletado = pokemons[id]
    pokemons.splice(id, 1)
    pokemons.forEach (pokemon => {
        if (pokemon.id > id) {
            pokemon.id = pokemon.id - 1 
        }
    })
    return pokemonDeletado
}

function batalhaPokemon (id1, id2){
    const superEfetivo = 40
    const efetivo = 20
    const naoEfetivo = 10
    const pokemon1 = pokemons[id1]
    const pokemon2 = pokemons[id2]

    if (pokemon1.hp != 0 && pokemon2.hp != 0) {
        if (pokemon1.tipo == pokemon2.fraqueza) {
            pokemon2.hp = pokemon2.hp - superEfetivo
        } else if (pokemon1.tipo == pokemon2.resistencia) {
            pokemon2.hp = pokemon2.hp - naoEfetivo
        } else {
            pokemon2.hp = pokemon2.hp - efetivo
        }
    }

    if (pokemon1.hp != 0 && pokemon2.hp != 0) {
        if (pokemon2.tipo == pokemon1.fraqueza) {
            pokemon1.hp = pokemon1.hp - superEfetivo
        } else if (pokemon2.tipo == pokemon1.resistencia) {
            pokemon1.hp = pokemon1.hp - naoEfetivo
        } else {
            pokemon1.hp = pokemon1.hp - efetivo
        }
    }

    if (pokemon1.hp < 0) pokemon1.hp = 0
    if (pokemon2.hp < 0) pokemon2.hp = 0

    return `${pokemon1.nome}: ${pokemon1.hp}hp / ${pokemon2.nome}: ${pokemon2.hp}hp` 
}


function curaPokemon (id) {
    const pokemonCurado = pokemons[id] 
    pokemonCurado.hp = pokemonCurado.hp + 20
    if (pokemonCurado.hp >= 100) pokemonCurado.hp = 100
    
    return `${pokemonCurado.nome}: ${pokemonCurado.hp}hp`
}


module.exports = { salvarPokemons, mostrarPokemon, mostrarPokemons, atualizarPokemon, deletarPokemon, batalhaPokemon, curaPokemon }
*/
module.exports = {salvarPokemons, mostrarPokemon, mostrarPokemons}