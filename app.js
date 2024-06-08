var getDiv = document.getElementById('getDiv')

var getSearch = document.getElementById('news')
function getNews(){

    fetch(`https://newsapi.org/v2/everything?q=${getSearch.value}&from=2024-05-06&sortBy=publishedAt&apiKey=347185c75723446498bff3f192c708ed`)
.then(function(data){
    return data.json()
})
.then(function(data){
    for(var i = 0; i < data.articles.length; i++){
        getDiv.innerHTML += `<div class="card m-4" style="width: 18rem;">
  <img src="${data.articles[i].urlToImage }" class="card-img-top" alt="...">
  <div class="card-body">
    <h5 class="card-title">Card title</h5>
    <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
    <a href="#" class="btn btn-primary">Go somewhere</a>
  </div>
</div>`
    }
})
.catch(function(err){
    console.log(err)
})
}



