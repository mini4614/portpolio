const tab = document.querySelector(".js-tab"),
close = document.querySelector(".js-close"),
article = document.querySelector(".js-article"),

tab2 = document.querySelector(".js-tab2"),
close2 = document.querySelector(".js-close2"),
article2 = document.querySelector(".js-article2"),

tab3 = document.querySelector(".js-tab3"),
close3 = document.querySelector(".js-close3"),
article3 = document.querySelector(".js-article3"),

tab4 = document.querySelector(".js-tab4"),
close4 = document.querySelector(".js-close4"),
article4 = document.querySelector(".js-article4"),

tab5 = document.querySelector(".js-tab5"),
close5 = document.querySelector(".js-close5"),
article5 = document.querySelector(".js-article5"),

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

function handle3Click(event)  {
    tab3.classList.add(SHOWING_TAB);
    panel.classList.add(BLUR);
}
function handleC3Click(event)  {
    tab3.classList.remove(SHOWING_TAB);
    panel.classList.remove(BLUR);
}

function handle4Click(event)  {
    tab4.classList.add(SHOWING_TAB);
    panel.classList.add(BLUR);
}
function handleC4Click(event)  {
    tab4.classList.remove(SHOWING_TAB);
    panel.classList.remove(BLUR);
}

function handle5Click(event)  {
    tab5.classList.add(SHOWING_TAB);
    panel.classList.add(BLUR);
}
function handleC5Click(event)  {
    tab5.classList.remove(SHOWING_TAB);
    panel.classList.remove(BLUR);
}



function init() {
    
    article.addEventListener("click",handleClick);
    close.addEventListener("click",handleCClick);

    article2.addEventListener("click",handle2Click);
    close2.addEventListener("click",handleC2Click);

    article3.addEventListener("click",handle3Click);
    close3.addEventListener("click",handleC3Click);
    article4.addEventListener("click",handle4Click);
    close4.addEventListener("click",handleC4Click);
    
    article5.addEventListener("click",handle5Click);
    close5.addEventListener("click",handleC5Click);

}


init();
