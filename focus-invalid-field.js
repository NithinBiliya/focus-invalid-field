(function () {
  angular.module('focus.invalid.field', [])
    .directive('focusInvalidField', function () {
      return {
        restrict: 'A',
        link: function (scope, elem) {
          // set up event handler on the form element
          elem.on('submit', function () {
            elem.find('.ng-invalid:visible').first().focus();
          });
        }
      };
    });
})();
