// Classe Atleta
class Atleta {
    constructor(nome, idade, peso, altura, notas) {
        this.nome = nome;
        this.idade = idade;
        this.peso = peso;
        this.altura = altura;
        this.notas = notas;
    }
   

// Metodos

    calculaCategoria() {
        if(this.idade >= 9 && this.idade <= 11){
            return "Infantil";
        }
        if(this.idade >= 12 && this.idade <= 13){
            return "Juvenil";
        }
        if(this.idade >= 14 && this.idade <= 15){
            return "Intermediário";
        }
        if(this.idade >= 16 && this.idade <= 30){
            return "Adulto";
        }
        else{
            return "Sem categoria";
        }
    }

    // Calcular IMC
    calculaIMC() {
        let imc = this.peso / (this.altura * this.altura);
        return imc
    }

    // Calcular a média
    calculaMediaValida() {
        let notasOrdenadas = [...this.notas].sort((a, b) => a - b);

    // remove menor e maior
    notasOrdenadas.shift();
    notasOrdenadas.pop();

    let soma = notasOrdenadas.reduce((total, nota) => total + nota, 0);

    return soma / notasOrdenadas.length;

    }

    // Nome do Atleta
    obtemNomeAtleta() {
        return this.nome;
    }

    // Idade do atleta
    obtemIdadeAtleta() {
        return this.idade;
    }

    // Peso do atleta
    obtemPesoAtleta() {
        return this.peso;
    }

    // Altura do atleta
    obtemAlturaAtleta() {
    return this.altura;
    }

    // Notas do atleta
    obtemNotasAtleta() {
        return this.notas;
    }

    // Categoria do atleta
    obtemCategoria() {
        return this.calculaCategoria();
    }

    // Resultado de IMC
    obtemIMC() {
        return this.calculaIMC();
    }

    // Resultado da Média
    obtemMediaValida() {
        return this.calculaMediaValida();
    }


}  

// Declara o atleta
const atleta = new Atleta("Cesar Abascal",
    30, 80, 1.70,
    [10, 9.34, 8.42, 10, 7.88]);

console.log("Nome:", atleta.obtemNomeAtleta());
console.log("Idade:", atleta.obtemIdadeAtleta());
console.log("Peso:", atleta.obtemPesoAtleta(), "kg");
console.log("Altura:", atleta.obtemAlturaAtleta());
console.log("Notas:", atleta.obtemNotasAtleta());
console.log("Categoria:", atleta.obtemCategoria());
console.log("IMC:", atleta.obtemIMC());
console.log("Média válida:", atleta.obtemMediaValida());

