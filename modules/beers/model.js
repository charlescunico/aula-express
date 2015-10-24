var mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/pos-unoesc');

var db = mongoose.connection;

db.on('error', function(err){
	console.log('Erro de conexão.', err);
});
db.on('open', function() {
	console.log('Conexão aberta.');
});
db.on('connected', function(err) {
	console.log('Conectado.');
});
db.on('disconnected', function(err) {
	console.log('Desconectado.');
});

var Schema = mongoose.Schema;

var json_schema = {
	name: {type: String, default: ''},
	description: {type: String, default: ''},
	alchool: {type: Number, min: 0},
	category: {type: String, default: ''},
	create_at: {type: Date, default: Date.now}
};

var BeerSchema = new Schema(json_schema);

module.exports = mongoose.model('Beer', BeerSchema);