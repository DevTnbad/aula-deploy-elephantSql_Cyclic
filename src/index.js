require('dotenv').config();
const express = require('express');
const knex = require('knex');
const app = express();

app.use(express.json());

app.get('/', async (req, res)=> {
    try {
        const carros = await knex('carros');
        return res.status(200).json(carros);
        
    } catch (error) {
        console.log(error);
        return res.status(500).json('Erro interno do servidor')
    }
});

const porta = process.env.PORT;

app.listen(porta, () => console.log(`Servidor Up na porta: ${porta}`));