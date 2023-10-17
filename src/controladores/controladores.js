const knex = require('../conexao');

const listar =  async (req, res)=> {
    try {
        const carros = await knex('carros');
        return res.status(200).json(carros);
        
    } catch (error) {
        console.log(error);
        return res.status(500).json('Erro interno do servidor')
    }
}

module.exports = {
    listar,
}