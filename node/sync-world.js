var fs = require('fs');

console.log('Vou ler', Date.now());
console.time('leitura');

// var file = fs.readFileSync('file.mp4');

fs.readFile('file.mp4', function(data){
    console.log(data);
})

console.timeEnd('leitura');
console.log('Ja li', Date.now());