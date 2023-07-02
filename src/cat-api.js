const API_KEY = 'live_6gbFp94kB6RS30Y3er2JgiraILE0fj9kHYbT7NZhhWlSwDeSb3eKhqR6aQLBNRUI';
const BASE_URL = 'https://api.thecatapi.com/v1';
function fetchBreeds() {
    return fetch(`${BASE_URL}/breeds`).then((resp) => {
        if (!resp.ok) {
            throw new Error(resp.statusText);
        }
        return resp.json();
})
};

function fetchCatByBreed(breedId) {
    return fetch(`${BASE_URL}/images/search?breed_ids=${breedId}&api_key=${API_KEY}`).then((resp) => {
        if (!resp.ok) {
            throw new Error(resp.statusText);
        }
        return resp.json();
})
};



    export { fetchBreeds, fetchCatByBreed };

        