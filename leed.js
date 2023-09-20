
const romanValues = {
    'I': 1,
    'V': 5,
    'VI':6,
    'IV':4,
    'IX':9,
    'X': 10,
    'XL':40,
    'L': 50,
    'XC':90,
    'C': 100,
    'D': 500,
    'M': 1000
};

const romanTest = {
    '1':'I',
    '5':'V',
    '6':'VI',
    '4':'IV',
    '9':'IX',
    '10':'X',
    '90':'XL',
    '50':'L',
    '90':'XC',
    '100':'C',
    '500':'D',
    '1000':'M'
};

// function romanToInt(romanNumber){


//     const array=  romanNumber.split("").reverse()
//     console.log("array",array)
//     let total=0
//     let nextValue = 0
//       array.map((item,index)=>
//         {
//             console.log("currentValue",romanValues[item])
//             // console.log("nextValue",romanValues[index+1])

//             const currentValue = romanValues[item]
//           if(currentValue>nextValue){
//              total = total + currentValue
                
//           }else{
//             total = total - currentValue
//           }

//           nextValue = currentValue
//         }
//       )
//       console.log("total",total)
//       return total
//   }

//   const result = romanToInt("MCMXCIV");
// console.log("result",result)

//1994

const romanNumerals = [
    { value: 1000, symbol: "M" },
    { value: 900, symbol: "CM" },
    { value: 500, symbol: "D" },
    { value: 400, symbol: "CD" },
    { value: 100, symbol: "C" },
    { value: 90, symbol: "XC" },
    { value: 50, symbol: "L" },
    { value: 40, symbol: "XL" },
    { value: 10, symbol: "X" },
    { value: 9, symbol: "IX" },
    { value: 5, symbol: "V" },
    { value: 4, symbol: "IV" },
    { value: 3, symbol: "III" },
    { value: 2, symbol: "II" }, // Add support for 2
    { value: 1, symbol: "I" },
  ];
function intToRoman(number){
    console.log("number",number)

let total = ""
let prevValue = ""
let num = number
romanNumerals.map((item,index)=>{
    console.log("type ", typeof item.value)
    if(number>=item.value){
        total = total+ item.symbol
        num =num - item.value
    }
    // while (number >= item.value) {
    //     total = total + item.symbol;
    //     number = number - item.value;
    //   }
})
return total
     
    
}
const hii = 20 - 10
console.log("hii",hii)




const value=intToRoman(30)
console.log("value",value)