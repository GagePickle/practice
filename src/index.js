// Timeout
// This only works because of webpack -normally node only uses require
import fs from "fs";

setTimeout(() => {
  fs.readFile(__filename, 'utf-8', (err, results) => {
    if (err) {
      console.error(err);
    } else {
      // TODO: Add some content to the file
      // Write the file to a new directory
      // Create the directory
    }
  });
}, 4000)

Node GET

import https from "https";

const req = https.request(
  {
  hostname: 'google.com',
  port: 443,
  method: 'GET',
  path: '/'
  },

(res) => { // res means response
  console.log(res.statusCode);

  res.on('data', data => {
    process.stdout.write(data);
    console.log(data);
  });

  res.on('error', error => {
    console.error(error);
  });
});

req.end()

import https from "http";

const interval = setInterval(() => {
  console.log("hi")
}, 200)

setTimeout(() => {
  clearInterval(interval);
}, 2000)

promises async then catch finally

const setTimeoutAsync = (fxn, delay) =>
  new Promise((resolve) => {
    // This behaves like a 'return' - the 'reject' is never triggered
    setTimeout(() => {
      resolve(fxn())
    }, delay)
});

setTimeoutAsync(() => {
  return 'hi';
}, 2000).then((results) => {
  console.log(results, 'done from promise!');
})
.catch((error) => {
  console.error('fake error', error);
})
.finally(() => {
  console.log('no matter what! we are done!')
})

consuming promise

import {promises as fs} from 'fs'

fs.readFile(__filename).then((fileContents) => {
  fs.writeFile('test.txt', fileContents)
}).then(() => {
  console.log('file written')
}).catch(err => {
  console.log(err);
})

import got from 'got'

got("http://www.cnn.com/").then(res => {
  console.log(res)
}).catch(err => {
  console.error(err.message)
}).finally(() => {
  console.info('class is over')
})

console.log('hi')
