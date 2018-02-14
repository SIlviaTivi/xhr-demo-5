const form = document.getElementById('search-form');
const searchField = document.getElementById('search-keyword');
const responseContainer = document.getElementById('response-container');
let searchedForText;

form.addEventListener('submit', function(e){
    e.preventDefault();
    responseContainer.innerHTML = '';
    searchedForText = searchField.value;
    getNews();
});


function getNews(){
    const articleRequest = new XMLHttpRequest();
    articleRequest.onreadystatechange = function(){
        if(articleRequest.readyState === 4 && articleRequest.status === 200){
            const data = JSON.parse(articleRequest.responseText);
        }
    }

    articleRequest.open('GET', `https://api.nytimes.com/svc/search/v2/articlesearch.json?q=${searchedForText}&api-key=6227cc589e524ab19c76aa71de6cf3fd`);
    articleRequest.onload = addNews;
    articleRequest.onerror = handleError;
    articleRequest.send();// enviamos peticion
}

function handleError(){
    console.log('se ha presentado un error');
}

function addNews(){
    const data = JSON.parse(this.responseText);
    const article = data.response.docs[0];
    const title = article.headline.main;
    const snippet = article.snippet;
    let li = document.createElement('li');
    li.className = 'articleClass';
    li.innerText = snippet;
    responseContainer.appendChild(li);
}

