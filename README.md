# Teste de técnologia

## Projeto front-end

Olá! para rodar o projeto frontend basta entrar na pasta ./frontend-test/starwars_characters
e utilizar o comando `npm install` e `npm run start` e checar em seu navegador o projeto. Para rodar os testes, basta executar o comando `npm run test`.

Escolhi utilizar CSS Grid no desenvolvimento do layout, pois acredito que dessa forma consegui criar um código mais legívil; de forma a facilitar a manutenção futura.

O front-end foi desenvolvido utilizando a API GraphQL assim consigo ter mais mobilidade no momento de utilizar os dados.


## Functions

Para ver o resultado das funções basta entrar na pasta ./functions e executar os seguintes comandos `npm run dev/sanity_test` e `npm run dev/quality_test`.

## Teste back-end de arquitetura

### Questão 1

    Acredito que a melhor estratégia para o primeiro cenário seja a seguinte:
    - Primeiro subir uma instância do PostgreSQL já com a última versão dos dados devidamente migrados. A transposição dos dados pode ser feita através de scripts e bibliotecas especializadas em "migration".
    - Configurar apenas um pod para consumir os dados da instância do PostgreSQL e checar se existem problemas.
    - Caso não existam problemas, podemos seguir criando novos pods configurados para o novo banco de dados ao passo que iremos parando os pods antigos.
    - Ao final poderemos migrar os últimos dados, testar novamente e finalmente desligar a instância do MongoDB.

### Questão 2
    Opção 1

    Podemos abordar o problema extraindo essa responsabilidade da API em um micro serviço. Dessa forma teríamos um processo completamente separado para lidar com essa demanda.Criando um endpoint em um subdomínio da API, como a informação do tempo de cada vídeo salva pelo usuário não depende de outros dados podemos subir outra instância de banco de dados somente para essa tarefa.

    Opção 2

    Caso não seja possível criar um micro serviço. Podemos analisar a arquitetura da API em busca de oportunidades de otimização. Dependendo da linguagem seria possível utilizar processamento paralelo para diminuir o impacto das requisições no endpoint. Ainda assim poderíamos seguir com uma instância do banco de dados que armazena apenas esse dado.

    Opção 3

    Pode ser utilizada em conjunto as opções anteriores. Como o dado a respeito da minutagem do vídeo muda constantemente e não é o tipo de informação que irá persistir por um longo período de tempo; acredito que possamos utilizar um banco de dados em memória como o Redis. Nesse caso a leitura é muito mais rápida e ainda pouparemos as consultas no banco de dados principal. Geralmente este tipo de DB é utilizado para realizar cache é verdade, mas mesmo assim acredito que seria uma alternativa.

    Opção para o front-end

    Ainda assim podemos melhorar a abordagem no front-end. Devemos salvar o status da minutagem do vídeo a cada 5s mas não necessariamente fazer uma requisição à API nesse espaço de tempo. O valor da minutagem pode ser salvo localmente e em um período maior de tempo enviado para a API. Para não perder informação adicionamos triggers na aplicação para caso o usuário pause o vídeo ou mude de aba no navegador a informação seja salva.
