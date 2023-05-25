import {backToTop} from "./backtotop.js";

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
const main = document.querySelector("main");


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
        document.title = `Dog-Blog | ${results.title.rendered}`
        content.innerHTML += results.content.rendered
        content.prepend(blogTitle);
        const currentPage = document.querySelector(".currentpage");
        currentPage.innerHTML += ` ${results.title.rendered}`
        
        const idNumber = Number(id);
        
        const specificImg = document.querySelector(`.wp-image-${idNumber+1}`);
        specificImg.onclick = () => {
          const modalDiv = document.createElement("div");
          modalDiv.classList.add("bg");
          main.prepend(modalDiv);

          const modalImg = document.createElement("img");
          modalImg.src = specificImg.src
          modalDiv.appendChild(modalImg);

          const modalx = document.createElement("div");
          modalx.classList.add("modalx");
          modalx.innerHTML = `<i class="fa-regular fa-x"></i>`
          modalDiv.appendChild(modalx);

          modalx.onclick = () => {
            modalDiv.remove()
          }
          



        }

        
        


    } catch(error){
        const errorDiv = document.createElement("div");
        const errorMsg = document.createElement("h2");
        errorMsg.classList.add("error");
        errorMsg.innerHTML = "An error occurred while fetching data, sorry for the inconvenience. <br> Note: This page will only display detailed statistics if an item was clicked on home page.";
        errorDiv.appendChild(errorMsg);
        content.appendChild(errorDiv)
        console.log(error);
    }
}
specificRender();

