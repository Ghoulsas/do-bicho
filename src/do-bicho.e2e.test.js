const jdb = require(".");
describe('[e2e] Test do extractor', () => {
    test('[e2e] teste de retorno do resultado RJ 19h ', async () => {
        const resultado = await jdb.resultado({
                dia: '05/08/2021',
                sorteio: '19h',
                estado: 'RJ'   
        })
        expect(resultado).toBeDefined();
        expect(resultado.length).toBe(7)
        expect(resultado[0]).toEqual({"animal": "Cachorro",
         "grupo": "05", 
         "numero": "2218", 
         "premio": "1º"
        });
    });
    

    test('[e2e] teste de retorno do resultado SP 19h ', async () => {
        const resultado = await jdb.resultado({
                dia: '05/08/2021',
                sorteio: '19h',
                estado: 'SP'   
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