function Passbyvalue(a, b) {
    let tmp;
    tmp = b;
    b = a;
    a = tmp;
    console.log(`Inside Pass by value 
        function -> a = ${a} b = ${b}`);
}

let a = 1;
let b = 2;
// console.log(`Before calling Pass by value 
//         Function -> a = ${a} b = ${b}`);
 
// Passbyvalue(a, b);
 
// console.log(`After calling Pass by value 
//        Function -> a =${a} b = ${b}`);



function PassByReference(c, d) {
    let tmp;
    tmp = d[0];
    c[0] = d[0];
    c[0] = tmp;
    console.log(`Inside Pass by reference 
        function -> c = ${c[0]} d = ${d[0]}`);
}
 


       ////calling pass by reference
let c=[3]
let d=[4]

console.log(`Before calling Pass by reference 
        Function -> c = ${c[0]} d = ${d[0]}`);
 
PassByReference(c, d);
 
console.log(`After calling Pass by reference 
       Function -> c =${c[0]} d = ${d[0]}`);

