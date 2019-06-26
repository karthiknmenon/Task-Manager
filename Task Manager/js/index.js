// to add new tasks
function addTasks() {
    var x = document.getElementsByClassName('task-body--view');
    x[0].style.display = "none";
    reveal();
}
// to display new task form
function reveal() {
    var x = document.getElementsByClassName('task-body--add');
    x[0].style.display = "inline";
}
// to exit new task form
function goback() {
    var x = document.getElementsByClassName('task-body--add');
    var y = document.getElementsByClassName('task-body--view');
    x[0].style.display = "none";
    y[0].style.display = "block";
}
// to hide search icon
function hide() {
    var x = document.getElementById('search-icon');
    x.style.visibility = "hidden";

}
// to bring back search icon
function show() {
    var y = document.getElementById('search-icon');
    y.style.visibility = "visible";
  
}

function color(obj) {
    obj.style.filter = "grayscale(0)";
}

function black(obj) {
    obj.style.filter = "grayscale(1)";
}
