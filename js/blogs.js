const url = "https://www.hjulstad.one/exam1/wp-json/wp/v2/media?per_page=15"
const url2 = "https://www.hjulstad.one/exam1/wp-json/wp/v2/posts?per_page=15"
const container = document.querySelector(".gridcontainer")
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

        for (let i=0; i < 10; i++) {
            const obj = results[i];
            const link = document.createElement("a");
            link.href = `specific.html?id=${getid[i].id}`
            const listItem = document.createElement("div");
            listItem.classList.add("card");
            const dogImg = document.createElement("img");
            dogImg.src = obj.media_details.sizes.medium.source_url
            dogImg.classList.add("dogimg");
            const dogTitle = document.createElement("h4");
            dogTitle.innerHTML = getid[i].title.rendered
            dogTitle.classList.add("dogtitle");
            const published = document.createElement("h5");
            published.innerHTML = `Published at: ${obj.date_gmt}`;


            link.appendChild(listItem);
            listItem.appendChild(dogTitle);
            listItem.appendChild(dogImg);
            listItem.appendChild(published);
            container.appendChild(link);
        }

        const viewMore = document.createElement("button");
        viewMore.innerHTML = "View more posts"
        viewMore.classList.add("viewmore");
        container.appendChild(viewMore);
        viewMore.onclick = () => {
            for (let i=10; i < results.length; i++) {
                const obj = results[i];
                const link = document.createElement("a");
                link.href = `specific.html?id=${getid[i].id}`
                const listItem = document.createElement("div");
                listItem.classList.add("card");
                const dogImg = document.createElement("img");
                dogImg.src = obj.media_details.sizes.medium.source_url
                dogImg.classList.add("dogimg");
                const dogTitle = document.createElement("h4");
                dogTitle.innerHTML = getid[i].title.rendered
                dogTitle.classList.add("dogtitle");
                const published = document.createElement("h5");
                published.innerHTML = `Published at: ${obj.date_gmt}`;
                published.classList.add("published");


                link.appendChild(listItem);
                listItem.appendChild(dogTitle);
                listItem.appendChild(dogImg);
                listItem.appendChild(published);
                container.appendChild(link);

            } 
            viewMore.style.display = "none";
        }
            

    } catch (error) {
        console.log(error);
    }
};
getImages()