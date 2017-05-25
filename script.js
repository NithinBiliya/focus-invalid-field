(function () {
  angular.module('myApp', ['focus.invalid.field'])
    .controller('myCtrl', ['$scope', function ($scope) {

      $scope.person = {
        firstName: "Nithin",
        secondName: "Biliya",
        age: "26",
        phone: "1234"
      };

      $scope.submitTheForm = function () {
        console.log("Form is -- "+($scope.myFormNg.$valid?"VALID":"INVALID"));
        console.log("below fields failed required validation --");
        for (var i in $scope.myFormNg.$error.required) {
          console.log($scope.myFormNg.$error.required[i].$name);
        }
        alert("Form is -- "+($scope.myFormNg.$valid?"VALID":"INVALID"));
      }
  }])
})();
