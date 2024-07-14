// HELPER FUNCTION TO GENERATE RESPONSE BODY
let jsonRes = function(response, id){
  return {
    jsonrpc: "2.0",
    result: response,
    id: id
  }
}

// HELPER FUNCTION TO GENERATE ERROR BODY
let jsonErr = function(code, message, id){
  return {
    jsonrpc: "2.0",
    error: {
      code: code,
      message: message
    },
    id: id
  }
}

// EXPORT HELPER FUNCTIONS
exports.jsonRes = jsonRes;
exports.jsonErr = jsonErr;

// EXPORT MIDDLEWARE FUNCTION TO VALIDATE JSONRPC BODY
exports.validJRPC = function() {
  return (req, res, next) => {
    let body = req.body;

    if(!body.jsonrpc){
      res.send(jsonErr(-32600, "Must include jsonrpc version", body.id));
      return;
    }

    if(!body.method){
      res.send(jsonErr(-32601, "Method not found", body.id));
      return;
    }

    if(!body.params){
      res.send(jsonErr(-32602, "Invalid params", body.id));
      return;
    }

    if(!body.id){
      res.send(jsonErr(-32600, "Must include id", null));
      return;
    }

    next();
  }
}
