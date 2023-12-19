import mongoose from 'mongoose';

const RestaurantSchema = new mongoose.Schema(
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

const RestaurantModel = mongoose.model('restaurant', RestaurantSchema);

export default RestaurantModel;
