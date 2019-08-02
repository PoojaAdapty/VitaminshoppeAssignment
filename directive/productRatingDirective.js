angular.module("myApp")
.directive("productRatingDirective", function(){
    return{
        restrict : "E",
        templateUrl : "directive/productRatingDirective.html"
    }  
})


// angular.module("myApp")
// .directive("productRatingDirective",function(){
//     return{
//         restrict:"E",
//         tempalteUrl:"directive/productRatingsDirective.js"
//     }
// })