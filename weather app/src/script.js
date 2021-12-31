function searchCity(event) {
  event.preventDefault();
  console.log("Hello");
  let input = document.querySelector(`.findCity`);
  console.log(input);
  console.log(event.target.value);
  let city = document.querySelector("#mainCity");
  city.innerHTML = event.target.value;
}

let input = document.querySelector("#findCity");
input.addEventListener("search", searchCity);
console.log(input);

let now = new Date();
console.log(now.getDate());

let days = [
  "Sunday",
  "Monday",
  "Tuesday",
  "Wednesday",
  "Thursday",
  "Friday",
  "Saturday",
];
let day = days[now.getDay()];

let hour = now.getHours();

let minutes = now.getMinutes();

let current = document.querySelector("#currentDayTime");
current.innerHTML = `${day} ${hour}:${minutes}`;
