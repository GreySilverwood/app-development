/* SHAPE */
//Collect the elements
let shape = document.querySelector(".shapeDiv")
let buttonsquare = document.querySelector(".buttonsquare")
let buttonrectangle = document.querySelector(".buttonrectangle")
let buttoncircle = document.querySelector(".buttoncircle")
//let displayshape = document.querySelector(".shapeDiv p")

//add an event to each button
buttonsquare.addEventListener("click", function(){
    shape.classList = "square"
    document.querySelector(".square p").textContent = "SQUARE"
    //displayshape.textContent = "square".toUpperCase()
})

buttonrectangle.addEventListener("click", function(){
    shape.classList = "rectangle"
    document.querySelector(".rectangle p").textContent = "RECTANGLE"
    //displayshape.textContent = "rectangle".toUpperCase()
})

buttoncircle.addEventListener("click", function(){
    shape.classList = "circle"
    document.querySelector(".circle p").textContent = "CIRCLE"
    //displayshape.textContent = "rectangle".toUpperCase()
})

/* DROPDOWN MENU */
//collect the elements
let menubutton = document.querySelector(".menubutton")
let collapsemenu = document.querySelector(".collapsemenu")

//add a click event to open the collapsible menu
menubutton.addEventListener("click", function(){
    collapsemenu.classList.toggle("closeToOpen")
})

/* Model Window */
//collect the element
let card = document.querySelector(".card")
let modelwindow = document.querySelector(".modelwindow")
let closemodel = document.querySelector(".closemodel")

//add a click event to open the model window
card.addEventListener("click", function(){
    modelwindow.style.display = "block"
})

closemodel.addEventListener("click", function(){
    modelwindow.style.display = "none"
})

//close the model window when the user clicks anywhere on the model window
window.addEventListener("click", function(event){
    if(event.target == modelwindow){
        modelwindow.style.display = "none"
    }
})