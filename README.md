# monitor-fila
Projeto para monitorar a disponibilidade de vacinas nos postos de saúde da cidade de São Paulo

# Instalação

Para instalar o projeto realize o clone deste repositório:

```sh
$ git clone https://github.com/Jvictor97/monitor-fila.git
```
Então execute o seguinte comando para instalar as dependências do projeto:

```sh
$ npm install
```

Por fim, será necessário alterar as variáveis de ambiente para o projeto. 

Para isso, faça uma cópia do arquivo `.env.example` e renomeie para `.env`, então altere as variáveis contidas nesse arquivo de acordo com a definição abaixo:

| Variável        | Definição                             | Exemplo                                      |
|-----------------|---------------------------------------|----------------------------------------------|
| `SMTP_USER`     | Usuário para o SMTP do Gmail          | `usuario@gmail.com`                          |
| `SMTP_PASSWORD` | Senha para o SMTP do Gmail            | `senhaforte@123`                             |
| `EMAIL_FROM`    | Nome e endereço de email do remetente | `"'Nome Do Remetente' <remetente@email.com>"`|
| `EMAIL_TO`      | Endereço de email do destinatário     | `destinatario@email.com`                     |

# Execução

Para rodar o projeto execute o script:

```sh
$ npm start
```
