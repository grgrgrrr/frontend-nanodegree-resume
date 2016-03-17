//audacity to Udacity
var origin = "audacity";
var part = origin.slice(0, 2);
var word = origin.replace(part, "U");
console.log(word);

//increase the last array value
var myArray = [1, 2, 3, 4, 5];
myArray[myArray.length - 1] = myArray[myArray.length - 1] + 1;
console.log(myArray);

//making string correct
var name = "AlbERt EINstEiN";
function nameChanger(oldName) {
    var finalName = oldName;
    // Your code goes here!
    var arr = finalName.split(' ');
    var name = arr[0];
    var part = name.slice(1).toLowerCase();
    var fst = name[0].toUpperCase();
    var surname = arr[1].toUpperCase();

    finalName= fst + part + " " + surname;
    // Don't delete this line!
    return finalName;
};


//replace all < > to "" to check harmless strings

var html = '<script src="http://hackyourwebsite.com/eviljavascript.js"></script>';
var charEscape = function(_html) {
    var newHTML = _html;
    // How will you make sure that newHTML doesn't contain any < or > ?
    // Your code goes here!

    var patternOpen = /</gi;
    var patternClose = />/gi;
    newHTML = newHTML.replace(patternOpen, "&lt;");
    newHTML = newHTML.replace(patternClose, "&gt;");

    // Don't delete this line!
    return newHTML;
};

// Did your code work? The line below will tell you!
console.log(charEscape(html));