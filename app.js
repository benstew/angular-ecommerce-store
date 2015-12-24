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

  var gems = [
    {
     name: 'Dodecahedron',
     price: 2,
     description: 'Nice and pretty',
     canPurchase: true,
     soldOut: false,
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
