var app = angular.module("app", []);

app.controller("ListaController", ["$scope",function($scope) {

    $scope.preguntas = [{
      respuesta: "6",
      question: "Raiz cuadrada de 36",
      nombre: "Raiz Cuadrada"
    }, {
      respuesta: "32",
      question: "Raiz cuadrada de 36",
      nombre: "Derivada"
    }, {
      respuesta: "30",
      question: "Raiz cuadrada de 36",
      nombre: "Division"
    }, {
      respuesta: "18",
      question: "Raiz cuadrada de 36",
      nombre: "Resta"
    }];
  }
]);
