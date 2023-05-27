const url = "https://www.hjulstad.one/exam1/wp-json/wp/v2/media?per_page=15"
const url2 = "https://www.hjulstad.one/exam1/wp-json/wp/v2/posts?per_page=15"
const container = document.querySelector(".slider-wrapper")
const slidesContainer = document.getElementById("slides-container");

import {backToTop} from "./backtotop.js";
import {displayLoading, hideLoading, loader} from "./loading.js";



const getImages = async () => {
    displayLoading();
    try {
        const res = await fetch(url);
        const results = await res.json();
        const response = await fetch(url2);
        const getid = await response.json();
        hideLoading();

        for (let i=0; i < results.length; i++) {
            const obj = results[i];
            const listItem = document.createElement("li");
            const link = document.createElement("a");
            link.href = `specific.html?id=${getid[i].id}`
            const dogImg = document.createElement("img");
            dogImg.src = obj.media_details.sizes.medium.source_url;
            dogImg.alt = `${obj.alt_text}`;
            dogImg.classList.add("slide");
            dogImg.classList.add("dogimg");

            listItem.appendChild(link);
            link.appendChild(dogImg);
            slidesContainer.appendChild(listItem);

        }
    } catch (error) {
      const errorDiv = document.createElement("div");
      const errorMsg = document.createElement("p");
      errorMsg.classList.add("error");
      errorMsg.innerHTML = "An error occurred while fetching data, sorry for the inconvenience.";
      errorDiv.appendChild(errorMsg);
      container.appendChild(errorDiv)
      console.log(error);
    }
};
getImages()


const slide = document.querySelector(".slide");
const prevButton = document.getElementById("slide-arrow-prev");
const nextButton = document.getElementById("slide-arrow-next");

nextButton.addEventListener("click", () => {
    const slideWidth = slidesContainer.clientWidth;
      slidesContainer.scrollLeft += slideWidth;
  });
  prevButton.addEventListener("click", () => {
    const slideWidth = slidesContainer.clientWidth;
    slidesContainer.scrollLeft -= slideWidth;
  });


  
