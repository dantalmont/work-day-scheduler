//runs when document loads/refreshes
$(document).ready(function(){

    //global variables
    var timeSlot = [];
    var hourTask = {};
    var m = moment();
    var newDay = moment().hour(0);
    var currentTime = m.hour();

    // adding clock to currentDay id
    function clock() {
    var currentDay = moment().format('MMMM Do YYYY, h:mm:ss a');
    $('#currentDay').html(currentDay);
    };
    
    //converts milliseconds to seconds
    setInterval(clock, 1000);

    //loops to create sections and save buttons for each hour from 8am to 5pm
    for(var hour = 8; hour < 18; hour++){
        timeSlot.push(moment({hour}).format('h  a'));
        $(".container").append(`<div class="row time-block" data-time="${hour}">
            <div class="col-sm-2">
                <p>${moment({hour}).format('h a')}</p>
            </div>

            <div class= "col-sm-10">
                <div class="input-group">
                    <textarea class="form-control text-area" id="text-${hour}"></textarea>
                    <div class="input-group-append">
                        <button class="saveBtn" id="${hour}">
                            <i class="fas fa-save fa-3x"></i>
                        </button>
                    </div>
                </div>
            </div>    
        </div>`);
    }

    //on click save button function sets value for that time to local storage
    $(".saveBtn").on("click", function () {
        var time = $(this).attr("id");
        var tempName = "#text-" + time;
        var text = $(tempName).val();
    

        localStorage.setItem(time,text);
        console.log(time,text);
    });

    //gets value from local storage and displays it on associated time slot
    $("#text-8").val(localStorage.getItem("8"));
    $("#text-9").val(localStorage.getItem("9"));
    $("#text-10").val(localStorage.getItem("10"));
    $("#text-11").val(localStorage.getItem("11"));
    $("#text-12").val(localStorage.getItem("12"));
    $("#text-13").val(localStorage.getItem("13"));
    $("#text-14").val(localStorage.getItem("14"));
    $("#text-15").val(localStorage.getItem("15"));
    $("#text-16").val(localStorage.getItem("16"));
    $("#text-17").val(localStorage.getItem("17"));

    //changes colors of time slots based on past/present/future
    $.each($(".time-block"), function(){
        var state = $(this).attr("data-time");
        if(state == currentTime){
            $(this).find("textarea").addClass("present"); 
        } else if(state < currentTime){
            $(this).find("textarea").addClass("past");
        } else {
            $(this).find("textarea").addClass("future");
        }
    });


});

   


    
  