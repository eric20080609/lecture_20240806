const UserModel = require("../models/UserModel")

async function checkEmail(request,response){
    try {
        const { email } = request.body

        console.log(`email:${email}`)
        const checkEmail = await UserModel.findOne({email})
        console.log(`checkEmail:${checkEmail}`)

        if(!checkEmail){
            return response.status(200).json({
                message : "헉, 너누구야? 없는 계정이거든",
                error : true
            })
        }

        return response.status(200).json({
            message : "환영합니다. 회원입니다. 이제, 비번을 입력할 차례입니다.",
            success : true,
            data : checkEmail
        })

    } catch (error) {
        return response.status(500).json({
            message : error.message || error,
            error : true
        })
    }
}

module.exports = checkEmail