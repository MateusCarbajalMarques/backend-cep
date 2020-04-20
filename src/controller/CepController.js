const axios = require('axios');

module.exports = {

    async store(request, response) {

        const {cep} = request.query;

        const resultado = await axios.get(`https://viacep.com.br/ws/${cep}/json/`);

        console.log(resultado.data);
        return response.json(resultado.data)
    }
}