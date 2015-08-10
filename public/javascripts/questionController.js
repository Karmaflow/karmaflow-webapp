(function(){
  'use strict';

  angular.module('karmaflow', [])
  .controller('QuestionController',['QuestionService','$log', '$q',
    QuestionController]);

function QuestionController(QuestionService){

    var self = this;
    self.question = {};
    self.questions = {};

    self.tags = [{tag: 'Math', value: 'Matematicas' },
                     { tag: 'History', value: 'Historia' },
                     { tag: 'Programing', value: 'Programacion' }];

    self.submitQuestion = function (){
        console.log('Entrando a sunmit');
        console.log(self.question);
        QuestionService
          .create(self.question)
          .then(function (response) {
            console.log(response);
          });

    }
    self.getbyTag = function (){
        console.log('Entrando');
        QuestionService
          .getbyTag(self.question)
          .then(function (response) {
            self.questions = response.questions;
            console.log(response);
          });

    }


}

})();
