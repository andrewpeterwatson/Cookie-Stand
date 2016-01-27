var hours = ["10am", "11am", "12pm", "1pm", "2pm", "3pm", "4pm", "5pm", "6pm"];
var locations = ["Pike Place","SeaTac","Southcenter","Bellevue","Alki"];
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
  this.totalCookies = [];
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

  var sectionEl = document.getElementById("saleList");
  var headerEl = document.createElement("h1");
  var ulEl = document.createElement("ul");
  var headerUl = document.createElement("ul")
}
Shop.prototype.render = function() {
  for (var i = 0; i < newShops.length; i++) {
    var headerLi = document.createElement("li");
    headerLi.textContent = newShops[i].stores;
    headerEl.appendChild(headerLi);
    sectionEl.appendChild(headerEl);
  for (var i = 0; i < newShops.cookiesPerHour.length; i++) {
    var liEl = document.createElement("li");
    liEl.textContent = newShops[i].cookiesPerHour[i];
    ulEl.appendChild(liEl);
    sectionEl.appendChild(ulEl);
    }
  }
};
for (var i = 0; i < newShops.length; i++) {
  newShops[i].getCookies();
}
Shop.prototype.render();
