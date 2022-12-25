window.onload = function()
{
    subscribeButton();
}

function subscribeButton() {
    document.getElementById("download").addEventListener("click", e => {
        const ul = document.getElementById('users');
        ul.innerHTML = "";

        for (let i = 0; i < 5; i++) {
            load();
        }
    });
}

function load() {
    const res = fetch('https://randomuser.me/api/?results=5');
    const ul = document.getElementById('users');

    fetch('https://randomuser.me/api')
    .then((response) => {
        return response.json();
    })
    .then((data) => {
        let authors = data.results;
        console.log(authors);
        
        return authors.map(function(user) {
            let li = createNode('li');
            let img = createNode('img');
            let span = createNode('div');
            
            img.src = user.picture.large;
            span.innerHTML = `
            <div class="info">Cell:${user.cell}</div>
            <div class="info">Country: ${user.location.country}</div>
            <div class="info">Email: ${user.email}</div>
            <div class="info">Coordinates: ${user.location.coordinates.latitude}, ${user.location.coordinates.longitude}</div>`;

            append(li, img);
            append(li, span);
            append(ul, li);
        });
    });
}

function createNode(element) {
  return document.createElement(element);
}

function append(parent, el) {
  return parent.appendChild(el);
}