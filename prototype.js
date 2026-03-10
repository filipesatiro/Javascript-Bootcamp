function Cadastro(nome, idade){
    this.nome = this.nome;
    this.idade = this.idade;
    this.andar = function(){
        return 'andou';
    }
}

Cadastro.prototype.teste = 'Testando'
Cadastro.prototype.daroi = function(){
    return this.nome + ' Está te comprimentando';
}
const filipe = new Cadastro('filipe', 50);

