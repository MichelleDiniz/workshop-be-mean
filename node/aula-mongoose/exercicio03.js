var mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/workshop-mean');

var db = mongoose.connection;
db.on('error', function(err){
	console.log('Erro de conexao.', err);
});
db.on('open', function () {
  	console.log('Conexão aberta.');
});
db.on('connected', function(err){
	console.log('Conectado');
});
db.on('disconnected', function(err){
	console.log('Desconectado');
});

var Schema = mongoose.Schema
	,  _schema = { 
	  	name: { type: String, default: '' }
		, description: { type: String, default: '' }
		, alcohol: { type: Number, min: 0, default: '' }
		, price: { type: Number, min: 0, default: '' }
		, category: { type: String, default: ''}
		, created_at: { type: Date, default: Date.now() }
	}
	, BeerSchema = new Schema(_schema)
	, Beer = mongoose.model('Beer', BeerSchema)
;

var dados = {
	name: 'Heineken',
	description: 'Até q eh boazinha',
	alcohol: 5.5,
	price: 3.5,
	category: 'lager'
}

var model = new Beer(dados);
model.save(function (err, data) {
	if (err){
		console.log('Erro: ', err);
	}
	else{
		console.log('Cerveja Inserida', data);
	}
});
