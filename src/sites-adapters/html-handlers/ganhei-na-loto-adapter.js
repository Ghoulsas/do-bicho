const cheerio = require('cheerio')
const BasicAdapter = require('./basic-adpater')
class SiteGanheiNaLotoAdapter extends BasicAdapter {
    definirHtml(html){
        this.html = html
        this.pagina = cheerio.load(html)
    }
    extrairResultado({resultado, sorteio}){
        const tabelaResultado = []
        const tabelaAlvo = this.selecionarSorteio(sorteio)
        const theads = tabelaAlvo.find('thead')
        const tbody = tabelaAlvo.find('tbody')
        const heads = theads.find('tr > th').map((i, el) => {
            return this.pagina(this).text()
        }).get()
        tbody.find('tr').each((index, element) => {
            const tds = this.pagina(element).find('td')
            const resultadoSorteio = this.processarSorteio({tds, resultado, sorteio})
            tabelaResultado.push(resultadoSorteio)
        })
        return tabelaResultado
    }

    extrairColuna(tds, coluna) {
        return this.pagina(tds[coluna]).text()
    }



    processarSorteioRJ(tds,resultado){
        const premio = this.pagina(tds[0]).text()
        if(this.isPtm(resultado)){
            const resultadoPtm = this.extraiResultadoTabelaRJ(tds, 1)
            return Object.assign({}, resultadoPtm, {premio})
        }
        if(this.isPt(resultado)){
            const resultadoPt = this.extraiResultadoTabelaRJ(tds, 2)
            return Object.assign({}, resultadoPt, {premio})
        }
        if(this.isPtn(resultado)){
            const resultadoPtn = this.extraiResultadoTabelaRJ(tds, 3)
            return Object.assign({}, resultadoPtn, {premio})
        }
        if(this.isCor(resultado)){
            const resultadoCor = this.extraiResultadoTabelaRJ(tds, 4)
           return Object.assign({}, resultadoCor, {premio})
        }
    }
   
    processarPremioOuSoma(premio,resultado){
        if(this.compareStrings(premio, 'soma')){
            return Object.assign({}, resultado, {soma: premio})
        }
        return  Object.assign({}, resultado, {premio})
    }

    processarSorteioGO(tds,resultado){
        const premio = this.pagina(tds[0]).text()
        
        if(this.isPtm(resultado)){
            const resultadoPtm = this.extraiResultadoTabelaGO(tds, 1)
            return this.processarPremioOuSoma(premio, resultadoPtm)
        }
        if(this.isPt(resultado)){
            const resultadoPt = this.extraiResultadoTabelaGO(tds, 2)
            return this.processarPremioOuSoma(premio, resultadoPt)
        }
        if(this.is16h(resultado)){
            const resultado16h = this.extraiResultadoTabelaGO(tds, 3)
            return this.processarPremioOuSoma(premio, resultado16h)
        }
        if(this.isPtn(resultado)){
            const resultadoPtn = this.extraiResultadoTabelaGO(tds, 4)
            return this.processarPremioOuSoma(premio, resultadoPtn)

        }
        if(this.isCor(resultado)){
            const resultadoCor = this.extraiResultadoTabelaGO(tds, 5)
           return this.processarPremioOuSoma(premio, resultadoCor)
        }
    }

    processarSorteioSP(tds,resultado){
        const premio = this.pagina(tds[0]).text()

        if(this.isPt(resultado)){
            const resultadoPt = this.extraiResultadoTabelaSP(tds, 1)
            return Object.assign({}, resultadoPt, {premio})
        }
        if(this.isPtn(resultado)){
            const resultadoPtn = this.extraiResultadoTabelaSP(tds, 2)
            return Object.assign({}, resultadoPtn, {premio})
        }

    }

    selecionarSorteio(sorteio){
        if(this.isSorteioGO(sorteio)){
            return this.pagina('body > div > div > div > main > article > div > section:nth-child(2) > div > div > table')
        }
        if(this.isSorteioRJ(sorteio)){
            return this.pagina('body > div > div > div > main > article > div > section:nth-child(3) > div > div > table')
        }
        if(this.isSorteioSP(sorteio)){
            return this.pagina('body > div > div > div > main > article > div > section:nth-child(4) > div > div > table')
        }

    }   

    processarSorteio({tds,resultado,sorteio}){
        if(this.isSorteioRJ(sorteio)){
            return this.processarSorteioRJ(tds,resultado)
        }
        if(this.isSorteioSP(sorteio)){
            return this.processarSorteioSP(tds,resultado)
        }
        if(this.isSorteioGO(sorteio)){
            return this.processarSorteioGO(tds,resultado)
        }
    }
    isSorteioRJ(sorteio){
        return this.compareStrings(sorteio, 'rj')
    }
    isSorteioSP(sorteio){
        return this.compareStrings(sorteio, 'sp')
    }

    isSorteioGO(sorteio){
        return this.compareStrings(sorteio, 'go')
    }



    extraiResultadoTabelaRJ(tds, coluna){
        const resultado = this.extrairColuna(tds, coluna)
        const [numero, animal] = resultado.split('-')
        return {numero, animal}
    }

    extraiResultadoTabelaGO(tds, coluna){
        const resultado = this.extrairColuna(tds, coluna)
        const numero = resultado.replace(/\D+/g,'')
        const animal = resultado.replace(/[\d+ | \.]/g,'')
        return {numero, animal}
    }

    extraiResultadoTabelaSP(tds, coluna){
        return this.extraiResultadoTabelaRJ(tds, coluna)
    }
}

module.exports = SiteGanheiNaLotoAdapter