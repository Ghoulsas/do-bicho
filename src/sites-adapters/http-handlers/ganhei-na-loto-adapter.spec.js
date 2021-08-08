const got = require('got');
const GanheiNaLotoHttpHandler = require('./ganhei-na-loto-adapter');

describe('Http handler', () => {
    test('deve retornar o buffer da página', async () => {
        const sut = new GanheiNaLotoHttpHandler();
        const spyGot = jest.spyOn(got, 'get').mockImplementation(() => {
            return Promise.resolve(
            Buffer.from('<html></html>')
         );
        });
        const resultadoDoDia = await sut.paginaResultadoDoDia({dia:'15062017'})
        expect(resultadoDoDia).toBeDefined();
        expect(spyGot).toHaveBeenCalled();
        expect(spyGot).toHaveBeenCalledWith('https://www.ganheinaloto.com/jogodobicho/resultado-jogodobicho-dia-15062017', {
            timeout: 5000,
            noRetry :true,
            resolveBodyOnly: true,
            responseType: 'buffer'
        });
        
    });
});