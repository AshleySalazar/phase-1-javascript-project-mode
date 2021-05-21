const init = () => {
	let randomJoke = {};
	const jokesOnYou = document.getElementById('get-joke');
	const kneeSlapper = document.getElementById('like');
	const focusJoke = document.getElementById('random-joke');
	const list = document.getElementById('list');
	

	jokesOnYou.addEventListener('click', () => {
		fetch('https://icanhazdadjoke.com',{
			headers:{
				"Accept": "application/json"
			}})
			.then(res => res.json())
			.then(result => {
				randomJoke.id = result.id;
				randomJoke.joke = result.joke;
				focusJoke.innerHTML = randomJoke.joke;
				kneeSlapper.disabled = false;
		})
	})

	kneeSlapper.addEventListener('click',() => {
		if (!document.querySelector(`li#${randomJoke.id}`)){
			list.innerHTML += `<li id=${randomJoke.id} class='list'>${randomJoke.joke}<button class="dislike">👎</button></li>`
		}
	
		const unlikeButtons = document.getElementsByClassName('dislike');

		Array.from(unlikeButtons).forEach(el => {
			el.addEventListener('click',(e) => {
				e.target.parentElement.remove(); 
			})
		})
	})
};

document.addEventListener('DOMContentLoaded', init);