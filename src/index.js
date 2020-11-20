import { promises as fs } from "fs";

console.log("before contents");

fs.readFile(__filename)
  .then((contents) => contents)
  .then((contents2Write) => fs.writeFile("output.txt", contents2Write));

console.log("after contents");
