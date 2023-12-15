import mongoose from 'mongoose';

const UserSchema = new mongoose.Schema(
  {
    nameRestaurant: {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'restaurant',
      required: true,
    },
    username: {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'user',
      required: true,
    },
    nameMenu: {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'menu',
      required: true,
    },
    date: {
      type: Date,
      default: Date.now,
    },
    city: {
      type: String,
      max: 50,
    },
  },
  { timeStane: true },
);

const UserModel = mongoose.model('booking', UserSchema);

export default UserModel;
