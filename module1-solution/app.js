(function () {
    'use strict';
    
    angular.module('MsgApp', [])
    .controller('MsgController', MsgController);
    
    MsgController.$inject = ['$scope'];
    function MsgController($scope) {
      $scope.dishes = "";
      $scope.DishesFunction=function(){
        DishesCalculator($scope.dishes);
      }
      function DishesCalculator(string){
        var count = string.split(',').length;
        console.log(count);
        if(string.length === 0){
            count=0;
        }
        if(count >0 && count<=3){
            $scope.Result="Enjoy";
        }else if(count>3){
            $scope.Result="Too much!";
        }else{
            $scope.Result="Please enter data first";
        }
      }

    }
    
    })();
    