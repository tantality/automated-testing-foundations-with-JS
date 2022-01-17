let arr=[["23",true],["82",123],["23","1948"],[23,true],[82,123],[true,true],[null,true],[undefined,true],[undefined,"hello"]];

let addition=(a,b)=>a+b;
let subtraction=(a,b)=>a-b;

function printResults(func){
    arr.forEach((el,index)=>
    console.log(`${index+1}) (${el[0]} |${typeof el[0]}|, ${el[1]} |${typeof el[1]}|) = `+func(...el))
    );
}

console.log('\n'+'Addition:');
printResults(addition);

console.log('\n'+'Subtraction:');
printResults(subtraction);


