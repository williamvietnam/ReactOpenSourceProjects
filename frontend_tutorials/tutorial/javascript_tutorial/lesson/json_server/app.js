var endPoint = 'http://localhost:3000/courses';

function start() {
    getCourses(function (cousrses) {
        console.log(cousrses);
        renderCourses(cousrses);
    });

    handleCreateForm();
}

start();

// Function
function getCourses(callback) {
    fetch(endPoint)
        .then(function (response) {
            return response.json();
        })
        .then(callback);
}

function createCourse(data) {
    var options = {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
          },
        body: JSON.stringify(data)
    }
    fetch(endPoint, options)
        .then(function(response){
            response.json();
        })
        .then(callback);
}

function handleDeleteCoure(id){
    console.log(id)
    var options = {
        method: 'DELETE',
        headers: {
            'Content-Type': 'application/json'
          }
    };
    fetch(endPoint + '/' + id, options)
        .then(function(response){
            response.json();
        })
        .then(callback);
}

function renderCourses(cousrses) {
    var listCoursesElement = document.querySelector('#list-courses');
    var htmls = cousrses.map(function (cousrse) {
        return `
        <li>     
             <h4>${cousrse.name} </h4>
             <p>${cousrse.description} </p>
             <button onclick ="handleDeleteCoure(${cousrse.id})"> Delete </button>
        </li>
    `;
    });
    listCoursesElement.innerHTML = htmls.join('');
}

function handleCreateForm() {
    var createBtn = document.querySelector('#create');

    createBtn.onclick = function () {
        var name = document.querySelector('input[name="name"]').value;
        var description = document.querySelector('input[name="description"]').value;
        
        var formData = {
            name: name,
            description: description
        }

        createCourse(formData);
    };
}