const cheerio = require('cheerio')
class BasicAdapter {

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

   
    compareStrings(str1, str2){
        return str1.toLowerCase() == str2.toLowerCase()
    }

}

module.exports = BasicAdapter