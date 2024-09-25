import { createSlice } from "@reduxjs/toolkit"
const initialState ={
    _id: "",
    name: "",
    emaill: "",
    profile_pic: "",
    token: "",
    onlineUser: [],
    socketConnection: null
}

export const userSlice = createSlice({
    name: "user",
    initialState,
    reducers: {
        setUser: (state,action)=>{
            state._id = action.payload._id
            state._id = action.payload._name
            state._id = action.payload._emaill
            state._id = action.payload._profile_pic
        },
        setToken: (state,action)=>{
            state.token = action.payload
        },
        logout: (state,action)=>{
            state._id = ""
            state.name = ""
            state.emaill = ""
            state.profile_pic = ""
            state.token = ""
            state.socketConnection = null
        },
        setOnlineUser: (state,action)=>{
            state.onlineUser = action.payload
        },
        setSocketConnction: (state,action)=>{
            state.socketConnection = action.payload
        }
    }
})

export const {
    setUser, setToken, logout, setOnlineUser, setSocketConnction
} = userSlice.actions
export default userSlice.reducer