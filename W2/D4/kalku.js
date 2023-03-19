var buttonEqual = document.querySelector(".equal");
var buttonDelete = document.querySelector(".delete");
var inputText = document.querySelector(".output");
var actions = document.querySelectorAll(".action");
var clear = document.querySelector(".clear");
let evals = [];

buttonEqual.addEventListener("click", function () {
  let evaluate = inputText.value;
  let result = Function(`return ${evaluate}`);
  inputText.value = result();
});

buttonDelete.addEventListener("click", function () {
  inputText.value = 0;
  evals = [];
  console.log(evals);
});

clear.addEventListener("click", function () {
  evals.pop();

  inputText.value = evals.join(" ");
});

for (var i = 0; i < actions.length; i++) {
  actions[i].addEventListener("click", function (e) {
    if (e.target.innerHTML == "X") {
      evals.push("*");
    } else {
      evals.push(e.target.innerHTML);
    }
    inputText.value = evals.join(" ");
  });
}
var buttonEqual = document.querySelector(".equal");


