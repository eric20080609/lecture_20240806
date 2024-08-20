const UserModel = require("../models/UserModel")
const bcryptjs = require('bcryptjs')
const jwt = require('jsonwebtoken')

async function checkPassword(request,response){
    try {
        const { password, userId } = request.body
        console.log(`password:${password}, userId:${userId}`)

        const user = await UserModel.findById(userId)
        const verifyPassword = await bcryptjs.compare(password,user.password)
        console.log('verifyPassword',verifyPassword)

        if(!verifyPassword){
            return response.status(400).json({
                message : "비밀번호가 틀렸습니다.",
                error : true
            })
        }

        const tokenData = {
            id : user._id,
            email : user.email 
        }
        console.log('tokenData',tokenData)
        console.log('process.env.JWT_SECREAT_KEY',process.env.JWT_SECREAT_KEY)
        const token = await jwt.sign(tokenData,process.env.JWT_SECREAT_KEY,{ expiresIn : '1d'})

        const cookieOptions = {
            http : true,
            secure : true
        }

        return response.cookie('token',token,cookieOptions).status(200).json({
            message : "로그인 성공",
            token : token,
            success :true
        })

    } catch (error) {
        return response.status(500).json({
            message : error.message || error,
            error : true
        })
    }
}

module.exports = checkPassword