const tab = document.querySelector(".js-tab"),
close = document.querySelector(".js-close"),
article = document.querySelector(".js-article"),

tab2 = document.querySelector(".js-tab2"),
close2 = document.querySelector(".js-close2"),
article2 = document.querySelector(".js-article2"),

subTitle = tab.querySelector(".subtitle"),
projects = document.querySelector(".projects"),
panel = document.querySelector(".js-panel");

const SHOWING_TAB = "showt";

const BLUR = "showp";

function handleClick(event)  {
         tab.classList.add(SHOWING_TAB);
         panel.classList.add(BLUR);
    }
function handleCClick(event)  {
    tab.classList.remove(SHOWING_TAB);
    panel.classList.remove(BLUR);
}


function handle2Click(event)  {
    tab2.classList.add(SHOWING_TAB);
    panel.classList.add(BLUR);
}
function handleC2Click(event)  {
    tab2.classList.remove(SHOWING_TAB);
    panel.classList.remove(BLUR);
}



function init() {
    
    article.addEventListener("click",handleClick);
    article2.addEventListener("click",handle2Click);

    close.addEventListener("click",handleCClick);
    close2.addEventListener("click",handleC2Click);
}


init();
