const tab2 = document.querySelector(".js-tab2"),
close = tab2.querySelector(".close"),
subTitle = tab2.querySelector(".subtitle"),

article = document.querySelector(".js-article2"),

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


function init() {
    article.addEventListener("click",handleClick);
    close.addEventListener("click",handleCClick);
}


init();
