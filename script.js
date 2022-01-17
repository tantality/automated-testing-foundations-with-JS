let arr=[["24",true],["82",123],["17","1948"],[95,true],[123,5],[12,0],[true,true],[null,true],[undefined,true],[undefined,"hello"]];

let addition=(a,b)=>a+b;
let subtraction=(a,b)=>a-b;
let multiplication=(a,b)=>a*b;
let division=(a,b)=>a/b;

function printResults(func){
    arr.forEach((el,index)=>
    console.log(`${index+1}) (${el[0]} |${typeof el[0]}|, ${el[1]} |${typeof el[1]}|) = `+func(...el)));
}

console.log('\n'+'Addition:');
printResults(addition);

console.log('\n'+'Subtraction:');
printResults(subtraction);

console.log('\n'+'Multiplication:');
printResults(multiplication);

console.log('\n'+'Division:');
printResults(division);


