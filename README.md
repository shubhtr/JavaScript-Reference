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
