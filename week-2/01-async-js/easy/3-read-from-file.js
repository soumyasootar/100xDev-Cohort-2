const fs = require("fs");

fs.readFile("./1-counter.js", "utf-8", (err, data) => {
  if (err) {
    console.log("error: ", err);
  } else {
    console.log("data: ", data);
  }
});


// Expensive operation
let result = 0;
for (let i = 0; i < 5444444440; i++) {
    result += i;
}
console.log(result);