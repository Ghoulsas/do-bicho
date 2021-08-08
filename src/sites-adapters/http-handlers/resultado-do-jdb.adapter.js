const got = require('got');
const BasicHttpHandler = require('./basic-http-adapter');

class ResultadoDoJdbHttpHandler extends BasicHttpHandler {
    
   async paginaResultadoDoDia({dia,estado, options}){
    const diaModificado = this.resolverDia(dia)
    const estadoAlvo = this.resolverEstado(estado)
    const _url = `https://resultadojogobicho.com/${estadoAlvo}/dia/`
    const url = _url + diaModificado;
    Object.assign(this._option, options);
    return await got.get(url, this._option)
   }

   resolverEstado(estado){
  const estadosDisponiveis = ['SP', 'RJ']
        if(!estado){
            throw new Error('Não foi informado um estado');
        }
        const estadoAlvo = estado.toUpperCase();
        if(!estadosDisponiveis.includes(estadoAlvo)){
            throw new Error(`O estado ${estadoAlvo} não é suportado`);
        }
        return estadoAlvo
   }

   resolverDia(dia){
    const diaModificado = dia.replace(/\D/g, '');
    if(diaModificado.length != 8){
        throw new Error('Dia inválido');
    }
    const diaUrl = diaModificado.substr(4,4) + '-' + diaModificado.substr(2,2) + '-' + diaModificado.substr(0,2);
    return diaUrl
   }
}

module.exports = ResultadoDoJdbHttpHandler;