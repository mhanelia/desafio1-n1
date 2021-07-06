
# Desafio Agilizei N1

Desafio do Chapter #1 proposto no Bootcamp de Cypress ministrado pelo @samlucax

Consiste em validar o cadastro no http://automationpractice.com e publicar no GitHub Pages

## Ferramentas utilizadas:
[Node.js](https://nodejs.org/)
[Framework: Cypress](https://www.cypress.io/)
[lib: chance](https://chancejs.com)
[report: mochawesome](https://github.com/adamgruber/mochawesome)


## Instalação:

1- instalar o Node.js
2- criar uma pasta para o projeto
3- abra o terminal na pasta
4- para iniciar um projeto node digite:
```bash
npm init -y
```
5- após iniciar o projeto, basta instalar o Cypress:
````
npm install -D cypress
````
6- com o Cypress instalado, basta executar a primeira vez para que os arquivos sejam criados:
````
npx cypress open
````
7- para finalizar, basta instalar as libs de reports:
````
npm i -D mocha mochawesome mochawesome-merge mochawesome-report-generator
````


## Uso
Para executar com um navegar e vizualizar o teste, basta executar:

````
npm run cy:open
````

ou para executar em backgroud, o comando é:
````
npm run cy:run
````
feito isso, basta gerar o relatório:
````
npm run report:merge
````
e, logo após:
````
npm run report:merge
````
Prontinho! Agora o relatório está gerado :) 