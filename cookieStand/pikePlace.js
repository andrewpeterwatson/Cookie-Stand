// var sectionEl = document.getElementById("saleListPike");
// var headerEl = document.createElement("h1")
// var ulEl = document.createElement("ul");
//
// var locations = ["Pike Place","SeaTac","Southcenter","Bellevue","Alki"];
// var minCust = [17,6,11,20,3];
// var maxCust = [88,24,38,48,24];
// var aveCook = [5.2,1.2,1.9,3.3,2.6];
var shops = [["Pike Place","SeaTac","Southcenter","Bellevue","Alki"],[17,6,11,20,3],[88,24,38,48,24],[5.2,1.2,1.9,3.3,2.6]]
var hours = ["10am", "11am", "12pm", "1pm", "2pm", "3pm", "4pm", "5pm", "6pm"];

function Shop(name, minCustomer, maxCustomer, aveCookPerCus) {
  this.location = name;
  this.minCustomer = minCustomer;
  this.maxCustomer = maxCustomer;
  this.aveCookiesPerCustomer = aveCookPerCus;
  // this.cookiesPerHour = [];
  // this.totalSales = [];
}
console.log(Shop);
for (var i = 0; i < shops.length; i++) {
var newShops = new Shop(shops[0], shops[1], shops[2], shops[3]);
}


// this.randomNum = function(min, max) {
//   return Math.random() * (max - min) + min;
// };
// for (var i = 0; i < hours.length; i++) {
//   randomCustomerNum = this.randomNum(this.minCustomer,this.maxCustomer);
//   var cookiesSold = Math.floor(randomCustomerNum * this.aveCookiesPerCustomer);
//   this.cookiesPerHour.push(hours[i] + ": " + cookiesSold);
// };
// this.totalSales.push(Math.floor(cookiesSold * randomCustomerNum));
// this.cookiesPerHour.push("Total: " + this.totalSales)
// headerEl.textContent = this.location;
// sectionEl.appendChild(headerEl);
// for (var i = 0; i < this.cookiesPerHour.length; i++) {
//   var liEl = document.createElement("li");
//   liEl.textContent = this.cookiesPerHour[i];
//   ulEl.appendChild(liEl);
//   sectionEl.appendChild(ulEl);
// }



// Object Literal
// var sectionEl = document.getElementById("saleListPike");
// var headerEl = document.createElement("h1")
// var ulEl = document.createElement("ul");
// var hours = ["10am", "11am", "12pm", "1pm", "2pm", "3pm", "4pm", "5pm", "6pm"];
// var shop = {
//   location: "SeaTac",
//   minCustomer: 6,
//   maxCustomer: 24,
//   aveCookiesPerCustomer: 1.2,
//   cookiesPerHour: [],
//   totalSales: [],
// };
// shop.randomNum = function(min, max) {
//   return Math.random() * (max - min) + min;
// };
// for (var i = 0; i < hours.length; i++) {
//   randomCustomerNum = shop.randomNum(shop.minCustomer,shop.maxCustomer);
//   var cookiesSold = Math.floor(randomCustomerNum * shop.aveCookiesPerCustomer);
//   shop.cookiesPerHour.push(hours[i] + ": " + cookiesSold);
// };
// shop.totalSales.push(Math.floor(cookiesSold * randomCustomerNum));
// shop.cookiesPerHour.push("Total: " + shop.totalSales)
// headerEl.textContent = shop.location;
// sectionEl.appendChild(headerEl);
// for (var i = 0; i < shop.cookiesPerHour.length; i++) {
//   var liEl = document.createElement("li");
//   liEl.textContent = shop.cookiesPerHour[i];
//   ulEl.appendChild(liEl);
//   sectionEl.appendChild(ulEl);
// }
//
// var sectionEl = document.getElementById("saleListPike");
// var headerEl = document.createElement("h1")
// var ulEl = document.createElement("ul");
// var hours = ["10am", "11am", "12pm", "1pm", "2pm", "3pm", "4pm", "5pm", "6pm"];
// var shop = {
//   location: "Southcenter",
//   minCustomer: 11,
//   maxCustomer: 38,
//   aveCookiesPerCustomer: 1.9,
//   cookiesPerHour: [],
//   totalSales: [],
// };
// shop.randomNum = function(min, max) {
//   return Math.random() * (max - min) + min;
// };
// for (var i = 0; i < hours.length; i++) {
//   randomCustomerNum = shop.randomNum(shop.minCustomer,shop.maxCustomer);
//   var cookiesSold = Math.floor(randomCustomerNum * shop.aveCookiesPerCustomer);
//   shop.cookiesPerHour.push(hours[i] + ": " + cookiesSold);
// };
// shop.totalSales.push(Math.floor(cookiesSold * randomCustomerNum));
// shop.cookiesPerHour.push("Total: " + shop.totalSales)
// headerEl.textContent = shop.location;
// sectionEl.appendChild(headerEl);
// for (var i = 0; i < shop.cookiesPerHour.length; i++) {
//   var liEl = document.createElement("li");
//   liEl.textContent = shop.cookiesPerHour[i];
//   ulEl.appendChild(liEl);
//   sectionEl.appendChild(ulEl);
// }
//
// var sectionEl = document.getElementById("saleListPike");
// var headerEl = document.createElement("h1")
// var ulEl = document.createElement("ul");
// var hours = ["10am", "11am", "12pm", "1pm", "2pm", "3pm", "4pm", "5pm", "6pm"];
// var shop = {
//   location: "Bellevue",
//   minCustomer: 20,
//   maxCustomer: 48,
//   aveCookiesPerCustomer: 3.3,
//   cookiesPerHour: [],
//   totalSales: [],
// };
// shop.randomNum = function(min, max) {
//   return Math.random() * (max - min) + min;
// };
// for (var i = 0; i < hours.length; i++) {
//   randomCustomerNum = shop.randomNum(shop.minCustomer,shop.maxCustomer);
//   var cookiesSold = Math.floor(randomCustomerNum * shop.aveCookiesPerCustomer);
//   shop.cookiesPerHour.push(hours[i] + ": " + cookiesSold);
// };
// shop.totalSales.push(Math.floor(cookiesSold * randomCustomerNum));
// shop.cookiesPerHour.push("Total: " + shop.totalSales)
// headerEl.textContent = shop.location;
// sectionEl.appendChild(headerEl);
// for (var i = 0; i < shop.cookiesPerHour.length; i++) {
//   var liEl = document.createElement("li");
//   liEl.textContent = shop.cookiesPerHour[i];
//   ulEl.appendChild(liEl);
//   sectionEl.appendChild(ulEl);
// }
//
// var sectionEl = document.getElementById("saleListPike");
// var headerEl = document.createElement("h1")
// var ulEl = document.createElement("ul");
// var hours = ["10am", "11am", "12pm", "1pm", "2pm", "3pm", "4pm", "5pm", "6pm"];
// var shop = {
//   location: "Alki",
//   minCustomer: 3,
//   maxCustomer: 24,
//   aveCookiesPerCustomer: 2.6,
//   cookiesPerHour: [],
//   totalSales: [],
// };
// shop.randomNum = function(min, max) {
//   return Math.random() * (max - min) + min;
// };
// for (var i = 0; i < hours.length; i++) {
//   randomCustomerNum = shop.randomNum(shop.minCustomer,shop.maxCustomer);
//   var cookiesSold = Math.floor(randomCustomerNum * shop.aveCookiesPerCustomer);
//   shop.cookiesPerHour.push(hours[i] + ": " + cookiesSold);
// };
// shop.totalSales.push(Math.floor(cookiesSold * randomCustomerNum));
// shop.cookiesPerHour.push("Total: " + shop.totalSales)
// headerEl.textContent = shop.location;
// sectionEl.appendChild(headerEl);
// for (var i = 0; i < shop.cookiesPerHour.length; i++) {
//   var liEl = document.createElement("li");
//   liEl.textContent = shop.cookiesPerHour[i];
//   ulEl.appendChild(liEl);
//   sectionEl.appendChild(ulEl);
// }
