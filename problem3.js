
var side1 = 22; 
var side2 = 22; 
var side3 = 22; 
var s = (side1 + side2 + side3)/2;
var area =  Math.sqrt(s*((s-side1)*(s-side2)*(s-side3)));
// console.log(Math.round(area))
console.log(area.toFixed(2));
