let currentPage = "home";
let currentClass = "";
let currentSubject = "";

function openClass(cls){

currentClass = cls;

let html = "<h2>📚 Class " + cls + "</h2>";
html += "<div class='class-grid'>";

for (let subject in resources[cls]) {
    html += `
    <div class="class-card"
    onclick="openSubject('${subject}')">
    ${subject}
    </div>`;
}

html += "</div>";

document.getElementById("content").innerHTML = html;

window.scrollTo({
top:500,
behavior:"smooth"
});

}

function openSubject(subject){

currentSubject = subject;

let html = "<h2>📖 " + subject + "</h2>";
html += "<div class='class-grid'>";

for (let chapter in resources[currentClass][subject]) {

html += `
<div class="class-card"
onclick="openChapter('${chapter}')">
${chapter}
</div>`;

}

html += "</div>";

document.getElementById("content").innerHTML = html;

}

function openChapter(chapter){

let item =
resources[currentClass][currentSubject][chapter];

let html = `
<h2>${chapter}</h2>

<div class="class-grid">

<a class="class-card"
href="${item.notes}"
target="_blank">
📄 Notes
</a>

<a class="class-card"
href="${item.ppt}"
target="_blank">
📊 PPT
</a>

<a class="class-card"
href="${item.shortnotes}"
target="_blank">
📝 Short Notes
</a>

<a class="class-card"
href="${item.worksheet}"
target="_blank">
📚 Worksheet
</a>

</div>
`;

document.getElementById("content").innerHTML = html;

}
function showNavigation(){
    document.getElementById("navigation").style.display = "block";
}

function hideNavigation(){
    document.getElementById("navigation").style.display = "none";
}

function goHome(){
    location.reload();
}

function goBack(){

    if(currentPage==="chapter"){
        openSubject(currentSubject);
        currentPage="subject";
    }

    else if(currentPage==="subject"){
        openClass(currentClass);
        currentPage="class";
    }

    else{
        goHome();
    }

}
