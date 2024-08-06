const shindalsoo_cloudinary = "dgzd9fhta"
const url = `https://api.cloudinary.com/v1_1/${shindalsoo_cloudinary}/auto/upload`

const uploadFile = async (file) => {
    const formData = new FormData()
    formData.append('file', file)
    formData.append('upload_preset', 'chat-app-file')
    
    console.log(`url:${url}`)
    const response = await fetch(url,{
        method: 'post',
        body: formData
    })
    const responseData = await response.json()
    return responseData
}

export default uploadFile