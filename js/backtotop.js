export const backToTop = document.querySelector(".backtotop");

  backToTop.onclick = () => {
    document.body.scrollTop = 0; //For Safari
    document.documentElement.scrollTop = 0; //For Chrome
  }
