let points = 0
let slideIndex = 1;


showSlides(slideIndex);

// const test = document.getElementById("test");
// test.addEventListener("click", (e)=> {
// console.log(e.target.id)
// })

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

    let health = document.getElementById("Health");
     
    function addHealth() {
        health.value +=10;
        console.log("hit", health.value)
    }

    function subtractHealth() {   
        if (health.value<=0) {
             alert("Game Over") 
        }
        health.value -=10;
        console.log("hitSubtract", health.value)
    }

    // event listener for slide one
let correctContainer1=document.getElementById("snake1");
correctContainer1.addEventListener("mouseover", addHealth);
let wrongContainer1=document.getElementById("snake2");
wrongContainer1.addEventListener("mouseover", subtractHealth);

// event listener for slide two
let wrongContainer2=document.getElementById("tree1");
wrongContainer2.addEventListener("click", subtractHealth);
let correctContainer2=document.getElementById("tree2");
correctContainer2.addEventListener("click", addHealth);

// event listener for slide three
let correctContainer3=document.getElementById("frog1");
correctContainer3.addEventListener("click", addHealth);
let wrongContainer3=document.getElementById("frog2");
wrongContainer3.addEventListener("click", subtractHealth);

// event listener for slide four
let correctContainer4=document.getElementById("umbellifer1");
correctContainer4.addEventListener("click", addHealth);
let wrongContainer4=document.getElementById("umbellifer2");
wrongContainer4.addEventListener("click", subtractHealth);

// event listener for slide five
let wrongContainer5=document.getElementById("fly1");
wrongContainer5.addEventListener("click", subtractHealth);
let correctContainer5=document.getElementById("fly2");
correctContainer5.addEventListener("click", addHealth);

// event listener for slide six
let correctContainer6=document.getElementById("flower1");
correctContainer6.addEventListener("click", addHealth);
let wrongContainer6=document.getElementById("flower2");
wrongContainer6.addEventListener("click", subtractHealth);

// event listener for slide seven
let wrongContainer7=document.getElementById("beetle1");
wrongContainer7.addEventListener("click", subtractHealth);
let correctContainer7=document.getElementById("beetle2");
correctContainer7.addEventListener("click", addHealth);

// event listener for slight eight
let correctContainer8=document.getElementById("droops1");
correctContainer8.addEventListener("click", addHealth);
let wrongContainer8=document.getElementById("droops2");
wrongContainer8.addEventListener("click", subtractHealth);

// event listener for slide nine
let correctContainer9=document.getElementById("star1");
correctContainer9.addEventListener("click", addHealth);
let wrongContainer9=document.getElementById("star2");
wrongContainer9.addEventListener("click", subtractHealth);

// event listener for slide ten
let wrongContainer=document.getElementById("snail1");
wrongContainer.addEventListener("click", subtractHealth);
let correctContainer=document.getElementById("snail2");
correctContainer.addEventListener("click", addHealth);

// container for correct choices
// slide one
// let correctContainer=document.getElementById("snake1");
// correctContainer.addEventListener("click", addPoints);

// slide two
// let correctContainer=document.getElementById("tree2");
// correctContainer.addEventListener("click", addPoints);

// slide three
// let container=document.getElementById("frog1");
// container.addEventListener("click", addPoints);

// slide four
// let container=document.getElementById("umbellifer1");
// container.addEventListener("click", addPoints);

// slide five
// let container=document.getElementById("fly2");
// container.addEventListener("click", addPoints);

// slide six
// let container=document.getElementById("flower1");
// container.addEventListener("click", addPoints);

// slide seven
// let container=document.getElementById("beetle2");
// container.addEventListener("click", addPoints);

// slide eight
// let container=document.getElementById("droops1");
// container.addEventListener("click", addPoints);

// slide nine
// let container=document.getElementById("star1");
// container.addEventListener("click", addPoints);

// slide ten
// let container=document.getElementById("snail2");
// container.addEventListener("click", addPoints);


// startBtn.addEventListener("click"), () => {
//     iSlide.style.display="block"}



// let slides=document.getElementsByClassName("gSlide")
// console.log(slides[0])
// slides[0].style.display="block"
// console.log(slides)

