const getUl = document.querySelector('ul');
const getDiv = document.querySelector('div');
 
const getPokeData = async () => {
    try{
        const pokeAPI = await fetch('https://pokeapi.co/api/v2/pokemon');
        const pokeAPIResponse = await pokeAPI.json();
        const data = pokeAPIResponse.results;
        return data;
    } catch (err){
        console.log(broken)
    }
};

const renderAllPoke = async () => {
    const pokeList = await getPokeData();
    const datalist = await pokeList;

    const nameList = datalist.map((arr) => {
        const a1 = arr.url.split('/');
        const a2 = a1[6];
        return `<a style="text-decoration: none" href="" data-link-num="${a2}"><li>${arr.name}</li></a>`;
    }).join('');
    getUl.innerHTML = `${nameList}`;    
};


const displayPokeDetails = async () => {
    const getA = document.querySelectorAll('a');

    for(let i = 0; i < getA.length; i++) {
        getA[i].addEventListener('click', async (e) => {
            e.preventDefault();

            const num = getA[i].dataset.linkNum;
            const indPoke2 = await fetch(`https://pokeapi.co/api/v2/pokemon/${num}`);
            const pokeResponse = await indPoke2.json();

            getUl.innerHTML = "";
            const abilityToPrint = pokeResponse.abilities[0].ability.name;
            getUl.innerHTML = `<h2> Ability: ${abilityToPrint} </h2>`

            const img = document.createElement('img');
            img.src = pokeResponse.sprites.front_default;
            img.style.height = "200px";

            const backButton = document.createElement('button');
            backButton.innerHTML = "Go Back";
            backButton.addEventListener('click', backButtonHandler);

            getDiv.appendChild(img);
            getDiv.appendChild(backButton);
        })
    }
};

const backButtonHandler = async () => {
    getUl.innerHTML = "";
    getDiv.innerHTML = "";
    await init();
};

const init = async () => {
    await renderAllPoke();
    await displayPokeDetails();
}
init();



