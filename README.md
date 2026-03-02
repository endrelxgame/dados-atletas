🏅 Projeto: Cadastro de Atletas

Este projeto consiste no desenvolvimento de uma aplicação em JavaScript capaz de receber informações de atletas, calcular parâmetros importantes e exibir os resultados ao usuário.

A aplicação foi construída utilizando Programação Orientada a Objetos (POO), com foco na criação de uma classe responsável por organizar os dados e comportamentos dos atletas.
========================================================================================

🎯 Objetivo

Criar uma classe Atleta que:

Receba informações do atleta
Calcule:
Categoria:
IMC:
Média válida das notas:
Exiba os dados de forma estruturada
========================================================================================

🧱 Estrutura da Classe

A classe Atleta possui os seguintes atributos:

nome:
idade:
peso:
altura:
notas:
========================================================================================

    // Métodos Implementados
🔹 Cálculo de Categoria

Define a categoria do atleta com base na idade:
Idade	Categoria
9 a 11	"Infantil"
12 a 13	"Juvenil"
14 a 15	"Intermediário"
16 a 30	"Adulto"
Outros	"Sem categoria"
========================================================================================

🔹 Cálculo de IMC

Utiliza a fórmula:

IMC = peso / (altura × altura)
========================================================================================

🔹 Cálculo da Média Válida

A média válida é calculada:

Ordenando as notas

Removendo:
A menor nota
A maior nota
Calculando a média das notas restantes
========================================================================================

🔹 Métodos Usados

A classe também possui métodos para obtenção dos dados:

obtemNomeAtleta()

obtemIdadeAtleta()

obtemPesoAtleta()

obtemAlturaAtleta()

obtemNotasAtleta()

obtemCategoria()

obtemIMC()

obtemMediaValida()
========================================================================================

🧪 Exemplo de Uso
const atleta = new Atleta(
  "Cesar Abascal",
  30,
  80,
  1.70,
  [10, 9.34, 8.42, 10, 7.88]
);

console.log("Nome:", atleta.obtemNomeAtleta());
console.log("Idade:", atleta.obtemIdadeAtleta());
console.log("Peso:", atleta.obtemPesoAtleta());
console.log("Altura:", atleta.obtemAlturaAtleta());
console.log("Notas:", atleta.obtemNotasAtleta());
console.log("Categoria:", atleta.obtemCategoria());
console.log("IMC:", atleta.obtemIMC());
console.log("Média válida:", atleta.obtemMediaValida());
========================================================================================

📊 Exemplo de Saída

Nome: Cesar Abascal
Idade: 30
Peso: 80
Altura: 1.7
Notas: [10, 9.34, 8.42, 10, 7.88]
Categoria: Adulto
IMC: 27.68
Média válida: 9.25

========================================================================================