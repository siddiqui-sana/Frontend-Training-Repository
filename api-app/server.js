require("dotenv").config();
const yargs = require("yargs/yargs");
const { hideBin } = require("yargs/helpers");
const argv = yargs(hideBin(process.argv)).argv;
const db = require("./db");
const PORT_NUMBER=argv.port || 3000;
//How to change the port: run the following command: node FILE-NAME.js --port=5000
console.log(process.argv,argv);
console.log(process.env.DB_USER, process.env.DB_PASSWORD);
const express = require('express')
const app = express();
const testRouter = require("./routes/test")
const productRouter = require("./routes/product");
const userRouter = require("./routes/user");
const helmet = require("helmet");
const morgan = require('morgan');
const { rateLimit } = require("express-rate-limit");
const authMiddleware = require("./middlewares/auth");
const limiter = rateLimit({
    windowMs: 1 * 60 * 1000, // 15 minutes
    max: 5, // Limit each IP to 100 requests per `window` (here, per 15 minutes)
    standardHeaders: "draft-7", // draft-6: RateLimit-* headers; draft-7: combined RateLimit header
    legacyHeaders: false, // X-RateLimit-* headers
  });
//application setup related
app.use(helmet());  //security on top
app.use(authMiddleware);
app.use(morgan("dev"));
app.use(limiter);
//Application related setup
//We need to enable the parser for routing
app.use(express.json()); //For parsing json bodies(req)
app.use(express.urlencoded({extended:true})); //for parsing url encoded bodies

// app routes defined here
app.use("/test", testRouter);
app.use("/product", productRouter);
app.use("/auth",userRouter);
//Start Running application after entire setup is complete
app.listen(PORT_NUMBER,(err)=>{
    console.log("Attemping to start the server...");
    if(err){
        console.log("Failed to start the server")
        return process.exit(1);
    }
    console.log(`Starting server on http://localhost:${PORT_NUMBER}`)
    db().catch((e)=>console.log("Failed to connect to the database",e))
});