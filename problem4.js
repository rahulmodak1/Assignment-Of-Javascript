// You will be provided with a number. Print the number of days in the month

// corresponding to that number:-
//   Answer :-

var getDaysInMonth = function (month , year ){
   return new Date( year , month , 0 ).getDate() ;
  
}
console.log(getDaysInMonth( 2 ,2020))
  