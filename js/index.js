var btn = document.getElementById("btn").addEventListener("click", Limpiar);
var con = 0;
var div = document.getElementById("container-main");
var div1 = document.getElementById("titles");

function Limpiar() {
    div.innerHTML = ``
    getPost();
}

function getPost() {
    let cant = document.getElementById("cant").value;
    fetch('https://jsonplaceholder.typicode.com/photos')
    .then((res) => {
        return res.json();
    })

    .then((post) => {
        div1.innerHTML = `  
        <div class="title-id"> <b>ID</b> </div>
        <div class="title-name"> <b>Name</b></div>
        <div class="title-image"> <b>Image</b></div>
        `
        con = 0;
        for (let index = 0; index < cant; index++) {
            div.innerHTML += `<hr>
            <div class="container">
                <div class="container-id"> 
                    <h5 class="container-title">${post[con].id}</h5>
                </div>
                <div class="container-body">
                    <p class="container-text">${post[con].title}</p>
                </div>
                <img class="container-img" src="${post[con].thumbnailUrl}">
            </div>
            `
            con += 1;
        }
    })
}
