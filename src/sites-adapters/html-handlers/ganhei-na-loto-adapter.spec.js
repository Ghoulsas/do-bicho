
const {readFileSync} = require('fs')
const path = require('path');
const HtmlHandler = require('./ganhei-na-loto-adapter');

const pagina = readFileSync(path.resolve(__dirname,'../../../test/fixtures/pagina-resultado.html'))
describe('Html handler', () => {
    test('deve retornar a tabela do resultado jdb - Rio de Janeiro sorteio ptm', () => {
        const sut = new HtmlHandler()
        sut.definirHtml(pagina)
        const resultado = sut.extrairResultado({resultado: 'ptm', sorteio: 'rj'})
        expect(resultado).toEqual([
         {numero: '9732', animal: 'Camelo', premio: '1o Prêmio'}, 
         {numero: '6961', animal: 'Leão', premio: '2o Prêmio'},
         {numero: '1376',animal: 'Pavão', premio: '3o Prêmio'},
         {numero: '1087',animal: 'Tigre',   premio: '4o Prêmio'},
         {numero: '6065',animal: 'Macaco',  premio: '5o Prêmio'},
         {numero: '5221',animal: 'Cabra',   premio: '6o Prêmio'},
         {numero: '744',animal: 'Cavalo',   premio: '7o Prêmio'}
        ])
    });

    test('deve retornar a tabela do resultado jdb - Rio de Janeiro sorteio pt', () => {
        const sut = new HtmlHandler()
        sut.definirHtml(pagina)
        const resultado = sut.extrairResultado({resultado: 'pt', sorteio: 'rj'})
        expect(resultado).toEqual([
         {numero: '2856', animal: 'Gato', premio: '1o Prêmio'}, 
         {numero: '3821', animal: 'Cabra', premio: '2o Prêmio'},
         {numero: '8526',animal: 'Carneiro', premio: '3o Prêmio'},
         {numero: '1124',animal: 'Cabra',   premio: '4o Prêmio'},
         {numero: '8539',animal: 'Coelho',  premio: '5o Prêmio'},
         {numero: '4866',animal: 'Macaco',  premio: '6o Prêmio'},
         {numero: '912',animal: 'Burro',   premio: '7o Prêmio'}
        ])
    });

    test('deve retornar a tabela do resultado jdb - Rio de Janeiro sorteio 11h', () => {
        const sut = new HtmlHandler()
        sut.definirHtml(pagina)
        const resultado = sut.extrairResultado({resultado: '14h', sorteio: 'rj'})
        expect(resultado).toEqual([
         {numero: '2856', animal: 'Gato', premio: '1o Prêmio'}, 
         {numero: '3821', animal: 'Cabra', premio: '2o Prêmio'},
         {numero: '8526',animal: 'Carneiro', premio: '3o Prêmio'},
         {numero: '1124',animal: 'Cabra',   premio: '4o Prêmio'},
         {numero: '8539',animal: 'Coelho',  premio: '5o Prêmio'},
         {numero: '4866',animal: 'Macaco',  premio: '6o Prêmio'},
         {numero: '912',animal: 'Burro',   premio: '7o Prêmio'}
        ])
    });

    test('deve retornar a tabela do resultado jdb - Rio de Janeiro sorteio ptn', () => {
        const sut = new HtmlHandler()
        sut.definirHtml(pagina)
        const resultado = sut.extrairResultado({resultado: 'ptn', sorteio: 'rj'})
        expect(resultado).toEqual([
         {numero: '****', animal: ' ', premio: '1o Prêmio'}, 
         {numero: '****', animal: ' ', premio: '2o Prêmio'},
         {numero: '****',animal: ' ', premio: '3o Prêmio'},
         {numero: '****',animal: ' ',   premio: '4o Prêmio'},
         {numero: '****',animal: ' ',  premio: '5o Prêmio'},
         {numero: '****',animal: ' ',  premio: '6o Prêmio'},
         {numero: '****',animal: ' ',   premio: '7o Prêmio'}
        ])
    });

    test('deve retornar a tabela do resultado jdb - Rio de Janeiro sorteio cor', () => {
        const sut = new HtmlHandler()
        sut.definirHtml(pagina)
        const resultado = sut.extrairResultado({resultado: 'cor', sorteio: 'rj'})
        expect(resultado).toEqual([
         {numero: '****', animal: ' ', premio: '1o Prêmio'}, 
         {numero: '****', animal: ' ', premio: '2o Prêmio'},
         {numero: '****',animal: ' ', premio: '3o Prêmio'},
         {numero: '****',animal: ' ',   premio: '4o Prêmio'},
         {numero: '****',animal: ' ',  premio: '5o Prêmio'},
         {numero: '****',animal: ' ',  premio: '6o Prêmio'},
         {numero: '****',animal: ' ',   premio: '7o Prêmio'}
        ])
    });

    test('deve retornar a tabela do resultado jdb - São Paulo sorteio pt', () => {
         const sut = new HtmlHandler()
        sut.definirHtml(pagina)
        const resultado = sut.extrairResultado({resultado: 'pt', sorteio: 'sp'})
        expect(resultado).toEqual([
         {numero: '1418', animal: 'Cachorro', premio: '1o Prêmio'}, 
         {numero: '1897', animal: 'Vaca', premio: '2o Prêmio'},
         {numero: '2427',animal: 'Carneiro', premio: '3o Prêmio'},
         {numero: '7500',animal: 'Vaca',   premio: '4o Prêmio'},
         {numero: '9362',animal: 'Leão',  premio: '5o Prêmio'},
         {numero: '2604',animal: 'Avestruz',  premio: '6o Prêmio'},
         {numero: '686',animal: 'Tigre',   premio: '7o Prêmio'}
        ])
    });

    test('deve retornar a tabela do resultado jdb - Goiás sorteio 11h', () => {
        const sut = new HtmlHandler()
        sut.definirHtml(pagina)
        const resultado = sut.extrairResultado({resultado: '11h', sorteio: 'go'})
        expect(resultado).toEqual([
         {numero: '2941', animal: 'Cavalo', premio: '1o Prêmio'}, 
         {numero: '2245', animal: 'Elefante', premio: '2o Prêmio'},
         {numero: '3175',animal: 'Pavão', premio: '3o Prêmio'},
         {numero: '3826',animal: 'Carneiro',   premio: '4o Prêmio'},
         {numero: '6008',animal: 'Águia',  premio: '5o Prêmio'},
         {numero: '18195',animal: 'Veado',  soma: 'Soma'},
        ])
    });

    test('deve retornar a tabela do resultado jdb - Goiás sorteio 16h', () => {
        const sut = new HtmlHandler()
        sut.definirHtml(pagina)
        const resultado = sut.extrairResultado({resultado: '16h', sorteio: 'go'})
        expect(resultado).toEqual([
         {numero: '2083', animal: 'Touro', premio: '1o Prêmio'}, 
         {numero: '5726', animal: 'Carneiro', premio: '2o Prêmio'},
         {numero: '7782',animal: 'Touro', premio: '3o Prêmio'},
         {numero: '5837',animal: 'Coelho',   premio: '4o Prêmio'},
         {numero: '0386',animal: 'Tigre',  premio: '5o Prêmio'},
         {numero: '21814',animal: 'Borboleta',  soma: 'Soma'},
        ])
    });
});