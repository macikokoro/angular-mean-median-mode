//Controller
(function() {
  var app = angular.module('store', []);

  app.controller('StoreController', function(){
    this.product = gem;
  });

  var gem = {
    name: 'BlueRock',
    price: 2.95,
    description: 'A blue rock'
  }
})();
