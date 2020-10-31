const tab = document.querySelector(".js-tab"),
tab2 = document.querySelector(".js-tab2"),
close = document.querySelector(".js-close"),
close2 = document.querySelector(".js-close2"),
subTitle = tab.querySelector(".subtitle"),

projects = document.querySelector(".projects"),


article = document.querySelector(".js-article"),
article2 = document.querySelector(".js-article2"),
panel = document.querySelector(".js-panel");

const SHOWING_TAB = "showt";

const BLUR = "showp";

function handleClick(event)  {

         tab.classList.add(SHOWING_TAB);
         panel.classList.add(BLUR);
    }

function handle2Click(event)  {

    tab2.classList.add(SHOWING_TAB);
    panel.classList.add(BLUR);
}

function handleCClick(event)  {
    tab.classList.remove(SHOWING_TAB);
    panel.classList.remove(BLUR);
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
