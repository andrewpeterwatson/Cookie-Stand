var sectionEl = document.getElementById("saleListPike");
var ulEl = document.createElement("ul");
var hours = ["10am", "11am", "12pm", "1pm", "2pm", "3pm", "4pm", "5pm", "6pm"];
var pikePlace = {
  location: "Pike Place",
  minCustomer: 17,
  maxCustomer: 88,
  aveCookiesPerCustomer: 5.2,
  cookiesPerHour: [],
  totalSales: [],
};
pikePlace.randomNum = function(min, max) {
  return Math.random() * (max - min) + min;
};
for (var i = 0; i < hours.length; i++) {
  var randomCustomerNum = pikePlace.randomNum(pikePlace.minCustomer,pikePlace.maxCustomer);
  var cookiesSold = Math.floor(randomCustomerNum * pikePlace.aveCookiesPerCustomer);
  pikePlace.cookiesPerHour.push(hours[i] + ": " + cookiesSold);
};
  console.log(pikePlace.cookiesPerHour);
  console.log(cookiesSold);
// TODO: Turn this into a Render meathod
for (var i = 0; i < pikePlace.cookiesPerHour.length; i++) {
  var liEl = document.createElement("li");
  liEl.textContent = pikePlace.cookiesPerHour[i];
  ulEl.appendChild(liEl);
  sectionEl.appendChild(ulEl);
}
// var liElTotal = document.getElementById("li");
// liElTotal.textContent = "Total: " + pikePlace.cookiesPerHour;
// sectionEl.appendChild(ulEl);
