const BASE_URL =
  "https://cdn.jsdelivr.net/npm/@fawazahmed0/currency-api@latest/v1/currencies";

const dropDowns = document.querySelectorAll(".dropDown select");
const fromCurr = document.querySelector(".from select");
const toCurr = document.querySelector(".to select");

for (let select of dropDowns) {
  for (let currCode in countryList) {
    const newOption = document.createElement("option");
    newOption.value = currCode;
    newOption.innerText = currCode;

    if (select.name === "from" && currCode === "USD") {
      newOption.selected = "selected";
    } else if (select.name === "to" && currCode === "INR") {
      newOption.selected = "selected";
    }

    select.append(newOption);
  }
  select.addEventListener("change", (e) => {
    changeFlag(e.target);
  });
}
const swapCurr = () => {
  let temp = fromCurr.value;
  fromCurr.value = toCurr.value;
  toCurr.value = temp;
  changeFlag(fromCurr);
  changeFlag(toCurr);
  exchangeRate();
};

document.querySelector("i").addEventListener("click", swapCurr);


async function exchangeRate() {
  let amount = document.querySelector(".amountInput input");
  let amtVal = amount.value; //vl
  if (amtVal === " " || amtVal < 1) {
    amtVal = 1;
    amount.value = "1";
  }
  const URL = `${BASE_URL}/${fromCurr.value.toLowerCase()}.json`;

  let res = await fetch(URL);
  let data = await res.json();
  let rate = data[fromCurr.value.toLowerCase()][toCurr.value.toLowerCase()];
  let finalAmount = amtVal * rate;

  document.querySelector(
    ".msg"
  ).innerText = `${amtVal} ${fromCurr.value} = ${finalAmount} ${toCurr.value}`;
}

function changeFlag(el) {
  let currCode = el.value;

  let countryCode = countryList[currCode];
  let newSrc = `https://flagsapi.com/${countryCode}/flat/64.png`;
  let img = el.parentElement.querySelector("img");
  img.src = newSrc;
}

document.querySelector(".exchangeBtn").addEventListener("click", (e) => {
  e.preventDefault();
  exchangeRate();
});
