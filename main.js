const pickColorBtn = document.querySelector(".pick_color"),
setColorBtn = document.querySelector(".set_color"),
dropDown = document.querySelector(".dropdown")
let colors = dropDown.querySelectorAll(".colors small"),
mainColor = dropDown.querySelector(".main-color")


let colorStorage = localStorage.color;
if(colorStorage){
 storageData();
}

function storageData(){
  document.body.style.setProperty("background-color", colorStorage);
  mainColor.style.setProperty("background-color", colorStorage)
  colors.forEach(buble => {
    if (buble.dataset.color == colorStorage) {
      buble.classList.add("active")
    }
  })
}

pickColorBtn.addEventListener("click" , () => {
  dropDown.classList.add("active");
})

colors.forEach(buble => {
  buble.addEventListener("click" ,(e)=> {
    let currentBuble = e.target;
    pickColor(currentBuble);
  })
})
function pickColor(buble){
    colors.forEach(buble => {
      buble.classList.remove("active")
    })
    buble.classList.add("active")
    let targetColor;
    mainColor.dataset.color = buble.dataset.color
    targetColor = mainColor.dataset.color
    mainColor.style.setProperty("background-color", targetColor)
    localStorage.setItem("color",targetColor);
    console.log(localStorage["color"])
}

setColorBtn.addEventListener("click", ()=>{
  document.body.style.setProperty("background-color" ,mainColor.dataset.color );
  dropDown.classList.remove("active");
})
