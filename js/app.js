const uReadMessage = document.querySelectorAll(".uread");
const uread = document.getElementById("notifications");
const markAll = document.getElementById("mark_all");

uread.innerHTML = uReadMessage.length;

uReadMessage.forEach((message) => {
  message.addEventListener("click", () => {
    message.classList.remove("uread");
    const newUnReadMeassage = document.querySelectorAll(".uread");
    uread.innerHTML = newUnReadMeassage.length;
  });
});

markAll.addEventListener("click", () => {
  uReadMessage.forEach((message) => {
    message.classList.remove("uread");
  });
  const newUnReadMeassage = document.querySelectorAll(".uread");
  uread.innerHTML = newUnReadMeassage.length;
});
