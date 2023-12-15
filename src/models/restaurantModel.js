import mongoose from 'mongoose';

const UserSchema = new mongoose.Schema(
  {
    nameRestaurant: {
      type: String,
      required: true,
      min: 3,
      max: 20,
      unique: true,
    },
    address: {
      type: String,
      required: true,
    },
    phone: {
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

const UserModel = mongoose.model('restaurant', UserSchema);

export default UserModel;
