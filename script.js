
// let iSlide = homeScreen

let slideIndex = 1;

showSlides(slideIndex);

const test = document.getElementById("test");
test.addEventListener("click", (e)=> {
console.log(e.target.id)
})

function plusSlides(n) {
    showSlides(slideIndex +=n)
}

function showSlides(n) {
    // let i 
    let slides=document.getElementsByClassName("gSlide");
// console.log("SLIDES WITH CLASS NAME GSLIDE", slides)
// const slideArray = Array.from(slides)
// console.log("ARRAY OF SLIDES", slideArray)
    if (n > slides.length) {slideIndex=1}
    if (n < 1) {slideIndex=slides.length}
    for (let i=0; i < slides.length; i++) {
        slides[i].style.display="none";
    }
        // console.log("SLIDES AT I", slides[i])
    
    slides[slideIndex-1].style.display = "block";
    // setTimeout (showSlides, 2000);
    }

// startBtn.addEventListener("click"), () => {
//     iSlide.style.display="block"}




// let slides=document.getElementsByClassName("gSlide")
// console.log(slides[0])
// slides[0].style.display="block"
// console.log(slides)

