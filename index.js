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
        return `<a href="" data-link-num="${a2}"><li>${arr.name}</li></a>`
    }).join('');
    getUl.innerHTML = `${nameList}`;    
};


const displayPokeDetails = async () => {
    const getA = document.querySelectorAll('a')
    console.log("TEST")
    console.log(getA)

    for(let i = 0; i < getA.length; i++) {
        console.log(getA[i]);
        getA[i].addEventListener('click', async (e) => {
            e.preventDefault();
            const num = getA[i].dataset.linkNum
            const indPoke2 = await fetch(`https://pokeapi.co/api/v2/pokemon/${num}`);
            const pokeAPIResponse2 = await indPoke2.json();
            getDiv.innerText = JSON.stringify(pokeAPIResponse2, null, 2)
        })
    }
};

const init = async () => {
    await renderAllPoke();
    await displayPokeDetails();
}
init();



