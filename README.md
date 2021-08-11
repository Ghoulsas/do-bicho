# do-Bicho
> Consulte o resultado dos sorteios do Jogo do bicho.


[![Coverage Status](https://coveralls.io/repos/github/Ghoulsas/do-bicho/badge.svg?branch=main)](https://coveralls.io/github/Ghoulsas/do-bicho?branch=main)
[![Build Status](https://travis-ci.com/Ghoulsas/do-bicho.svg?branch=main)](https://travis-ci.com/Ghoulsas/do-bicho)

## Nota

Resultados somente do ano de 2021. Novos sites com novas datas serão inseridas em novas atualizações.
## Instalação

`npm install do-bicho`

## Uso
```js
const doBicho = require('do-bicho')
 doBicho.resultado({
    estado: 'RJ',
    sorteio: '21h',
    dia: '02/01/2021',
 }).then(console.log)
/*=> [
  { numero: '0761', animal: 'Leão', grupo: '16', premio: '1º' },
  { numero: '0158', animal: 'Jacaré', grupo: '15', premio: '2º' },
  { numero: '9205', animal: 'Águia', grupo: '02', premio: '3º' },
  { numero: '6719', animal: 'Cachorro', grupo: '05', premio: '4º' },
  { numero: '6901', animal: 'Avestruz', grupo: '01', premio: '5º' },
  { numero: '3744', animal: '', grupo: '', soma: '6º [soma]' },
  { numero: '120', animal: '', grupo: '', premio: '7º [mult]' }
] */
```

