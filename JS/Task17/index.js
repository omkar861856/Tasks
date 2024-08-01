const card = function(){
    const images = ['https://images.pexels.com/photos/4547591/pexels-photo-4547591.jpeg?auto=compress&cs=tinysrgb&w=600',
      'https://images.pexels.com/photos/7764/pexels-photo.jpg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
      'https://images.pexels.com/photos/9995704/pexels-photo-9995704.jpeg?auto=compress&cs=tinysrgb&w=600',
    ]
const box = document.getElementById("box");
box.innerHTML=" "
 images.map(image=>  {
    box.innerHTML+=
 `<div class="card" style="width: 18rem;">
        <img src=${image} class="card-img-top" alt="..." />
        <div class="card-body">
          <h5 class="card-title">Card title</h5>
          <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
        </div>
        <ul class="list-group list-group-flush">
          <li class="list-group-item">An item</li>
          <li class="list-group-item">A second item</li>
          <li class="list-group-item">A third item</li>
        </ul>
        <div class="card-body">
          <a href="#" class="card-link">Card link</a>
          <a href="#" class="card-link">Another link</a>
        </div>
      </div>`
 
    })

 
}



document.querySelector("#button").addEventListener("click",card);
