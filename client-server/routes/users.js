var express = require("express");
var router = express.Router();
var assert = require("assert");
var restify = require("restify-clients");

var client = restify.createJsonClient({
  url: "https://localhost:4000",
});

/* GET users listing. */
router.get("/", function (req, res, next) {
  client.get("/users", function (err, request, response, obj) {
    assert.ifError(err);

    res.end(JSON.stringify(obj, null, 2));
  });
});

module.exports = router;
