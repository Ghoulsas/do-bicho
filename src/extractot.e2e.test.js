const extrator = require("./extrator-resultado");
describe('Test e2e do extractor', () => {
    test('Teste de validação de um resultado', async () => {
        const resultado = await extrator.resultado({
                dia: '05/08/2021',
                resultado: '19h',
                site: 'resultado-do-jdb',
                sorteio: 'RJ'   
        })
        expect(resultado).toBeDefined();
        expect(resultado.length).toBe(7)
        expect(resultado[0]).toEqual({"animal": "Cachorro",
         "grupo": "05", 
         "numero": "2218", 
         "premio": "1º"
        });
    });

    test('Teste de validação de um resultado', async () => {
        const resultado = await extrator.resultado({
                dia: '05/08/2021',
                resultado: '19h',
                site: 'resultado-do-jdb',
                sorteio: 'SP'   
        })
        expect(resultado).toBeDefined();
        expect(resultado.length).toBe(7)
        expect(resultado[0]).toEqual({"animal": "Cabra",
         "grupo": "06", 
         "numero": "0224", 
         "premio": "1º"
        });
    });
});