
let root1 , root2

let a = 5 ;
let b = 10 ;
let c = 5 ;

let discriminant = b * b - 4 * a * c ;
 if( discriminant > 0 ) {
   root1 = ( - b + Math.sqrt(discriminant) )/(2 * a) ;
   root2 = ( - b - Math.sqrt(discriminant) )/(2 * a) ;

   console.log( root1 , root2)
 }
  

else if (discriminant == 0){
  root1 = root2 = -b / (2*a)
  console.log( root1 , root2)
}

// else{
  
//    root1 = ((-b / 2*a) + (Math.sqrt( - discriminant))).toFixed(2);
//   root2 = ((-b / 2*a) - (Math.sqrt( - discriminant))).toFixed(2);
//   console.log( root1 , root2)
// }
  
    


 
