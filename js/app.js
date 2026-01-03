

document.addEventListener("DOMContentLoaded", (e)=>{
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