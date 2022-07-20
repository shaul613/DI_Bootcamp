//PROJECT WORD AND GIF

function fetchWord () {
	fetch('http://random-word-api.herokuapp.com/word?number=1')
	.then(response => response.json())
	.then(result => {
		let [word] = result;
		fetchGif(word)
	})
	.catch(error => console.log("IN THE CATCH", error)) //catch an error if there is
}

function fetchGif (wordrandom) {
	fetch(`https://api.giphy.com/v1/gifs/random?tag=${wordrandom}&api_key=hpvZycW22qCjn5cRM1xtWB8NKq4dQ2My`) // return a promise with as a result a Response object
	.then(response => {
		if (response.status !== 200){
			throw new Error ("404 ERROR")	
		} else {
			return response.json(); //returns a promise
		}
	})
	.then(result => {
		console.log(result)
		if (result["data"] == []){
			throw new Error ("GIF NOT FOUND");
		} else {
			let gif = result["data"]["images"]["original"]["url"];
			let imageGif =  document.createElement("img");
			imageGif.setAttribute("src", gif);
			document.body.appendChild(imageGif)
		}
		
	})
	.catch(error => {
		let imageGif = document.createElement("img");
		imageGif.setAttribute("src", "https://media.giphy.com/media/TqiwHbFBaZ4ti/giphy.gif");
		document.body.appendChild(imageGif)
		console.log("IN THE CATCH", error)
	})
}

fetchWord()