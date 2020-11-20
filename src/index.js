import fs from "fs";

console.log("before contents");

// Synchronous is blocking
fs.readFile(__filename, "utf8", (error, contents) => {
  if (error) {
    console.error(error);
    return;
  }

  fs.writeFile("output.txt", contents, (writeError) => {
    if (writeError) {
      console.error(error);
      return;
    }
    console.log("finsished");
  });
});

console.log("after contents");
