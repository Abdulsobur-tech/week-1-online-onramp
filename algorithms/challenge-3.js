function isDivisbleByN(arr, n) {
    let newArr = []
    for(let i = 0; i<arr.length; i++){
        if(arr[i] % n){
           newArr.push(arr[i])
    }
    }
    return newArr
}
console.log(isDivisbleByN([1,3,5,6,3,6,7,4], 2))

//module.exports = isDivisbleByN
