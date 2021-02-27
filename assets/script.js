
var timeDisplay = document.querySelector("#currentDay");

var timeNow = moment();



// will display time on header
timeDisplay.textContent = timeNow.format("dddd, MMMM Do");


// time blocks

var hour9 = 09;
var hour10 = 10;
var hour11 = 11;
var hour12 = 12;
var hour1 = 13;
var hour2 = 14;
var hour3 = 15;
var hour4 = 16;
var hour5 = 17;
var hour6 = 18;

var hrNow = moment().format("HH");

if (hrNow < hour9) {
    $("#9am").addClass("future");

} else if (hrNow > hour9) {
    $("#9am").addClass("past");

} else if (hrNow == hour9) {
    $("#9am").addClass("present");

}


if (hrNow < hour10) {
    $("#10am").addClass("future");

} else if (hrNow > hour10) {
    $("#10am").addClass("past");

} else if (hrNow == hour10) {
    $("#10am").addClass("present");

}

if (hrNow < hour11) {
    $("#11am").addClass("future");

} else if (hrNow > hour11) {
    $("#11am").addClass("past");

} else if (hrNow == hour11) {
    $("#11am").addClass("present");

}

if (hrNow < hour12) {
    $("#12pm").addClass("future");

} else if (hrNow > hour12) {
    $("#12pm").addClass("past");

} else if (hrNow == hour12) {
    $("#12pm").addClass("present");

}



if (hrNow < hour1) {
    $("#1pm").addClass("future");

} else if (hrNow > hour1) {
    $("#1pm").addClass("past");

} else if (hrNow == hour1) {
    $("#1pm").addClass("present");

}

if (hrNow < hour2) {
    $("#2pm").addClass("future");

} else if (hrNow > hour2) {
    $("#2pm").addClass("past");

} else if (hrNow == hour2) {
    $("#2pm").addClass("present");

}

if (hrNow < hour3) {
    $("#3pm").addClass("future");

} else if (hrNow > hour3) {
    $("#3pm").addClass("past");

} else if (hrNow == hour3) {
    $("#3pm").addClass("present");

}
if (hrNow < hour4) {
    $("#4pm").addClass("future");

} else if (hrNow > hour4) {
    $("#4pm").addClass("past");

} else if (hrNow == hour4) {
    $("#4pm").addClass("present");

}

if (hrNow < hour5) {
    $("#5pm").addClass("future");

} else if (hrNow > hour5) {
    $("#5pm").addClass("past");

} else if (hrNow == hour5) {
    $("#5pm").addClass("present");

}



$(".save-btn ").on("click", function (event) {
    event.preventDefault();

    //saving infromation into array
    var value = $(this).siblings(".form-description").val();
    var time = $(this).parent().attr("id");

    localStorage.setItem(time, value);
})

//saving to local storage

$("#9am .form-description").val(localStorage.getItem("9am"));
$("#10am .form-description").val(localStorage.getItem("10am"));
$("#11am .form-description").val(localStorage.getItem("11am"));
$("#12pm .form-description").val(localStorage.getItem("12pm"));
$("#1pm .form-description").val(localStorage.getItem("1pm"));
$("#2pm .form-description").val(localStorage.getItem("2pm"));
$("#3pm .form-description").val(localStorage.getItem("3pm"));
$("#4pm .form-description").val(localStorage.getItem("4pm"));
$("#5pm .form-description").val(localStorage.getItem("5pm"));
$("#6pm .form-description").val(localStorage.getItem("6pm"));


//adding check/save button
var Icon = $("<i class='fas fa-check'></i>");
var save = $("button").addClass("save-btn");


save.append(Icon);


//for fun when you click the check button 
// var clickCheck = $('button').click(function () {
//     $('#9am').fadeToggle(1000);
// })

// var clickCheck = $('button').click(function () {
//     $('#10am').fadeToggle(1000);
// })


// var clickCheck = false;
// function click(){
//     clickCheck = setInterval(function(){
//         $('button').fadeToggle();
//     },1000);
// }