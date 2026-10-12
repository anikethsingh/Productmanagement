import User from "../model/userSchema.js"

import bcrypt from "bcrypt"
import { createAcessToken, createrefreshToken } from "../utils/Authutils.js"


export const RegisterUser=async(req,res)=>{

    const {email,name,password}=req.body

    const userCheck=await User.findOne({email})

    if(userCheck){

        res.status(400).json({
            message:"user already registered"
        })
    }

const user= await User.create({
        email,
        name,
        passwordHash:await bcrypt.hash(password,10)
    })


    const accessToken= await createAcessToken({userid:user._id,role:user.role})

    const refreshToken=await createrefreshToken({userid:user._id,role:user.role})

   res.cookie("refreshtoken",refreshToken,{
     httpOnly: true
   })

await User.findByIdAndUpdate(
    user._id,
    { refreshToken: refreshToken },
    { new: true }
);

    res.status(201).json({
        message:"user registered successfully",

        data:{

            user:{
                email:user.email,
                name:user.name,
                id:user._id
            },
            accessToken
        }
    })

}


export const loginUser = async (req, res) => {
    try {
        const { email, password } = req.body;

        if (!email || !password) {
            return res.status(400).json({
                message: "Email and password are required"
            });
        }

        const user = await User.findOne({ email });

        if (!user) {
            message("error is user")
            return res.status(401).json({
                message: "Invalid email or password"
            });
        }

          console.log(user)

        const passwordCheck = await bcrypt.compare(
            password,
            user.passwordHash
        );
        console.log(passwordCheck)

        if (!passwordCheck) {
            console.log("password me error")
            return res.status(401).json({
                message: "Invalid email or password"
            });
        }

        console.log("running")


        const accessToken= await createAcessToken({userid:user._id,role:user.role})


            const refreshToken=await createrefreshToken({userid:user._id,role:user.role})

        await User.findByIdAndUpdate(user._id, {
            refreshToken
        });

        res.cookie("refreshToken", refreshToken, {
            httpOnly: true,
            
        });

        return res.status(200).json({
            message: "User logged in successfully",
            data: {
                email: user.email,
                name: user.name,
                
            },
            accessToken
        });

    } catch (error) {
        console.log("error:",error)
        return res.status(500).json({
            message: "Internal server error"
        });
    }
};

