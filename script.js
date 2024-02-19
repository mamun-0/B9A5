const seats_container = document.querySelector(".seats_container");
const seats_button = seats_container.querySelectorAll("button");

const availableSeatUI = document.querySelector(".availableSeat");
const bookedSeatUI = document.querySelector(".bookedSeat");

const totalUI = document.querySelector(".total");
const grandTotalUI = document.querySelector(".grand_total");

const apply_btn = document.querySelector(".apply_btn");
const copupon_inputUI = document.querySelector(".copupon_input");
const apply_btn_container = document.querySelector(".apply_btn_container");
const dynamic_seat = document.getElementById("dynamic_seat");
const phone_number = document.getElementById("phone");
const btn_next = document.querySelector(".btn_next");

let initialAvailableSeat = 8;
let initialBookedSeat = 0;
let total = 0;
let grandTotal = 0;

for (let button of seats_button) {
  button.addEventListener("click", function (evt) {
    if (initialBookedSeat === 4) {
      alert("You booked maximun number of seat.");
    }
    if (initialBookedSeat < 4) {
      evt.target.classList.add("seat_book");
      createUI(dynamic_seat, evt.target.innerText);
      initialBookedSeat++;
      initialAvailableSeat--;
      bookedSeatUI.innerText = initialBookedSeat;
      availableSeatUI.innerText = initialAvailableSeat;
      total = totaCalculation(initialBookedSeat);
      grandTotal = total;
      totalUI.innerText = total;
      grandTotalUI.innerText = total;
    }
    if (initialBookedSeat === 4) {
      apply_btn.classList.add("active_button");
      apply_btn.classList.remove("disable_button");
    } else {
      apply_btn.classList.add("disable_button");
    }
  });
}

apply_btn.addEventListener("click", function () {
  const value = copupon_inputUI.value;
  if (initialBookedSeat !== 4) {
    return;
  }
  if (value === "NEW15") {
    grandTotal = grandTotal - grandTotal * 0.15;
    grandTotalUI.innerText = grandTotal;
    apply_btn_container.classList.add("d-none");
    return;
  } else if (value === "Couple 20") {
    grandTotal = grandTotal - grandTotal * 0.2;
    grandTotalUI.innerText = grandTotal;
    apply_btn_container.classList.add("d-none");
    return;
  }
  alert("Invalid coupon code!");
});

function createUI(targetElement, seat_number = "Standing") {
  const div = document.createElement("div");
  const p1 = document.createElement("p");
  const p2 = document.createElement("p");
  const p3 = document.createElement("p");

  div.classList.add(
    "flex",
    "justify-between",
    "font-bold",
    "font-normal",
    "p-3"
  );
  p1.innerText = seat_number;
  p2.innerText = "Economy";
  p3.innerText = "550";

  div.append(p1);
  div.append(p2);
  div.append(p3);
  targetElement.append(div);
}
phone_number.addEventListener("input", function (evt) {
  console.log(evt.target.value);
  if (evt.target.value) {
    btn_next.classList.remove("disable_button");
    btn_next.classList.add("active_button");
  } else {
    btn_next.classList.add("disable_button");
  }
});
function totaCalculation(tickets) {
  return 550 * tickets;
}
