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
str="";
let grid=document.querySelector(".grid");

for(let i=0;i<100;i++){
    str+=`<div class="row">`;
    for(let j=0;j<26;j++){
        str+=`<div class='col' rid=${i} cid=${j} contenteditable="true"></div>`;
    }
    str+="</div>";
}

grid.innerHTML=str;
workSheetDB=[]
function initCurrentSheetDB()
{
let sheetDB=[]
for(i=0;i<100;i++)
{
    let row=[]
    for(j=0;j<26;j++)
    {
        let cell = {
            bold: false,
            italic: "normal",
            underline: "none",
            fontFamily: "Arial",
            fontSize: "16",
            halign: "left",
            value: "",
            formula:"",
            children:[]
        }
        row.push(cell)
    }
    sheetDB.push(row)
}
workSheetDB.push(sheetDB)
console.log(workSheetDB)
}
initCurrentSheetDB();
