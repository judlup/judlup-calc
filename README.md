# judlup-calc
A node Calc npm module, testing bin option

Install
` npm install judlup-calc -g`

Run after installed

`calc ` 

Output:

` ···Judlup Calc··· `

### Example

```
//var calc = require("judlup-calc"); 
var calc = require("../index.js");

calc.printMsg();

//Add
var add = calc.add(8,5);
console.log("Add result is : ",add);

//Substract
var subs = calc.subs(17,4);
console.log("Substract result is : ",subs);

//Multiply
var mult = calc.mult(2,6.5);
console.log("Multiply result is : ",mult);

//Divide
var div = calc.div(26,2);
console.log("Divide result is : ",div);  

```

* * *

@Judlup

13
