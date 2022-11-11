var endPoint = 'http://localhost:3000/posts';

fetch(endPoint)
    .then(function (response) {
        return response.json();
    })
    .then(function (posts) {
        var htmls  =posts.map(function(posts){
            return `<li> 
            <h3>${posts.title}</h3>
            <p>${posts.body}</p>
            </li>`;
        });

        var html = htmls.join('');
        document.getElementById('body').innerHTML = html;
    })
    .catch(function(err){
        console.log(err)
    });
