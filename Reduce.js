const prices=[1,2,3,4,5,6,7,8,9]

//* sum of array.
let total=0;
for(let price of prices){
    total+=price
}

console.log(total)

//! reduce()
//* reduce will repeatedly iterate over and runs the same function over and over again and at last return a single value.
//!Calls the specified callback function for all the elements in an array. The return value of the callback function is the accumulated result, and is provided as an argument in the next call to the callback function.

let total1=0;
total1=prices.reduce((total1,price)=>{
    return total1+price
})

//* dry-run.
//* total1, price
//* 0, 0
//* return 0+0
//*0+1
//* 1+2
//* 3+3
//* 6,4
//*10,5
//*15,6
//*21,7
//*28,8
//*36,9
//*45 -> return 45.


//! let's try to find the greatest price by using reduce.

let max=prices.reduce((max,price)=>{
    //* here max is a accumulator. which will repeatedly store the values of max and at last return the max value.
    if(max<price){
        return price
    }
})

let max1=prices.reduce((max1,price)=>(
    Math.max(max1,price),100)
)

const votes=[
    'y', 'y', 'n', 'y', 'n', 'y','n','y','n','n','n','y','y'
]

const tally=votes.reduce((tally,vote)=>{
    console.log(`Before tally and vote. ${tally}${[vote]}`)
    tally[vote]=(tally[vote] || 0)+1;
    console.log(`After tally and vote. ${tally[vote]}`);
    return tally;
}, {}) //* initial value : {}

