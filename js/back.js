btn=document.createElement("Button");
btn.innerHTML="click";
document.body.appendChild(btn);

flex=document.createElement("p");
document.body.appendChild(flex);
	
btn.onclick=function()
{
	const red = Math.floor(Math.random() * 256);
	const green = Math.floor(Math.random() * 256);
	const blue = Math.floor(Math.random() * 256);
	document.body.style.background = "rgb(" + red + ", " + green + ", " + blue + ")";
}
