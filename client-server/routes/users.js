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

    res.json(obj);
  });
});

router.get("/:id", function (req, res, next) {
  client.get(`/users/${this.id}`, function (err, request, response, obj) {
    assert.ifError(err);

    res.json(obj);
  });
});

router.put("/:id", function (req, res, next) {
  client.put(
    `/users/${this.id}`,
    req.body,
    function (err, request, response, obj) {
      assert.ifError(err);

      res.json(obj);
    }
  );
});

router.delete("/:id", function (req, res, next) {
  client.del(`/users/${this.id}`, function (err, request, response, obj) {
    assert.ifError(err);

    res.json(obj);
  });
});

router.post("/:id", function (req, res, next) {
  client.post("/users", req.body, function (err, request, response, obj) {
    assert.ifError(err);

    res.json(obj);
  });
});

module.exports = router;
