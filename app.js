const $spinner = document.getElementById("spinner");
let url = "https://api.coinranking.com/v2/coins?orderBy=marketCap";
fetch(url)
  .then((response) => response.json())
  .then((data) => mostrarData(data))
  .catch((error) => console.log(error))
  .finally(() => {
    $spinner.style.display = "none";
  });

const mostrarData = (data) => {
  const coins = data.data.coins;

  let body = "";
  for (let i = 0; i < coins.length; i++) {
    // aca estamos usando interpolacion de strings
    var precio = data.data.coins[i].price; //Obtengo precios
    var precios = new Intl.NumberFormat("de-DE", {
      style: "currency",
      currency: "USD",
    }).format(precio);

    var marketCap = data.data.coins[i].marketCap;
    var marketCaps = new Intl.NumberFormat("de-DE", {
      style: "currency",
      currency: "USD",
      maximumSignificantDigits: 10,
    }).format(marketCap);

    body += `<tr><td>${coins[i].rank}</td><td><img  src=${coins[i].iconUrl} class="img" width="50vw" height="50vh"></td><td>${coins[i].symbol}</td><td>${precios}</td><td>${marketCaps} </td></tr>`;
  }
  document.getElementById("data").innerHTML = body;
};
