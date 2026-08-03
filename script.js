function openClass(cls){

let html="";

html+="<h2>Class "+cls+"</h2>";

html+="<div class='class-grid'>";

html+="<div class='class-card'>Mathematics</div>";

html+="<div class='class-card'>Science</div>";

html+="<div class='class-card'>English</div>";

html+="<div class='class-card'>Hindi</div>";

html+="<div class='class-card'>Social Science</div>";

html+="<div class='class-card'>Sanskrit</div>";

html+="</div>";

document.getElementById("content").innerHTML=html;

window.scrollTo({
top:600,
behavior:"smooth"
});

}
