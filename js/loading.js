export const loader = document.querySelector("#loading");
export const displayLoading = () => {
    loader.classList.add("display");
    setTimeout(() => {
      loader.classList.remove("display");
    }, 5000);
  };
 export const hideLoading = () => {
    loader.classList.remove("display");
  };