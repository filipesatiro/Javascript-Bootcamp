function Automovel(nome, cor, ano){
    this.nome = nome;
    this.cor = cor;
    this.ano = ano;
    //this.portas = 5;
    
    this.velocidade = function(){
        return '280km';
    }
}

// Automovel.prototype.portas = 4;


const camaro = new Automovel('Camaro', 'Amarelo', 2024)
const fusca = new Automovel('Fusca', 'Branco', 1973)

