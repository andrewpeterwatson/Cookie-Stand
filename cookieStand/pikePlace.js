var hours = ["10am", "11am", "12pm", "1pm", "2pm", "3pm", "4pm", "5pm"];
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
    var tableEl = document.getElementById("salesTable");
    var hoursTrEl = document.createElement("tr");
    var shopsTrEl = document.createElement("tr");
    var cookiesTrEl = document.createElement("tr");
    var spaceTh = document.createElement("th");
    spaceTh.textContent = "";
    hoursTrEl.appendChild(spaceTh);
    for (var i = 0; i < hours.length; i++) {
      var hoursThEl = document.createElement("th");
      hoursThEl.textContent = hours[i];
      hoursTrEl.appendChild(hoursThEl);
    }
    for (var i = 0; i < newShops.length; i++) {
      var shopsTh = document.createElement("th");
      shopsTh.textContent = newShops[i].stores;
      shopsTrEl.appendChild(shopsTh);
      for (var i = 0; i < this.cookiesPerHour.length; i++) {
        var cookiesTdEl = document.createElement("td");
        cookiesTdEl.textContent = this.cookiesPerHour[i];
        // cookiesTrEl.appendChild(cookiesTdEl);
        shopsTrEl.appendChild(cookiesTdEl);
    }
    salesTable.appendChild(hoursTrEl);
    salesTable.appendChild(shopsTrEl);
    }
  };
  for (var i = 0; i < 1; i++) {
    newShops[i].getCookies();
    newShops[i].render();
  }
