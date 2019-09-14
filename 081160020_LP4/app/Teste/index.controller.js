



(function ()  
{
    'use strict';

    angular
        .module('app')
        .controller('Teste.IndexController', Controller);
       
    function Controller(Teste, FlashService,UserService) {
  
        var vm = this;

        vm.GravaPergunta = GravaPergunta;
        // vm.question= question;
        // vm.question = null;
        vm.GetPerguntas = GetPerguntas;
        initController();

        function initController() {
            // get current user
            UserService.GetCurrent().then(function (user) {
                vm.user = user;
            });
        }


        function GetPerguntas()
        {
        //    console.log("Index");
        //   var a = new Array();
        //   a = Teste.GetPerguntas();
        //   console.log(a);
           Teste.GetPerguntas().then(function () {
              console.log(Teste.GetPerguntas());
           })
           .catch(function (error) {
               FlashService.Error(error);
           });
        }



        function GravaPergunta()
        {
            // debugger;
            let questionToBeSaved = {
                question: vm.question,
                userId: vm.user._id
            }
           console.log(questionToBeSaved);
           
           Teste.createPergunta(questionToBeSaved)
           .then(function () {
               FlashService.Success('Pergunta salva com sucesso!');
           })
           .catch(function (error) {
               FlashService.Error(error);
           });
        }
              
        

        
         
        //     var pergunta = document.getElementById('pergunta').value;
         
          
        //    var a = document.createElement("a");
          
        //    a.setAttribute("name","a");
        //    a.setAttribute("class","list-group-item");
          
          
         
        //    a.innerHTML = pergunta;
    
        //    var table = document.getElementById("lista");
       
          
        //     table.appendChild(a);
            
        // } 

      

        // function DeletaPergunta()
        // {
          

        //   var x =document.getElementsByName("a")[0];
          
        //   x.remove();
          
        
       
         
           
         
         
    }
    
    


})();
