console.log("hello");

// array di oggetti
const card = [
    {
        id: 1,
        title: "accusamus beatae ad facilis cum similique qui sunt",
        url: "https://cdn.pixabay.com/photo/2016/11/29/04/19/ocean-1867285_640.jpg",

    },
    {
        id: 2,
        title: "reprehenderit est deserunt velit ipsam",
        url: "https://img.lovepik.com/photo/20211120/medium/lovepik-sea-picture_500486482.jpg",

    },
    {
        id: 3,
        title: "officia porro iure quia iusto qui ipsa ut modi",
        url: "https://images.unsplash.com/photo-1470329508532-be27fda94658?fm=jpg&q=60&w=3000&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxleHBsb3JlLWZlZWR8Mnx8fGVufDB8fHx8fA%3D%3D",

    },
    {
        id: 4,
        title: "culpa odio esse rerum omnis laboriosam voluptate repudiandae",
        url: "https://cdn.pixabay.com/photo/2024/05/22/16/37/seagull-8781110_640.jpg",

    },
    {
        id: 5,
        title: "natus nisi omnis corporis facere molestiae rerum in",
        url: "https://media.istockphoto.com/id/467367026/it/foto/perfetto-cielo-e-mare.jpg?s=612x612&w=0&k=20&c=9iHiYy1ae5FVn0fC7UgslmJi6CMxuYuHdauu9O3jvgk=",

    },
    {
        id: 6,
        title: "accusamus ea aliquid et amet sequi nemo",
        url: "https://thumbs.dreamstime.com/b/spiaggia-e-mare-18378306.jpg",

    }

];

console.log(card);


//ciclo forEach
card.forEach(element => {
    console.log(element);

});

//ciclo for
for (let i = 0; i < card.length; i++) {
    const element = card[i];
    console.log(card);

}




function displayImages() {
    const cardContainer = document.getElementById('card-container');
}





//chiamata AJAX all’API di JSON Placeholder
axios
    .get("https://jsonplaceholder.typicode.com/photos?_limit=6")
    .then((response) => {
        console.log(response.data)
    });



