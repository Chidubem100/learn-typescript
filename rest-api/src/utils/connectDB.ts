
import mongoose from "mongoose";
import config from "config";
import log from "./logger";

async function connectDB() {
    const dbUri= config.get<string>('dbUri');
    // const dbUri= `mongodb://127.0.0.1/rest-apiDB`;
    try {
        await mongoose.connect(dbUri);
        log.info('Connected to DB');
    } catch (error) {
        console.log(error)
        // process.exit(1);
    }
}


export default connectDB;