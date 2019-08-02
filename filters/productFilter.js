angular.module("myApp")
.filter("productFilter", function(){
    return function(productData, sortText){
     var filteredProductList=productData;

     if(sortText=="Price: Low To High"){
         for(var i=0;i<filteredProductList.length;i++){
             for(var j=i+1;j<filteredProductList.length;j++){
                if(filteredProductList[i].price > filteredProductList[j].price ){
                    var dummy=filteredProductList[i];
                    filteredProductList[i]=filteredProductList[j];
                    filteredProductList[j]=dummy;
                }   
             }
         }
     }
     else if(sortText=="Price: High To Low"){
        for(var i=0;i<filteredProductList.length;i++){
            for(var j=i+1;j<filteredProductList.length;j++){
               if(filteredProductList[i].price < filteredProductList[j].price ){
                   var dummy=filteredProductList[i];
                   filteredProductList[i]=filteredProductList[j];
                   filteredProductList[j]=dummy;
               }   
            }
        }
    }
    else if(sortText=="Product: A To Z"){
        filteredProductList.sort(function(element1, element2){
            if(element1.name < element2.name) { return -1; }
            if(element1.name > element1.name) { return 1; }
            return 0;
        })
    }
        return filteredProductList;
    }
});






