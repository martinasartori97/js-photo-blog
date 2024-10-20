console.log("hello");
//chiamata AJAX all’API di JSON Placeholder
axios.get("https://jsonplaceholder.typicode.com/photos?_limit=6")
    .then((response) => {
        console.log(response.data)
        const cardContainer = document.querySelector(`.container`);
    

        const row = document.createElement('div');
        row.className = 'row row-cols-1 row-cols-md-3 g-4';
        cardContainer.appendChild(row);

        response.data.forEach((card) => {
            const cardElement = document.createElement('div');
            cardElement.className = 'col';

            cardElement.innerHTML = `  
            <div class="card h-100">
                <img src="${card.url}" class="card-img-top" alt="${card.title}"> 
                <img class="pallino" src="img/pin.svg" alt="">
                <div class="card-body">
                    <p class="card-text">${card.title}</p>
                </div>
            </div>`;

            row.appendChild(cardElement);
        });
    });


cardElement.addEventListener("click", function () {
    
});





