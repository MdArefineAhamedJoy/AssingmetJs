/* declare a function with  mind Game and return final values */

// function mindGame(number) {
//     let input = number ;
//     let multiple = input * 3;
//     let addition = multiple + 10;
//     let division = addition / 2;
//     let substation = division - 5;
//     return substation ;
// }
// const result = mindGame(15);
// console.log(result)


/* mind game function code complete*/


/*declare a function withe check even or odd number of length  */


// function evenOdd(str){
//     let input = str.length;
//     if(input % 2 === 0){
//         return `even`
//     }else{
//         return `odd`
//     }
// }
// let result = evenOdd("str ing");
// console.log(result)


/* evenOdd function code complete */

/* isLGSeven Function pick less then seven number or return input multiple number */
// function isLGSeven(number){
//     let input = number;
//     let inputSubstation = input - 7;
//     if(inputSubstation < 7){
//         return inputSubstation
//     }else{
//         return input * 2
//     }
// }
/* isLGSeven function code is complete */
// const result = isLGSeven(15);
// console.log(result)

 /* problem 3 not a completed */

 /* findingBadData function return negative data list */
const number = 'str';
 function findingBadData (arr) {
    if(Array.isArray(arr) == true){
        let negativeNum = [];
    for(let i = 0 ; i<arr.length; i++){
        let number = arr[i];
        if(number < 0){
            negativeNum.push(number);
        }
    }
    return negativeNum.length
    }else{
        return "is not a array"
    }
    
 }
const result = findingBadData(number) ;
console.log(result)
/*complete  find array good data and bad data  */

/*gemsToDiamond function Convert your gems into diamond */
// function gemsToDiamond(friend1, friend2 , friend3){
//     const friend1Value = friend1 * 21;
//     const friend2Value = friend2 * 32;
//     const friend3Value = friend3 * 43;
//     let totalDiamond = friend1Value + friend2Value + friend3Value;
//     if(totalDiamond > 2000){
//         totalDiamond -= 2000;
//         return totalDiamond;
//     }else{
//         return totalDiamond
//     }
// }

// const result =gemsToDiamond(1, 1, 1);
// console.log(result)
/* gemsToDiamond function code is complete */