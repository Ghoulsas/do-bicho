const SiteResultadoJogoDoBichoAdapter = require('./sites-adapters/html-handlers/resultado-do-jdb-adapter');
const ResultadoDoJdbHttpHandler = require('./sites-adapters/http-handlers/resultado-do-jdb.adapter');

class ExtratorResultado {
    constructor(htmlHandler, httpHandler){
        this.htmlHandler = htmlHandler;
        this.httpHandler = httpHandler;
    }
    async resultado({ dia, sorteio, resultado, site}){
        const paginaResultado = await this.httpHandler.paginaResultadoDoDia({dia,sorteio})
        this.htmlHandler.definirHtml(paginaResultado);
        return this.htmlHandler.extrairResultado({sorteio, resultado})
    }

}
module.exports = new ExtratorResultado(new SiteResultadoJogoDoBichoAdapter(), new ResultadoDoJdbHttpHandler());