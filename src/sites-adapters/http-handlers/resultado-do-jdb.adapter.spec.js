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
        const resultadoDoDia = await sut.paginaResultadoDoDia({dia:'15062017', sorteio:'rj'})
        expect(resultadoDoDia).toBeDefined();
        expect(spyGot).toHaveBeenCalled();
        expect(spyGot).toHaveBeenCalledWith('https://resultadojogobicho.com/RJ/dia/2017-06-15', {
            timeout: 5000,
            noRetry :true,
            resolveBodyOnly: true,
            responseType: 'buffer'
        });
        
    });
});