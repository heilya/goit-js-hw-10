import  {fetchBreeds, fetchCatByBreed} from './cat-api';
const breedSelect = document.querySelector('.breed-select');
const loader = document.querySelector('.loader');
const error = document.querySelector('.error');
const catInfo = document.querySelector('.cat-info');

createOptions()

function createOptions() {
    fetchBreeds().then(data => {
        return data.map(({id,name})=> 
            breedSelect.insertAdjacentHTML("beforeend", `   
        <option value="${id}">${name}</option>`))
    }).catch(err => console.log(err))
};

breedSelect.addEventListener('input', onSearch);
function onSearch() {
    fetchCatByBreed(breedSelect.value).then(data => {
        return data.map(({url, breeds
            : { 0:{name, description, temperament
            } } }) => {
            catInfo.innerHTML = `<img src="${url}" alt="${name}">
      <h1>Name: ${name}</h1>
      <h2>Temperament: ${temperament}</h2>
      <p>${description}</p>`
})}).catch(err => console.log(err))};

