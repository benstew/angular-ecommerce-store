(function(){
  var app = angular.module('gemStore', [ ]);

  app.controller('StoreController', function(){
    this.products = gems;
  });

  var gems = [
    {
     name: 'Dodecahedron',
     price: 2.95,
     description: 'Nice and pretty',
     canPurchase: true,
     soldOut: false
   },
   {
    name: 'Pentagonal Gem',
    price: 5.95,
    description: 'Oh dang, did you see that rock!',
    canPurchase: true,
    soldOut: false
  }
  ];

})();
