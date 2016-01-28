var hours = ["10am", "11am", "12pm", "1pm", "2pm", "3pm", "4pm", "5pm", "6pm"];
var cookiesPerHour = [];
var sectionEl = document.getElementById("saleListSC");
var ulEl = document.createElement("ul");

var southCenter = {
  minCustomer: 11,
  maxCustomer: 38,
  aveCookiesPerCustomer: 1.9,
};
southCenter.randomNum = function(min, max) {
  return Math.floor(Math.random() * (max - min) + min);
};
for (var i = 0; i < hours.length; i++) {
  var randomCustomerNum = southCenter.randomNum(southCenter.minCustomer,southCenter.maxCustomer);
  var cookiesSold = Math.floor(randomCustomerNum * southCenter.aveCookiesPerCustomer);
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
