import express from "express"

import cookieParser from "cookie-parser"

import AuthRouter from "../routes/AuthRoutes.js"

import { loginUser } from "../controller/AuthController.js"


const app=express()


app.use(express.json())

app.use(cookieParser())

app.get("/",(req,res)=>{
    res.send("App is running")
})

app.use("/api",AuthRouter)

app.use("/api",loginUser)




export default app