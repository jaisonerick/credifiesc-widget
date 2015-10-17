# Credifiesc - Widget

Exibe o saldo da sua conta na Credifiesc em um widget no dashboard do seu Mac.

## Setup

Você deve possuir o phantom instalado. Para isso, utilize o comando `brew
install phantomjs`.

- [Download](https://github.com/jaisonerick/credifiesc.wdgt/archive/master.zip).
- Abra o arquivo `bin/crawler.rb` e altere os dados de acesso a sua conta
  bancária, conforme o código a seguir:

```ruby
account = '1234' # Insira o número da sua conta.
owner = 'your name' # Insira o seu nome (contas de múltiplos titulares).
pass = 'your password' # Insira sua senha numérica.
secret = 'secret' # Insira sua senha alfanumérica.
```

- Execute o comando "bundle install" para instalar as dependências.
- Renomeie o nome da pasta para "Credifiesc.wdgt".
- Clique duas vezes na pasta para instalar o widget.



