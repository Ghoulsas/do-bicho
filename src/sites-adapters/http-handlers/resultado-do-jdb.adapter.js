const got = require('got');
const BasicHttpHandler = require('./basic-http-adapter');

class ResultadoDoJdbHttpHandler extends BasicHttpHandler {
    
   async paginaResultadoDoDia({dia,sorteio, options}){
    const diaModificado = dia.replace(/\D/g, '');
    if(diaModificado.length != 8){
        throw new Error('Dia inválido');
    }
    if(!sorteio){
        throw new Error('Não foi informado um sorteio');
    }
    const _url = `https://resultadojogobicho.com/${sorteio.toUpperCase()}/dia/`
    const diaUrl = diaModificado.substr(4,4) + '-' + diaModificado.substr(2,2) + '-' + diaModificado.substr(0,2);
    const url = _url + diaUrl;
    Object.assign(this._option, options);
    return await got.get(url, this._option)
   }
}

module.exports = ResultadoDoJdbHttpHandler;