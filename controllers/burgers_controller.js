var burger = require("../models/burgers.js");
var express = require("express"); 
var router = express.Router();

// When the '/' is called
router.get('/', function(req,res) {
    // Function runs thanks to the controller, which used the select all method defined in the ORM
    burger.selectAll(function(burger_menu){
        // After a call to the server is made and retrieved into the model, the results are rendered on the index page
        res.render("index", burger_menu);
    });
});



module.exports = router;