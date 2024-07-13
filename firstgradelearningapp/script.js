/* DROPDOWN MENU */
//collect the elements
let menubutton = document.querySelector(".menubutton")
let collapsemenu = document.querySelector(".collapsemenu")

//add a click event to open the collapsible menu
menubutton.addEventListener("click", function(){
    collapsemenu.classList.toggle("closeToOpen")
})

let flickheader = document.querySelector(".flickh")
let flickcollapse = document.querySelector(".flickc")
let flicknav = document.querySelector(".flickn")

let clickheader = document.querySelector(".clickh")
let clickcollapse = document.querySelector(".clickc")
let clicknav = document.querySelector(".clickn")

/* Model Window 1 */
//collect the element
let card1 = document.querySelector(".card1")
let modelwindow1 = document.querySelector(".modelwindow1")
let closemodel1 = document.querySelector(".closemodel1")

//add a click event to open the model window
card1.addEventListener("click", function(){
    modelwindow1.style.display = "block"
})

closemodel1.addEventListener("click", function(){
    modelwindow1.style.display = "none"
})

//close the model window when the user clicks anywhere on the model window
window.addEventListener("click", function(event){
    if(event.target == modelwindow1){
        modelwindow1.style.display = "none"
    }
})

/* Model Window 2 */
//collect the element
let card2 = document.querySelector(".card2")
let modelwindow2 = document.querySelector(".modelwindow2")
let closemodel2 = document.querySelector(".closemodel2")

//add a click event to open the model window
card2.addEventListener("click", function(){
    modelwindow2.style.display = "block"
})

closemodel2.addEventListener("click", function(){
    modelwindow2.style.display = "none"
})

//close the model window when the user clicks anywhere on the model window
window.addEventListener("click", function(event){
    if(event.target == modelwindow2){
        modelwindow2.style.display = "none"
    }
})

/* Model Window 3 */
//collect the element
let card3 = document.querySelector(".card3")
let modelwindow3 = document.querySelector(".modelwindow3")
let closemodel3 = document.querySelector(".closemodel3")

//add a click event to open the model window
card3.addEventListener("click", function(){
    modelwindow3.style.display = "block"
})

closemodel3.addEventListener("click", function(){
    modelwindow3.style.display = "none"
})

//close the model window when the user clicks anywhere on the model window
window.addEventListener("click", function(event){
    if(event.target == modelwindow3){
        modelwindow3.style.display = "none"
    }
})

/* Model Window 4 */
//collect the element
let card4 = document.querySelector(".card4")
let modelwindow4 = document.querySelector(".modelwindow4")
let closemodel4 = document.querySelector(".closemodel4")

//add a click event to open the model window
card4.addEventListener("click", function(){
    modelwindow4.style.display = "block"
})

closemodel4.addEventListener("click", function(){
    modelwindow4.style.display = "none"
})

//close the model window when the user clicks anywhere on the model window
window.addEventListener("click", function(event){
    if(event.target == modelwindow4){
        modelwindow4.style.display = "none"
    }
})

/* Model Window 5 */
//collect the element
let card5 = document.querySelector(".card5")
let modelwindow5 = document.querySelector(".modelwindow5")
let closemodel5 = document.querySelector(".closemodel5")

//add a click event to open the model window
card5.addEventListener("click", function(){
    modelwindow5.style.display = "block"
})

closemodel5.addEventListener("click", function(){
    modelwindow5.style.display = "none"
})

//close the model window when the user clicks anywhere on the model window
window.addEventListener("click", function(event){
    if(event.target == modelwindow5){
        modelwindow5.style.display = "none"
    }
})

/* Model Window 6 */
//collect the element
let card6 = document.querySelector(".card6")
let modelwindow6 = document.querySelector(".modelwindow6")
let closemodel6 = document.querySelector(".closemodel6")

//add a click event to open the model window
card6.addEventListener("click", function(){
    modelwindow6.style.display = "block"
})

closemodel6.addEventListener("click", function(){
    modelwindow6.style.display = "none"
})

//close the model window when the user clicks anywhere on the model window
window.addEventListener("click", function(event){
    if(event.target == modelwindow6){
        modelwindow6.style.display = "none"
    }
})

/* Model Window 7 */
//collect the element
let card7 = document.querySelector(".card7")
let modelwindow7 = document.querySelector(".modelwindow7")
let closemodel7 = document.querySelector(".closemodel7")

//add a click event to open the model window
card7.addEventListener("click", function(){
    modelwindow7.style.display = "block"
})

closemodel7.addEventListener("click", function(){
    modelwindow7.style.display = "none"
})

//close the model window when the user clicks anywhere on the model window
window.addEventListener("click", function(event){
    if(event.target == modelwindow7){
        modelwindow7.style.display = "none"
    }
})

/* Model Window 8 */
//collect the element
let card8 = document.querySelector(".card8")
let modelwindow8 = document.querySelector(".modelwindow8")
let closemodel8 = document.querySelector(".closemodel8")

//add a click event to open the model window
card8.addEventListener("click", function(){
    modelwindow8.style.display = "block"
})

closemodel8.addEventListener("click", function(){
    modelwindow8.style.display = "none"
})

//close the model window when the user clicks anywhere on the model window
window.addEventListener("click", function(event){
    if(event.target == modelwindow8){
        modelwindow8.style.display = "none"
    }
})

/* Model Window 9 */
//collect the element
let card9 = document.querySelector(".card9")
let modelwindow9 = document.querySelector(".modelwindow9")
let closemodel9 = document.querySelector(".closemodel9")

//add a click event to open the model window
card9.addEventListener("click", function(){
    modelwindow9.style.display = "block"
})

closemodel9.addEventListener("click", function(){
    modelwindow9.style.display = "none"
})

//close the model window when the user clicks anywhere on the model window
window.addEventListener("click", function(event){
    if(event.target == modelwindow9){
        modelwindow9.style.display = "none"
    }
})

/* Model Window 10 */
//collect the element
let card10 = document.querySelector(".card10")
let modelwindow10 = document.querySelector(".modelwindow10")
let closemodel10 = document.querySelector(".closemodel10")

//add a click event to open the model window
card10.addEventListener("click", function(){
    modelwindow10.style.display = "block"
})

closemodel10.addEventListener("click", function(){
    modelwindow10.style.display = "none"
})

//close the model window when the user clicks anywhere on the model window
window.addEventListener("click", function(event){
    if(event.target == modelwindow10){
        modelwindow10.style.display = "none"
    }
})

let gridcontainercolor = document.querySelector(".grid-container-color")
let gridcontainernumber = document.querySelector(".grid-container-number")

flickcollapse.addEventListener("click", function(){
    gridcontainercolor.style.display = "grid"
    gridcontainernumber.style.display = "none"
})

flickheader.addEventListener("click", function(){
    gridcontainercolor.style.display = "grid"
    gridcontainernumber.style.display = "none"
})

flicknav.addEventListener("click", function(){
    gridcontainercolor.style.display = "grid"
    gridcontainernumber.style.display = "none"
})

clickcollapse.addEventListener("click", function(){
    gridcontainercolor.style.display = "none"
    gridcontainernumber.style.display = "grid"
})

clickheader.addEventListener("click", function(){
    gridcontainercolor.style.display = "none"
    gridcontainernumber.style.display = "grid"
})

clicknav.addEventListener("click", function(){
    gridcontainercolor.style.display = "none"
    gridcontainernumber.style.display = "grid"
})

/* Model Window Red */
//collect the element
let cardred = document.querySelector(".cardred")
let modelwindowred = document.querySelector(".modelwindowred")
let closemodelred = document.querySelector(".closemodelred")

//add a click event to open the model window
cardred.addEventListener("click", function(){
    modelwindowred.style.display = "block"
})

closemodelred.addEventListener("click", function(){
    modelwindowred.style.display = "none"
})

//close the model window when the user clicks anywhere on the model window
window.addEventListener("click", function(event){
    if(event.target == modelwindowred){
        modelwindowred.style.display = "none"
    }
})

/* Model Window Orange */
//collect the element
let cardorange = document.querySelector(".cardorange")
let modelwindoworange = document.querySelector(".modelwindoworange")
let closemodelorange = document.querySelector(".closemodelorange")

//add a click event to open the model window
cardorange.addEventListener("click", function(){
    modelwindoworange.style.display = "block"
})

closemodelorange.addEventListener("click", function(){
    modelwindoworange.style.display = "none"
})

//close the model window when the user clicks anywhere on the model window
window.addEventListener("click", function(event){
    if(event.target == modelwindoworange){
        modelwindoworange.style.display = "none"
    }
})

/* Model Window Yellow */
//collect the element
let cardyellow = document.querySelector(".cardyellow")
let modelwindowyellow = document.querySelector(".modelwindowyellow")
let closemodelyellow = document.querySelector(".closemodelyellow")

//add a click event to open the model window
cardyellow.addEventListener("click", function(){
    modelwindowyellow.style.display = "block"
})

closemodelyellow.addEventListener("click", function(){
    modelwindowyellow.style.display = "none"
})

//close the model window when the user clicks anywhere on the model window
window.addEventListener("click", function(event){
    if(event.target == modelwindowyellow){
        modelwindowyellow.style.display = "none"
    }
})

/* Model Window Green */
//collect the element
let cardgreen = document.querySelector(".cardgreen")
let modelwindowgreen = document.querySelector(".modelwindowgreen")
let closemodelgreen = document.querySelector(".closemodelgreen")

//add a click event to open the model window
cardgreen.addEventListener("click", function(){
    modelwindowgreen.style.display = "block"
})

closemodelgreen.addEventListener("click", function(){
    modelwindowgreen.style.display = "none"
})

//close the model window when the user clicks anywhere on the model window
window.addEventListener("click", function(event){
    if(event.target == modelwindowgreen){
        modelwindowgreen.style.display = "none"
    }
})

/* Model Window Blue */
//collect the element
let cardblue = document.querySelector(".cardblue")
let modelwindowblue = document.querySelector(".modelwindowblue")
let closemodelblue = document.querySelector(".closemodelblue")

//add a click event to open the model window
cardblue.addEventListener("click", function(){
    modelwindowblue.style.display = "block"
})

closemodelblue.addEventListener("click", function(){
    modelwindowblue.style.display = "none"
})

//close the model window when the user clicks anywhere on the model window
window.addEventListener("click", function(event){
    if(event.target == modelwindowblue){
        modelwindowblue.style.display = "none"
    }
})

/* Model Window Indigo */
//collect the element
let cardindigo = document.querySelector(".cardindigo")
let modelwindowindigo = document.querySelector(".modelwindowindigo")
let closemodelindigo = document.querySelector(".closemodelindigo")

//add a click event to open the model window
cardindigo.addEventListener("click", function(){
    modelwindowindigo.style.display = "block"
})

closemodelindigo.addEventListener("click", function(){
    modelwindowindigo.style.display = "none"
})

//close the model window when the user clicks anywhere on the model window
window.addEventListener("click", function(event){
    if(event.target == modelwindowindigo){
        modelwindowindigo.style.display = "none"
    }
})

/* Model Window Purple */
//collect the element
let cardpurple = document.querySelector(".cardpurple")
let modelwindowpurple = document.querySelector(".modelwindowpurple")
let closemodelpurple = document.querySelector(".closemodelpurple")

//add a click event to open the model window
cardpurple.addEventListener("click", function(){
    modelwindowpurple.style.display = "block"
})

closemodelpurple.addEventListener("click", function(){
    modelwindowpurple.style.display = "none"
})

//close the model window when the user clicks anywhere on the model window
window.addEventListener("click", function(event){
    if(event.target == modelwindowpurple){
        modelwindowpurple.style.display = "none"
    }
})

/* Model Window White */
//collect the element
let cardwhite = document.querySelector(".cardwhite")
let modelwindowwhite = document.querySelector(".modelwindowwhite")
let closemodelwhite = document.querySelector(".closemodelwhite")

//add a click event to open the model window
cardwhite.addEventListener("click", function(){
    modelwindowwhite.style.display = "block"
})

closemodelwhite.addEventListener("click", function(){
    modelwindowwhite.style.display = "none"
})

//close the model window when the user clicks anywhere on the model window
window.addEventListener("click", function(event){
    if(event.target == modelwindowwhite){
        modelwindowwhite.style.display = "none"
    }
})

/* Model Window Black */
//collect the element
let cardblack = document.querySelector(".cardblack")
let modelwindowblack = document.querySelector(".modelwindowblack")
let closemodelblack = document.querySelector(".closemodelblack")

//add a click event to open the model window
cardblack.addEventListener("click", function(){
    modelwindowblack.style.display = "block"
})

closemodelblack.addEventListener("click", function(){
    modelwindowblack.style.display = "none"
})

//close the model window when the user clicks anywhere on the model window
window.addEventListener("click", function(event){
    if(event.target == modelwindowblack){
        modelwindowblack.style.display = "none"
    }
})

/* Model Window Gray */
//collect the element
let cardgray = document.querySelector(".cardgray")
let modelwindowgray = document.querySelector(".modelwindowgray")
let closemodelgray = document.querySelector(".closemodelgray")

//add a click event to open the model window
cardgray.addEventListener("click", function(){
    modelwindowgray.style.display = "block"
})

closemodelgray.addEventListener("click", function(){
    modelwindowgray.style.display = "none"
})

//close the model window when the user clicks anywhere on the model window
window.addEventListener("click", function(event){
    if(event.target == modelwindowgray){
        modelwindowgray.style.display = "none"
    }
})