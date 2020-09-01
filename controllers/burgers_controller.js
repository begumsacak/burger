var express = require("express");
var router = express.Router();
var burger = require("../models/burger.js");

// Create all our routes and set up logic within those routes where required.
router.get("/", function (req, res) {
  burger.selectAll(function (data) {
    var hbsObject = {
      burgers: data
    };
    console.log(hbsObject);
    res.render("index", hbsObject);
  });
});

router.post("/api/burgers", function (req, res) {
  burger.create([
    "burger_name", "devoured"
  ], [
    req.body.burger_name, false
  ], function (result) {
    res.redirect("/")
  });
});

router.put("/api/burgers/:id", function (req, res) {
  var id = req.params.id

  burger.update(["devoured", "id"], [true, id], function (result) {
    res.json(result)
  });
});


router.delete("/api/burgers/:id", function (req, res) {
  burger.delete({
    id: req.params.id
  }, function (err) {
    if (err) {
      return res.send(err);
    } else {
      console.log("successfully deleted")
    }
  })
})

router.delete("/api/burgers/:id", function (req, res) {
  var id = req.params.id
  burger.delete({
    // We just have to specify which burger we want to destroy with "where"
    where: id
  }).then(function (result) {
    res.json(result);
  });
});





// Export routes for server.js to use.
module.exports = router