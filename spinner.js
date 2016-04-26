var angular = require('angular');

angular
  .module('spinner', [])
  .directive('spinner', SpinnerDirective)
  .factory('Spinner', SpinnerFactory);

function SpinnerDirective() {

  return {
    restrict: 'EA',
    scope: {
      's': '=spinOn',
    },
    replace: true,
    transclude: true,
    template: '<ng-transclude ng-show="s.isSpinning()"></ng-transclude>',
  };

}

function SpinnerFactory() {

  function Spinner() {
    this.counter = 0;
  }

  Spinner.prototype.watch = watch;
  Spinner.prototype.isSpinning = isSpinning;

  function watch(q) {
    this.counter++;
    q.then(complete(this, q), complete(this, q));
    return q;
  }

  var x = 0;

  function isSpinning() {
    return !!this.counter;
  }

  // utils

  function complete(instance, q) {
    return function() {
      instance.counter--;
    };
  }

  return Spinner;
}
