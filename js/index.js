const url = "https://www.hjulstad.one/exam1/wp-json/wp/v2/media?per_page=15"
const container = document.querySelector(".slides")

const getImages = async () => {
    try {
        const res = await fetch(url);
        const results = await res.json();
        console.log(results);

        for (let i=0; i < results.length; i++) {
            const obj = results[i];

            const listItem = document.createElement("li");
            const dogImg = document.createElement("img");
            dogImg.src = obj.media_details.sizes.medium.source_url
            dogImg.classList.add("slide");
            dogImg.classList.add("dogimg");

            listItem.appendChild(dogImg);
            container.appendChild(listItem);

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