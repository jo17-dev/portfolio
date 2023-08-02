// this file contain all the basci fonctionalities

manageItemText();



window.addEventListener("resize", ()=>{
	manageItemText();
})

function manageItemText(){
	if(window.screen.availWidth <= 768){
		document.querySelectorAll(" .item-description").forEach(item =>{
			item.style.display = 'block';
		});
	}else{
		document.querySelectorAll(" .item-description").forEach(item =>{
			item.style.display = 'none';
		});
	}
}

