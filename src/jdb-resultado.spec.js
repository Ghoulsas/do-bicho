

const {readFileSync} = require('fs')
const path = require('path');
const pagina = readFileSync(path.resolve(__dirname,'../test/fixtures/pagina-resultado.html'))
const paginaResultado = readFileSync(path.resolve(__dirname,'../test/fixtures/site-resultadodojogodobicho-rj.html'))
const got = require('got');
const jdb = require('./jdb-resultado');


describe('Extrator resultado', () => {

    beforeAll(() => {
        jest.resetAllMocks();
    });


    test('deve retornar o número e o animal sorteado do dia informado', async () => {
        jest.spyOn(got, 'get').mockImplementation(() => Promise.resolve(paginaResultado));
        const resultado = await jdb.resultado({
            sorteio: '11h',
            estado: 'RJ' , 
            dia: '15/06/2017',
        })
        expect(resultado.length).toBe(7);
        expect(resultado[0].numero).toBe('1577');
        expect(resultado[0].animal).toBe('Perú');
    });
});