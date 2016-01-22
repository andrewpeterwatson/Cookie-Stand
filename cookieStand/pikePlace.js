var shops = []

var sectionEl = document.getElementById("saleListPike");
var ulEl = document.createElement("ul");
var hours = ["10am", "11am", "12pm", "1pm", "2pm", "3pm", "4pm", "5pm", "6pm"];
var shop = {
  location: "Pike Place",
  minCustomer: 17,
  maxCustomer: 88,
  aveCookiesPerCustomer: 5.2,
  cookiesPerHour: [],
  totalSales: [],
};
shop.randomNum = function(min, max) {
  return Math.floor(Math.random() * (max - min) + min);
};
for (var i = 0; i < hours.length; i++) {
  var randomCustomerNum = shop.randomNum(shop.minCustomer,shop.maxCustomer);
  var cookiesSold = Math.floor(randomCustomerNum * shop.aveCookiesPerCustomer);
  shop.cookiesPerHour.push(hours[i] + ": " + cookiesSold);
};
  console.log(shop.cookiesPerHour);
  console.log(cookiesSold);
// TODO: Turn this into a Render meathod

shop.cookiesPerHour.push("Total: " + cookiesSold)
for (var i = 0; i < shop.cookiesPerHour.length; i++) {
  var liEl = document.createElement("li");
  liEl.textContent = shop.cookiesPerHour[i];
  ulEl.appendChild(liEl);
  sectionEl.appendChild(ulEl);
}
// var liElTotal = document.getElementById("li");
// liElTotal.textContent = "Total: " + shop.cookiesPerHour;
// sectionEl.appendChild(ulEl);


shops.push(shops);
