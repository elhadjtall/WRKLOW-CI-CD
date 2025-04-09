require('dotenv').config();
 
// Configuration par défaut pour les tests
process.env.DATABASE = process.env.DATABASE || "dbdev";
process.env.USER_DB = process.env.USER_DB || "root";
process.env.PASS_DB = process.env.PASS_DB || "root";
process.env.PORT_DB = process.env.PORT_DB || "27017";
process.env.PORT = process.env.PORT || "3001";