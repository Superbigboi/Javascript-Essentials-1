let fibbRec = function (n) {
    let retVal = 0;
    if (n != 0){
        if(n===1){
            retVal = 1;
        }
        else{
            retVal = fibbRec(n-1) + fibbRec(n-2);
        }
    }
    return retVal
}
console.log(fibbRec(5)); // -> 3
console.log(fibbRec(7)); // -> 13