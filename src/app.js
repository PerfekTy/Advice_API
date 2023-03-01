const advice = document.querySelector(".get-advice"),
  advText = document.querySelector(".advice-text"),
  advID = document.querySelector(".advice-title"),
  forecast = new Forecast();

advice.addEventListener("click", e => {
  e.preventDefault();
  forecast.getAdvice().then(data => (advText.innerHTML = data));
  forecast.getAdviceID().then(data => (advID.innerHTML = `ADVICE #${data}`));
});
