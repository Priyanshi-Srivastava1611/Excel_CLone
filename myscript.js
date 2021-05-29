let addBtnContainer=document.querySelector(".add_sheet_container")
let sheetlist=document.querySelector(".sheet_list")
let firstsheet=document.querySelector(".sheet")
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

