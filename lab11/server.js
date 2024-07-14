const { jsonRes, jsonErr, validJRPC } = require( "./utils");
const user = require("./calls/user");
const express = require("express");

const app = express();
const port = 5000;
console.log("Beans")
//APPLY MIDDLEWARES
app.use(express.json());
app.use(validJRPC());

app.post('/user', (req, res) => {
  // TODO:
  // 
  // - Verify that req.body.method is a valid method in user package
  //   If it is not, use jsonErr function to create an error response and sent it with with res.send
  if (!user[req.body.method]) {
    return res.send(jsonErr("Invalid method"));
  }
  // - Call the function in the user package that corresponds to the method in the request body
  //   Handle any errors returned by the function and send the appropriate response

  user[req.body.method](req.body.params) 
    .then(data => res.send(jsonRes(data)))
    .catch(err => res.send(jsonErr(err)));
  // - You can use jsonRes and jsonErr functions to create valid response objects.
})

app.listen(port, () => {
  console.log(`API listening on port ${port}`);
})
