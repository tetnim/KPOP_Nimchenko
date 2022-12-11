"use strict";
let logPrize;
function prizeLogger(prize) {
  console.log("Your price is: " + prize);
}
logPrize = prizeLogger;
logPrize("200");
