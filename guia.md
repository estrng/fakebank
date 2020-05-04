### Revisão

- yarn --init para criar um yarn lock e continuarmos com as intalações necessários para poder construir uma api com Node.js.

- yarn add express para podermos fazer o servidor ajustável, agora podemos criar uma pasta chamada SRC, dentro dela criamos 3 arquivos chamados, app.js, server.js e routes.js.

No qual o _APP_ ficara a configuração de paramêtros a serem utilizados.

No _server_ iremos importar APP colocar a porta que será escutada.

No _routes_ é onde ficarão as rotas de requisição para operações.

- yarn add nodemon utilizamos para dar um refresh automático no servidor quando ele estiver em pé. E ainda podemos utilizar o sucrase que faz praticamente a mesma coisa só que de uma maneira otimizada.

## Banco de dados

- Para podermos trabalhar com o BD POSTGRES, precisamos instalar acima, após isso faremos algumas configurações.
```bash
yarn add pg pg-hstore sequelize 
yarn sequelize-cli -D
```
- Crie um arquivo na raiz do projeto chamado: sequelizerc

- Devemos codar os arquivos de configurações, coneção, config e suas models.

## Ideia

A ideia aqui é fazer uma api fake de transferencias bancarias só para podermos mandar uma requisição deposito na conta de cliente do PIM III, no qual já sabemos que o cliente deve ter feito conta previamente no sistema da empresa ficticia e já ter sido aprovada. Sendo assim ela irá cadastrar contas de sua propriedade para poder fazer as transferencias.

PartnerId Long
Id do parceiro fornecido pelo Fitbank.

BusinessUnitId Long
Código informado pelo Fitbank.

Method String
MoneyTransfer.

ToTaxNumber String
CPF/CNPJ destino.

ToName String
Nome destino.

Bank Int
Código do banco.

BankBranch String
Agência, sem incluir o dígito.

BankAccount String
Conta.

BankAccountDigit String
Dígito da conta.

Value Decimal
Valor.

RateValue Decimal
Taxa.

Identifier String
Identificador da transferência.

RateValueType Short
0 - Enviado (Taxa enviada na requisição)
1 - Padrão (Taxa configurada na Unidade de negócio)
2 - Nenhum (Sem Taxa)

PaymentDate DateTime
Data de pagamento (yyyy/MM/dd).
