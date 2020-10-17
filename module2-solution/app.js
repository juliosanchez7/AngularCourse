(function(){
'use strict' 


angular.module('ShoppingListApp', [])
.controller('ShoppingListController', ShoppingListController)
.controller('AlreadyBoughtControler',AlreadyBoughtControler)
.service('ShoppingListService', ShoppingListService);

AlreadyBoughtControler.$inject=['ShoppingListService'];
function AlreadyBoughtControler(ShoppingListService){
    var list2 = this;
    list2.items=ShoppingListService.getItemsBouth();  
}

ShoppingListController.$inject = ['ShoppingListService'];
function ShoppingListController(ShoppingListService) {
    var list1 = this;
    list1.items = ShoppingListService.getItemsToBuy();
    list1.buyItem = function (itemIndex) {
        ShoppingListService.buyItem(itemIndex);
    };
}


function ShoppingListService(){
    var service =this;
    //List of items to buy:

    var itemsToBuy = [
        {
            name: "Chips",
            quantity: "2"
        },
        {
            name: "Donuts",
            quantity: "200"
        },
        {
            name: "Cookies",
            quantity: "300"
        },
        {
            name: "Chocolates",
            quantity: "5"
        },
        {
            name: "Popcorn",
            quantity: "5"
        }

    ];
    var itemsBought = [
        
    ];
    service.getItemsToBuy = function (){
        
        return itemsToBuy;
    };
    service.getItemsBouth = function (){
        return itemsBought;
    };
    service.buyItem = function (itemIndex) {
        console.log("Pressed");
        var removedItems = itemsToBuy.splice(itemIndex,1);
        console.log(itemsBought)
        itemsBought.push(removedItems[0]);
    };
}


})();