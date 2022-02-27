function divisible(a) {
let count = 0;
for(let i =0; i <a.length; i++){
    if(a[i] % 2 ||a[i] < 15){
        count++;
    }
}
return count

}
console.log(divisible([2,3,12,18,42,24]))
//module.exports = divisible
