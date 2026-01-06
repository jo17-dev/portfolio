

document.addEventListener("DOMContentLoaded", (e)=>{

    const navBarHTMLElement = document.getElementById('header-nav-bar');
    const menuBurger = document.getElementById('burger-menu-container');
    const navManager = new ToggleManager("retracted-state", [navBarHTMLElement, menuBurger]);

    navBarHTMLElement.addEventListener('click', ()=>{
        navManager.toggle();
    });


    const windowCover = document.createElement('div');
    windowCover.setAttribute("id", "window-cover");

    const noticeDescription = "Hey there! This form isn’t quite finished yet. I’m actively working on it. You can still browse and discover who i am, and thanks for your patience!";
    const noticeTitle ="Notice";

    const workInProgressNoticeStringHTMLElement = createPopupElement(
        noticeTitle, 
        noticeDescription,
        ()=>{windowCover.remove()}
    );

    windowCover.appendChild(workInProgressNoticeStringHTMLElement);

    document.body.appendChild(windowCover);
});



function createPopupElement(title, description, onClickedYes = ()=>{}){

    const popup = document.createElement("div");
    popup.id = "notice-popup";

    const h3 = document.createElement("h3");
    h3.className = "notice-title";
    h3.textContent = title;

    const p = document.createElement("p");
    p.className = "notice-description";
    p.textContent = description;

    const footer = document.createElement("footer");

    const button = document.createElement("button");
    button.className = "btn notice-ok-btn";
    button.textContent = "I understand";

    button.addEventListener("click", () => {
        onClickedYes();
    });

    footer.appendChild(button);
    popup.append(h3, p, footer);

    return popup;
}


class ToggleManager {
    constructor (toogleableClass, toggelableHTMLElement = []){
        this.retractedStateClass = toogleableClass;
        this.toggelableHTMLElement = toggelableHTMLElement;
    }

    retract(){
        console.log("retracting nav bar");

        if(!this.isRetracted ){
            for(let i=0; i< this.toggelableHTMLElement.length; i++){
                this.toggelableHTMLElement[i].classList.add(this.retractedStateClass);
            }
        }else{
            console.log("already retracted");
        }

    }

    extend(){
        console.log("extending nav bar");

        if(this.isRetracted){
            for(let i=0; i< this.toggelableHTMLElement.length; i++){
                this.toggelableHTMLElement[i].classList.remove(this.retractedStateClass);
            }
        }else{
            console.log("already extended");
        }
    }

    toggle(){
        if(this.isRetracted){
            this.extend()
        }else{
            this.retract()
        }
    }

    get isRetracted() {
        if(this.toggelableHTMLElement.length > 0){
            return this.toggelableHTMLElement[0].classList.contains(this.retractedStateClass);
        }else{
            return false;
        }
    }
}