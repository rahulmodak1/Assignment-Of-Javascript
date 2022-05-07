


var n = 12121 ;
var len = n.toString().split("").length ;
var str = len.toString() ;
var msg = 'It is a Palindrome Number' ;
for( var i = 0 ; i < len/2 ; i ++){
  console.log(n[str - 1 -i])
}

