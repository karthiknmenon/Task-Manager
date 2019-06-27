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
// to check if dataSet is empty 

// new task form
$(document).ready(function () {
    var dataSet = JSON.parse(localStorage.getItem("dataSet")) || [];
    $(document).on('submit', '.new-form', function () {
        var tDDate = new Date();
        var tName = $('.new-form').find('input[name="taskName"]').val();
        var tDesc = $('.new-form').find('input[name="taskDesc"]').val();
        var tTags = $('.new-form').find('input[name="taskTags"]').val();
        var tDDate = $('.new-form').find('input[name="taskDDate"]').val();
        var tADate = $('.new-form').find('input[name="taskADate"]').val();
        var tColor = $('.new-form').find('input[name="taskColor"]').val();
        var itemSet = {
            'Id': Math.floor(Math.random() * 999),
            'TaskName': tName,
            'TaskDec': tDesc,
            'TaskTags': tTags,
            'DueDate': tDDate,
            'AssignDate': tADate,
            'TaskColor': tColor,
            'isCompleted': false,
            'isImportant': false,
            'isArchived': false
        };
        dataSet.push(itemSet);
        localStorage.setItem('dataSet', JSON.stringify(dataSet));
        createTask(tName, tDesc, tTags, tDDate, tADate, tColor);
        goback();
        return false;
    });
});
// create new task
function createTask(tName, tDesc, tTags, tDDate, tADate, tColor) {
    var card_element = '<div class="result-container"> <div class="title-item"> <div class="task-color" style="background-color:' + tColor + '"></div> <h3>' + tName + '</h3> <p>' + tDesc + '</p> </div> <div class="date-item"> <p>Due Date:' + tDDate + '</p> </div> <div class="icons-item"> <img id="completed" class="sIcon" src="/Task Manager/images/outline-done-24px.svg"> <img id="priority" class="sIcon" src="/Task Manager/images/outline-star_border-24px (1).svg"> <img id="archive" class="sIcon" src="/Task Manager/images/outline-archive-24px.svg"> </div> </div>'
    $("#search-re").append(card_element);
}
// to load tasks on refrest
$(document).ready(function () {
    var retrievedObject = localStorage.getItem('dataSet');
    var x = JSON.parse(retrievedObject);
    var i=0;
    for(i=0;i<x.length;i++)
    {
        var card_element = '<div class="result-container"> <div class="title-item"> <div class="task-color" style="background-color:' +x[i].TaskColor+ '"></div> <h3>' +x[i].TaskName+ '</h3> <p>' +x[i].TaskDec+'</p> </div> <div class="date-item"> <p>Due Date:' +x[i].DueDate+'</p> </div> <div class="icons-item"> <img id="completed" class="sIcon" src="/Task Manager/images/outline-done-24px.svg"> <img id="priority" class="sIcon" src="/Task Manager/images/outline-star_border-24px (1).svg"> <img id="archive" class="sIcon" src="/Task Manager/images/outline-archive-24px.svg"> </div> </div>'
        $("#search-re").append(card_element);

    }

})
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
    setTimeout(function () {
        x.className = x.className.replace("show", "");
    }, 3000);
}


// $("button.asda").click(function(){
//     var id_of_the_task = $('asdsada').att("id");
//     DataSet[id_of_the_task].isImp ? DataSet[id_of_the_task].isImp ==false :   DataSet[id_of_the_task].isImp ==true


// });
