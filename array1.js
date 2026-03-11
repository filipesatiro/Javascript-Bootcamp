//const elementosArray = ['elemento1', 'elemento2', 'elemento3', 'elemento4'];
// elementosArray[4] = 'elemento5'
//console.log(elementosArray[4]);
// const esportes = ['surf', 'skate', 'bmx'];
// console.log(esportes[2]);
//const numero = ['10', '40', '60'];
//console.log(numero);
const nome = 'Santos';
const sobreNome = 'Costa';
const idade = 48;
const elementosArray = [function voltagem(v, s){
    return v
},nome, sobreNome, idade, ['Jundiai', 'Campinas', 'Vinhedo'],
{
    nome: 'Sandro', idade: 1
}];

//console.log(elementosArray);
// console.log(elementosArray[0]());
// console.log(elementosArray[1]);
// console.log(elementosArray[2]);
// console.log(elementosArray[3]);
// console.log(elementosArray[4][1]);
// console.log(elementosArray[5].nome);
// console.log(elementosArray[5].idade);
// console.log(elementosArray[0](110, 'w'))
//  function soma(l1, l2){
//     return l1 + l2;
//  }
//   console.log(soma('lipe', ' fé'));

elementosArray[5].andar = function(){return 'Brendo andou'};

console.log(elementosArray[5].andar());