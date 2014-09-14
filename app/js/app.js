//Controller
(function() {
  var app = angular.module('store', []);

  app.controller('StoreController', function(){
    this.product = gems;
  });

  app.controller('PanelController', function(){
    this.tab = 1;
    this.selectTab = function(setTab) {
      this.tab = setTab;
    };
    this.isSelected = function(checkTab){
      return this.tab === checkTab;
    };
  });

  app.controller("ReviewController", function() {
    this.review = {};

    this.addReview = function(product) {
      product.reviews.push(this.review);
      this.review = {};
    };
  });

  var gems = {
    name: 'BlueRock',
    price: 2.95,
    description: 'A blue rock',
    reviews: [
    {
      stars: 5,
      body: "I love this site!",
      author: "bob@typicaljoe.com"
    }]
  };
})();
