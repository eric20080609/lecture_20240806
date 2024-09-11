const jwt = require('jsonwebtoken')
const UserModel = require('../models/UserModel')

const getUserDetailsFromToken = async(token) => {
  if (!token){
    return {
      message: "세션아웃",
      logout: true,
    }
  }
  const decode = await jwt.verify(token, process.env.JWT_SECREAT_KEY)
  if (!decode){
    return {
      message: "토큰이 기간만료되었어요.",
      logout: true,
    }
  }
  const user = await UserModel.findById(decode.id).select('-password')
  return user
}

module.exports = getUserDetailsFromToken