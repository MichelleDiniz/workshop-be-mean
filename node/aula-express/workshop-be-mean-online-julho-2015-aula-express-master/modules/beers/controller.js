var Model = require('./model')
  , query = ''
  , msg = ''
  , Controller = {
      create: function(req, res) {

        var dados = req.body;

        var model = new Model(dados);
        model.save(function (err, data) {
          if (err){
            console.log('Erro: ', err);
            msg = err;
          }
          else{
            console.log('Sucesso:', data);
            msg = data;
          }
          res.json(msg);
        });
      }
    , retrieve: function(req, res) {
        Model.find(query, function (err, data) {
          if (err){
            console.log('Erro: ', err);
            msg = err;
          }
          else{
            console.log('Sucesso:', data);
            msg = data;
          }
          res.json(msg);
        });
      }
    , update: function(req, res) {
        query = {name: /heineken/i};
        var mod = {
              name: 'Brahma'
            , alcohol: 4
            , price: 6
            }
          ;

        Model.update(query, mod, function (err, data) {
          if (err){
            console.log('Erro: ', err);
            msg = err;
          }
          else{
            console.log('Sucesso:', data);
            msg = data;
          }
          res.json(msg);
        });
      }
    , delete: function(req, res) {
        query = {name: /brahma/i};

        Model.remove(query, function (err, data) {
          if (err){
            console.log('Erro: ', err);
            msg = err;
          }
          else{
            console.log('Sucesso:', data);
            msg = data;
          }
          res.json(msg);
        });
      }
    }
  ;

module.exports = Controller;



