var hours = ["10am", "11am", "12pm", "1pm", "2pm", "3pm", "4pm", "5pm", "6pm"];
var cookiesPerHour = [];
var sectionEl = document.getElementById("saleListBell");
var ulEl = document.createElement("ul");

var bellevue = {
  minCustomer: 20,
  maxCustomer: 48,
  aveCookiesPerCustomer: 1.3,
};
bellevue.randomNum = function(min, max) {
  return Math.floor(Math.random() * (max - min) + min);
};
for (var i = 0; i < hours.length; i++) {
  var randomCustomerNum = bellevue.randomNum(bellevue.minCustomer,bellevue.maxCustomer);
  var cookiesSold = Math.floor(randomCustomerNum * bellevue.aveCookiesPerCustomer);
  cookiesPerHour.push(hours[i] + ": " + cookiesSold);
}
  console.log(cookiesPerHour);
  console.log(cookiesSold);

for (var i = 0; i < cookiesPerHour.length; i++) {
  var liEl = document.createElement("li");
  liEl.textContent = cookiesPerHour[i];
  ulEl.appendChild(liEl);
  sectionEl.appendChild(ulEl);
}
