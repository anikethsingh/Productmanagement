import dotenv from "dotenv"

dotenv.config()



const config={

    MONGO_URL:process.env.MONGO_URL,

    PORT:process.env.PORT,

    ACCESS_TOKEN:process.env.ACCESS_TOKEN,

    REFRESH_TOKEN:process.env.REFRESH_TOKEN

}


export default config