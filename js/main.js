function lookup() {
  let number = document.getElementById("amount").value;
  let base1 = document.getElementById("baseCost").value;
  let base2 = document.getElementById("otherCost").value;

  let baseAmount = number * 32;
  let otherAmount = baseAmount * 4;

  let cost = baseAmount * base1 * 1000 + otherAmount * base2;

  document.getElementById("cost").innerHTML = "" + cost;
  document.getElementById("base").innerHTML = "" + baseAmount;
  document.getElementById("other").innerHTML = "" + otherAmount;
}
