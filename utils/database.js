const Sequalize = require("sequelize");


const sequalize = new Sequalize("online_shop", "root", "", {
    host: "localhost",
    dialect: "mysql"
})
sequalize.sync();
module.exports = sequalize;
