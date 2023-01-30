//(a)
//Returns the number of characters in a string.
function stringCount(input) {
    var x = input.length;
    return x;
}
//(b)
//Returns the number of characters in a string, excluding spaces.
function stringCountNoSpace(input) {
    var x = 0;
    for (var i = 0; i < input.length; i++)
        if (input.charAt(i) != " ")
            x++;
    return x;
}
//(c)
//The ? after option is used to designate that a parameter is optional.
//It'll be undefined if no option value is passed into it.
function stringCountOption(input, option) {
    var x = 0;
    if (option) //Do count spaces
     {
        x = input.length;
    }
    else //Don't count spaces
     {
        for (var i = 0; i < input.length; i++)
            if (input.charAt(i) != " ")
                x++;
    }
    return x;
}
var sampleString = "Hello World";
var choice = true;
console.log("[Using stringCount] Length of Hello World: " + stringCount(sampleString));
console.log("[Using stringCountNoSpace] Length of Hello World w/o Spaces: " + stringCountNoSpace(sampleString));
console.log("[Using stringCountOption] Length of Hello World when choice=" + choice + ": " + stringCountOption(sampleString, choice));
choice = false;
console.log("[Using stringCountOption] Length of Hello World when choice=" + choice + ": " + stringCountOption(sampleString, choice));
