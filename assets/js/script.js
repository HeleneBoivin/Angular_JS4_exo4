var app = angular.module('myApp', []);
app.controller('voituresCtrl', function($scope, $http) {
    $http.get("voiture.json")
    .then(function(response) {
        $scope.voitures = response.data;
    });
});
