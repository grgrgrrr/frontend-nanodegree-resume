/*
This is empty on purpose! Your code to build the resume will go here.
 */

//work information
var work = {
    jobs :
        [
            {
                "city": "Rostov",
                "role": "Developer",
                "employer": "sva",
                "date" : "03.2016",
                "description" : "Learning javascript and being cool"
            }  ,
            {
                "city": "Rostov",
                "role": "Teacher",
                "employer": "sfedu",
                "date" : "07.2015",
                "description" : "Trying to teach little humans"
            }
        ]
}

//biography information
var bio =
{
    "name" : "Anna Ryndeeva",
    "role" : "developer",
    "contacts" : {
        "mobile" : "123456789",
        "country" : "Russia",
        "github" : "grgrgrrr",
        "twitter" : "grgrgrrr",
        "e-mail" : "grgrgrrr",
        "location" : "Rostov-on-Don"
    },
    "welcome" : "hello, bro",
    "skills" : ["awesomeness", "funny", "responsible", "awesomeness", "funny", "responsible"],
    "picture" : "images/fry.jpg"
}

//project information
var projects =
{
    proj: [
        {
            "name" : "dressMe",
            "data" : "2015",
            "description": "This project includes intelligent system of finding suitable dress according to a color and 2D virtual fitting room.",
            "image": "images/space1.png"
        }
        ,
        {
            "name": "arkanoid",
            "data": "2016",
            "description": "Awesome game developed with using Unity3D. ",
            "image": "images/space2.jpg"
        }
    ]
}

//education information
var education =
{
    "schools":
            [{
                "name": "sfedu",
                "location": "Rostov",
                "degree": "bachelor",
                "specialization": "computer science",
                "dates": "2011 - 2015"
            },
            {
                "name": "sfedu",
                "location": "Rostov",
                "degree": "master",
                "specialization": "computer science",
                "dates": "2015 - 2017"
            }],
    "online-courses":
    [
        {
            "website": "Udacity",
            "title": "JavaScript Basics",
            "date": "03.2016",
            "url": "udacity.com"
        },
        {
            "website": "Coursera",
            "title": "Introduction to R",
            "date": "04.2016",
            "url": "coursera.com"
        },
        {
            "website": "Codacademy",
            "title": "Python basics",
            "date" : "11.2015",
            "url": "codacademy.com"
        },
        {
            "website": "Yandex",
            "title": "Machine Learning. Voronzov",
            "date": "10.2015",
            "url": "yandex.ru"
        }
    ]
}


//adding biography
var displayBio = function()
{
    var formattedName = HTMLheaderName.replace("%data%", bio.name);
    $("#header").append(formattedName);

    var formatedRole = HTMLheaderRole.replace("%data%", bio.role);
    $("#header").append(formatedRole);


    $("#header").append(HTMLContactsStart);
    var formatedMobile = HTMLmobile.replace("%data%", bio.contacts.mobile);
    $("#contacts").append(formatedMobile);

    var formatedTwitter = HTMLtwitter.replace("%data%", bio.contacts.twitter);
    $("#contacts").append(formatedTwitter);

    var formatedEmail= HTMLemail.replace("%data%", bio.contacts["e-mail"]);
    $("#contacts").append(formatedEmail);

    var formatedLocation= HTMLlocation.replace("%data%", bio.contacts.location);
    $("#contacts").append(formatedLocation);

    var formatedImage = HTMLbioPic.replace("%data%", bio.picture);
    $("#header").append(formatedImage);

    var formatedMsg = HTMLwelcomeMsg.replace("%data%", bio.welcome);
    $("#header").append(formatedMsg);

    //$("#main").append(bio.name);
    //$("#main").append(bio["welcome"]);


}
displayBio();


//adding skills
var displaySkills = function()
{
    if (bio["skills"].length > 0)
    {
        $("#header").append(HTMLskillsStart);
        for (var i =0; i<bio["skills"].length; i++)
        {
            var formattedSkill = HTMLskills.replace("%data%", bio.skills[i]);
            $("#skills").append(formattedSkill);
        }
    }
}
displaySkills();

//adding work experience
var displayWork = function()
{
    for (var item in work["jobs"] )
    {
        $("#workExperience").append(HTMLworkStart);
        var formatTitle = HTMLworkTitle.replace("%data%", work.jobs[item].role);
        var formatEmployer = HTMLworkEmployer.replace("%data%",  work.jobs[item].employer);
        var concat = formatEmployer + formatTitle;
        $(".work-entry:last").append(concat);

        var formatedDate = HTMLworkDates.replace("%data%", work.jobs[item].date);
        $(".work-entry:last").append(formatedDate);

        var formatedDescription = HTMLworkDescription.replace("%data%", work.jobs[item].description);
        $(".work-entry:last").append(formatedDescription);
    }
}
displayWork();

//encapsulated display of projects
projects.display = function()
{
    for (var item in projects["proj"])
    {
        $("#projects").append(HTMLprojectStart);
        var formatedTitle = HTMLprojectTitle.replace("%data%", projects.proj[item].name);
        $(".project-entry:last").append(formatedTitle);
        var formatedData = HTMLprojectDates.replace("%data%", projects.proj[item].data);
        $(".project-entry:last").append(formatedData);
        var formatedDescription = HTMLprojectDescription.replace("%data%", projects.proj[item].description);
        $(".project-entry:last").append(formatedDescription);

        for (var i = 0; i<2; i++)
        {
            var formatedImage = HTMLprojectImage.replace("%data%", projects.proj[item].image);
            $(".project-entry:last").append(formatedImage);
        }
    }
}
projects.display();


education.display = function()
{
    for (var item in education["schools"])
    {
        $("#education").append(HTMLschoolStart);
        var formatedTitle = HTMLschoolName.replace("%data%", education.schools[item].name);
        $(".education-entry:last").append(formatedTitle);

        var formatedLocation = HTMLschoolLocation.replace("%data%", education.schools[item].city);
        $(".education-entry:last").append(formatedLocation);

        var formatedDegree = HTMLschoolDegree.replace("%data%", education.schools[item].degree);
        $(".education-entry:last").append(formatedDegree);

        var formatedSpecialization = HTMLschoolMajor.replace("%data%", education.schools[item].specialization);
        $(".education-entry:last").append(formatedSpecialization);
    }
}
education.display();

//the name game
function inName(name)
{
    var newName = "";
    var names = name.trim().split(" ");
    newName = newName + names[0][0].toUpperCase() + names[0].slice(1).toLowerCase() + " " + names[1].toUpperCase();
    return newName;
}
$('#main').append(internationalizeButton);

$('#mapDiv').append(googleMap);



