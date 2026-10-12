import jwt from "jsonwebtoken"
import config from "../config/config.js"

export const createAcessToken=({userid,role})=>{
 const accessToken= jwt.sign({userid,role},config.ACCESS_TOKEN,{expiresIn:"15m"})

 return accessToken

}

export const createrefreshToken=({userid,role})=>{

     const refreshToken= jwt.sign({userid,role},config.ACCESS_TOKEN,{expiresIn:"7d"})

     return refreshToken
}

