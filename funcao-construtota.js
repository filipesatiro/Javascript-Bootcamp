function Carro (marca, preco, cor){
    const desconto = 1000;
    this.marca = marca;
    this.preco = preco;
    this.cor = cor;
    this.precoFinal = this.preco - desconto;
    this.velocidade = function(){
        console.log('220km');
    }

}

const fiat = new Carro('fiat', 7000, 'amarelo');
fiat.farol = "duplo";
const honda = new Carro('honda', 5000, 'azul');
