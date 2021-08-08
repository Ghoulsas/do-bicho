const cheerio = require('cheerio')
class BasicAdapter {
    definirHtml(html){
        this.html = html
        this.pagina = cheerio.load(html)
    }
    extrairResultado({resultado}){

    }

    isPtm(resultado){
        return this.compareStrings(resultado, 'ptm') || this.compareStrings(resultado, '11h') || this.compareStrings(resultado, '10h')
    }
    isPt(resultado){
        return this.compareStrings(resultado, 'pt') || this.compareStrings(resultado, '14h') || this.compareStrings(resultado, '13h')
    }
    is16h(resultado){
        return this.compareStrings(resultado, '16h')
    }
    isPtn(resultado){
        return this.compareStrings(resultado, 'ptn') || this.compareStrings(resultado, '18h') || this.compareStrings(resultado, '19h')
    }

    isCor(resultado){
        return this.compareStrings(resultado, 'cor') || this.compareStrings(resultado, '21h') || this.compareStrings(resultado, '20h')
    }

   
    processarPremioOuSoma(premio,resultado){
        if(this.compareStrings(premio, 'soma')){
            return Object.assign({}, resultado, {soma: premio})
        }
        return  Object.assign({}, resultado, {premio})
    }

    compareStrings(str1, str2){
        return str1.toLowerCase() == str2.toLowerCase()
    }

}

module.exports = BasicAdapter