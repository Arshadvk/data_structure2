let arr1 = [1 , -2 ,-3 , 5 , -1 , 2, -5  ];
let total = 0 ; 
let sum  = 0 ;  

function hello (arr1  ){
    let n1 = arr1.length ; 
   
        for(let i = 0 ; i<n1 ; i++){
          if (arr1[i] > 0) {
            sum = sum + arr1[i]
          }
          if (total<sum) {
            total = sum 
          }
            if(arr1[i]<0){
            sum = 0;
        }
        }
        return total
        
    
}
console.log(hello(arr1));