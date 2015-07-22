var Model = require("./model")
  , query = ''
  , msg = ''
  , Controller = {
    create: function(req, res) {

        var dados = {
            name: 'Heineken',
            description: 'Até q eh boazinha',
            alcohol: 5.5,
            price: 3.5,
            category: 'lager'
        }

        var Model = new Model(dados);
        Model.save(function (err, data) {
            if (err){
                console.log('Erro: ', err);
                msg = JSON.stringify(err);
            }
            else{
                console.log('Sucesso:', data);
                msg = JSON.stringify(data);
            }
            res.end(msg);
        });
    }
    ,
    retrieve: function(req, res) {
        Model.find(query, function (err, data) {
            if (err){
                console.log('Erro: ', err);
                msg = JSON.stringify(err);
            }
            else{
                console.log('Sucesso:', data);
                msg = JSON.stringify(data);
            }
            res.end(msg);
        })
    }
    ,
    update: function(req, res) {
        query = {name: /heineken/i}
            , mod = {
                  name: 'Brahma'
                , alcohol: 4
                , price: 6
            }
        ;

        Model.update(query, mod, function (err, data) {
            if (err){
                console.log('Erro: ', err);
                msg = JSON.stringify(err);
            }
            else{
                console.log('Sucesso:', data);
                msg = JSON.stringify(data);
            }
            res.end(msg);
        });
    }
    ,
    delete: function(req, res) {
        var query = {name: /brahma/i};

        Model.remove(query, function (err, data) {
            if (err){
                console.log('Erro: ', err);
                msg = JSON.stringify(err);
            }
            else{
                console.log('Sucesso:', data);
                msg = JSON.stringify(data);
            }
            res.end(msg);
        });
    }
}
;

module.exports = Controller;
