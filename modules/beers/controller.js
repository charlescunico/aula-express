var Model = require('./model');

var msg = '';

Controller = {
	create: function(req, res){
		var dados = req.body;

		model = new Model(dados);

		model.save(function(err, data) {
			if (err) {
				console.log('Erro: ', err);
				msg = err;
			} else {
				console.log('Cerveja Inserida ', data);
				msg = data;
			}
			res.json(msg);
		});
	},
	retrieve: function(req, res){
		var Beer = Model, query = {};

		Beer.find(query, function(err, data) {
			if (err) {
				console.log('Erro: ', err);
				msg = err;
			} else {
				console.log('Listagem: ', data);
				msg = data;
			}
			res.json(msg);
		});
	},
	get: function(req, res){
		var Beer = Model, query = {_id: req.params.id};

		Beer.findOne(query, function(err, data) {
			if (err) {
				console.log('Erro: ', err);
				msg = err;
			} else {
				console.log('Listagem: ', data);
				msg = data;
			}
			res.json(msg);
		});
	},
	update: function(req, res){
		var Beer = Model, query = {_id: req.params.id};

		var mod = req.body;

		var optional = {
			upsert: false,
			multi: true
		}

		Beer.update(query, mod, optional, function(err, data) {
			if (err) {
				console.log('Erro: ', err);
				msg = err;
			} else {
				console.log('Cervejas atualizadas com sucesso: ', data);
				msg = data;
			}
			res.json(msg);
		});
	},
	delete: function(req, res){
		var Beer = Model, query = {name: /brahma/i};

		// É multi: true CUIDADO!
		Beer.remove(query, function(err, data) {
			if (err) {
				console.log(err);
				msg = err;
			} else {
				console.log('Cerveja deletada com sucesso: ', data.result);
				msg = data;
			}
			res.json(msg);
		});
	}
};

module.exports = Controller;