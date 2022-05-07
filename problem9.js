
  function quad(a,b,c){
    let root1,root2;
    root1 = (-b + Math.sqrt(b*b - 4*a*c))/(2*a);
    root2 = (b + Math.sqrt(b*b - 4*a*c))/(2*a);
    return [root1.toFixed(2),root2.toFixed(2)];
}
 console.log(" Problem9 -" ,quad(1,5,6));  


 
