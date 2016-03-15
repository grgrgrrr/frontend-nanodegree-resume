/*
This is empty on purpose! Your code to build the resume will go here.
 */

var work = {}
work.city = "Rostov";
work.role = "Developer";

var bio =
{
 "name" : "grgrgrrr",
 "role" : "developer",
 "contacts" : {
     "mobile" : "lalala",
     "country" : "Russia"},
 "welcome" : "hello, bro",
 "skills" : ["awesomeness", "funny"],
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

var formattedName = HTMLheaderName.replace("%data%", bio.name);
var formatedRole = HTMLheaderRole.replace("%data%", work.role);
$("#header").prepend(formattedName);
$("#header").append(formatedRole);


//$("#main").append(bio.name);
//$("#main").append(bio["welcome"]);
