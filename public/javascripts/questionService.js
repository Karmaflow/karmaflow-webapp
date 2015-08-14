(function(){
  'use strict';

  angular.module('karmaflow')
         .service('QuestionService', ['$q','$http', QuestionService]);

  /**
   * Users DataService
   * Uses embedded, hard-coded data model; acts asynchronously to simulate
   * remote data service call(s).
   *
   * @returns {{loadAll: Function}}
   * @constructor
   */
  function QuestionService($q,$http){
    var question = {};

    question.getbyTag =function getbyTag (params) {
        console.log('Question Service');
        var serializedData = $.param({tag:params.tag.tag});
            var deferred = $q.defer();
            var promise =  deferred.promise;

            $http({ method: 'GET',
                     url: 'http://localhost:8000/api/v0.1/questions/'+params.tag.tag,
                     headers:{'Content-Type': 'application/x-www-form-urlencoded'}
                }).
                  success(function (data) {
                        deferred.resolve(data);
                  }).
                  error(function (err) {
                      deferred.reject(err);
                  });
                return promise;
    }

    question.getQuestion =function getQuestion (id) {
        console.log('Question Service');
        var serializedData = $.param({id:id});
            var deferred = $q.defer();
            var promise =  deferred.promise;

            $http({ method: 'GET',
                     url: 'http://localhost:8000/api/v0.1/question/'+id,
                     headers:{'Content-Type': 'application/x-www-form-urlencoded'}
                }).
                  success(function (data) {
                        deferred.resolve(data);
                  }).
                  error(function (err) {
                      deferred.reject(err);
                  });
                return promise;
    }


    question.create = function create (params) {
        console.log(params);
        var q =JSON.stringify({title:params.title,post:params.post,tag:params.tag.tag});
        console.log("jsonify");
        console.log(q);
        var serializedData = $.param({title:params.title,post:params.post,tag:params.tag.tag});
        console.log(serializedData);
            var deferred = $q.defer();
            var promise =  deferred.promise;

            $http({ method: 'POST',
                    url: 'http://localhost:8000/api/v0.1/question',
                    data:serializedData,
                    headers:{'Content-Type': 'application/x-www-form-urlencoded'}
                }).
                  success(function (data) {
                        deferred.resolve(data);
                  }).
                  error(function (err) {
                      deferred.reject(err);
                  });
                return promise;
        }

        return question;
}
})();
