/*
This is empty on purpose! Your code to build the resume will go here.
 */

var work = {
    jobs :
        [
            {
                "city": "Rostov",
                "role": "Developer",
                "employer": "sva"
            }  ,
            {
                "city": "Rostov",
                "role": "Teacher",
                "employer": "sfedu"
            }
        ]
}

var bio =
{
    "name" : "grgrgrrr",
    "role" : "developer",
    "contacts" : {
        "mobile" : "lalala",
        "country" : "Russia",
        "github" : "grgrgrrr",
        "twitter" : "grgrgrrr",
        "e-mail" : "grgrgrrr"
    },
    "welcome" : "hello, bro",
    "skills" : ["awesomeness", "funny", "responsible"],
    "picture" : "images/fry.jpg"
}

var project =
{
  "name" : "dressMe",
  "data" : "2015"
}

var education =
{
 "schools": [{
  "name": "56",
  "city": "Rostov"
 }, {
  "name": "12",
  "city": "Rostov"
 }]
}


//adding biography

    var formattedName = HTMLheaderName.replace("%data%", bio.name);
    $("#header").append(formattedName);

    var formatedRole = HTMLheaderRole.replace("%data%", bio.role);
    $("#header").append(formatedRole);

  /*  for (var i = 0; i < bio.contacts.length; i++)
    {
        $("#header").append(Html);
        var formatedTitle =
        var formattedContact =
    }*/



//adding skills
if (bio["skills"].length > 0)
{
    $("#header").append(HTMLskillsStart);
    for (var i =0; i<bio["skills"].length; i++)
    {
        var formattedSkill = HTMLskills.replace("%data%", bio.skills[i]);
        $("#skills").append(formattedSkill);
    }
}

//adding work experience
for (var item in work["jobs"] )
{
    $("#workExperience").append(HTMLworkStart);
    var formatTitle = HTMLworkTitle.replace("%data%", work.jobs[item].role);
    var formatEmployer = HTMLworkEmployer.replace("%data%",  work.jobs[item].employer);
    var concat = formatEmployer + formatTitle;
    $(".work-entry:last").append(concat);
}



//$("#main").append(bio.name);
//$("#main").append(bio["welcome"]);
