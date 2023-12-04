let btnOpen = document.querySelector(".btnMenu");
let btnClose = document.querySelector(".btnClose");
let aside = document.getElementsByTagName("aside")[0];

btnOpen.addEventListener("click", () => {
  aside.style.transform = "translateX(0px)";
  aside.style.transition = "1.2s all";
document.body.style.overflow = 'hidden'
  setTimeout(() => {
    document.body.style.background = "rgba(0,0,0,.5)"
  }, 1000);
});
btnClose.addEventListener("click", () => {
  aside.style.transform = "translateX(300px)";
document.body.style.overflow = "auto"
  aside.style.transition = "1.2s all";
  setTimeout(() => {
    document.body.style.background = "#F9F4E8"
  }, 1000);
});
// alert(innerWidth)
