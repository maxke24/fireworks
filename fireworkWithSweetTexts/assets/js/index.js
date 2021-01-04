let text, upliftingTexts;

document.addEventListener("DOMContentLoaded", init);

function init() {
    text = true;
    upliftingTexts = true;

    let checkbox = document.querySelector("#texts");
    checkbox.addEventListener("change", toggleText);
}

function toggleText(e){
    e.preventDefault();
    texts = e.target.checked;
}
