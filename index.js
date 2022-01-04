const express = require('express');
const app = express();

app.get('/', (req, res) => {
  res.send("you've reached the home route!")
})

app.get('/about1', (req, res) => {
  res.send("this is a practice app to learn about express routes.")
})

// app.get('/:input', (req, res) => {
//   console.log("reg.params: ", req.params)
//   res.send("Our parameter is " + req.params.input + ".")
// })

app.get('/greet/:name/:lastname', (req, res) => {
  res.send("hello, " + req.params.name + " " + req.params.lastname + "!")
})

app.get("/multiply/:x/:y", (req, res) => {
  res.send("The answer is: " + (req.params.x * req.params.y))
})

app.get("/add/:x/:y", (req, res) => {
  res.send("The answer is: " + (parseInt(req.params.x) + parseInt(req.params.y)))
})

app.get("/newadd/*", (req, res) => {
  let myParams = req.params[0].split('/')
  let result = myParams.reduce((total, num) => {
    return total + parseInt(num);
  }, 0)
  res.send("The answer is :" + result)
})

app.get("/querystring", (req, res) => {
  let printout = '';
  for(let key in req.query) {
    console.log(key)
    printout += key + ": " + req.query[key] + "<br />";
  }
  res.send("Here's what they sent: <br /><br />" + printout)
})

app.listen(8000);
