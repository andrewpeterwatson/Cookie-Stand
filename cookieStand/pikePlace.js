<<<<<<< HEAD
var hours = ["10am", "11am", "12pm", "1pm", "2pm", "3pm", "4pm", "5pm"];
var locations = ["Pike Place","SeaTac","Southcenter","Bellevue","Alki"];
var storeId = ["pp", "st", "sc", "bl", "al"];
var liId = ["ppP", "stP", "scP", "blP", "alP"];
var minCust = [17,6,11,20,3];
var maxCust = [88,24,38,48,24];
var aveCook = [5.2,1.2,1.9,3.3,2.6];
var newShops = [];
function Shop(name, minCustomer, maxCustomer, aveCookPerCus) {
  this.stores = name;
  this.minCustomer = minCustomer;
  this.maxCustomer = maxCustomer;
  this.aveCookiesPerCustomer = aveCookPerCus;
  this.cookiesPerHour = [];
  this.totalCookies = 0;
  this.randomNum = function(min, max) {
    return Math.random() * (max - min) + min;
  }
  this.getCookies = function() {
    for (var i = 0; i < hours.length; i++) {
      var randomCustomerNum = this.randomNum(this.minCustomer,this.maxCustomer);
      var cookiesSold = Math.floor(randomCustomerNum * this.aveCookiesPerCustomer);
      this.cookiesPerHour.push(hours[i] + ": " + cookiesSold);
      this.totalCookies += cookiesSold;
    }
    this.cookiesPerHour.push("Total: " + this.totalCookies);
  }
};

for (var i = 0; i < locations.length; i++) {
  newShops.push(new Shop(locations[i],minCust[i],maxCust[i],aveCook[i]));

  }

  Shop.prototype.render = function() {
    var headerH1 = document.createElement("h1")
    var sectionEl = document.getElementById("saleList");
    var ulEl = document.createElement("ul");
    for (var i = 0; i < newShops.length; i++) {
      var liEl = document.createElement("li");
      liEl.textContent = this.stores;
      var nestedUl = document.createElement("ul");

    for (var i = 0; i < this.cookiesPerHour.length; i++) {
      var nestedLi = document.createElement("li");
      nestedLi.textContent = this.cookiesPerHour[i];
      nestedUl.appendChild(nestedLi);
    }
      ulEl.appendChild(nestedUl);
      headerH1.appendChild(liEl);
      ulEl.appendChild(headerH1)
    }
    sectionEl.appendChild(ulEl);
  }
  for (var i = 0; i < newShops.length; i++) {
    newShops[i].getCookies();
    newShops[i].render();
  }
=======
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
>>>>>>> ea0b4864618168ac89c68f05bd02fcbfdfb6aabe
