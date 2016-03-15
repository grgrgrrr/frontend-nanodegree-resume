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