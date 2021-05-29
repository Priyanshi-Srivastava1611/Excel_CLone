let leftCol=document.querySelector(".left-col");
let topRow=document.querySelector(".top-row");
let str="";
for(let i=0;i<26;i++){
    str+=`<div class='col'>${String.fromCharCode(97+i)}</div>`;
}
topRow.innerHTML=str;
str="";
for(let i=0;i<100;i++){
    str+=`<div class='left-col_box'>${i+1}</div>`;
}
leftCol.innerHTML=str;