const got = require('got');
const BasicHttpHandler = require('./basic-http-adapter');

class GanheiNaLotoHttpHandler extends BasicHttpHandler {
    _url = 'https://www.ganheinaloto.com/jogodobicho/resultado-jogodobicho-dia-'
   async paginaResultadoDoDia({dia, options}){
    const diaModificado = dia.replace(/\D/g, '');
    if(diaModificado.length != 8){
        throw new Error('Dia inválido');
    }
   
    const url = this._url + diaModificado;
    Object.assign(this._option, options);
    return await got.get(url, this._option)
   }
}

module.exports = GanheiNaLotoHttpHandler;