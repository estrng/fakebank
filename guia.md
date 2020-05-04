### Revisão

- yarn --init para criar um yarn lock e continuarmos comas intalações necessarias para poder construir uma api com Node.js.

- yarn add express para podermos fazer o servidor ajustavel, agora podemos criar uma pasta chamada SRC, dentro dela criamos 3 arquivos chamados, app.js, server.js e routes.js.

No qual o _APP_ ficara a configuração de parametros a serem utilizados.

No _server_ iremos importar APP colocar a porta que será escurada.

No _routes_ é onde ficaram as rotas de requisição para operações.

- yarn add nodemon utilizamos para dar um refreshin automatico no servidor quando ele estiver em pé. E ainda podemos utilizar o sucrase que faz praticamente a mesma coisa só que de uma maneira otimizada.

## Banco de dados

yarn add pg pg-hstore
yarn add sequelize
yarn add sequelize-cli -D
create: sequelizerc

Para podermos trablhar com o BD POSTGRES, precisamos instalar acima, após isso fazermos algumas configurações.

- Na raiz do projeto temos que criar uma aquivo chamado sequelizerc, pois neste arquivo irá ficar todos os path que a CLI irá utilizar.

- Devemos codar os arquivos de configurações de de conneção e configuração e suas models.

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
