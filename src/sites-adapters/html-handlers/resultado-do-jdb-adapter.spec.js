const cheerio = require('cheerio')

const {readFileSync} = require('fs')
const path = require('path');
const SiteResultadoJogoDoBichoAdapter = require('./resultado-do-jdb-adapter');
const pagina = readFileSync(path.resolve(__dirname,'../../../test/fixtures/site-resultadodojogodobicho-rj.html'))
describe('Site: resultado do jogo do bicho adapter', () => {
    test('deve retornar o resultado do jogo das 11h (ptm) do RJ', () => {
        const sut = new SiteResultadoJogoDoBichoAdapter()
        sut.definirHtml(pagina)
        const resultado = sut.extrairResultado({resultado: 'ptm', sorteio: 'rj'})
        expect(resultado).toEqual([
         {numero: '1577', animal: 'Perú', grupo:'20' ,premio: '1º'}, 
         {numero: '1884', animal: 'Touro', grupo:'21' ,premio: '2º'},
         {numero: '7504',animal: 'Avestruz',grupo:'01' , premio: '3º'},
         {numero: '8094',animal: 'Veado', grupo:'24' ,  premio: '4º'},
         {numero: '6296',animal: 'Veado', grupo:'24' , premio: '5º'},
         {numero: '5355',animal: '', grupo:'' ,  soma: '6º [soma]'},
         {numero: '971',animal: '', grupo:'' ,  premio: '7º [mult]'}
        ])
    });

    test('deve retornar o resultado do jogo das 14h (Pt) do RJ', () => {
        const sut = new SiteResultadoJogoDoBichoAdapter()
        sut.definirHtml(pagina)
        const resultado = sut.extrairResultado({resultado: '14h', sorteio: 'rj'})
        expect(resultado).toEqual([
         {numero: '3083', animal: 'Touro', grupo:'21' ,premio: '1º'}, 
         {numero: '2691', animal: 'Urso', grupo:'23' ,premio: '2º'},
         {numero: '9855',animal: 'Gato',grupo:'14' , premio: '3º'},
         {numero: '0198',animal: 'Vaca', grupo:'25' ,  premio: '4º'},
         {numero: '2730',animal: 'Camelo', grupo:'08' , premio: '5º'},
         {numero: '8557',animal: '', grupo:'' ,  soma: '6º [soma]'},
         {numero: '296',animal: '', grupo:'' ,  premio: '7º [mult]'}
        ])
    });
    test('deve retornar o resultado do jogo das 16h do RJ', () => {
        const sut = new SiteResultadoJogoDoBichoAdapter()
        sut.definirHtml(pagina)
        const resultado = sut.extrairResultado({resultado: '16h', sorteio: 'rj'})
        expect(resultado).toEqual([
         {numero: '8698', animal: 'Vaca', grupo:'25' ,premio: '1º'}, 
         {numero: '6689', animal: 'Urso', grupo:'23' ,premio: '2º'},
         {numero: '1131',animal: 'Camelo',grupo:'08' , premio: '3º'},
         {numero: '5167',animal: 'Macaco', grupo:'17' ,  premio: '4º'},
         {numero: '2186',animal: 'Tigre', grupo:'22' , premio: '5º'},
         {numero: '3871',animal: '', grupo:'' ,  soma: '6º [soma]'},
         {numero: '180',animal: '', grupo:'' ,  premio: '7º [mult]'}
        ])
    });

    test('deve retornar o resultado do jogo das 18h (Ptn) do RJ', () => {
        const sut = new SiteResultadoJogoDoBichoAdapter()
        sut.definirHtml(pagina)
        const resultado = sut.extrairResultado({resultado: '18h', sorteio: 'rj'})
        expect(resultado).toEqual([
         {numero: '9875', animal: 'Pavão', grupo:'19' ,premio: '1º'}, 
         {numero: '7597', animal: 'Vaca', grupo:'25' ,premio: '2º'},
         {numero: '0417',animal: 'Cachorro',grupo:'05' , premio: '3º'},
         {numero: '4442',animal: 'Cavalo', grupo:'11' ,  premio: '4º'},
         {numero: '1115',animal: 'Borboleta', grupo:'04' , premio: '5º'},
         {numero: '3446',animal: '', grupo:'' ,  soma: '6º [soma]'},
         {numero: '020',animal: '', grupo:'' ,  premio: '7º [mult]'}
        ])
    });


    test('deve retornar o resultado do jogo das 21h do RJ', () => {
        const sut = new SiteResultadoJogoDoBichoAdapter()
        sut.definirHtml(pagina)
        const resultado = sut.extrairResultado({resultado: '21h', sorteio: 'rj'})
        expect(resultado).toEqual([
         {numero: '0831', animal: 'Camelo', grupo:'08' ,premio: '1º'}, 
         {numero: '4248', animal: 'Elefante', grupo:'12' ,premio: '2º'},
         {numero: '5104',animal: 'Avestruz',grupo:'01' , premio: '3º'},
         {numero: '9054',animal: 'Gato', grupo:'14' ,  premio: '4º'},
         {numero: '0868',animal: 'Macaco', grupo:'17' , premio: '5º'},
         {numero: '0105',animal: '', grupo:'' ,  soma: '6º [soma]'},
         {numero: '530',animal: '', grupo:'' ,  premio: '7º [mult]'}
        ])
    });
});