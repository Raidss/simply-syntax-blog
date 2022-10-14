// Onsite indicator
const counterText = document.querySelector('.counter-text');
const onSiteLink = document.querySelector(".onsite");
const onSiteLinkText = onSiteLink.textContent;
let counter = -1;


setTimeout(function() {
    onSiteLink.addEventListener('mouseover', updateText);
    counter = 3;
}, 2000)

function updateText() {
    onSiteLink.textContent = "You're already here";
    counterText.textContent = "  " + counter;
    counter--;
    if (counter > -1) {
        setTimeout(function() {
            updateText();
        } , 1000)
    } else {
        onSiteLink.textContent = onSiteLinkText;
        counterText.textContent = "";
        counter = 3;
    }
}

// Page runtime 
const runtimeText = document.querySelector('.runtime');
let runtimeCounter = 0;
let runTime100thSeconds = 0;
let runTime10thSeconds = 0;
let runTimeSeconds = 0;
let runTimeMinutes = 0;

function timerLoop() {
    runtimeText.textContent = "Page runtime: " + runTimeMinutes + ":" + runTimeSeconds + ":" + runTime10thSeconds + runTime100thSeconds;
    if (runtimeCounter < 10) { // checks for ms timer
        setTimeout(function() {
            runtimeCounter++;
            timerLoop();
        }, 1)
    } else if (runtimeCounter === 10) {
        runTime100thSeconds++;
        runtimeCounter = 0;
        timerLoop();
    }

    if (runTime100thSeconds === 10) { //checks for 100th place seconds
        runTime10thSeconds++;
        runTime100thSeconds = 0; // resets 100th place seconds
    }
    if (runTime10thSeconds === 10) { //checks for 10th place seconds
        runTimeSeconds++;
        runTime10thSeconds = 0; // resets 10th place seconds
    }
    if (runTimeSeconds === 60) { //checks for Seconds
        runTimeMinutes++;
        runTimeSeconds = 0; // resets seconds
    }
}

timerLoop();;