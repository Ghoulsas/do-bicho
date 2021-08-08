const SiteResultadoJogoDoBichoAdapter = require('./sites-adapters/html-handlers/resultado-do-jdb-adapter');
const ResultadoDoJdbHttpHandler = require('./sites-adapters/http-handlers/resultado-do-jdb.adapter');

class DoBicho {
    constructor(htmlHandler, httpHandler){
        this.htmlHandler = htmlHandler;
        this.httpHandler = httpHandler;
    }
    async resultado({ dia, estado, sorteio}){
        const paginaResultado = await this.httpHandler.paginaResultadoDoDia({dia,estado})
        this.htmlHandler.definirHtml(paginaResultado);
        return this.htmlHandler.extrairResultado({estado, sorteio})
    }

}
module.exports = new DoBicho(new SiteResultadoJogoDoBichoAdapter(), new ResultadoDoJdbHttpHandler());