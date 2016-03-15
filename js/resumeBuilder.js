/*
This is empty on purpose! Your code to build the resume will go here.
 */
var formattedName = HTMLheaderName.replace("%data%", "Grgrgrrr");
var formatedRole = HTMLheaderRole.replace("%data%", "developer");
$("#header").prepend(formattedName);
$("#header").append(formatedRole);