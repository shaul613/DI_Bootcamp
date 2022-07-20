//PROJECT WORD AND GIF

async function fetchWord () {
	let res = await fetch('http://random-word-api.herokuapp.com/word?number=1')
	let obj = await res.json();
	let word = await obj[0];
	fetchGif(word);
	// .catch(error => console.log("IN THE CATCH", error)) //catch an error if there is
}

async function fetchGif (wordrandom) {
	let res = await fetch(`https://api.giphy.com/v1/gifs/random?tag=hihiumgugmyumgyng&api_key=hpvZycW22qCjn5cRM1xtWB8NKq4dQ2My`)
	// let res = await fetch(`https://api.giphy.com/v1/gifs/random?tag=${wordrandom}&api_key=hpvZycW22qCjn5cRM1xtWB8NKq4dQ2My`) // return a promise with as a result a Response object
	let obj;
		try{
			if (res.status !== 200){
				throw new Error ("404 ERROR")
			} else{
				obj = await res.json();
			}
		}
		catch(err){
			console.log(err);
		}
		try{
			// if (obj["data"] === '[]'){
			if (obj["data"].length == 0){
				let imageGif = document.createElement("img");
				imageGif.setAttribute("src", "https://media.giphy.com/media/TqiwHbFBaZ4ti/giphy.gif");
				document.body.appendChild(imageGif)
				throw new Error ("GIF NOT FOUND");
			} else{
				console.log(obj.data);
				// console.log(obj.data.images.original.url);
				console.log(obj);
				let gif = obj["data"]["images"]["original"]["url"];

				let imageGif =  document.createElement("img");
				imageGif.setAttribute("src", gif);
				document.body.appendChild(imageGif)
			}
		}
		catch(err){
			console.log(err);
		}
}

fetchWord()
