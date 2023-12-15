import mongoose from 'mongoose';

const UserSchema = new mongoose.Schema(
  {
    nameMenu: {
      type: String,
      required: true,
      min: 3,
      max: 20,
      unique: true,
    },
    price: {
      type: Number,
      required: true,
    },
    profilePicture: {
      type: String,
      default: '',
    },
    desc: {
      type: String,
      max: 50,
    },
    city: {
      type: String,
      max: 50,
    },
  },
  { timeStane: true },
);

const UserModel = mongoose.model('menu', UserSchema);

export default UserModel;
