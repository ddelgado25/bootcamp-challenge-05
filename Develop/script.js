// Wrap all code that interacts with the DOM in a call to jQuery to ensure that
// the code isn't run until the browser has finished rendering all the elements
// in the html.



$(document).ready ($(function(){
  
  $(".saveBtn").click(function(){
    console.log("click");
    var hour = $(this).parent().attr("id");
    var hourlyEvents = $(this).siblings(".description").val();
    localStorage.setItem(hour,hourlyEvents);
    console.log(hour);
    console.log(hourlyEvents);
  })

  var presentHour = dayjs().hour();
  console.log(presentHour);

  $(".time-block").each(function(){
    if (presentHour === dayjs().hour()){
      $(this).addClass("present");
      $(this).removeClass("past");
      $(this).removeClass("future");
    
    }
    if (presentHour < dayjs().hour()){
      $(this).addClass("past");
      $(this).removeClass("present");
      $(this).removeClass("future");
    
    }
    if (presentHour > dayjs().hour()){
      $(this).addClass("future");
      $(this).removeClass("past");
      $(this).removeClass("present");

    }

  })

  // TODO: Add code to apply the past, present, or future class to each time
  // block by comparing the id to the current hour. HINTS: How can the id
  // attribute of each time-block be used to conditionally add or remove the
  // past, present, and future classes? How can Day.js be used to get the
  // current hour in 24-hour time?
  //
  // TODO: Add code to get any user input that was saved in localStorage and set
  // the values of the corresponding textarea elements. HINT: How can the id
  // attribute of each time-block be used to do this?
  //
  var today = dayjs();
  $('#currentDay').text(today.format('dddd, MMMM D'));
}));
