(function(){

  angular
       .module('questions')
       .controller('QuestionController', ['questionService', '$mdSidenav', '$mdBottomSheet', '$log', '$q',QuestionController]);
  angular
        .module('questions')
        .controller('DialogController', ['$scope','$mdDialog',DialogController]);

  /**
   * Main Controller for the Angular Material Starter App
   * @param $scope
   * @param $mdSidenav
   * @param avatarsService
   * @constructor
   */
  function QuestionController(questionService, $mdSidenav, $mdBottomSheet,$log, $q) {
    var self = this;

    self.questions  = [ ];

    // Load all registered users

    questionService
          .loadAllQuestions()
          .then( function( data ) {
            self.questions  = [].concat(data.questions);
            console.log(data);
          });

   }

   function DialogController($scope, $mdDialog) {

     $scope.alert = '';
     $scope.showAdvanced = function(ev){
       $mdDialog.show({
           controller: DialogController,
           templateUrl: '../postQuestion.html',
           parent: angular.element(document.body),
           targetEvent: ev,
           locals: { question: $scope.question }
         })
         .then(function(answer) {
           $scope.alert = 'You said the information was "' + answer + '".';
         }, function() {
           $scope.alert = 'You cancelled the dialog.';
         });
       };
     $scope.hide = function() {
       $mdDialog.hide();
     };
     $scope.cancel = function() {
       $mdDialog.cancel();
     };
     $scope.answer = function(answer) {
       $mdDialog.hide(answer);
     };
   }

})();
