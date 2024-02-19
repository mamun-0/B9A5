const modal = document.getElementById("myModal");
const btn = document.getElementById("openModalButton");
const span = document.getElementById("closeModalButton");

btn.onclick = function () {
  modal.classList.remove("hidden");
};

span.onclick = function () {
  modal.classList.add("hidden");
};

window.onclick = function (event) {
  if (event.target == modal) {
    modal.classList.add("hidden");
  }
};
