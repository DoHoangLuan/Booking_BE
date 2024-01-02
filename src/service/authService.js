import StaffModel from "@/models/staffModel"

const { default: UserModel } = require("@/models/userModel")

export const findUserByEmail = async (email) => {
    try {
        const existingUser = await UserModel.findOne({ email })
        return existingUser
    } catch (error) {
        throw error
    }
}
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

export const findStaffByEmail = async (email) => {
    try {
        const existingStaff = await StaffModel.findOne({email})
        return existingStaff
    }
    catch(error) {
        throw error
    }
}
export const saveNewStaff = async (email, username, password,role) => {
    try {
        const newStaff = new StaffModel({
            email,
            username,
            password,
            role
        })
        return newStaff.save()
    } catch (error) {
        console.log(error);
    }
}