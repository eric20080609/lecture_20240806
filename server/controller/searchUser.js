const UserModel = require('../models/UserModel')

const searchUser = async (req,res) => {
  try{
    const { search } = req.body
    const query = new RegExp(search,"i","g")
    const user = await UserModel.find({
      "$or": [
        {name: query},
        {email: query}
      ]
    }).select('-password')
    return res.status(200).json({
      message: '검색된결과를 받으시오...',
      data: user,
      success: true
    })
  } catch(error){
    return res.status(500).json({
      message: error.message || error,
      error: true
    })
  }
}

module.exports = searchUser