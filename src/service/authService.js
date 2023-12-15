const { default: UserModel } = require("@/models/userModel")


export const findUserByEmail = async (email) => {
    try {
        const existingUser = await UserModel.findOne({ email })
        return existingUser
    } catch (error) {
        throw error
    }
}
// export const findUserByUsername = async (username) => {
//     try {
//         const existingUserName = await UserModel.findOne({ username })
//         return existingUserName
//     } catch (error) {
//         return error
//     }
// }
export const saveNewUser = async (email, username, password) => {
    try {
        const newUser = new UserModel({
            email,
            username,
            password,
        })
        return newUser.save()
    } catch (error) {
        console.log(error);
    }

}