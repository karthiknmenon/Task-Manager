function addTasks(){$(".task-body--view").css("display","none"),reveal()}function reveal(){$(".task-body--add").css("display","flex"),$(".new-form")[0].reset()}function goback(){$(".task-body--add").css("display","none"),$(".task-body--view").css("display","block")}function hide(){$("#search-icon").css("visibility","hidden")}function show(){$("#search-icon").css("visibility","visible")}function showMenu(e){y=document.getElementById(e.alt),y.style.display="inline-block"}function closeMenuMob(e){y=document.getElementById(e.alt),y.style.display="none"}function closeFilter(){$(".filter-icon").css("display","none"),$("#f-text").css("display","inline"),$(".complete-f").css("filter","grayscale(1)"),$(".priority-f").css("filter","grayscale(1)"),$(".archive-f").css("filter","grayscale(1)"),$("#filter").css("display","inline"),$("#filter-close").css("display","none"),$("#filter-close").css("transition","all 200ms ease-in"),$("#search-re").empty();var e=localStorage.getItem("dataSet"),s=JSON.parse(e),i=0;for(i=0;i<s.length;i++){var a=1,t=1,l=1;1==s[i].isImportant&&(a=0),1==s[i].isArchived&&(t=0),1==s[i].isCompleted&&(l=0);var c='<div class="result-container"> <img src="/dist/images/baseline-more_vert-24px.svg"  alt="'+s[i].TaskName+'" id="mob-menu"  onclick="showMenu(this)"> <div class="menu-s" id="'+s[i].TaskName+'"><img src="/dist/images/outline-close-24px.svg" id="close-mob"  alt="'+s[i].TaskName+'" onclick="closeMenuMob(this)" ><div class="icons-item-m"> <img id="completed-m" alt="'+s[i].TaskName+'" class="sIcon" onclick="colorCompleted(this)" style="filter:grayscale('+l+')" src="/dist/images/outline-done-24px.svg"> <img id="priority-m" class="sIcon" alt="'+s[i].TaskName+'" onclick="colorImportant(this)" style="filter:grayscale('+a+')" src="/dist/images/outline-star_border-24px (1).svg"> <img id="archive-m" class="sIcon" alt="'+s[i].TaskName+'" onclick="colorArchived(this)" style="filter:grayscale('+t+')" src="/dist/images/outline-archive-24px.svg"> </div></div><div class="title-item"> <div class="task-color" style="background-color:'+s[i].TaskColor+'"></div> <h3>'+s[i].TaskName+'</h3> <p id="t-desc">'+s[i].TaskDec+'</p> </div> <div class="date-item"> <p>Due Date:'+s[i].DueDate+'</p> </div> <div class="icons-item" > <img id="completed" alt="'+s[i].TaskName+'" class="sIcon" onclick="colorCompleted(this)" style="filter:grayscale('+l+')" src="/dist/images/outline-done-24px.svg"> <img id="priority" class="sIcon" alt="'+s[i].TaskName+'" onclick="colorImportant(this)" style="filter:grayscale('+a+')" src="/dist/images/outline-star_border-24px (1).svg"> <img id="archive" class="sIcon" alt="'+s[i].TaskName+'" onclick="colorArchived(this)" style="filter:grayscale('+t+')" src="/dist/images/outline-archive-24px.svg"> </div> <div id="sep-mob"></div> </div>';$("#search-re").append(c)}}function showFilter(){$(".filter-icon").css("display","inline"),$(".completed-f").css("filter","grayscale(1)"),$(".priority-f").css("filter","grayscale(1)"),$(".archive-f").css("filter","grayscale(1)"),$("#f-text").css("display","none"),$("#filter").css("display","none"),$("#filter-close").css("display","inline"),$("#filter-close").css("transition","all 200ms ease-in")}function filterDone(){$("#search-re").empty(),$(".completed-f").css("filter","grayscale(0)"),$(".priority-f").css("filter","grayscale(1)"),$(".archive-f").css("filter","grayscale(1)");var e=localStorage.getItem("dataSet"),s=JSON.parse(e),i=0,a=0;for(i=s.length-1;i>=0;i--){var t=1,l=1,c=1;if(1==s[i].isImportant&&(t=0),1==s[i].isArchived&&(l=0),1==s[i].isCompleted){c=0,a+=1;var o='<div class="result-container"> <img src="/dist/images/baseline-more_vert-24px.svg"  alt="'+s[i].TaskName+'" id="mob-menu"  onclick="showMenu(this)"> <div class="menu-s" id="'+s[i].TaskName+'"><img src="/dist/images/outline-close-24px.svg" id="close-mob"  alt="'+s[i].TaskName+'" onclick="closeMenuMob(this)" ><div class="icons-item-m"> <img id="completed-m" alt="'+s[i].TaskName+'" class="sIcon" onclick="colorCompleted(this)" style="filter:grayscale('+c+')" src="/dist/images/outline-done-24px.svg"> <img id="priority-m" class="sIcon" alt="'+s[i].TaskName+'" onclick="colorImportant(this)" style="filter:grayscale('+t+')" src="/dist/images/outline-star_border-24px (1).svg"> <img id="archive-m" class="sIcon" alt="'+s[i].TaskName+'" onclick="colorArchived(this)" style="filter:grayscale('+l+')" src="/dist/images/outline-archive-24px.svg"> </div></div><div class="title-item"> <div class="task-color" style="background-color:'+s[i].TaskColor+'"></div> <h3>'+s[i].TaskName+'</h3> <p id="t-desc">'+s[i].TaskDec+'</p> </div> <div class="date-item"> <p>Due Date:'+s[i].DueDate+'</p> </div> <div class="icons-item" > <img id="completed" alt="'+s[i].TaskName+'" class="sIcon" onclick="colorCompleted(this)" style="filter:grayscale('+c+')" src="/dist/images/outline-done-24px.svg"> <img id="priority" class="sIcon" alt="'+s[i].TaskName+'" onclick="colorImportant(this)" style="filter:grayscale('+t+')" src="/dist/images/outline-star_border-24px (1).svg"> <img id="archive" class="sIcon" alt="'+s[i].TaskName+'" onclick="colorArchived(this)" style="filter:grayscale('+l+')" src="/dist/images/outline-archive-24px.svg"> </div> <div id="sep-mob"></div> </div>';$("#search-re").append(o)}}0==a&&$("#search-re").append('<h5 style="text-align:center; font-weight:400;"> No Tasks Found ! </h5>')}function filterArchive(){$("#search-re").empty(),$(".archive-f").css("filter","grayscale(0)"),$(".priority-f").css("filter","grayscale(1)"),$(".completed-f").css("filter","grayscale(1)");var e=localStorage.getItem("dataSet"),s=JSON.parse(e),i=0,a=0;for(i=s.length-1;i>=0;i--){var t=1,l=1,c=1;if(1==s[i].isImportant&&(t=0),1==s[i].isCompleted&&(c=0),1==s[i].isArchived){a+=1,l=0;var o='<div class="result-container"> <img src="/dist/images/baseline-more_vert-24px.svg"  alt="'+s[i].TaskName+'" id="mob-menu"  onclick="showMenu(this)"> <div class="menu-s" id="'+s[i].TaskName+'"><img src=" /dist/images/outline-close-24px.svg" id="close-mob"  alt="'+s[i].TaskName+'" onclick="closeMenuMob(this)" ><div class="icons-item-m"> <img id="completed-m" alt="'+s[i].TaskName+'" class="sIcon" onclick="colorCompleted(this)" style="filter:grayscale('+c+')" src=" /dist/images/outline-done-24px.svg"> <img id="priority-m" class="sIcon" alt="'+s[i].TaskName+'" onclick="colorImportant(this)" style="filter:grayscale('+t+')" src=" /dist/images/outline-star_border-24px (1).svg"> <img id="archive-m" class="sIcon" alt="'+s[i].TaskName+'" onclick="colorArchived(this)" style="filter:grayscale('+l+')" src=" /dist/images/outline-archive-24px.svg"> </div></div><div class="title-item"> <div class="task-color" style="background-color:'+s[i].TaskColor+'"></div> <h3>'+s[i].TaskName+'</h3> <p id="t-desc">'+s[i].TaskDec+'</p> </div> <div class="date-item"> <p>Due Date:'+s[i].DueDate+'</p> </div> <div class="icons-item" > <img id="completed" alt="'+s[i].TaskName+'" class="sIcon" onclick="colorCompleted(this)" style="filter:grayscale('+c+')" src=" /dist/images/outline-done-24px.svg"> <img id="priority" class="sIcon" alt="'+s[i].TaskName+'" onclick="colorImportant(this)" style="filter:grayscale('+t+')" src=" /dist/images/outline-star_border-24px (1).svg"> <img id="archive" class="sIcon" alt="'+s[i].TaskName+'" onclick="colorArchived(this)" style="filter:grayscale('+l+')" src=" /dist/images/outline-archive-24px.svg"> </div> <div id="sep-mob"></div> </div>';$("#search-re").append(o)}}0==a&&$("#search-re").append('<h5 style="text-align:center; font-weight:400;"> No Tasks Found ! </h5>')}function filterImp(){$("#search-re").empty(),$(".priority-f").css("filter","grayscale(0)"),$(".completed-f").css("filter","grayscale(1)"),$(".archive-f").css("filter","grayscale(1)");var e=localStorage.getItem("dataSet"),s=JSON.parse(e),i=0,a=0;for(i=s.length-1;i>=0;i--){var t=1,l=1,c=1;if(1==s[i].isImportant){a+=1,t=0;var o='<div class="result-container"> <img src=" /dist/images/baseline-more_vert-24px.svg"  alt="'+s[i].TaskName+'" id="mob-menu"  onclick="showMenu(this)"> <div class="menu-s" id="'+s[i].TaskName+'"><img src=" /dist/images/outline-close-24px.svg" id="close-mob"  alt="'+s[i].TaskName+'" onclick="closeMenuMob(this)" ><div class="icons-item-m"> <img id="completed-m" alt="'+s[i].TaskName+'" class="sIcon" onclick="colorCompleted(this)" style="filter:grayscale('+c+')" src=" /dist/images/outline-done-24px.svg"> <img id="priority-m" class="sIcon" alt="'+s[i].TaskName+'" onclick="colorImportant(this)" style="filter:grayscale('+t+')" src=" /dist/images/outline-star_border-24px (1).svg"> <img id="archive-m" class="sIcon" alt="'+s[i].TaskName+'" onclick="colorArchived(this)" style="filter:grayscale('+l+')" src=" /dist/images/outline-archive-24px.svg"> </div></div><div class="title-item"> <div class="task-color" style="background-color:'+s[i].TaskColor+'"></div> <h3>'+s[i].TaskName+'</h3> <p id="t-desc">'+s[i].TaskDec+'</p> </div> <div class="date-item"> <p>Due Date:'+s[i].DueDate+'</p> </div> <div class="icons-item" > <img id="completed" alt="'+s[i].TaskName+'" class="sIcon" onclick="colorCompleted(this)" style="filter:grayscale('+c+')" src=" /dist/images/outline-done-24px.svg"> <img id="priority" class="sIcon" alt="'+s[i].TaskName+'" onclick="colorImportant(this)" style="filter:grayscale('+t+')" src=" /dist/images/outline-star_border-24px (1).svg"> <img id="archive" class="sIcon" alt="'+s[i].TaskName+'" onclick="colorArchived(this)" style="filter:grayscale('+l+')" src=" /dist/images/outline-archive-24px.svg"> </div> <div id="sep-mob"></div> </div>';$("#search-re").append(o)}1==s[i].isCompleted&&(c=0),1==s[i].isArchived&&(l=0)}0==a&&$("#search-re").append('<h5 style="text-align:center; font-weight:400;"> No Tasks Found ! </h5>')}function colorCompleted(e){var s=e.alt;console.log(s);for(var i=localStorage.getItem("dataSet"),a=JSON.parse(i),t=0;t<a.length;t++)if(a[t].TaskName==s)if(0==a[t].isCompleted){e.style.filter="grayscale(0)",a[t].isCompleted=!0,localStorage.setItem("x",JSON.stringify(a)),l=a;var l=localStorage.setItem("dataSet",JSON.stringify(l));location.reload(!0)}else a[t].isCompleted=!1,localStorage.setItem("x",JSON.stringify(a)),l=a,l=localStorage.setItem("dataSet",JSON.stringify(l)),e.style.filter="grayscale(1)",location.reload(!0)}function reloadPage(){location.reload(!0)}function colorArchived(e){var s=e.alt;console.log(s);for(var i=localStorage.getItem("dataSet"),a=JSON.parse(i),t=0;t<a.length;t++)if(a[t].TaskName==s)if(0==a[t].isArchived){e.style.filter="grayscale(0)",a[t].isArchived=!0,localStorage.setItem("x",JSON.stringify(a)),l=a;var l=localStorage.setItem("dataSet",JSON.stringify(l));location.reload(!0)}else a[t].isArchived=!1,localStorage.setItem("x",JSON.stringify(a)),l=a,l=localStorage.setItem("dataSet",JSON.stringify(l)),e.style.filter="grayscale(1)",location.reload(!0)}function colorImportant(e){var s=e.alt;console.log(s);for(var i=localStorage.getItem("dataSet"),a=JSON.parse(i),t=0;t<a.length;t++)if(a[t].TaskName==s)if(0==a[t].isImportant){e.style.filter="grayscale(0)",a[t].isImportant=!0,localStorage.setItem("x",JSON.stringify(a)),l=a;var l=localStorage.setItem("dataSet",JSON.stringify(l));location.reload(!0)}else a[t].isImportant=!1,localStorage.setItem("x",JSON.stringify(a)),l=a,l=localStorage.setItem("dataSet",JSON.stringify(l)),e.style.filter="grayscale(1)",location.reload(!0)}function createTask(e,s,i,a,t,l){var c='<div class="result-container"> <img src=" /dist/images/baseline-more_vert-24px.svg" id="mob-menu" onclick="showMenu(this)"> <div class="menu-s"></div> <div class="title-item"> <div class="task-color" style="background-color:'+l+'"></div> <h3>'+e+'</h3> <p id="t-desc">'+s+'</p> </div> <div class="date-item"> <p>Due Date:'+a+'</p> </div> <div class="icons-item"> <img id="completed" class="sIcon" alt="'+e+'" onclick="colorCompleted(this)" src=" /dist/images/outline-done-24px.svg" alt="complete"> <img id="priority" onclick="colorImportant(this)" alt="'+e+'" class="sIcon" src=" /dist/images/outline-star_border-24px (1).svg"> <img id="archive" class="sIcon" alt="'+e+'" onclick="colorArchived(this)" src=" /dist/images/outline-archive-24px.svg"> </div> </div>';$("#search-re").append(c)}function search(){var e,s,i,a,t;for(e=document.getElementById("tSearch").value.toUpperCase(),s=document.getElementById("search-re"),t=document.getElementsByClassName("result-container"),i=s.getElementsByClassName("title-item"),a=0;a<i.length;a++)i[a].getElementsByTagName("h3")[0].innerText.toUpperCase().indexOf(e)>-1?t[a].style.display="":t[a].style.display="none"}function toaster(){var e=document.getElementById("toaster");e.className="show",setTimeout(function(){e.className=e.className.replace("show","")},3e3)}$("#filter-close").css("display","none"),$(".filter-icon").css("display","none"),$(document).ready(function(){var e=JSON.parse(localStorage.getItem("dataSet"))||[];$(document).on("submit",".new-form",function(){var s=new Date,i=$(".new-form").find('input[name="taskName"]').val(),a=$(".new-form").find('input[name="taskDesc"]').val(),t=$(".new-form").find('input[name="taskTags"]').val(),l=(s=$(".new-form").find('input[name="taskDDate"]').val(),$(".new-form").find('input[name="taskADate"]').val()),c=$(".new-form").find('input[name="taskColor"]').val(),o={Id:Math.floor(999*Math.random()),TaskName:i,TaskDec:a,TaskTags:t,DueDate:s,AssignDate:l,TaskColor:c,isCompleted:!1,isImportant:!1,isArchived:!1};e.push(o),localStorage.setItem("dataSet",JSON.stringify(e)),createTask(i,a,t,s,l,c),goback()})}),$(document).ready(function(){if(0!=window.localStorage.length){var e=localStorage.getItem("dataSet"),s=JSON.parse(e),i=0;for(i=0;i<s.length;i++){var a=1,t=1,l=1;1==s[i].isImportant&&(a=0),1==s[i].isArchived&&(t=0),1==s[i].isCompleted&&(l=0);var c='<div class="result-container"> <img src=" /dist/images/baseline-more_vert-24px.svg"  alt="'+s[i].TaskName+'" id="mob-menu"  onclick="showMenu(this)"> <div class="menu-s" id="'+s[i].TaskName+'"><img src=" /dist/images/outline-close-24px.svg" id="close-mob"  alt="'+s[i].TaskName+'" onclick="closeMenuMob(this)" ><div class="icons-item-m"> <img id="completed-m" alt="'+s[i].TaskName+'" class="sIcon" onclick="colorCompleted(this)" style="filter:grayscale('+l+')" src=" /dist/images/outline-done-24px.svg"> <img id="priority-m" class="sIcon" alt="'+s[i].TaskName+'" onclick="colorImportant(this)" style="filter:grayscale('+a+')" src=" /dist/images/outline-star_border-24px (1).svg"> <img id="archive-m" class="sIcon" alt="'+s[i].TaskName+'" onclick="colorArchived(this)" style="filter:grayscale('+t+')" src=" /dist/images/outline-archive-24px.svg"> </div></div><div class="title-item"> <div class="task-color" style="background-color:'+s[i].TaskColor+'"></div> <h3>'+s[i].TaskName+'</h3> <p id="t-desc">'+s[i].TaskDec+'</p> </div> <div class="date-item"> <p>Due Date:'+s[i].DueDate+'</p> </div> <div class="icons-item" > <img id="completed" alt="'+s[i].TaskName+'" class="sIcon" onclick="colorCompleted(this)" style="filter:grayscale('+l+')" src=" /dist/images/outline-done-24px.svg"> <img id="priority" class="sIcon" alt="'+s[i].TaskName+'" onclick="colorImportant(this)" style="filter:grayscale('+a+')" src=" /dist/images/outline-star_border-24px (1).svg"> <img id="archive" class="sIcon" alt="'+s[i].TaskName+'" onclick="colorArchived(this)" style="filter:grayscale('+t+')" src=" /dist/images/outline-archive-24px.svg"> </div> <div id="sep-mob"></div> </div>';$("#search-re").append(c)}}}),$(document).ready(function(){if(0!=window.localStorage.length){var e=localStorage.getItem("dataSet"),s=JSON.parse(e),i=0;for(i=s.length-1;i>s.length-4;i--){var a=1,t=1,l=1;1==s[i].isImportant&&(a=0),1==s[i].isArchived&&(t=0),1==s[i].isCompleted&&(l=0);var c=' <div class="task-body__card--preview"> <div id="tag-color" style="background-color:'+s[i].TaskColor+'"></div> <h5>'+s[i].TaskName+'</h5> <div id="sep"></div> <p>'+s[i].TaskDec+'</p> <div class="date-c"> <img src=" /dist/images/outline-calendar_today-24px.svg" id="card-calendar"> <p id="due-date">'+s[i].DueDate+'</p> </div> <div class="icons"> <img src=" /dist/images/outline-done-24px.svg" alt="'+s[i].TaskName+'" id="completed" onclick="colorCompleted(this)" style="filter:grayscale('+l+')"> <img src=" /dist/images/outline-star_border-24px (1).svg" alt="'+s[i].TaskName+'" id="priority" onclick="colorImportant(this)" style="filter:grayscale('+a+')"> <img src=" /dist/images/outline-archive-24px.svg" alt="'+s[i].TaskName+'" id="archive" onclick="colorArchived(this)" style="filter:grayscale('+t+')"> </div> </div>';$(".featured-task--container").append(c)}}});