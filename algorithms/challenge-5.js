function replaceDivisible(x, y) {
    let newArr = []
    for(let i = 0; i <x.length; i++)
    let y = "divisible"
    {
        if(x[i] % y) {
      newArr.push(x[i],y)
        }
    }
    return newArr
}
console.log(replaceDivisible([2,4,3,6,5], 3))

//module.exports = replaceDivisible
