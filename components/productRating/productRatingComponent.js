angular.module("myApp")
.component("productRating",{

    bindings:
    {
        productDetail:"="
    },


    templateUrl:"components/productRating/productRatingComponent.html",
    controller:[productRatingcontroller],
    controllerAs:"productRatingCtrl"
    });

    function productRatingcontroller(){
        var self=this;
    
        self.ratingData = [];

        // for (var i=0; i<productRatingCtrl.length; i++)
        // {
        //     console.log(productRatingCtrl);
        // }

    }