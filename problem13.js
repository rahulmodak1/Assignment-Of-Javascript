// Ajay is given a series(In example).he gone through the series but unable to understand it properly,he has hired you.Your task is to understand the series and print the series 2,6,12,20,30... .You are given with a number ‘n’. Find the nth number of series.

 // Answer :-


var n = 6 ;
function findNthTermSeries(n){
  return n * (n + 1) ;
}
console.log(findNthTermSeries(n)) ;