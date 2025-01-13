

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

  create_economy(click_seat);
  next_button_enable(click_seat);
}

// seat select
function selectedSeatCount(click_seat) {
  const countSeat = document.getElementById("seat_num");
  let value = parseInt(countSeat.innerText);
  value++;
  countSeat.innerText = value;
  total_money(value);
}
// REMAIN SEAT
function remain_seat(remain_value) {
  const remain_seat = document.getElementById("remain-seat");

  let last_remain_seat = parseInt(remain_seat.innerText);
  // console.log(last_remain_seat);

  last_remain_seat--;
  remain_seat.innerText = last_remain_seat;
}

// create economy
function create_economy(click_seat) {
  const new_seat = document.getElementById("new-seat");

  const new_span = document.createElement("span");
  new_span.innerText = click_seat.innerText;

  const new_span2 = document.createElement("span");
  new_span2.innerText = "Economy";
  const new_span3 = document.createElement("span");
  new_span3.innerText = "550";
  new_span3.classList.add("text-right");
  new_seat.appendChild(new_span);
  new_seat.appendChild(new_span2);
  new_seat.appendChild(new_span3);
 

}
// total money

function total_money(ticket_Quantity) {
  const total_ticket_price = ticket_Quantity * 550;
  const total_money_place = document.getElementById("total-money");
  total_money_place.innerText = total_ticket_price;
}

// next button enable

  const bangladeshiPhoneRegex = /^(?:\+8801|01)[3-9]\d{8}$/;
const main_page=document.getElementById('main-page');
const succes_page=document.getElementById('success-page');
const footer=document.getElementById('footer')

function next_button_enable(click) {
  const phn_num=document.getElementById('phoneNumber');

// bangladesi number validity
phn_num.addEventListener('keyup',function (e) {
  const phn_user_input=e.target.value;
 
  if (bangladeshiPhoneRegex.test(e.target.value)) {
    
 buttton_will_enable();
  } else {
    console.log('unvalid');
    
  }
  
})

}
function buttton_will_enable(params) {
  const button_enable=document.getElementById('last-button');
  button_enable.removeAttribute('disabled')
  button_enable.addEventListener('click',function (e) {
    main_page.classList.add('hidden');
    footer.classList.add('hidden');
    succes_page.classList.remove('hidden');
  })
  
}
// enable apply button
function enable_apply_button(params) {
  const apply_button=document.getElementById('apply-button');
  console.log(apply_button);
  
}