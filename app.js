const $spinner = document.getElementById("spinner");

(async () => {
  try {
    const response = await fetch(
      "https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=100"
    );
    const data = await response.json();
    mostrarData(data);
  } catch (e) {
    console.error(e);
  } finally {
    $spinner.style.display = "none";
  }
})();

const mostrarData = (data) => {
  const coins = data;

  let body = "";
  for (let i = 0; i < data.length; i++) {
    // aca estamos usando interpolacion de strings
    let precio = data[i].current_price; //Obtengo precios
    let precios = new Intl.NumberFormat("de-DE", {
      style: "currency",
      currency: "USD",
      maximumSignificantDigits: 3,
    }).format(precio);

    let marketCap = data[i].market_cap;
    let marketCaps = new Intl.NumberFormat("de-DE", {
      style: "currency",
      currency: "USD",
      maximumSignificantDigits: 10,
    }).format(marketCap);

    body += `<tr><td>${data[i].market_cap_rank}</td><td><img  src=${data[i].image} alt="img" class="img" width="50vw" height="50vh"></td><td>${data[i].name}</td><td>${precios}</td><td>${marketCaps} </td></tr>`;
  }
  document.getElementById("data").innerHTML = body;
};
