const e=document.querySelector(".breed-select"),t=(document.querySelector(".loader"),document.querySelector(".error"),document.querySelector(".cat-info"));fetch("https://api.thecatapi.com/v1/breeds").then((e=>{if(!e.ok)throw new Error(e.statusText);return e.json()})).then((t=>t.map((({id:t,name:r})=>e.insertAdjacentHTML("beforeend",`   \n        <option value="${t}">${r}</option>`))))).catch((e=>console.log(e))),e.addEventListener("input",(function(){(r=e.value,fetch(`https://api.thecatapi.com/v1/images/search?breed_ids=${r}&api_key=live_6gbFp94kB6RS30Y3er2JgiraILE0fj9kHYbT7NZhhWlSwDeSb3eKhqR6aQLBNRUI`).then((e=>{if(!e.ok)throw new Error(e.statusText);return e.json()}))).then((e=>e.map((({url:e,breeds:{0:{name:r,description:n,temperament:o}}})=>{t.innerHTML=`<img src="${e}" alt="${r}">\n      <h1>Name: ${r}</h1>\n      <h2>Temperament: ${o}</h2>\n      <p>${n}</p>`})))).catch((e=>console.log(e)));var r}));
//# sourceMappingURL=index.2a1ba0b0.js.map