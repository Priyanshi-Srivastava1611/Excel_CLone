let addBtnContainer=document.querySelector(".add_sheet_container")
let sheetlist=document.querySelector(".sheet_list")
let firstsheet=document.querySelector(".sheet")
let Allcells=document.querySelectorAll(".grid .col")
let addressBar=document.querySelector(".address_box")
let textalign=document.querySelectorAll(".allignment_container")
let leftBtn=document.querySelector(".left");
let rightBtn=document.querySelector(".right");
let centerBtn=document.querySelector(".center");
let boldElement=document.querySelector(".bold");
let italicElement=document.querySelector(".italic");
let underlineElement=document.querySelector(".underline");
let fontBtn=document.querySelector(".font-size")
let fontFamily=document.querySelector(".font_family")
let sheetDB=workSheetDB[0]
firstsheet.addEventListener("click",handlesheet)
addBtnContainer.addEventListener("click",changesheet);
//crete sheet
function changesheet(e)
{
    let sheetArr=document.querySelectorAll(".sheet")
    let lastSheetEle=sheetArr[sheetArr.length-1]
    let idx=lastSheetEle.getAttribute("sheetIdx")
    idx=Number(idx)
    let newsheet=document.createElement("div")
    newsheet.setAttribute("class","sheet")
    newsheet.setAttribute("sheetIdx",idx+1)
    newsheet.innerText=`Sheet ${idx+2}`
    sheetlist.appendChild(newsheet)
    sheetArr.forEach(function(sheet){
        sheet.classList.remove("active_sheet");
    })
    sheetArr=document.querySelectorAll(".sheet");
    sheetArr[sheetArr.length-1].classList.add("active-sheet");
    initCurrentSheetDB();
    sheetDB=workSheetDB[idx];
    newsheet.addEventListener("click",handlesheet)
    
}
//make sheet active
function handlesheet(e)
{
    let mysheet= e.currenttarget
    let sheetArr=document.querySelectorAll(".sheet")
    sheetArr.forEach(function (sheet)
    {
        sheet.classList.remove("active_sheet")
    })
    if(!mysheet.classList[1])
    {
    mysheet.classList.add("active_sheet")
    }
    let sheetIdx = mySheet.getAttribute("sheetIdx");
    sheetDB = workSheetDB[sheetIdx - 1];
}
//Its address display on address bar
for(let i=0;i<Allcells.length;i++)
{
    Allcells[i].addEventListener("click",function handlecell()
    {
        
        let rid=Number(Allcells[i].getAttribute("rid"))
        let cid=Number(Allcells[i].getAttribute("cid"))
        let coladdress=String.fromCharCode(cid+97)
        let rowaddress=rid+1
        let address=coladdress+rowaddress
        addressBar.value=address
        Allcells[i].style.border = "2px solid green"
        cellObject=sheetDB[rid][cid]
        if(cellObject.bold==true)
        {
            boldElement.classList.add("active-btn")
        }
        else
        {
            boldElement.classList.remove("active-btn")
        }
        if(cellObject.italic==true)
        {
            italicElement.classList.add("active-btn")
        }
        else
        {
            italicElement.classList.remove("active-btn")
        }
        if(cellObject.underline==true)
        {
            underlineElement.classList.add("active-btn")
        }
        else
        {
            underlineElement.classList.remove("active-btn")
        }
    
    })
}
//making left alligned
leftBtn.addEventListener("click", function(){
    let address=addressBar.value;
    let {rid,cid}=getRidCidFronAddress(address);
    let cell=document.querySelector(`.col[rid="${rid}"][cid="${cid}"]`);
    cell.style.textAlign="left";
    for(let i=0;i<allAlignBtns.length;i++){
        allAlignBtns[i].classList.remove("active-btn");
    }
    leftBtn.classList.add("active-btn");
    let cellObject=sheetDB[rid][cid];
    cellObject.halign="left";
})
//making centre alligned
centerBtn.addEventListener("click", function(){
    let address=addressBar.value;
    let {rid,cid}=getRidCidFronAddress(address);
    let cell=document.querySelector(`.col[rid="${rid}"][cid="${cid}"]`);
    cell.style.textAlign="center";
    /*for(let i=0;i<allAlignBtns.length;i++){
        allAlignBtns[i].classList.remove("active-btn");
    }
    centerBtn.classList.add("active-btn");
    let cellObject=sheetDB[rid][cid];
    cellObject.halign="center";*/
})
//making right alligned
rightBtn.addEventListener("click", function(){
    let address=addressBar.value;
    let {rid,cid}=getRidCidFronAddress(address);
    let cell=document.querySelector(`.col[rid="${rid}"][cid="${cid}"]`);
    cell.style.textAlign="right";
    /*for(let i=0;i<allAlignBtns.length;i++){
        allAlignBtns[i].classList.remove("active-btn");
    }
    rightBtn.classList.add("active-btn");
    let cellObject=sheetDB[rid][cid];
    cellObject.halign="right";*/
})
//making bold text
boldElement.addEventListener("click", function(){
    let isActive=boldElement.classList.contains("active-btn")
    let address=addressBar.value;
    let {rid,cid}=getRidCidFronAddress(address);
    let cell=document.querySelector(`.col[rid="${rid}"][cid="${cid}"]`);
    if(isActive==false)
        {
            cell.style.fontWeight="bold";  
            boldElement.classList.add("active-btn")

        }
    else
        {
            cell.style.fontWeight="normal";  
            boldElement.classList.remove("active-btn")
        }
})
//making italic text
italicElement.addEventListener("click", function(){
    let isActive=italicElement.classList.contains("active-btn")
    let address=addressBar.value;
    let {rid,cid}=getRidCidFronAddress(address);
    let cell=document.querySelector(`.col[rid="${rid}"][cid="${cid}"]`);
    if(isActive==false)
        {
            cell.style.fontStyle="italic";  
            italicElement.classList.add("active-btn")

        }
    else
        {
            cell.style.fontStyle="normal";  
            italicElement.classList.remove("active-btn")
        }
})
//making text underlined
underlineElement.addEventListener("click", function(){
    let isActive=underlineElement.classList.contains("active-btn")
    let address=addressBar.value;
    let {rid,cid}=getRidCidFronAddress(address);
    let cell=document.querySelector(`.col[rid="${rid}"][cid="${cid}"]`);
    if(isActive==false)
        {
            cell.style.textDecoration="underline";  
            underlineElement.classList.add("active-btn")

        }
    else
        {
            cell.style.textDecoration="none";  
            underlineElement.classList.remove("active-btn")
        }
})
//making changes in font
fontBtn.addEventListener("change",function()
{
    fontsize=fontBtn.value
    let address=addressBar.value;
    let {rid,cid}=getRidCidFronAddress(address);
    let cell=document.querySelector(`.col[rid="${rid}"][cid="${cid}"]`);
    cell.style.fontSize=fontsize+"px";
})
//add font family
fontFamily.addEventListener("change",function()
{
    fontfam=fontFamily.value
    let address=addressBar.value;
    let {rid,cid}=getRidCidFronAddress(address);
    let cell=document.querySelector(`.col[rid="${rid}"][cid="${cid}"]`);
    cell.style.fontFamily=fontfam;
})
// getting rid and cid of a cell
function getRidCidFronAddress(address)
{
    let cellcoladdress=address.charCodeAt(0);
    let cellrowaddress=address.slice(1);
    let cid=cellcoladdress-97;
    let rid=Number(cellrowaddress-1)
    return {cid,rid}
}

