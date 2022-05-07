
function month(n){
    let months = [31,28,31,30,31,30,31,31,30,31,30,31];
    if(n>=1 && n<=12){
        return months[n-1];
    }
    return "Error"
}
 console.log(" Problem4 -", month(9));