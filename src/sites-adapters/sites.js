const SiteGanheiNaLotoAdapter = require("./html-handlers/ganhei-na-loto-adapter");
const SiteResultadoJogoDoBichoAdapter = require("./html-handlers/resultado-do-jdb-adapter");
const GanheiNaLotoHttpHandler = require("./http-handlers/ganhei-na-loto-adapter");
const ResultadoDoJdbHttpHandler = require("./http-handlers/resultado-do-jdb.adapter");

const sitesAdapters = Object.freeze({
    'ganhei-na-loto': {
      httpHandler: GanheiNaLotoHttpHandler,
      htmlHandler:  SiteGanheiNaLotoAdapter,
    },
    'resultado-do-jdb':{
        httpHandler: ResultadoDoJdbHttpHandler,
        htmlHandler:   SiteResultadoJogoDoBichoAdapter}
});

module.exports = sitesAdapters;

