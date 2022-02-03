const $spinner = document.getElementById("spinner");


fetch("https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=100")

  .then((response) => response.json())
  .then((data) => mostrarData(data))
  .catch((error) => console.log(error))
  .finally(() => {
    $spinner.style.display = "none";
   
  });









  
const mostrarData = (data) => {
  const coins = data

  let body = "";
  for (let i = 0; i < data.length; i++) {
    // aca estamos usando interpolacion de strings
    var precio = data[i].current_price; //Obtengo precios
    var precios = new Intl.NumberFormat("de-DE", {
      style: "currency",
      currency: "USD",
    }).format(precio);

    var marketCap = data[i].market_cap;
    var marketCaps = new Intl.NumberFormat("de-DE", {
      style: "currency",
      currency: "USD",
      maximumSignificantDigits: 10,
    }).format(marketCap);
    
    body += `<tr><td>${data[i].market_cap_rank}</td><td><img  src=${data[i].image} class="img" width="50vw" height="50vh"></td><td>${data[i].name}</td><td>${precios}</td><td>${marketCaps} </td></tr>`;
  }
  document.getElementById("data").innerHTML = body;
};



