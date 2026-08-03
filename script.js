const data = {

"6":{

"Mathematics":[
"Knowing Our Numbers",
"Whole Numbers",
"Playing With Numbers"
],

"Science":[
"Food: Where Does It Come From?",
"Components of Food",
"Fibre to Fabric"
],

"English":[
"Honeysuckle",
"A Pact With The Sun"
],

"Hindi":[
"वसंत",
"बाल रामकथा"
]

},

"7":{

"Mathematics":["Integers","Fractions"],

"Science":["Nutrition in Plants","Nutrition in Animals"]

},

"8":{},

"9":{},

"10":{}

};

function openClass(cls){

let html="<h2>Class "+cls+"</h2>";

html+="<div class='class-grid'>";

for(let subject in data[cls]){

html+="<div class='class-card' onclick=\"openSubject('"+cls+"','"+subject+"')\">"+subject+"</div>";

}

html+="</div>";

document.getElementById("content").innerHTML=html;

}

function openSubject(cls,subject){

let html="<h2>"+subject+"</h2>";

html+="<div class='class-grid'>";

data[cls][subject].forEach(chapter=>{

html+="<div class='class-card' onclick=\"openChapter('"+chapter+"')\">"+chapter+"</div>";

});

html+="</div>";

document.getElementById("content").innerHTML=html;

}

function openChapter(chapter){

let html="<h2>"+chapter+"</h2>";

html+="<div class='class-grid'>";

html+="<a class='class-card' target='_blank' href='https://drive.google.com/'>📄 Notes</a>";

html+="<a class='class-card' target='_blank' href='https://drive.google.com/'>📊 PPT</a>";

html+="<a class='class-card' target='_blank' href='https://drive.google.com/'>📝 Short Notes</a>";

html+="<a class='class-card' target='_blank' href='https://drive.google.com/'>📚 Worksheet</a>";

html+="</div>";

document.getElementById("content").innerHTML=html;

}
