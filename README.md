# JavaScript Reference
## by Shubhrendu Tripathi

<br><br>

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

### Playing with array

<b>map()</b>

    let numbers = [18, 21, 32, 49, 5, 6, 7, 8];
    const mapResult = numbers.map(number => number * 2);
    console.log(mapResult)
    // Expected output
    // [36, 42, 64, 98,10, 12, 14, 16]

Instead of <em>looping</em> through an array: The map method takes an argument which is every element of an array. Then it does some operations with that element and returns a new array.

<b>filter()</b>

    const names = ['Tom', 'Cruise', 'Ema', 'Watson'];
    const result = names.filter(name => name.length < 6);
    console.log(result)
    // Expected output
    // [ 'Tom', 'Ema' ]

when you have to filter some elements from an array if they pass the test implemented by the provided function. It is helpful when you have a large array and want to filter some items of the same category.

<b>find()</b>

want to find a specific item from an array. Now you can go through the whole array and see if the item is there or not. But what if the array is populated with 1000 items?

    let numbers = [18, 21, 32, 49, 5, 6, 7, 8];
    const found = numbers.find(number => number < 10)
    console.log(found);
    //Expected Result: 5

In this case, this find method is iterating through all the items in the array and checking if the item is less than 10.

NOTE: find() will return only one item

<b>indexOf()</b>

want to know the index number of an item inside an array.

    const fruits = ['apple', 'banana', 'mango'];
    console.log(fruits.indexOf('banana'))
    // Expected Output: 1

<b>join()</b>

have to join every element of an array with a special character (or any character). 

    const fruits = ['lemon', 'orange', 'strawberry'];
    console.log(fruits.join('+'));
    // Expected Output: lemon+orange+strawberry

<b>pop()</b>

remove the last item of an array.

    const animals = ['tiger', 'lion', 'tiger', 'penguin']
    animals.pop()
    console.log(animals)
    //Expected Output: [ 'tiger', 'lion', 'tiger' ]

<b>push()</b>

add an item to an array at the last position

    const animals = ['tiger', 'lion', 'tiger', 'penguin']
    animals.push('cheetah')
    console.log(animals)
    //Expected Output: ['tiger', 'lion', 'tiger', 'penguin', 'cheetah']

<b>shift()</b>

remove the first element of an array

    const fruits = ['apple', 'banana', 'mango'];
    fruits.shift()
    console.log(fruits)
    //Expected Output: [ 'banana', 'mango' ]

<b>unshift()</b>

add an item in the first position of an array

    const animals = [ 'tiger', 'lion', 'tiger', 'cheetah' ]
    animals.unshift('cow')
    console.log(animals)
    //Expected Output: [ 'cow', 'tiger', 'lion', 'tiger', 'cheetah' ]

<b>reverse()</b>

reverse the items of an array. It means the first item will be the last and the last item will be the first. The second last item will be the second item and the second item will be the second last item and so on.

    const fruits = [ 'apple', 'banana', 'mango' ]
    fruits.reverse()
    console.log(fruits)
    //Expected Output: [ 'mango', 'banana', 'apple' ]


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


## Output data (Popup messages etc)

Function | Description
--- | ---
alert() | show some output in a small popup window
prompt() | prompt for user input using dialog box
confirm() | open dialog with yes/no and return true/false based on user click
&nbsp; | &nbsp;
document.write() | write output to the html document
console.log() | mainly used for debugging, write output on the browser console

<br><br>

## String

Method | Meaning | Example
--- | --- | ---
length | determines length of string | var a = "great.io"; <br>a.length;
indexof() | finds position of the first occurrence of a character or text in the string | var a = "great.io is a nice website"; <br> var b = a.indexof("nice");
lastindexof() | returns last occurrence of text in a string | var a = "great.io is nice website"; <br> var b = a.indexof("nice", 6);
search() | searches and returns position of a specified value in string | var a = "great.io is nice website"; <br> var b = a.search("nice");
slice() | extracts and returns part of a string as another new string | var a = "great.io is nice website"; <br> var b = a.slice(13); //will return nice website
substring() | returns part of the string from startindex to the endindex specified. cannot take negative values unlike slice() | var a = "great.io is a nice website"; <br> var b = a.substring(0,7);
substr() | returns the sliced out portion of a string, the second parameter being the length of the final string | var a = "great.io is nice website"; <br> var b = a.substr(13, 8);
replace() | replaces a particular value with another | var a = "great.io is nice website"; <br> var b = a.replace("nice", "good");
touppercase() | changes all characters into uppercase | var a = "great.io is nice website"; <br> bar b = a.touppercase(a);
tolowercase() | changes all characters into lowercase | var a = "great.io is nice website"; <br> var b = a.tolowercase(a);
concat() | joins two or more strings together into another string | var a = "my name is "; <br> var b = "john"; <br> var c = a.concat(": ", b);
trim() | remove whites spaces from a string | var a = "    hi, there!   "; <br> a.trim();
charat() | finds character at a specified position | var a = "great.io"; <br> a.charat(1) will return a
charcodeat() | returns the unicode of character at the specified position | "great".charcodeat(0) will return 72
split() | convert a string into array based on special character | var a = "great.io"; <br> var arr = a.split(""); <br> will return an array of characters g,r,e,a and so on...
accessing characters using [] | access a character of string using its index | var a = "hackr.io"; <br> a[2] will return c;

## Escape characters

Character | Description
--- | ---
\\\` | Single quote
\\" | Double quote
\\\\ | Single backslash
\\b | Single backslash
\\f | Form feed
\\n | New line
\\t | Horizontal tab
\\v | Vertical tab
\\r | Carriage return

## Regular Expressions

Regular expressions can be in the form of pattern modifiers, metacharacters, quantifiers and brackets.

<br>

### Pattern modifiers

Modifier | Description
--- | ---
e | evaluate replacement
i | case-insensitive matching
g | global matching - find all matches
m | multiple line matching
s | treat strings as a single line
x | allow comments and whitespace in the pattern
u | ungreedy pattern

<br>

### Brackets

Modifier | Description
--- | ---
[abc] | find any of the characters between the brackets
[^abc] | find any character which are not in the brackets
[0-9] | used to find any digit from 0 to 9
[A-z] | find any character from uppercase A to lowercase z
(a|b|c) | find any of the alternatives separated with | 

<br>

### Metacharacters

Modifier | Description
--- | ---
. | find a single character, except newline or line terminator
\w | word character
\W | non-word character
\d | a digit
\D | a non-digit character
\s | whitespace character
\S | non-whitespace character
\b | find a match at the beginning/end of a word
\B | a match NOT at the beginning/end of a word
\0 | NULL character
\n | a new line character
\f | form feed character
\r | carriage return character
\t | tab character
\v | vertical tab character
\xxx | character specified by an octal number xxx
\xdd | character specified by a hexadecimal number dd
\uxxxx | Unicode character specified by a hexadecimal number xxxx

<br>

### Quantifiers

Modifier | Description
--- | ---
n+ | matches string that contains at least one 'n'
n* | any string containing zero or more occurrences of n
n? | a string that has no or one occurrence of n
n{X} | string that contains a sequence of X n's
n{X,Y} | strings that contain a sequence of X to Y n's 
n{X,} | matches string that has a sequence of at least X n's
n$ | any string with n at the end of it
^n | string with n at the beginning of it
?=n | any string that is followed by the string n
?!n | string that is NOT followed by the string n

## Global functions

Function | Description | Example | Notes
--- | --- | --- | ---
encodeURI() | encodes a Uniform Resource Identifier (URI) into UTF-8 | var uri = "great.io/blog"; <br> var enc = encodeURI(uri);
encodeURIComponent() | encoding for URI components | var uri = "great.io/blog"; <br> var enccomp = encodeURIComponent(uri);
decodeURI() | decodes a URI created by encodeURI or similar | var dec = decodeURI(enc);
decodeURIComponent() | decodes a URI component | var decomp = decodeURIComponent(enccomp);
parseInt() | parses the input and returns an integer | var b = parseFloat("2003 monday");
parseFloat() | parses the input and returns a floating-point number | var b = parseFloat("23.333");
eval() | evaluates JavaScript code represented as a string | var x = eval("2*2"); |  `[Dangerous: DO NOT USE]`
Number() | returns a number converted from its initial value | var y = new Date(); <br> var z = Number(y);
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
* Sitepoint. [https://www.sitepoint.com/]. 2021 January 10.
* https://medium.com/swlh/10-tips-and-tricks-to-work-fast-with-array-in-javascript-986f0a454d2d

<br><br>
[![GitHub followers](https://img.shields.io/github/followers/shubhtr.svg?style=social&label=Follow%20shubhtr)](https://github.com/shubhtr) [![Twitter Follow](https://img.shields.io/twitter/follow/shubhtr.svg?style=social)](https://twitter.com/intent/follow?screen_name=shubhtr)
