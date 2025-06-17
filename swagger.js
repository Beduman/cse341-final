const swaggerAutogen = require("swagger-autogen")();
const dotenv = require("dotenv");
dotenv.config();


const doc = {
  info: {
    title: "aoe-2-api",
    description: "API for cataloging game stats for Age of Empires",
  },
    host: 'testaoe2api.onrender.com',
    schemes: ['https', 'http']
};

const outputFile = "./swagger.json";
const endpointsFiles = ["./routes/index.js"];

swaggerAutogen(outputFile, endpointsFiles, doc);
