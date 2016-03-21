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
    var arr = finalName.split(' ');
    var name = arr[0];
    var part = name.slice(1).toLowerCase();
    var fst = name[0].toUpperCase();
    var surname = arr[1].toUpperCase();

    finalName= fst + part + " " + surname;
    return finalName;
};


//replace all < > to "" to check harmless strings
var html = '<script src="http://hackyourwebsite.com/eviljavascript.js"></script>';
var charEscape = function(_html) {
    var newHTML = _html;
    var patternOpen = /</gi;
    var patternClose = />/gi;
    newHTML = newHTML.replace(patternOpen, "&lt;");
    newHTML = newHTML.replace(patternClose, "&gt;");
    return newHTML;
};
console.log(charEscape(html));

//finding locations from work obj
var work = {
    "jobs": [
        {
            "employer": "Udacity",
            "title": "Course Developer",
            "location": "Mountain View, CA",
            "dates": "Feb 2014 - Current",
            "description": "Who moved my cheese cheesy feet cauliflower cheese. Queso taleggio when the cheese comes out everybody's happy airedale ricotta cheese and wine paneer camembert de normandie. Swiss mozzarella cheese slices feta fromage frais airedale swiss cheesecake. Hard cheese blue castello halloumi parmesan say cheese stinking bishop jarlsberg."
        },
        {
            "employer": "LearnBIG",
            "title": "Software Engineer",
            "location": "Seattle, WA",
            "dates": "May 2013 - Jan 2014",
            "description": "Who moved my cheese cheesy feet cauliflower cheese. Queso taleggio when the cheese comes out everybody's happy airedale ricotta cheese and wine paneer camembert de normandie. Swiss mozzarella cheese slices feta fromage frais airedale swiss cheesecake. Hard cheese blue castello halloumi parmesan say cheese stinking bishop jarlsberg."
        },
        {
            "employer": "LEAD Academy Charter High School",
            "title": "Science Teacher",
            "location": "Nashville, TN",
            "dates": "Jul 2012 - May 2013",
            "description": "Who moved my cheese cheesy feet cauliflower cheese. Queso taleggio when the cheese comes out everybody's happy airedale ricotta cheese and wine paneer camembert de normandie. Swiss mozzarella cheese slices feta fromage frais airedale swiss cheesecake. Hard cheese blue castello halloumi parmesan say cheese stinking bishop jarlsberg."
        },
        {
            "employer": "Stratford High School",
            "title": "Science Teacher",
            "location": "Nashville, TN",
            "dates": "Jun 2009 - Jun 2012",
            "description": "Who moved my cheese cheesy feet cauliflower cheese. Queso taleggio when the cheese comes out everybody's happy airedale ricotta cheese and wine paneer camembert de normandie. Swiss mozzarella cheese slices feta fromage frais airedale swiss cheesecake. Hard cheese blue castello halloumi parmesan say cheese stinking bishop jarlsberg."
        }
    ]
};

function locationizer(work_obj) {
    var locations = [];
    for (var job in work_obj["jobs"])
    {
        locations.push(work_obj.jobs[job].location);
    }
    return locations;
}