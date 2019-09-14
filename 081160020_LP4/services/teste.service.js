

var config = require('config.json');
var _ = require('lodash');
var jwt = require('jsonwebtoken');
var bcrypt = require('bcryptjs');
var Q = require('q');
var mongo = require('mongoskin');
var db = mongo.db(config.connectionString, { native_parser: true });
// db.bind('users');
db.bind('Perguntas');
var assert = require('assert');


var service = {};


service.createPergunta = createPergunta; 
service.GetPerguntas = GetPerguntas; 

module.exports = service;

    
function GetPerguntas() {
    // debugger;
    // console.log("GetPErgunta");
    var deferred = Q.defer();  
    var resultado = new Array();
    var seila = new Array();
    // var deferred = Q.defer();  
    db.Perguntas.find().toArray((err,items)=>
    {  
        resultado = items;
        // console.log(resultado);
        deferred.resolve();
      return deferred.promise;
       
    }   
    );
    // console.log(resultado);
    // return resultado;
   
//     var resultado = [];
//     var deferred = Q.defer(); 
//     var cursor =    db.Perguntas.find();
//    cursor.forEach(function(doc,err)
//    {
//        assert.equal(null,err);
//        resultado.push(doc);
//    });
       
 
}
        
function createPergunta(pergunta) {

    var deferred = Q.defer();  
        db.Perguntas.insert(
            pergunta,
            function (err, doc) {
                if (err) 
                console.log("Deu ruim");
                // deferred.reject(err.name + ': ' + err.message);

                deferred.resolve();
            });
        
        return deferred.promise;
}
