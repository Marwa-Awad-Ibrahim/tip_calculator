let billAmount = +prompt("Enter your bill amount:")

while(billAmount <= 0){
    alert("Negative values are not valid , Please try again");
    billAmount = +prompt("Enter your bill amount:")
}


let tipPercentage = +prompt("Please choose your desired tip percentage")

while (tipPercentage < 0 || tipPercentage % 1 !== 0) {
    alert("Negative values and fractions are not valid. Please try again.");
    tipPercentage = +prompt("Please choose your desired tip percentage:");
  }
  
let tipAmount = billAmount * tipPercentage /100;
let totalAmount = billAmount + tipAmount

function roundToNearest0_05(totalAmount) {
    return totalAmount % 0.05 === 0 ? totalAmount : Math.round(totalAmount * 10) / 10;
}
  
totalAmount = roundToNearest0_05(totalAmount)
  console.log(`Bill amount = ${billAmount}`)
  console.log(`Tip amount = ${tipAmount}`)
  console.log(`Total amount = ${totalAmount}`)