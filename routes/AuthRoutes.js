import { Router } from "express";
import { loginUser, RegisterUser } from "../controller/AuthController.js";


const router=Router()


router.post("/register",RegisterUser)


router.post("/login",loginUser)






export default router