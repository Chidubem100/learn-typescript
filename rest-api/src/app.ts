require('dotenv').config();

import  express  from "express";
import config from "config";
import connectDB from "./utils/connectDB";
import log from "./utils/logger";
import router from "./routes";
import deserializeUser from "./middleware/deserializeUser";

const app = express();

// APP setUP
app.use(express.json());
app.use(deserializeUser);

app.use('/api/v1',router);


// server setup
const port = config.get('port');

const start = async() =>{
    try {
        await connectDB();
        app.listen(port, () =>{
            log.info('App is running on port ' + port)
        });
    } catch (error) {
        throw new Error(`Error occurred`)
        // console.log(error)
    }
};

start();