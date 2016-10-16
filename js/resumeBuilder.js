function inter() {
    $("#main").append(internationalizeButton);
    $("#mapDiv").append(googleMap);
}
inter();
 var bio = {
    "name": "neeraj ko",
    "role": "Front End Web Developer",
    "contacts": {
        "mobile": "8714449984",
        "email": "neerajko12@gmail.com",
        "github": "neerajko12",
        "location": "Kerala,India"
    },
    "welcomeMessage": "I am an Electronics and Communication Engineer and I am very interested in software developement",
    "skills": ["awesomeness", "programming", "teaching", "JS"],
    "biopic": "images/neer.jpg"
};
var education = {
    "schools": [{
        "name": "LBS college of Engineering",
        "location": "kasragod",
        "degree": "BTech",
        "majors": ["ENGLISH", "MALAYALAM"],
        "dates": "2016",
        "url": "http://www.udacity.com"
    }, {
        "name": "GHSS Morazha",
        "location": "kannur",
        "degree": "Plus two",
        "majors": ["SCIENCE"],
        "dates": "2012",
        "url": "http://www.udacity.com"
    }, {
        "name": "GHSS Aroli",
        "location": "kannur",
        "degree": "SSLC",
        "majors": ["ECE"],
        "dates": "2010",
        "url": "http://www.udacity.com"
    }],
    "onlineCourses": [{
        "title": "javascript",
        "school": "udacity",
        "dates": "2016",
        "url": "http://www.udacity.com"
    }]
};
var work = {
    "jobs": [{
        "employer": "infosys",
        "title": "Developer",
        "location": "mysore",
        "dates": "january 2018",
        "description": "As a web developer, I am very happy with my job"
    }, {
        "employer": "Google",
        "title": "Developer",
        "location": "san francisco",
        "dates": "january 2021",
        "description": "This is my dream job as a front end web developer"
    }]
};

var projects = {
    "projects": [{
        "title": "sample project 1",
        "dates": "2016",
        "description": "My project is based on the vehicle detection and tracking by means of inage processing",
        "images": ["images/a.png"]
    },{
        "title": "sample project 2",
        "dates": "2015",
        "description": "My project is based on Thyristor power control by IR remote",
        "images": ["images/b.jpg"]
    }]
};




work.display = function() {
    var i=0;
    for (i = 0; i < work.jobs.length; i++) {

        $("#workExperience").append(HTMLworkStart);
        

        var formattedEmployer = HTMLworkEmployer.replace("%data%", work.jobs[i].employer);
        var formattedTitle = HTMLworkTitle.replace("%data%", work.jobs[i].title);
        var formattedEmployerTitle = formattedEmployer + formattedTitle;
        $(".work-entry:last").append(formattedEmployerTitle);
        var formattedLocation = HTMLworkLocation.replace("%data%", work.jobs[i].location);
        $(".work-entry:last").append(formattedLocation);
        var formattedDates = HTMLworkDates.replace("%data%", work.jobs[i].dates);
        $(".work-entry:last").append(formattedDates);
        var formattedDescription = HTMLworkDescription.replace("%data%", work.jobs[i].description);
        $(".work-entry:last").append(formattedDescription);
        
    }
};
work.display();




function inName(name) {
    name = name.trim().split(" ");
    console.log(name);
    name[1] = name[1].toUpperCase();
    name[0] = name[0].slice(0, 1).toUpperCase() + name[0].slice(1).toLowerCase();
    return name[1] + " " + name[0];
}

function inter() {
    $("#main").append(internationalizeButton);
    $("#mapDiv").append(googleMap);
}
inter();
$(document).click(function(loc) {
  var x = loc.pageX;
    var y = loc.pageY;
    logClicks(x, y);
});
projects.display = function() {
    var i=0;
    for (i=0;i<projects.projects.length;i++) {

        $("#projects").append(HTMLprojectStart);
        
        var formattedTitle = HTMLprojectTitle.replace("%data%", projects.projects[i].title);
        $(".project-entry:last").append(formattedTitle);
        var formattedDates = HTMLprojectDates.replace("%data%", projects.projects[i].dates);
        $(".project-entry:last").append(formattedDates);
        var formattedDescription = HTMLprojectDescription.replace("%data%", projects.projects[i].description);
        $(".project-entry:last").append(formattedDescription);

        for (var j=0;j<projects.projects[i].images.length;j++) {
          var formattedImage = HTMLprojectImage.replace("%data%", projects.projects[i].images[j]);
          $(".project-entry:last").append(formattedImage);  
      }
    }
};
projects.display();

education.display = function() {
    var i=0;
    for (i=0;i<education.schools.length;i++) {

        $("#education").append(HTMLschoolStart);
        var formattedTitle = HTMLschoolName.replace("%data%", education.schools[i].name);
        
        var formattedLocation = HTMLschoolLocation.replace("%data%", education.schools[i].location);
        $(".education-entry:last").append(formattedLocation);
        var formattedDegree = HTMLschoolDegree.replace("%data%", education.schools[i].degree);
        var formattedTitleDegree=formattedTitle+formattedDegree;
        $(".education-entry:last").append(formattedTitleDegree);
        var formattedMajor = HTMLschoolMajor.replace("%data%", education.schools[i].majors);
        
        var formattedDates = HTMLschoolDates.replace("%data%", education.schools[i].dates);
        var formattedMajorDates=formattedMajor+formattedDates;
        $(".education-entry:last").append(formattedMajorDates);
        var formattedUrl = HTMLonlineURL.replace("%data%", education.schools[i].url);
        $(".education-entry:last").append(formattedUrl);
    
    }
    var j=0;
    $(".education-entry:last").append(HTMLonlineClasses);
    for (j=0;j<education.onlineCourses.length;j++) {
         
        var formattedonlineTitle = HTMLonlineTitle.replace("%data%", education.onlineCourses[j].title);
        $(".education-entry:last").append(formattedonlineTitle);
        var formattedonlineSchool = HTMLonlineSchool.replace("%data%", education.onlineCourses[j].school);
        $(".education-entry:last").append(formattedonlineSchool);
        var formattedonlineDates = HTMLonlineDates.replace("%data%", education.onlineCourses[j].dates);
        $(".education-entry:last").append(formattedonlineDates);
        var formattedonlineUrl = HTMLonlineURL.replace("%data%", education.onlineCourses[j].url);
        $(".education-entry:last").append(formattedonlineUrl);
    
    }

};
education.display();



bio.display = function() {

    var formattedName = HTMLheaderName.replace("%data%", bio.name);
    var formattedRole = HTMLheaderRole.replace("%data%", bio.role);
    var formattedBiopic = HTMLbioPic.replace("%data%", bio.biopic);
    var formattedWelcomeMsg = HTMLwelcomeMsg.replace("%data%", bio.welcomeMessage);
    $("#header").prepend(formattedBiopic);
    $("#header").prepend(formattedRole);
    $("#header").prepend(formattedName);
    $("#header").append(formattedWelcomeMsg);


    var formattedContactInfo = [];
    formattedContactInfo = HTMLmobile.replace("%data%", bio.contacts.mobile);
    $(".flex-box").append(formattedContactInfo);
    formattedContactInfo = HTMLemail.replace("%data%", bio.contacts.email);
    $(".flex-box").append(formattedContactInfo);
    formattedContactInfo = HTMLgithub.replace("%data%", bio.contacts.github);
    $(".flex-box").append(formattedContactInfo);
    formattedContactInfo = HTMLlocation.replace("%data%", bio.contacts.location);
    $(".flex-box").append(formattedContactInfo);

    if (bio.skills.length > 0) {
        $("#header").append(HTMLskillsStart);
        for (var i=0;i<bio.skills.length;i++) {
            if (bio.skills.hasOwnProperty(i)) {
                var formattedSkill = HTMLskills.replace("%data%", bio.skills[i]);
                $("#skills").append(formattedSkill);
            }
        }
    }


};
bio.display();
