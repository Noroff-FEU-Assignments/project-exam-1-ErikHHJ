const loader = document.querySelector("#loading");
const displayLoading = () => {
    loader.classList.add("display");
    setTimeout(() => {
      loader.classList.remove("display");
    }, 5000);
  };
  const hideLoading = () => {
    loader.classList.remove("display");
  };
const content = document.querySelector(".content");


const queryString = document.location.search;
const params = new URLSearchParams(queryString);
const id = params.get("id");
const url = "https://www.hjulstad.one/exam1/wp-json/wp/v2/posts/" + id;

const specificRender = async () => {
    displayLoading()
    try {
        const res = await fetch(url);
        const results = await res.json();
        console.log(results)
        hideLoading()
        const blogTitle = document.createElement("h1");
        blogTitle.innerHTML = `Blog post:${results.title.rendered}`
        
        content.innerHTML += results.content.rendered
        content.prepend(blogTitle);
        
        


    } catch(error){
        const errorDiv = document.createElement("div");
        const errorMsg = document.createElement("h2");
        errorMsg.classList.add("error");
        errorMsg.innerHTML = "An error occurred while fetching data, sorry for the inconvenience. <br> Note: This page will only display detailed statistics if an item was clicked on home page.";
        errorDiv.appendChild(errorMsg);
        grid.appendChild(errorDiv)
    }
}
specificRender();