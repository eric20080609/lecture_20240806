const UserModel = require("../models/UserModel")
const bcryptjs = require('bcryptjs')

async function registerUser(request, response){
    const {name, email, password, profile_pic } = request.body
    console.log(`name:${name},email:${email},password:${password},profile_pic:${profile_pic}`)

    // 비밀번호를 암호화해서 저장해야 벌금을 안냄
    const salt = await bcryptjs.genSalt(10)
    const hashpassword = await bcryptjs.hash(password,salt)
    console.log(`와우 정말 복잡한 비밀번호로 바뀌었네요${hashpassword}`)

    // 이메일 중복체크 알고리즘
    const checkEmail = await UserModel.findOne({ email })
    if (checkEmail){
        return response.status(400).json({
            message: "아이쿠 이미 쓰고 있는 계정이에요. 사용할 수 없어요.",
            error: true,
        })
    }

    
    const payload = {
        name,
        email, 
        profile_pic,
        password: hashpassword
    }
    const user = new UserModel(payload)
    const userSave = await user.save() //실제 몽공DB에 Insert시킴 
    console.log('userSave',userSave)
    return response.status(200).json({
        message: "아싸뵤 몽고DB에 저장했다.",
        data: userSave,
        success: true
    })
}

module.exports = registerUser