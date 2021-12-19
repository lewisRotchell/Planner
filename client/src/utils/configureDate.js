const months = [
  "January",
  "February",
  "March",
  "April",
  "May",
  "June",
  "July",
  "August",
  "September",
  "October",
  "November",
  "December",
];
const weekdays = [
  "Sunday",
  "Monday",
  "Tuesday",
  "Wednesday",
  "Thursday",
  "Friday",
  "Saturday",
];

let now = new Date();

const year = now.getFullYear();
const month = now.getMonth();
const date = now.getDate();
const day = now.getDay();

let append = "th";
if (date % 10 === 1 && date !== 11) {
  append = "st";
}

if (date % 10 === 2 && date !== 12) {
  append = "rd";
}

if (date % 10 === 3 && date !== 13) {
  append = "rd";
}

export const configuredDate = {
  year,
  month: months[month],
  date,
  day: weekdays[day],
  append,
};
