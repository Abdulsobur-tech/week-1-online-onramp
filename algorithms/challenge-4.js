function highestSum(x, y) {
    let sumy =0;
    let sumx =0;
for(let i = 0; i <x.length; i++){
 sumx += x[i]
}
for(let j = 0; j <y.length; j++){
    sumy +=y[j]
}
if(sumx > sumy){
    return sumx
}else{return sumy}
}
console.log(highestSum([15,7], [12,17]))

//module.exports = highestSum