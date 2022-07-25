function miniMaxSum(arr) {
    const max = Math.max(...arr)
    const min = Math.min(...arr)
  
    const resultMax = arr.reduce((total, curr)=>total+curr,0) - max
    const resultMin = arr.reduce((total, curr)=>total+curr,0) - min
  
    console.log(`${resultMax}  ${resultMin}`)

}


miniMaxSum([1 ,2 ,3,4, 5])
