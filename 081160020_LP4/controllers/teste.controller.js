
  var config = require('config.json');
  var express = require('express');
  var router = express.Router();
  var Teste = require('services/teste.service');
  var mongo = require('mongoskin');
  var db = mongo.db(config.connectionString, { native_parser: true });
// db.bind('users');
db.bind('Perguntas');
  // routes
 
  router.post('/createPergunta', SalvaPergunta);

  

 router.get('/GetPerguntas', GetPerguntas);
  
  module.exports = router;
  
  function SalvaPergunta(req, res) {
 
  
    Teste.createPergunta(req.body)
          .then(function () {
              res.sendStatus(200);
          })
          .catch(function (err) {
              res.status(400).send(err);
          });
      
  }
  
  function GetPerguntas(req, res) {
 
 
  // var a = new Array();
  // a = Teste.GetPerguntas();
  db.Perguntas.find().toArray((err,items)=>
  {  
    res.render("teste", items);
      // console.log(items);
     
  }); 
    // Teste.GetPerguntas()
    //       .then(function () {
    //           res.sendStatus(200);
    //       })
    //       .catch(function (err) {
    //           res.status(400).send(err);
    //       });
      
  }
 


  