const express =require("express");
const dotenv=require("dotenv");
const bodyParser = require('body-parser');
const router=require("./src/routers")
const cors=require("cors");
const dbConnect = require("./src/configs/db");
const app =express();
const swaggerJsdoc = require("swagger-jsdoc");
const swaggerUi = require("swagger-ui-express");
const cookieparser= require('cookie-parser')
const morgan = require('morgan')
app.use(morgan("tiny"))
dotenv.config();

const options = {
    definition: {
      openapi: "3.0.0",
      info: {
        title: "LogRocket Express API with Swagger",
        version: "0.1.0",
        description:
          "This is a simple CRUD API application made with Express and documented with Swagger",
        contact: {
          name: "Mirindi saidi",
          url: "My Brand",
          email: "mirindisaidi19@gmail.com",
        },
      },
      servers: [
        {
          url: "http://localhost:2000",
        },
      ],
    },
    apis: ["./src/routers/auth.routers.js","./src/routers/blog.routers.js","./src/routers/contact.routers.js"],
  };
  
  const specs = swaggerJsdoc(options);
  app.use(
    "/api-docs",
    swaggerUi.serve,
    swaggerUi.setup(specs)
  );


dbConnect();
app.use(express.json());
app.use(cookieparser());
app.use(bodyParser.json());
app.use(cors({origin:"*"}))
app.use(router);
const port=process.env.PORT || 2000;
app.listen(port, ()=>{
    console.log("Server in connected on",`${port}`);
})

module.exports=app;