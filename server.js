import app from "./app/app.js";
import config from "./config/config.js";
import connectDb from "./config/db.js";



await connectDb()

const port=config.PORT

app.listen(port,()=>{
    console.log("server is running")
})