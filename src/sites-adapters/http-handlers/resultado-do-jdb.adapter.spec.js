const got = require('got');

const ResultadoDoJdbHttpHandler = require('./resultado-do-jdb.adapter');
describe('Http handler', () => {
    test('deve retornar o buffer da página', async () => {
        const sut = new ResultadoDoJdbHttpHandler();
        const spyGot = jest.spyOn(got, 'get').mockImplementation(() => {
            return Promise.resolve(
            Buffer.from('<html></html>')
         );
        });
        const resultadoDoDia = await sut.paginaResultadoDoDia({dia:'15062017', estado:'rj'})
        expect(resultadoDoDia).toBeDefined();
        expect(spyGot).toHaveBeenCalled();
        expect(spyGot).toHaveBeenCalledWith('https://resultadojogobicho.com/RJ/dia/2017-06-15', {
            timeout: 5000,
            noRetry :true,
            resolveBodyOnly: true,
            responseType: 'buffer'
        });
        
    });
    test('deve throw um erro pois o estado não é suportado', async () => {
        const sut = new ResultadoDoJdbHttpHandler();
        try {
            
            const resultadoDoDia = await sut.paginaResultadoDoDia({dia:'15062017', estado:'df'})        
        } catch (error) {
            expect(error.message).toBe('O estado DF não é suportado')

        }
    });
    test('deve throw um erro pois o estado não foi informado', async () => {
        const sut = new ResultadoDoJdbHttpHandler();
        try {
            
            const resultadoDoDia = await sut.paginaResultadoDoDia({dia:'15062017', })        
        } catch (error) {
            expect(error.message).toBe('Não foi informado um estado')

        }
    });
    test('deve throw um erro pois a data é inválida', async () => {
        const sut = new ResultadoDoJdbHttpHandler();
        try {
            
            const resultadoDoDia = await sut.paginaResultadoDoDia({dia:'150617', estado:'rj'})        
        } catch (error) {
            expect(error.message).toBe('Dia inválido')

        }
    });
});