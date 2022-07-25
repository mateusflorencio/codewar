export function plusMinus(arr) {
    let nPos = 0
    let nNeg = 0
    let nZero = 0

    for (const i of arr) {
        if(i>0){
            nPos ++
        } else if(i<0){
            nNeg ++
        } else {
            nZero ++
        }
    }
  
    function proportions(sizeArray,...n){
        for (const i of n) {
            console.log((i/sizeArray).toFixed(6))
        }
    }

    proportions(arr.length,nPos,nNeg,nZero)
}