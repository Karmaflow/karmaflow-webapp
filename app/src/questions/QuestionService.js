(function(){
  'use strict';

  angular.module('questions')
         .service('questionService', ['$q','$http', QuestionService]);

  /**
   * Users DataService
   * Uses embedded, hard-coded data model; acts asynchronously to simulate
   * remote data service call(s).
   *
   * @returns {{loadAll: Function}}
   * @constructor
   */
  function QuestionService($q,$http){

    return {
      loadAllQuestions : loadAllQuestions
    }

  function loadAllQuestions () {
    var head = {
          'Access-Control-Allow-Origin' : '*',
          'Access-Control-Allow-Methods' : 'POST, GET, OPTIONS, PUT',
          'Content-Type': 'application/json',
          'Accept': 'application/json'
        };
        var deferred = $q.defer();
        var promise =  deferred.promise;

        $http({ method: 'GET', url: 'http://localhost:3000/api/v0.1/question/Programing' },{headers:head}).
              success(function (data) {
                    deferred.resolve(data);
              }).
              error(function (err) {
                  deferred.reject(err);
              });
            return promise;
        }
  }
})();
