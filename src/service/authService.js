import StaffModel from '@/models/staffModel';
import UserModel from '@/models/userModel';

export const findUserByEmail = async (email) => {
  try {
    const existingUser = await UserModel.findOne({ email });
    return existingUser;
  } catch (error) {
    throw error;
  }
};

export const saveNewUser = async (email, username, password) => {
  try {
    const newUser = new UserModel({
      email,
      username,
      password,
    });
    return newUser.save();
  } catch (error) {
    console.log(error);
  }
};

export const findStaffByEmail = async (email) => {
  try {
    const existingStaff = await StaffModel.findOne({ email });
    return existingStaff;
  } catch (error) {
    throw error;
  }
};

export const saveNewStaff = async (email, staffname, password, role, resID) => {
  try {
    let newStaff;
    if (resID) {
      newStaff =  new StaffModel({
        email,
        staffname,
        password,
        role,
        restaurantId: resID,
      });
    } else {
      newStaff =  new StaffModel({
        email,
        staffname,
        password,
        role,
      });
    }
    return newStaff.save();
  } catch (error) {
    console.log(error);
  }
};
