(function(){
  var app = angular.module('gemStore', [ ]);

  app.controller('StoreController', function(){
    this.products = gems;
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

  app.controller("ReviewController", function(){
    this.review = {};

    this.addReview = function(product) {
      product.reviews.push(this.review);
      this.review = {};
    };
  });

  var gems = [
    {
     name: 'Dodecahedron',
     price: 2,
     description: 'Nice and pretty',
     canPurchase: true,
     soldOut: false,
     reviews: [
       {
         stars: 5,
         body: "I love this product",
         author: "joeS@gmail.com"
       },
       {
         stars: 1,
         body: "I didn't really like this product",
         author: "smoothie@gmail.com"
       }
     ],
     images: [
       {
         full:'dodeca-gem.jpg',
         thumb:''
       },
     ]
   },
   {
    name: 'Pentagonal Gem',
    price: 5.9,
    description: 'Oh dang, did you see that rock!',
    canPurchase: true,
    soldOut: false,
    images: [
      {
        full:'',
        thumb:''
      },
    ]
  }
  ];

})();
