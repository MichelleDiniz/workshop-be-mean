var http = require('http')
  , Controller = require('./controller')
  ;

http.createServer(function(req, res) {

    switch(req.url){
        case '/api/beers/create':
            Controller.create(req, res);
        break;
        case '/api/beers/retrieve':
            Controller.retrieve(req, res);
        break;
        case '/api/beers/update':
            Controller.update(req, res);
        break;
        case '/api/beers/delete':
            Controller.delete(req, res);
        break;
        default: res.end('Rota não encontrada');
    }

}).listen(3000);

console.log('Entre em http://localhost:3000/');
