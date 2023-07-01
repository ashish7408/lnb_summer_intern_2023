//alert("loading");
function addNewWEField() {
    
let newNode=document.createElement('textarea');  
newNode.classList.add('form-control'); 
newNode.classList.add("weField"); 
newNode.classList.add("mt-2");   
newNode.setAttribute("rows",3); 
newNode.setAttribute("Placeholder","Enter here"); 

let weOb = document.getElementById("we");
let weAddButtonOb = document.getElementById("weAddbutton");

weOb.insertBefore(newNode, weAddButtonOb);  
}

 function addNewAQField(){
    let newNode=document.createElement('textarea');  
newNode.classList.add('form-control'); 
newNode.classList.add("eqField"); 
newNode.classList.add("mt-2");   
newNode.setAttribute("Placeholder","Enter here"); 

let aqOb = document.getElementById("aq");
let aqAddButtonOb = document.getElementById("aqAddbutton");

aqOb.insertBefore(newNode, aqAddButtonOb);  

 }

 function addNewSKField(){
    let newNode=document.createElement('textarea');  
newNode.classList.add('form-control'); 
newNode.classList.add("skField"); 
newNode.classList.add("mt-2");   
newNode.setAttribute("Placeholder","Enter here"); 

let skOb = document.getElementById("sk");
let skAddButtonOb = document.getElementById("skAddbutton");
 
skOb.insertBefore(newNode, skAddButtonOb);
 }

 function addNewPRField(){
    let newNode=document.createElement('textarea');  
newNode.classList.add('form-control'); 
newNode.classList.add("prField"); 
newNode.classList.add("mt-2");   
newNode.setAttribute("Placeholder","Enter here"); 

let prOb = document.getElementById("pr");
let prAddButtonOb = document.getElementById("pr Addbutton");
 
prOb.insertBefore(newNode, prAddButtonOb);
 }

 //generating cv
 function generateCV(){
    let nameField=document.getElementById("nameField").value;
    let nameT1=document.getElementById("nameT1")

    nameT1.innerHTML = nameField;

    //document
    document.getElementById('nameT2').innerHTML=nameField

    //gender
    var ele = document.getElementsByName('gender');
 
            for (i = 0; i < ele.length; i++) {
                if (ele[i].checked)
                    document.getElementById("genderT").innerHTML
                        = "Gender: " + ele[i].value;
            }

    //contact
    document.getElementById('contactT').innerHTML=document.getElementById("contactField").value;

    //address
    document.getElementById('addressT').innerHTML=document.getElementById("AddressField").value;
   //links
   document.getElementById('linkedT').innerHTML=document.getElementById("linkedField").value;
   document.getElementById('gitT').innerHTML=document.getElementById("gitField").value;
   document.getElementById('fbT').innerHTML=document.getElementById("fbField").value;
   document.getElementById('instaT').innerHTML=document.getElementById("instaField").value;
   //objective
   document.getElementById('objectiveT').innerHTML=document.getElementById("objectiveField").value;

  //we 
   let wes=document.getElementsByClassName('weField')

   let str=''

   for(let e of wes)
   {
    str=str+`<li> ${e.value} </li>`;
   }
   document.getElementById("weT").innerHTML = str;

   //aq
   let aqs=document.getElementsByClassName('eqField')

   let str1=''

   for(let e of aqs)
   {
    str1=str1+`<li> ${e.value} </li>`;
   }
   document.getElementById("aqT").innerHTML = str1;

   //skill
   let sks=document.getElementsByClassName('skField')

   let str2=''

   for(let e of sks)
   {
    str2=str2+`<li> ${e.value} </li>`;
   }
   document.getElementById("skT").innerHTML = str2;

   //projects
   let prs=document.getElementsByClassName('prField')

   let str3=''

   for(let e of prs)
   {
    str3=str3+`<li> ${e.value} </li>`;
   }
   document.getElementById("prT").innerHTML = str3;



   document.getElementById('resume-form').style.display='none'
   document.getElementById('cv-template').style.display='block'
 }

 //print cv
 function printCV(){
    window.print();
 }