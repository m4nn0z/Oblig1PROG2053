function getData() {
    limit = 15; //Amount of posts to fetch
    fetch("https://jsonplaceholder.typicode.com/posts")
    .then((response) => {
        if (!response.ok) {
            throw new Error("Error: " + response.status);
        }
        return response.json();
    })
    .then((posts) => {
        let container = document.getElementById("posts");

        let i = 0;
        for (post of posts) {
            if (i < limit) {
                // Creates the html elements and adds content from the fetch
                const article = document.createElement("div");

                const title = document.createElement("h2");
                title.textContent = post.title;

                const body = document.createElement("p");
                body.textContent = post.body;

                // Appends the content from the fetch to the html page
                article.appendChild(title);
                article.appendChild(body);
                container.appendChild(article);
            }
            i++;
        }
    })
}

getData();

// Event listener for scrolling
window.onscroll = function(event) {
    //Checks if scrolling has reached the bottom of the page
    if ((window.innerHeight + window.scrollY) >= document.body.scrollHeight) {
        getData();
    }
  };