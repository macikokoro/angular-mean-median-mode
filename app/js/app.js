//Controller
(function() {
  var app = angular.module('store', []);

  app.controller('StoreController', function(){
    this.product = gems;
  });

  app.controller("ReviewController", function() {
    this.review = {};

    this.addReview = function(product) {
      product.reviews.push(this.review);
      this.review = {};
    };
  });

  var gems = {
    reviews: [{
      body:""
    }]

  };
})();
