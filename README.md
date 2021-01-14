# JavaScript Reference
This repository contains a collection of sample code, recipes, snippets, etc for the JavaScript programming language.

## Basics

### Including JavaScript in an HTML page

    <script type="text/javascript">
        //js code goes here
    </script>

### Call an external JavaScript file

    <script src="myscript.js"></script>

## Comments

Single line comments    

    // this is a single line comment

Multi-line comments 

    /* this is a 
    multi-line
    comment */

## Variables

Keyword | Description
--- | ---
`var` | the most common variable. can be reassigned but only accessed within a function. variables defined with `var` move to the top when code is executed
`const` | cannot be reassigned and not accessible before they appear within the code
`let` | similar to const, however, `let` variable can be reassigned but not re-declared

## Data Types

Type, Example   | Description
--- | ---
`var age = 23`                                      |   Numbers
`var x`                                             |   Variables
`var a = "init"`                                    |   Text (strings)
`var b = 1 + 2 + 3`                                 |   Operations
`var c = true`                                      |   True of false statements
`const PI = 3.14`                                   |   Constant numbers
`var name = {firstName:"John", lastName:"Doe"}`     |   Objects

## Arrays

    var subjectlist = ["math", "science", "history", "computer"];

Arrays can perform the following functions:

Function | Description
--- | ---
`concat()`          |   concatenate different arrays into one
`join()`            |   joins all elements of one array as a string
`indexof()`         |   returns the index (first position) of an element in the array
`lastindexof()`     |   returns the last position of an element in the array
`sort()`            |   alphabetic sort of array elements
`reverse()`         |   sort elements in descending order
`valueof()`         |   primitive value of the element specified
`slice()`           |   cut a portion of one array and put it in a new array
`splice()`          |   add elements to an array in a specific manner and position
`unshift()`         |   add new element to the array in the beginning
`shift()`           |   remove the first element of the array
`pop()`             |   remove the last element of the array
`push()`            |   add new element to the array as the last one
`tostring()`        |   prints the string value of the elements of the array

## Operators

Type | Sign | Description
--- | --- | ---
Basic | + | Addition
&nbsp; | - | Subtraction
&nbsp; | * | Multiply
&nbsp; | / | Divide
&nbsp; | % | Remainder
&nbsp; | ++ | Increment
&nbsp; | -- | Decrement
&nbsp; | (...) | Execute brackets first
&nbsp; | &nbsp; | &nbsp;
Logical | && | And
&nbsp; | \|\| | Or
&nbsp; | ! | Not
&nbsp; | &nbsp; | &nbsp; 
Comparison | == | Equal to 
&nbsp; | === | Equal value and type
&nbsp; | != | Not equal
&nbsp; | !== | Not equal value or type
&nbsp; | > | Greater than
&nbsp; | < | Less than
&nbsp; | >= | Greater than or equal to 
&nbsp; | <= | Less than or equal to
&nbsp; | ? | Ternary operator
&nbsp; | &nbsp; | &nbsp;
Bitwise | & | AND
&nbsp; | \| | OR
&nbsp; | ~ | NOT
&nbsp; | ^ | XOR
&nbsp; | << | Left shift
&nbsp; | >> | Right shift
&nbsp; | >>> | Zero fill right shift

## Loops

`for` 

<ins>Description:</ins> for loop

    var i;
    for(i=0; i<5; i++) {
        //code    
    }



`while`

<ins>Description:</ins> execute a block of code while some condition is true

    while (product.length > 5) {
        //code
    }



`do...while`

<ins>Description:</ins> similar to while, but executes at least as the condition is applied after the code is executed

    do {
        //code
    } while (condition){
        
    }



`break` 

<ins>Description:</ins> break and exit the cycle based on some conditions

    if (i<10)
        break;



`continue`

<ins>Description:</ins> continue next iteration if some conditions are met

    if (j>10)
        continue;


## If-Else

    if (condition 1) {
        //execute this code
    } else if (condition 2) {
        //execute new code
    } else {
        //execute if no other condition is true
    }

    

## Function

    function add(a, b) {
        //code

        return (a+b);
    }


## Output data

Function | Description
--- | ---
alert() | show some output in a small popup window
document.write() | write output to the html document
console.log() | mainly used for debugging, write output on the browser console
prompt() | prompt for user input using dialog box
confirm() | open dialog with yes/no and return true/false based on user click

## Global functions

Function | Description | Example | Notes
--- | --- | --- | ---
encodeURI() | encodes a Uniform Resource Identifier (URI) into UTF-8 | var uri = "great.io/blog";
&nbsp; | &nbsp; | var enc = encodeURI(uri);
encodeURIComponent() | encoding for URI components | var uri = "great.io/blog";
&nbsp; | &nbsp; | var enccomp = encodeURIComponent(uri);
decodeURI() | decodes a URI created by encodeURI or similar | var dec = decodeURI(enc);
decodeURIComponent() | decodes a URI component | var decomp = decodeURIComponent(enccomp);
parseInt() | parses the input and returns an integer | var b = parseFloat("2003 monday");
parseFloat() | parses the input and returns a floating-point number | var b = parseFloat("23.333");
eval() | evaluates JavaScript code represented as a string | var x = eval("2*2"); |  `[Dangerous: DO NOT USE]`
Number() | returns a number converted from its initial value | var y = new Date();
&nbsp; | &nbsp; | var z = Number(y);
isNaN() | determines whether a value is NaN or not | isNaN(25);
isFinite() | determines whether a passed value is a finite number | isFinite(-245);


## Object creation

### Object Literal
Objects can be created "ex-nilo" - out of nothing - no class, no template, no prototype

    var o = {
        x = 42,
        y = 3.14,
        f: function() {},
        g: function() {}
    };

<ins>Drawback</ins>
To create the same type of object in a different place, this code will need to copied to that location.

## Factory Functions
Create a family of objects that share the same structure, interface, and implementation. 
Return an object literal from a function. If we need to create the object in some other place, we simply need to invoke the function.

    function thing() {
        return {
            x: 42,
            y: 3.14,
            f: function() {},
            g: function() {}
        };
    }

    var o = thing();

<ins>Drawback</ins>
Can cause memory bloat - each object contains it own unique copy of each function. Ideally, every object should <em>share</em> just one copy of its functions.

## Prototype Chains
Share data across objects.

    var thingPrototype = {
        f: function() {},
        g: function() {}
    };

    function thing() {
        var o = Object.create(thingPrototype);

        o.x = 42;
        o.y = 3.14;

        return o;
    }

    var o = thing();

## ES6 Classes

    class Thing() {
        constructor() {
            this.x = 42;
            this.y = 3.14;
        }    

        f() {}
        g() {}

        setX(status) {
            this.x = status;
        }
    }

    const o = new Thing();

To print out the contents of a class:

    var a = new Thing();

    $('#output').html(JSON.stringify(a));

To create an array of classes:

    var b = new Array(50);

    for(i=0; i<49; i++){
        b[i] = new Thing();
    }

To call a particular function:

    b[2].setX(20);  

# References
Sitepoint. [https://www.sitepoint.com/]. 2021 January 10.

<br><br>
[![GitHub followers](https://img.shields.io/github/followers/shubhtr.svg?style=social&label=Follow%20shubhtr)](https://github.com/shubhtr) [![Twitter Follow](https://img.shields.io/twitter/follow/shubhtr.svg?style=social)](https://twitter.com/intent/follow?screen_name=shubhtr)
