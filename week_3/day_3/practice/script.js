//Exercise1

// 1. Add inside the HTML file a div of id "container" (do it directly in the HTML)
// 2. Add one button per color inside the div container (do it directly in the JS)
// 3. Each button should have an "click" event listener that changes the background color of the document, to the color of the button (do it directly in the JS)

let colors = ["blue", "yellow", "green", "pink"];

function addButton(){
	let div = document.getElementById("containerbtn")
	for (let i = 0; i<colors.length; i++){
		let btn = document.createElement("button"); //creating button
		let text = document.createTextNode(colors[i]); //adding button text
		btn.classList.add("btn-big"); //adding class
		btn.addEventListener("click", changeBackground); //using function to change backround on clikc
		btn.appendChild(text);
		div.appendChild(btn)
	}
}

addButton()


function changeBackground (ev){
	let colorBtn = ev.target.textContent
	document.body.style.backgroundColor = colorBtn;
}

// Exercise 2

let pics = [
	"https://images.pexels.com/photos/1741205/pexels-photo-1741205.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
	"https://images.pexels.com/photos/2253275/pexels-photo-2253275.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
	"https://images.pexels.com/photos/3439576/pexels-photo-3439576.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260"
];

//1. retrieve the button
let btnImage = document.getElementById("btnimg"); //retrieving button
let div = document.getElementById("container"); //retreving div

btnImage.addEventListener("click", addImages) //using function on click

function addImages(){
	for (let i = 0; i<pics.length; i++) {
		let newimg = document.createElement("img"); //creating element
		newimg.classList.add("img-small") //adding class
		newimg.setAttribute("src", pics[i]); //adding src attribute for img source

		//create a deletebutton
		let btndelete =  document.createElement("button"); //creating button
		let textbtn = document.createTextNode(`delete pic ${i+1}`) //button text
		btndelete.appendChild(textbtn) //adding text to btn
		btndelete.addEventListener("click", deleteImg) //adding event listener to btn, to delete img

		div.appendChild(btndelete) //adding delete btn
		div.appendChild(newimg); //adding img
	}
}


function deleteImg(ev){
	// console.log(ev.target) //button we clicked
	// console.log(ev.target.nextElementSibling) //image that is a next sibling of the button
	let imgsibling = ev.target.nextElementSibling; //getting next sibling (img) of element (button)
	imgsibling.remove() //removing sibling (i.e. the img)
}
