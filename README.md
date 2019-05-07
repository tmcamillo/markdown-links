# Extrair links de Documentos 

 Esta aplicação destina-se à extração de links de um documento em formato Markdown e os devolva em um vetor de objetos.

## Como instalar:


$  npm install markdown-links


## Como utilizar:

```javascript
const getLinksFromMd = require('markdown-links');
const input = 'Lorem ipsum Dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor  incididunt ut [labore](https://en.wiktionary.org/wiki/labore) et [dolore](https://en.wiktionary.org/wiki/dolore) magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.';
console.log(getLinksFromMd(input));

// [ { href: 'https://en.wiktionary.org/wiki/labore',
//     text: 'labore' },
//   { href: 'https://en.wiktionary.org/wiki/dolore',
//     text: 'dolore' } ]

```


## roadmap oficial do projeto*

### Versão 3.0.0

* README translated to english.

### Versão 2.0.0

* Correção de bugs.

### Versão 1.0.0

* Funcionalidades: extração de links;
* Entrada de Strings.