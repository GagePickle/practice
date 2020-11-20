import { promises as fs } from "fs";

console.log("before contents");

// Async immediately invoked function expression (ife)
// Specifying 'async' in front of the fxn wraps this in a promise sort of like .then
(async () => {
  const contents = await fs.readFile(__filename, "utf-8");

  fs.writeFile("output.txt", contents).then(() => {
    console.log("success!");
  });
})();

console.log("after contents");
