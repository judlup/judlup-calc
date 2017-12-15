# judlup-calc
A node Calc npm module, testing bin option

Install
` npm install judlup-calc -g`


## CLI

Run 

`calc ` 

Output:

` ···Judlup Calc··· `

Run

`calc  + 1 2 `  or `calc  add 1 2 `

Output:

```
···Judlup Calc···
+**************+
| Add result 3 |
+**************+
```

Run

`calc  - 1 2 `  or `calc  subs 2 1 `

Output:

```
···Judlup Calc···
+***************+
| Subs result 1 |
+***************+
```

Run

`calc  m 1 2 `  or `calc  mult 3 2 `

Output:

```
···Judlup Calc···
+***************+
| Mult result 6 |
+***************+
```

Run

`calc  / 1 2 `  or `calc  div 3 2 `

Output:

```
···Judlup Calc···
+***************+
| Div result 6 |
+***************+
```

## Library

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
