import got from "got"
import {promises as fs} from "fs"

// TODO: Use your choice of 'then' or 'async/await'
// fetch some data
// write the data to a new file

(async () => {
  try {
    const filmsRes = await got("https://ghibliapi.herokuapp.com/films").json();
  fs.writeFile("test.txt", filmsRes.toString())
  .then(() => {
    console.log("finished")
    .catch(error => {console.error(error)})
  })
  } catch(error) {
    console.error(error);
  }
})();

got("https://ghibliapi.herokuapp.com/films")
.json()
.then(results => {
  fs.writeFile("then.txt", result.toString());
}).then(() => {
  console.log("finished with them");
})
// catch will catch any error that occurs anywhere in the then chain
}).catch((err) => {
  console.error(err);
})