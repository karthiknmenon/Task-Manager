// to add new tasks
function addTasks() {
    var x = $('.task-body--view').css("display", "none");
    reveal();
}
// to display new task form
function reveal() {
    $('.task-body--add').css("display", "inline");
    $(".new-form")[0].reset();
}
// to exit new task form
function goback() {
    $('.task-body--add').css("display", "none");
    $('.task-body--view').css("display", "block");
}
// to hide search icon
function hide() {
    $('#search-icon').css("visibility", "hidden");
}
// to bring back search icon
function show() {
    $('#search-icon').css("visibility", "visible");
}

function color(obj) {
    obj.style.filter = "grayscale(0)";
}

function black(obj) {
    obj.style.filter = "grayscale(1)";
}
// new task form
$(document).ready(function () {
    $(document).on('submit', '.new-form', function () {
        var tDDate = new Date();
        var tName = $('.new-form').find('input[name="taskName"]').val();
        var tDesc = $('.new-form').find('input[name="taskDesc"]').val();
        var tTags = $('.new-form').find('input[name="taskTags"]').val();
        var tDDate = $('.new-form').find('input[name="taskDDate"]').val();
        var tADate = $('.new-form').find('input[name="taskADate"]').val();
        var tColor = $('.new-form').find('input[name="taskColor"]').val();
        createTask(tName, tDesc, tTags, tDDate, tADate, tColor);
        goback();
        return false;
    });
});
// create new task
function createTask(tName, tDesc, tTags, tDDate, tADate, tColor) {
    var card_element = '<div class="result-container"> <div class="title-item"> <div class="task-color" style="background-color:' + tColor + '"></div> <h3>' + tName + '</h3> <p>' + tDesc + '</p> </div> <div class="date-item"> <p>Due Date:' + tDDate + '</p> </div> <div class="icons-item"> <img id="completed" class="sIcon" onclick="color(this)" ondbclick="black(this)" src="/Task Manager/images/outline-done-24px.svg"> <img id="priority" class="sIcon" onclick="color(this)" ondbclick="black(this)" src="/Task Manager/images/outline-star_border-24px (1).svg"> <img id="archive" class="sIcon" onclick="color(this)" ondbclick="black(this)" src="/Task Manager/images/outline-archive-24px.svg"> </div> </div>'
    $("#search-re").append(card_element);
}
//search functiom
function search() {
    var input, filter, ul, li, a, i, txtValue, co;
    input = document.getElementById("tSearch");
    filter = input.value.toUpperCase();
    ul = document.getElementById("search-re");
    co = document.getElementsByClassName("result-container")
    li = ul.getElementsByClassName("title-item");
    for (i = 0; i < li.length; i++) {
        a = li[i].getElementsByTagName("h3")[0];
        txtValue = a.textContent || a.innerText;
        if (txtValue.toUpperCase().indexOf(filter) > -1) {
            co[i].style.display = "";
        } else {
            co[i].style.display = "none";
        }
    }
}
// toaster
function toaster() {
    var x = document.getElementById("toaster");
    x.className = "show";
    setTimeout(function(){ x.className = x.className.replace("show", ""); }, 3000);
  }