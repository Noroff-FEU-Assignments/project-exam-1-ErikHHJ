import {backToTop} from "./backtotop.js";
import {displayLoading, hideLoading, loader} from "./loading.js";

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
        hideLoading()
        const blogTitle = document.createElement("h1");
        blogTitle.innerHTML = `Blog post:${results.title.rendered}`
        document.title = `Dog-Blog | ${results.title.rendered}`
        content.innerHTML += results.content.rendered
        content.prepend(blogTitle);
        const currentPage = document.querySelector(".currentpage");
        currentPage.innerHTML += ` ${results.title.rendered}`
        const specificImgArr = document.getElementsByTagName("img");
        const specificImg = specificImgArr[0]
        specificImg.onclick = () => {
          document.body.scrollTop = 0; //For Safari
          document.documentElement.scrollTop = 0; //For Chrome
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
        const errorMsg = document.createElement("p");
        errorMsg.classList.add("error");
        errorMsg.innerHTML = "An error occurred while fetching data, sorry for the inconvenience. <br> Note: This page will only display a blog if an item was clicked on blogs or home page";
        errorDiv.appendChild(errorMsg);
        content.appendChild(errorDiv)
        console.log(error);
    }
}
specificRender();

