var shops = []
var sectionEl = document.getElementById("saleListPike");
var headerEl = document.createElement("h1")
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
  return Math.random() * (max - min) + min;
};
for (var i = 0; i < hours.length; i++) {
  randomCustomerNum = shop.randomNum(shop.minCustomer,shop.maxCustomer);
  var cookiesSold = Math.floor(randomCustomerNum * shop.aveCookiesPerCustomer);
  shop.cookiesPerHour.push(hours[i] + ": " + cookiesSold);
};
shop.totalSales.push(Math.floor(cookiesSold * randomCustomerNum));
shop.cookiesPerHour.push("Total: " + shop.totalSales)
headerEl.textContent = shop.location;
sectionEl.appendChild(headerEl);
for (var i = 0; i < shop.cookiesPerHour.length; i++) {
  var liEl = document.createElement("li");
  liEl.textContent = shop.cookiesPerHour[i];
  ulEl.appendChild(liEl);
  sectionEl.appendChild(ulEl);
}

shops.push(shops);

var sectionEl = document.getElementById("saleListPike");
var headerEl = document.createElement("h1")
var ulEl = document.createElement("ul");
var hours = ["10am", "11am", "12pm", "1pm", "2pm", "3pm", "4pm", "5pm", "6pm"];
var shop = {
  location: "SeaTac",
  minCustomer: 6,
  maxCustomer: 24,
  aveCookiesPerCustomer: 1.2,
  cookiesPerHour: [],
  totalSales: [],
};
shop.randomNum = function(min, max) {
  return Math.random() * (max - min) + min;
};
for (var i = 0; i < hours.length; i++) {
  randomCustomerNum = shop.randomNum(shop.minCustomer,shop.maxCustomer);
  var cookiesSold = Math.floor(randomCustomerNum * shop.aveCookiesPerCustomer);
  shop.cookiesPerHour.push(hours[i] + ": " + cookiesSold);
};
shop.totalSales.push(Math.floor(cookiesSold * randomCustomerNum));
shop.cookiesPerHour.push("Total: " + shop.totalSales)
headerEl.textContent = shop.location;
sectionEl.appendChild(headerEl);
for (var i = 0; i < shop.cookiesPerHour.length; i++) {
  var liEl = document.createElement("li");
  liEl.textContent = shop.cookiesPerHour[i];
  ulEl.appendChild(liEl);
  sectionEl.appendChild(ulEl);
}

var sectionEl = document.getElementById("saleListPike");
var headerEl = document.createElement("h1")
var ulEl = document.createElement("ul");
var hours = ["10am", "11am", "12pm", "1pm", "2pm", "3pm", "4pm", "5pm", "6pm"];
var shop = {
  location: "Southcenter",
  minCustomer: 11,
  maxCustomer: 38,
  aveCookiesPerCustomer: 1.9,
  cookiesPerHour: [],
  totalSales: [],
};
shop.randomNum = function(min, max) {
  return Math.random() * (max - min) + min;
};
for (var i = 0; i < hours.length; i++) {
  randomCustomerNum = shop.randomNum(shop.minCustomer,shop.maxCustomer);
  var cookiesSold = Math.floor(randomCustomerNum * shop.aveCookiesPerCustomer);
  shop.cookiesPerHour.push(hours[i] + ": " + cookiesSold);
};
shop.totalSales.push(Math.floor(cookiesSold * randomCustomerNum));
shop.cookiesPerHour.push("Total: " + shop.totalSales)
headerEl.textContent = shop.location;
sectionEl.appendChild(headerEl);
for (var i = 0; i < shop.cookiesPerHour.length; i++) {
  var liEl = document.createElement("li");
  liEl.textContent = shop.cookiesPerHour[i];
  ulEl.appendChild(liEl);
  sectionEl.appendChild(ulEl);
}

var sectionEl = document.getElementById("saleListPike");
var headerEl = document.createElement("h1")
var ulEl = document.createElement("ul");
var hours = ["10am", "11am", "12pm", "1pm", "2pm", "3pm", "4pm", "5pm", "6pm"];
var shop = {
  location: "Bellevue",
  minCustomer: 20,
  maxCustomer: 48,
  aveCookiesPerCustomer: 3.3,
  cookiesPerHour: [],
  totalSales: [],
};
shop.randomNum = function(min, max) {
  return Math.random() * (max - min) + min;
};
for (var i = 0; i < hours.length; i++) {
  randomCustomerNum = shop.randomNum(shop.minCustomer,shop.maxCustomer);
  var cookiesSold = Math.floor(randomCustomerNum * shop.aveCookiesPerCustomer);
  shop.cookiesPerHour.push(hours[i] + ": " + cookiesSold);
};
shop.totalSales.push(Math.floor(cookiesSold * randomCustomerNum));
shop.cookiesPerHour.push("Total: " + shop.totalSales)
headerEl.textContent = shop.location;
sectionEl.appendChild(headerEl);
for (var i = 0; i < shop.cookiesPerHour.length; i++) {
  var liEl = document.createElement("li");
  liEl.textContent = shop.cookiesPerHour[i];
  ulEl.appendChild(liEl);
  sectionEl.appendChild(ulEl);
}

var sectionEl = document.getElementById("saleListPike");
var headerEl = document.createElement("h1")
var ulEl = document.createElement("ul");
var hours = ["10am", "11am", "12pm", "1pm", "2pm", "3pm", "4pm", "5pm", "6pm"];
var shop = {
  location: "Alki",
  minCustomer: 3,
  maxCustomer: 24,
  aveCookiesPerCustomer: 2.6,
  cookiesPerHour: [],
  totalSales: [],
};
shop.randomNum = function(min, max) {
  return Math.random() * (max - min) + min;
};
for (var i = 0; i < hours.length; i++) {
  randomCustomerNum = shop.randomNum(shop.minCustomer,shop.maxCustomer);
  var cookiesSold = Math.floor(randomCustomerNum * shop.aveCookiesPerCustomer);
  shop.cookiesPerHour.push(hours[i] + ": " + cookiesSold);
};
shop.totalSales.push(Math.floor(cookiesSold * randomCustomerNum));
shop.cookiesPerHour.push("Total: " + shop.totalSales)
headerEl.textContent = shop.location;
sectionEl.appendChild(headerEl);
for (var i = 0; i < shop.cookiesPerHour.length; i++) {
  var liEl = document.createElement("li");
  liEl.textContent = shop.cookiesPerHour[i];
  ulEl.appendChild(liEl);
  sectionEl.appendChild(ulEl);
}
