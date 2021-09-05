apiUrl = "https://pokeapi.co/api/v2/pokemon/"
const poke = document.querySelector('#dropdownMenuLink')
for(i=1; i<=100; i++){
 fetch(`${apiUrl}${i}`)
.then((response)=> response.json())
.then((pokemon) => getData(pokemon))
html = " "
html1 = " "
value = " "
option = `<option value="Select">Pokemon Name</option>`
getData = (response) => {
	console.log(response)
	option += `<option value = "${response.name}">${response.name}</option>`
	poke.innerHTML = option
}
}

for(i=1; i<=100; i++){
fetch(`${apiUrl}${i}`)
.then((body)=> body.json())
.then((res)=>gets(res))
gets = (body) => {
	html += `
	<div class="column">
		<div class="flip-card">
		    <div class = "flip-card-inner">
		        <div class = "flip-card-front">
		        <img id = "img" src='${body.sprites.other.dream_world.front_default}'></img>
		        </div>
		        <div class="flip-card-back">
		        <h2>Name: ${body.name}</h2>
		        <h2>ID: ${body.id}</h2>
		        <h2>Base Experience: ${body.base_experience}</h2>
		        <h2>Height: ${body.height}</h2>
	            <h2>Weight: ${body.weight}</h2>
	            </div>
	        </div>
	    </div>
	</div>`
	
	const data = document.querySelector('.row')
	data.innerHTML = html
}
}

get1 = () => {
	names = ""
	poke_name = ""
	url = "https://pokeapi.co/api/v2/pokemon/"
	poke_name = document.getElementById("dropdownMenuLink").value;
	fetch(`${url}${poke_name}`)
	.then((result) => result.json())
	.then((pokes)=>get(pokes))

	get = (result) => {
		console.log(result)
		html1 = `
		<div class="flip-card">
		    <div class = "flip-card-inner">
		        <div class = "flip-card-front">
		        <img id = "img" src='${result.sprites.other.dream_world.front_default}'></img>
		        </div>
		        <div class="flip-card-back">
		        <h2>Name: ${result.name}</h2>
		        <h2>ID: ${result.id}</h2>
		        <h2>Base Experience: ${result.base_experience}</h2>
		        <h2>Height: ${result.height}</h2>
	            <h2>Weight: ${result.weight}</h2>
	            </div>
	        </div>
	    </div>
	    </div>`
	    
	    const data = document.querySelector('.row')
	    data.innerHTML = html1  
    }
}

get2 = () =>{
for(i=1; i<=100; i++){
fetch(`${apiUrl}${i}`)
.then((body)=> body.json())
.then((res)=>gets(res))
gets = (body) => {
	html += `
	<div class="column">
		<div class="flip-card">
		    <div class = "flip-card-inner">
		        <div class = "flip-card-front">
		        <img id = "img" src='${body.sprites.other.dream_world.front_default}'></img>
		        </div>
		        <div class="flip-card-back">
		        <h2>Name: ${body.name}</h2>
		        <h2>ID: ${body.id}</h2>
		        <h2>Base Experience: ${body.base_experience}</h2>
		        <h2>Height: ${body.height}</h2>
	            <h2>Weight: ${body.weight}</h2>
	            </div>
	        </div>
	    </div>
	</div>`
	
	const data = document.querySelector('.row')
	data.innerHTML = html
}
}
}






