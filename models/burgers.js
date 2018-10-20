var orm = require("../config/orm");

var burger = {
    selectAll : function(queryResult) {
        orm.selectAll("burgers", function(res) {
          queryResult(res);
        });
      }

};

module.exports = burger;