// this file contain all the basic fonctionalities


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

manageItemText();


// resizing projects item section
window.addEventListener("resize", ()=>{
	manageItemText();
})


// bulles
function createBubles(){

	setInterval(()=>{
		let div;
		div = document.createElement('div');
		div.setAttribute('class', 'buble-item');
		div.style.top = Math.random()* parseInt(document.getElementById("header").offsetHeight) -100 + "px"; // looks like its a wate of enegy but it handle the resizing by getting the header's offset width
		div.style.left = Math.random()* parseInt(document.getElementById("header").offsetWidth) -100 + "px";
		console.log(parseInt(document.getElementById("header").offsetWidth));
		console.log(div.style.left);

		document.getElementById("header").appendChild(div);

		setTimeout(()=>{
			document.getElementById("header").removeChild(div);
		}, 1000);
	}, 500);

}

createBubles();