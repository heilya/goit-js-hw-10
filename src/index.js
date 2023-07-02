import { fetchBreeds, fetchCatByBreed } from './cat-api';
import { Notify } from 'notiflix/build/notiflix-notify-aio';
const breedSelect = document.querySelector('.breed-select');
const loader = document.querySelector('.loader');
const error = document.querySelector('.error');
const catInfo = document.querySelector('.cat-info');

createOptions()
breedSelect.addEventListener('input', onSearch);


function createOptions() {
    fetchBreeds().then(data => {
        return data.map(({id,name})=> 
            breedSelect.insertAdjacentHTML("beforeend", `   
        <option value="${id}">${name}</option>`))
    }).catch(showError).finally(loader.style.display = 'none')
};



function onSearch() {
    loader.style.display = 'block';
    fetchCatByBreed(breedSelect.value).then(data => {
        loader.style.display = 'none';
        return data.map(({url, breeds
            : { 0:{name, description, temperament
            } } }) => {
            catInfo.innerHTML = `<img class="cat-photo"src="${url}" alt="${name}">
      <h1 class="cat-name">Name: ${name}</h1>
      <h2 class="cat-temperament">Temperament: ${temperament}</h2>
      <p class="cat-description">${description}</p>`
        })
    }).catch(showError)};


function showError() {
  Notify.failure(' Oops! Something went wrong! Try reloading the page!');
}