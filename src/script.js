// const { document } = require("postcss");

// const { document } = require("postcss");

// click the seat the functiom will be start from here=document.getElementsByClassName('bg-seat');
const seat_selection = document.querySelectorAll(".bg-seat");

for (const click_seat of seat_selection) {
  click_seat.addEventListener("click", single_seat_selection);
}

function single_seat_selection(event) {
  const countSeat = document.getElementById("seat_num");
  let value = parseInt(countSeat.innerText);
  if (value <= 3) {
    select_seat_green(event.target);
    selectedSeatCount(event.target);
  } else {
    alert("You cant select more than 4 seats at a time");
  }
remain_seat(event.target);
}

// make select seat green
function select_seat_green(click_seat) {
  click_seat.classList.add("green-seat");
}

// seat select
function selectedSeatCount(click_seat) {
  const countSeat = document.getElementById("seat_num");
  let value = parseInt(countSeat.innerText);
  value++;
  countSeat.innerText = value;
  
}
// REMAIN SEAT
function remain_seat(remain_value) {
    const remain_seat=document.getElementById('remain-seat');

    let last_remain_seat=parseInt(remain_seat.innerText);
    // console.log(last_remain_seat);

    last_remain_seat--;
    remain_seat.innerText=last_remain_seat;
    
    
}