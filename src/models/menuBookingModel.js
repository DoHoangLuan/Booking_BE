import mongoose from 'mongoose';

const UserSchema = new mongoose.Schema(
  {
    nameBooking: {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'booking',
      required: true,
    },
    nameMenu: {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'menu',
      required: true,
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

const UserModel = mongoose.model('menuBooking', UserSchema);

export default UserModel;
