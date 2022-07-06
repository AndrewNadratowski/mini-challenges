// let total = 0.0;
// const changeForm = document.querySelector(".change-form");
// const coinContainer = document.querySelector(".coin-container");

// document.getElementById("cola").addEventListener("click", function () {
//   total += 2.0;
//   document.getElementById("total").innerHTML = total.toFixed(2);
// });

// document.getElementById("peanuts").addEventListener("click", function () {
//   total += 3.0;
//   document.getElementById("total").innerHTML = total.toFixed(2);
// });

// document.getElementById("chocolate").addEventListener("click", function () {
//   total += 4.0;
//   document.getElementById("total").innerHTML = total.toFixed(2);
// });

// document.getElementById("gummies").addEventListener("click", function () {
//   total += 6.0;
//   document.getElementById("total").innerHTML = total.toFixed(2);
// });

// changeForm.addEventListener("submit", (e) => {
//   e.preventDefault();
//   const amount = document.querySelector("#amount").value;
//   const type = document.querySelector("#type").value;
//   for (let i = 0; i < amount; i++) {
//     const newCoin = document.createElement("li");
//     newCoin.textContent = type;
//     coinContainer.append(newCoin);
//     newCoin.addEventListener("click", () => {
//       newCoin.remove();
//     });
//   }
// });
let sum = 0;
const totalParagraph = document.querySelector(".total");
const cola = document.querySelector(".cola");
const peanuts = document.querySelector(".peanuts");
const chocolate = document.querySelector(".chocolate");
const gummies = document.querySelector(".gummies");
const changeForm = document.querySelector(".change-form");
const coinContainer = document.querySelector(".coin-container");

cola.addEventListener("click", () => {
  sum += 2;
  totalParagraph.textContent = `Total: $${sum}.00`;
});

peanuts.addEventListener("click", () => {
  sum += 3;
  totalParagraph.textContent = `Total: $${sum}.00`;
});
chocolate.addEventListener("click", () => {
  sum += 4;
  totalParagraph.textContent = `Total: $${sum}.00`;
});
gummies.addEventListener("click", () => {
  sum += 6;
  totalParagraph.textContent = `Total: $${sum}.00`;
});

changeForm.addEventListener("submit", (e) => {
  e.preventDefault();
  const amount = document.querySelector("#amount").value;
  const type = document.querySelector("#type").value;
  for (let i = 0; i < amount; i++) {
    const newCoin = document.createElement("li");
    newCoin.classList.add("coin", type);
    newCoin.textContent = type;
    coinContainer.append(newCoin);
    newCoin.addEventListener("click", () => {
      newCoin.remove();
    });
  }
});
