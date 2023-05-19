const url = "https://www.hjulstad.one/exam1/wp-json/wp/v2/media?per_page=15"
const url2 = "https://www.hjulstad.one/exam1/wp-json/wp/v2/posts?per_page=15"
const container = document.querySelector(".slides")
const loader = document.querySelector("#loading");

import {backToTop} from "./backtotop.js";

const displayLoading = () => {
  loader.classList.add("display");
  setTimeout(() => {
    loader.classList.remove("display");
  }, 5000);
};
const hideLoading = () => {
  loader.classList.remove("display");
};

const getImages = async () => {
    displayLoading();
    try {
        const res = await fetch(url);
        const results = await res.json();
        console.log(results);
        const response = await fetch(url2);
        const getid = await response.json();
        hideLoading();
        console.log(getid);

        for (let i=0; i < results.length; i++) {
            const obj = results[i];
            const link = document.createElement("a");
            link.href = `specific.html?id=${getid[i].id}`
            const listItem = document.createElement("li");
            const dogImg = document.createElement("img");
            dogImg.src = obj.media_details.sizes.medium.source_url
            dogImg.classList.add("slide");
            dogImg.classList.add("dogimg");

            link.appendChild(listItem);
            listItem.appendChild(dogImg);
            container.appendChild(link);

        }
    } catch (error) {
        
    }
};
getImages()

const slidesContainer = document.getElementById("slides-container");
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


  
