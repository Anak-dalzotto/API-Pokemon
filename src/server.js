const express = require ("express");
const app = express();
const database = require("./database/databaseMySql");
const bodyParser = require ("body-parser")

app.use (bodyParser.urlencoded({extended: true}))

app.get ("/pokemons", async(req, res) => {
    res.send (await database.mostrarPokemons())
})

app.get ("/pokemons/:id", async (req, res) => {
    res.send (await database.mostrarPokemon(req.params.id))
})

app.post ("/pokemons", async (req, res) => {
    const pokemon = await database.salvarPokemons({
        nome: req.body.nome,
        tipo: req.body.tipo,
        fraqueza: req.body.fraqueza,
        resistencia: req.body.resistencia,
        hp: 100
    })
    res.send(pokemon)
})

app.put ("/pokemons/:id", (req, res) => {
    const pokemon = database.atualizarPokemon(req.params.id, {
        nome: req.body.nome,
        tipo: req.body.tipo,
        id: parseInt(req.params.id),
        fraqueza: req.body.fraqueza,
        resistencia: req.body.resistencia,
        hp: 100
    })
    res.send (pokemon)
})

app.delete ("/pokemons/:id", (req, res) => {
    res.send (database.deletarPokemon(req.params.id))
})

app.post ("/pokemons/batalha", (req, res) => {
    res.send(database.batalhaPokemon (req.body.id1, req.body.id2))
})

app.post ("/pokemons/cura/:id", (req, res) => {
    res.send (database.curaPokemon(req.params.id))
})


app.listen (3003)