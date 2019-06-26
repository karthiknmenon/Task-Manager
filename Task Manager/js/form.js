// new task form
$(document).ready(function() {
    $(document).on('submit', '.new-form', function() {
        var tDDate = new Date();
        var tName = $('.new-form').find('input[name="taskName"]').val();
        var tDesc = $('.new-form').find('input[name="taskDesc"]').val();
        var tTags = $('.new-form').find('input[name="taskTags"]').val();
        var tDDate = $('.new-form').find('input[name="taskDDate"]').val();
        var tADate = $('.new-form').find('input[name="taskADate"]').val();
        var tColor = $('.new-form').find('input[name="taskColor"]').val();
        createTask(tName,tDesc,tTags,tDDate,tADate,tColor);
        return false;
   
    });
});
// create new task
function createTask(tName,tDesc,tTags,tDDate,tADate,tColor){
    var card_element = '<div class="result-area"> <li> <h3>'+tName+'</h3> <p id="disc">'+tDesc+'</p> <p id="date">'+tDDate+'</p> <img id="completed" class="sIcon" onclick="color(this)" ondbclick="black(this)" src="/Task Manager/images/outline-done-24px.svg"> <img id="priority" class="sIcon" onclick="color(this)" ondbclick="black(this)" src="/Task Manager/images/outline-star_border-24px (1).svg"> <img id="archive" class="sIcon" onclick="color(this)" ondbclick="black(this)" src="/Task Manager/images/outline-archive-24px.svg"> </li></div><br>'
    $("#search-re").append(card_element);
}
//search functiom
function search() {
    var input, filter, ul, li, a, i, txtValue;
    input = document.getElementById("tSearch");
    filter = input.value.toUpperCase();
    ul = document.getElementById("search-re");
    li = ul.getElementsByTagName("li");
    for (i = 0; i < li.length; i++) {
        a = li[i].getElementsByTagName("h3")[0];
        txtValue = a.textContent || a.innerText;
        if (txtValue.toUpperCase().indexOf(filter) > -1) {
            li[i].style.display = "block";
        } else {
            li[i].style.display = "none";
        }
    }
}