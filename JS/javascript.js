const onSiteLink = document.querySelector(".onsite");
const onSiteLinkText = onSiteLink.textContent;
let counter = -1;


setTimeout(function() {
    onSiteLink.addEventListener('mouseover', updateText);
    counter = 3;
}, 2000)

function updateText() {
    onSiteLink.textContent = "You're already here " + counter;
    counter--;
    if (counter > -1) {
        setTimeout(function() {
            updateText();
        } , 1000)
    } else {
        onSiteLink.textContent = onSiteLinkText;
        counter = 3;
    }
}