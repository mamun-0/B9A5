const seats_container = document.querySelector(".seats_container");
const seats_button = seats_container.querySelectorAll("button");

const availableSeat = document.querySelector(".availableSeat");
const bookedSeat = document.querySelector(".bookedSeat");

let initialAvailableSeat = 8;
let initialBookedSeat = 0;

for (let button of seats_button) {
  button.addEventListener("click", function (evt) {
    if (initialBookedSeat === 4) {
      alert("You booked maximun number of seat.");
    }
    if (initialBookedSeat < 4) {
      evt.target.classList.add("seat_book");
      initialBookedSeat++;
      initialAvailableSeat--;
      bookedSeat.innerText = initialBookedSeat;
      availableSeat.innerText = initialAvailableSeat;
    }
  });
}
