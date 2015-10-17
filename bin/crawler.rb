require 'rubygems'
require 'bundler/setup'
require 'watir-webdriver'

account = '1234'
owner = 'your name'
pass = 'your password'
secret = 'secret'

b = Watir::Browser.new :phantomjs
b.goto 'www.credifiesc.coop.br'
b.text_field(id: 'conta').set account
b.button(class: 'bt-access').click

f = b.frame(id: 'mainFrame')
owner_link = f.link(text: /#{owner}/)
owner_link.click if owner_link.exists?

pass.split('').each do |i|
  f.button(value: /#{i}/).click
end

secret.upcase.split('').each do |i|
  f.button(value: i).when_present.click
end

f.button(value: 'Confirmar').click

resumo = f.td(text: 'Atual')
saldo = resumo.element(xpath: './following-sibling::*')

puts "#{saldo.text}"
