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
firstsheet.addEventListener("click",handlesheet)
addBtnContainer.addEventListener("click",changesheet);
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
    newsheet.addEventListener("click",handlesheet)
    
}
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
}
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
    })
}
leftBtn.addEventListener("click", function(){
    let address=addressBar.value;
    let {rid,cid}=getRidCidFronAddress(address);
    let cell=document.querySelector(`.col[rid="${rid}"][cid="${cid}"]`);
    cell.style.textAlign="left";
    /*for(let i=0;i<allAlignBtns.length;i++){
        allAlignBtns[i].classList.remove("active-btn");
    }
    leftBtn.classList.add("active-btn");
    let cellObject=sheetDB[rid][cid];
    cellObject.halign="left";*/
})
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
boldElement.addEventListener("click", function(){
    let address=addressBar.value;
    let {rid,cid}=getRidCidFronAddress(address);
    let cell=document.querySelector(`.col[rid="${rid}"][cid="${cid}"]`);
    cell.style.fontWeight="bold";
    /*for(let i=0;i<allAlignBtns.length;i++){
        allAlignBtns[i].classList.remove("active-btn");
    }
    leftBtn.classList.add("active-btn");
    let cellObject=sheetDB[rid][cid];
    cellObject.halign="left";*/
})
italicElement.addEventListener("click", function(){
    let address=addressBar.value;
    let {rid,cid}=getRidCidFronAddress(address);
    let cell=document.querySelector(`.col[rid="${rid}"][cid="${cid}"]`);
    cell.style.fontStyle="italics";
    /*for(let i=0;i<allAlignBtns.length;i++){
        allAlignBtns[i].classList.remove("active-btn");
    }
    leftBtn.classList.add("active-btn");
    let cellObject=sheetDB[rid][cid];
    cellObject.halign="left";*/
})
underlineElement.addEventListener("click", function(){
    let address=addressBar.value;
    let {rid,cid}=getRidCidFronAddress(address);
    let cell=document.querySelector(`.col[rid="${rid}"][cid="${cid}"]`);
    cell.style.textDecoration="underline";
    /*for(let i=0;i<allAlignBtns.length;i++){
        allAlignBtns[i].classList.remove("active-btn");
    }
    leftBtn.classList.add("active-btn");
    let cellObject=sheetDB[rid][cid];
    cellObject.halign="left";*/
})
fontBtn.addEventListener("change",function()
{
    fontsize=fontBtn.value
    let address=addressBar.value;
    let {rid,cid}=getRidCidFronAddress(address);
    let cell=document.querySelector(`.col[rid="${rid}"][cid="${cid}"]`);
    cell.style.fontSize=fontsize+"px";
})
function getRidCidFronAddress(address)
{
    let cellcoladdress=address.charCodeAt(0);
    let cellrowaddress=address.slice(1);
    let cid=cellcoladdress-97;
    let rid=Number(cellrowaddress-1)
    return {cid,rid}
}

