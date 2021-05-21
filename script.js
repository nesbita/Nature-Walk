
    let slideIndex = 1;

    let beenClicked = false

    showSlides(slideIndex);



    // const test = document.getElementById("test");
    // test.addEventListener("click", (e)=> {
    // console.log(e.target.id)
    // })

    function plusSlides(n) {
    showSlides(slideIndex +=n)
    }

    function showSlides(n) {
    beenClicked = false
    let slides=document.getElementsByClassName("gSlide");
    // console.log("SLIDES WITH CLASS NAME GSLIDE", slides)
    // const slideArray = Array.from(slides)
    // console.log("ARRAY OF SLIDES", slideArray)
        if (n > slides.length) {slideIndex=1}
        if (n < 1) {slideIndex=slides.length}
        for (let i=0; i < slides.length; i++) {
        slides[i].style.display="none"
        }
        // console.log("SLIDES AT I", slides[i])
    
    slides[slideIndex-1].style.display = "block";
    // setTimeout (showSlides, 2000);
    }

    let health = document.getElementById("Health");
     
    function addHealth1() {
        if (beenClicked===false) {
            health.value +=10;
            correctContainer1.firstElementChild.style.transform="rotateY(180deg) scale(-1, 1)"
            console.log("hit", health.value)
            correctContainer1.style.transform="rotateY(180deg)"
            console.log(correctContainer1.firstElementChild)
            console.log(correctContainer1)
            beenClicked=true
        }
    }

    function subtractHealth1() {   
        if (beenClicked===false) {
            if (health.value<=0) {
                alert("Game Over") 
            }
            health.value -=10;
            wrongContainer1.firstElementChild.style.transform="rotateY(180deg) scale(-1, 1)"
            console.log("hitSubtract", health.value)
            wrongContainer1.style.transform="rotateY(180deg)"
            beenClicked=true
        }
    }

    // event listener for slide one
    let correctContainer1=document.getElementById("card1.0");
        correctContainer1.addEventListener("click", addHealth1);
    let wrongContainer1=document.getElementById("card1.1");
        wrongContainer1.addEventListener("click", subtractHealth1);

    // function clickCard(event) {
    // let cardClicked = event.target
    // if (cardClicked.classList.contains("snakes"))
    // e.target.removeEventListener("mouseover", clickCard)


    // let cardClicked = event.target

    // event.target.classList.add("snake1")
    // event.target.classList.add("noClick")


    function addHealth2() {
        if (beenClicked===false) {
            health.value +=10;
            correctContainer2.firstElementChild.style.transform="rotateY(180deg) scale(-1, 1)"
            console.log("hit", health.value)
            correctContainer2.style.transform="rotateY(180deg)"
            console.log(correctContainer1.firstElementChild)
            console.log(correctContainer1)
            beenClicked=true
        }    
    }   

    function subtractHealth2() {  
        if (beenClicked===false) { 
            if (health.value<=0) {
                alert("Game Over") 
            }
            health.value -=10;
            wrongContainer2.firstElementChild.style.transform="rotateY(180deg) scale(-1, 1)"
            console.log("hitSubtract", health.value)
            wrongContainer2.style.transform="rotateY(180deg)"
            beenClicked=true
        }
    }

    // event listener for slide two
    let wrongContainer2=document.getElementById("card2.0");
        wrongContainer2.addEventListener("click", subtractHealth2);
    let correctContainer2=document.getElementById("card2.1");
        correctContainer2.addEventListener("click", addHealth2);

    function addHealth3() {
        if (beenClicked===false) {
            health.value +=10;
            correctContainer3.firstElementChild.style.transform="rotateY(180deg) scale(-1, 1)"
            console.log("hit", health.value)
            correctContainer3.style.transform="rotateY(180deg)"
            beenClicked=true
        }    
    }

    function subtractHealth3() {   
        if (beenClicked===false) {
            if (health.value<=0) {
                alert("Game Over") 
            }
            health.value -=10;
            wrongContainer3.firstElementChild.style.transform="rotateY(180deg) scale(-1, 1)"
            console.log("hitSubtract", health.value)
            wrongContainer3.style.transform="rotateY(180deg)"
            beenClicked=true
        }
    }

    // event listener for slide three
    let correctContainer3=document.getElementById("card3.0");
        correctContainer3.addEventListener("click", addHealth3);
    let wrongContainer3=document.getElementById("card3.1");
        wrongContainer3.addEventListener("click", subtractHealth3);

    function addHealth4() {
        if (beenClicked===false) {
            health.value +=10;
            correctContainer4.firstElementChild.style.transform="rotateY(180deg) scale(-1, 1)"
            console.log("hit", health.value)
            correctContainer4.style.transform="rotateY(180deg)"
            console.log(correctContainer1.firstElementChild)
            console.log(correctContainer1)
            beenClicked=true
        }    
    }

    function subtractHealth4() { 
        if (beenClicked===false) {  
            if (health.value<=0) {
                alert("Game Over") 
            }
            health.value -=10;
            wrongContainer4.firstElementChild.style.transform="rotateY(180deg) scale(-1, 1)"
            console.log("hitSubtract", health.value)
            wrongContainer4.style.transform="rotateY(180deg)"
            beenClicked=true
        }
    }

    // event listener for slide four
    let correctContainer4=document.getElementById("card4.0");
        correctContainer4.addEventListener("click", addHealth4);
    let wrongContainer4=document.getElementById("card4.1");
        wrongContainer4.addEventListener("click", subtractHealth4);

    function addHealth5() {
        if(beenClicked===false) {
            health.value +=10;
            correctContainer5.firstElementChild.style.transform="rotateY(180deg) scale(-1, 1)"
            console.log("hit", health.value)
            correctContainer5.style.transform="rotateY(180deg)"
            console.log(correctContainer1.firstElementChild)
            console.log(correctContainer1)
            beenClicked=true
        }    
    }

    function subtractHealth5() {   
        if (beenClicked===false) {
            if (health.value<=0) {
                alert("Game Over") 
            }
            health.value -=10;
            wrongContainer5.firstElementChild.style.transform="rotateY(180deg) scale(-1, 1)"
            console.log("hitSubtract", health.value)
            wrongContainer5.style.transform="rotateY(180deg)"
        }    
    }

    // event listener for slide five
    let wrongContainer5=document.getElementById("card5.0");
    wrongContainer5.addEventListener("click", subtractHealth5);
    let correctContainer5=document.getElementById("card5.1");
    correctContainer5.addEventListener("click", addHealth5);

    function addHealth6() {
        if (beenClicked===false) {
            health.value +=10;
            correctContainer6.firstElementChild.style.transform="rotateY(180deg) scale(-1, 1)"
            console.log("hit", health.value)
            correctContainer6.style.transform="rotateY(180deg)"
            console.log(correctContainer1.firstElementChild)
            console.log(correctContainer1)
            beenClicked=true
        }    
    }

    function subtractHealth6() {   
        if (beenClicked===false) {
            if (health.value<=0) {
                alert("Game Over") 
            }
            health.value -=10;
            wrongContainer6.firstElementChild.style.transform="rotateY(180deg) scale(-1, 1)"
            console.log("hitSubtract", health.value)
            wrongContainer6.style.transform="rotateY(180deg)"
            beenClicked=true
        }    
    }

    // event listener for slide six
    let correctContainer6=document.getElementById("card6.0");
    correctContainer6.addEventListener("click", addHealth6);
    let wrongContainer6=document.getElementById("card6.1");
    wrongContainer6.addEventListener("click", subtractHealth6);

    function addHealth7() {
        if (beenClicked===false) {
            health.value +=10;
            correctContainer7.firstElementChild.style.transform="rotateY(180deg) scale(-1, 1)"
            console.log("hit", health.value)
            correctContainer7.style.transform="rotateY(180deg)"
            console.log(correctContainer1.firstElementChild)
            console.log(correctContainer1)
            beenClicked=true
        }    
    }

    function subtractHealth7() {   
        if (beenClicked===false) {
            if (health.value<=0) {
                alert("Game Over") 
            }
            health.value -=10;
            wrongContainer7.firstElementChild.style.transform="rotateY(180deg) scale(-1, 1)"
            console.log("hitSubtract", health.value)
            wrongContainer7.style.transform="rotateY(180deg)"
            beenClicked=true
        }    
    }

    // event listener for slide seven
    let wrongContainer7=document.getElementById("card7.0");
        wrongContainer7.addEventListener("click", subtractHealth7);
    let correctContainer7=document.getElementById("card7.1");
        correctContainer7.addEventListener("click", addHealth7);

    function addHealth8() {
        if (beenClicked===false) {
            health.value +=10;
            correctContainer8.firstElementChild.style.transform="rotateY(180deg) scale(-1, 1)"
            console.log("hit", health.value)
            correctContainer8.style.transform="rotateY(180deg)"
            console.log(correctContainer1.firstElementChild)
            console.log(correctContainer1)
            beenClicked=true
        }
    }

    function subtractHealth8() {   
        if (beenClicked===false) {
            if (health.value<=0) {
            alert("Game Over") 
            }
            health.value -=10;
            wrongContainer8.firstElementChild.style.transform="rotateY(180deg) scale(-1, 1)"
            console.log("hitSubtract", health.value)
            wrongContainer8.style.transform="rotateY(180deg)"
            beenClicked=true
        }    
    }

    // event listener for slight eight
    let correctContainer8=document.getElementById("card8.0");
        correctContainer8.addEventListener("click", addHealth8);
    let wrongContainer8=document.getElementById("card8.1");
        wrongContainer8.addEventListener("click", subtractHealth8);


    function addHealth9() {
        if (beenClicked===false) {
            health.value +=10;
            correctContainer9.firstElementChild.style.transform="rotateY(180deg) scale(-1, 1)"
            console.log("hit", health.value)
            correctContainer9.style.transform="rotateY(180deg)"
            console.log(correctContainer1.firstElementChild)
            console.log(correctContainer1)
            beenClicked=true
        }
    }    

    function subtractHealth9() {   
        if (beenClicked===false) {
            if (health.value<=0) {
                alert("Game Over") 
            }
            health.value -=10;
            wrongContainer9.firstElementChild.style.transform="rotateY(180deg) scale(-1, 1)"
            console.log("hitSubtract", health.value)
            wrongContainer9.style.transform="rotateY(180deg)"
            beenClicked=true
        }    
    }
    // event listener for slide nine
    let correctContainer9=document.getElementById("card9.0");
        correctContainer9.addEventListener("click", addHealth9);
    let wrongContainer9=document.getElementById("card9.1");
        wrongContainer9.addEventListener("click", subtractHealth9);


    function addHealth10() {
        if (beenClicked===false) {
            health.value +=10;
            correctContainer10.firstElementChild.style.transform="rotateY(180deg) scale(-1, 1)"
            console.log("hit", health.value)
            correctContainer10.style.transform="rotateY(180deg)"
            console.log(correctContainer1.firstElementChild)
            console.log(correctContainer1)
            beenClicked=true
        }    
    }

    function subtractHealth10() {   
        if (beenClicked===false) {
            if (health.value<=10) {
                alert("YOU DIDN'T MAKE IT!  Game Over") 
            }
            health.value -=10;
            wrongContainer10.firstElementChild.style.transform="rotateY(180deg) scale(-1, 1)"
            console.log("hitSubtract", health.value)
            wrongContainer10.style.transform="rotateY(180deg)"
            beenClicked=true
        }    
    }

    // event listener for slide ten
    let wrongContainer10=document.getElementById("card10.0");
        wrongContainer10.addEventListener("click", subtractHealth10);
    let correctContainer10=document.getElementById("card10.1");
        correctContainer10.addEventListener("click", addHealth10);  

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

