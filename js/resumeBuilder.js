
var bio = {
    "name": "Yodit Filfilu",
    "role": "Data Analyst",
    "contacts": {
        "mobile": "770-361-7777",
        "email": "yl77@bellsouth.net",
        "github": "glJ777",
        "twitter": "@glJ777",
        "location": "Atlanta",
    },

     "welcomeMessage": " Welcome to the super Analyst's resume!",
     "skills": ["Result-Oriented", "Determination", "Adaptability", "Reliability"],
     "bioPic": "images/fry.jpg"
};


var education = {
    "schools" : [
    {
        "name" : "Access Institute of Technology",
        "location" : "Atlanta, GA",
        "degree" : "MS Office Certificate",
        "majors" : "MS Office applications",
        "dates" : "2005 – 2006",
        "url" : "https://www.dkit.ie/access-office"
    },
    {
        "name" : "University of Western Ontario",
        "location" : "London, Ontario",
        "degree" : "Bachelor of Science",
        "majors" : "Biology",
        "dates" : "2004 – 2006",
        "url" : "https://www.uwo.ca"
    }
    ],
    "onlineCourses" : [
    {
        "title" : "Big Data Boot Camp",
        "school" : "AT&T University",
        "dates" : "2016",
        "url" : "https://www.wgu.edu/landing/att"
    },
    {
        "title" : "SQL Server Database Fundamentals",
        "school" : "Skill Port",
        "dates" : "2016",
        "url" : "http://www.skillsoft.com/"
    },
    ]
};


var work = {
    "jobs" : [
    {
        "employer" : "AT&T",
        "title" : "Reporting Analyst",
        "location" : "Atlanta, GA",
        "dates" : "2006 - Present",
        "description" : "Data analysis and Reporting."
    },
    {
        "employer" : "KMC Telecom",
        "title" : "Data Analyst",
        "location" : "Lawrenceville, GA",
        "dates" : "2000 - 2005",
        "description" : "Data and Finance analysis."
    },
    {
        "employer" : "Professor in UWO",
        "title" : "Science Research Analyst",
        "location" : "London, Ontario",
        "dates" : "1996",
        "description" : "Make research collecting and analyzing scientific information."
    }
    ]
};

var projects =  {
    "projects" : [
    {
        "title" : "Effect of Deep Learning on Brain.",
        "dates" : "2016",
        "description" : "Analysis of human brain on deep Learning in relation to multi-tasking projects.",
        "images" : ["images/EDL.jpg", "images/BEV-project.jpg"]
    },
    ]
};

bio.display = function(){

    var formattedName = HTMLheaderName.replace("%data%", bio.name);
    var formattedRole = HTMLheaderRole.replace("%data%", bio.role);
    var formattedBioPic = HTMLbioPic.replace("%data%", bio.bioPic);
    var formattedMobile = HTMLmobile.replace("%data%", bio.contacts.mobile);
    var formattedEmail = HTMLemail.replace("%data%", bio.contacts.email);
    var formattedGithub = HTMLgithub.replace("%data%", bio.contacts.github);
    var formattedTwitter = HTMLtwitter.replace("%data%", bio.contacts.twitter);
    var formattedLocation = HTMLlocation.replace("%data%", bio.contacts.location);
    var formattedwelcomeMsg = HTMLwelcomeMsg.replace("%data%", bio.welcomeMessage);

    $("#header").prepend(formattedRole);
    $("#header").prepend(formattedName);
    $("#header").append(formattedBioPic);

    $("#topContacts, #footerContacts").append(formattedMobile);
    $("#topContacts, #footerContacts").append(formattedEmail);
    $("#topContacts, #footerContacts").append(formattedGithub);
    $("#topContacts, #footerContacts").append(formattedTwitter);
    $("#topContacts, #footerContacts").append(formattedLocation);
    //$("#topContacts").append(formattedMobile);
    //$("#topContacts").append(formattedEmail);
    //$("#topContacts").append(formattedGithub);
    //$("#topContacts").append(formattedTwitter);
    //$("#topContacts").append(formattedLocation);
    $("#header").append(formattedwelcomeMsg);

    (function() {
        if (bio.skills) {
            $("#header").append(HTMLskillsStart);
            bio.skills.forEach(function(e) {
                var skill = HTMLskills.replace("%data%", e);
                $("#header").append(skill);
            });
        }
    })();


};

bio.display();


education.display = function() {

    education.schools.forEach(function(school) {
        $("#education").append(HTMLschoolStart);
        //var formattedName = HTMLschoolName.replace("%data%", school.name);
        var formattedName = HTMLschoolName.replace("%data%", school.name).replace('#', school.url);
        var formattedDegree = HTMLschoolDegree.replace("%data%", school.degree);
        var formattedNameDegree = formattedName + formattedDegree;
        var formattedLocation = HTMLschoolLocation.replace("%data%", school.location);
        var formattedDates = HTMLschoolDates.replace("%data%", school.dates);
        var formattedMajor = HTMLschoolMajor.replace("%data%", school.majors);

        $(".education-entry:last").append(formattedNameDegree);
        $(".education-entry:last").append(formattedLocation);
        $(".education-entry:last").append(formattedDates);
        $(".education-entry:last").append(formattedMajor);

    });

    education.onlineCourses.forEach(function(onlineCourse) {
        $(".education-entry:last").append(HTMLonlineClasses);
        var formattedTitle = HTMLonlineTitle.replace("%data%", onlineCourse.title);
        var formattedSchool = HTMLonlineSchool.replace("%data%", onlineCourse.school);
        var formattedTitleSchool = formattedTitle + formattedSchool;
        var formattedDates = HTMLonlineDates.replace("%data%", onlineCourse.dates);
        var formattedUrl = HTMLonlineURL.replace("%data%", onlineCourse.url).replace('#', onlineCourse.url);
        $(".education-entry:last").append(formattedTitleSchool);
        $(".education-entry:last").append(formattedDates);
        $(".education-entry:last").append(formattedUrl);
    });

};

education.display();


work.display = function() {

    work.jobs.forEach(function(job) {
        $("#workExperience").append(HTMLworkStart);
        var formattedEmployer = HTMLworkEmployer.replace("%data%", job.employer);
        var formattedTitle = HTMLworkTitle.replace("%data%", job.title);
        var formattedEmployerTitle = formattedEmployer + formattedTitle;
        $(".work-entry:last").append(formattedEmployerTitle);
        var formattedLocation = HTMLworkLocation.replace("%data%", job.location);
        $(".work-entry:last").append(formattedLocation);
        var formattedDates = HTMLworkDates.replace("%data%", job.dates);
        $(".work-entry:last").append(formattedDates);
        var formattedDescription = HTMLworkDescription.replace("%data%", job.description);
        $(".work-entry:last").append(formattedDescription);
    });
};

work.display();

projects.display = function() {

    projects.projects.forEach(function(project) {
        $("#projects").append(HTMLprojectStart);
        var formattedTitle = HTMLprojectTitle.replace("%data%", project.title);
        $(".project-entry:last").append(formattedTitle);
        var formattedDates = HTMLprojectDates.replace("%data%", project.dates);
        $(".project-entry:last").append(formattedDates);
        var formattedDescription = HTMLprojectDescription.replace("%data%", project.description);
        $(".project-entry:last").append(formattedDescription);

        if (project.images) {
            project.images.forEach(function(image) {
                var formattedImage = HTMLprojectImage.replace("%data%", image);
                $(".project-entry:last").append(formattedImage);
            });
        }
    });

};

projects.display();

$("#mapDiv").append(googleMap);



