function noOfElements(x, y, z){
let count = 0;
    for(let i = 0; i <x.length; i++){
        if(x[i] >= y && x[i] <= z){
            count++;
        }
    }
       return count
}
console.log(noOfElements([2,3,0,1,7], 4, 8))
console.log(noOfElements([3,3,3,5,18,6,20], 15, 30))
//module.exports = noOfElements
