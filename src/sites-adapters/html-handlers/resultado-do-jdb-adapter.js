const cheerio = require('cheerio')
const BasicAdapter = require('./basic-adpater')
class SiteResultadoJogoDoBichoAdapter extends BasicAdapter{
    definirHtml(html){
        this.html = html
        this.pagina = cheerio.load(html)
    }
    extrairResultado({resultado}){
        const tabelaResultado = []
        const container = this.pagina('.rs-row-container')
        const cardsPtm = this.selecionarSorteio(container, resultado)
        this.pagina(cardsPtm).find('.rs-row').each((index, element) => {
            const divs = this.pagina(element)
            const resultadoSorteio = this.processarSorteio({divs, resultado, })
            tabelaResultado.push(resultadoSorteio)
        })
    
        return tabelaResultado
    }

  


    selecionarSorteio(container,resultado){
        if(this.isPtm(resultado)){
            return container[0]
        }
        if(this.isPt(resultado)){
            return  container[2]
        }
        
        if(this.is16h(resultado)){
            return  container[4]
        }
        if(this.isPtn(resultado)){
            return  container[6]
        }
        if(this.isCor(resultado)){
            return  container[8]
        }
    }
   
    processarPremioOuSoma(premio,resultado){
        if(premio.includes('soma')){
            return Object.assign({}, resultado, {soma: premio})
        }
        return  Object.assign({}, resultado, {premio})
    }


 

    processarSorteio({divs,resultado}){
        return this.extrairResultadoDoCard(divs)
    }
  

    extrairResultadoDoCard(row){
        const premio = this.pagina(row).find('.rs-posicao').text().trim()
        const numero = this.pagina(row).find('.rs-numero').text().trim()
        const animal = this.pagina(row).find('.rs-animal').text().trim()
        const grupo = this.pagina(row).find('.rs-grupo').text().trim()
        return this.processarPremioOuSoma(premio, {numero, animal, grupo})
    }

}

module.exports = SiteResultadoJogoDoBichoAdapter