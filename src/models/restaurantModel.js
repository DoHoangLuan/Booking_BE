import mongoose from 'mongoose';

const RestaurantSchema = new mongoose.Schema(
  {
    restaurantName: {
      type: String,
      required: true,
      min: 3,
      max: 20,
      unique: true,
    },
    address: {
      type: String,
    },
    phone: {
      type: String,
    },
    photos: {
      type: [String],
      default: '',
    },
    description: {
      type: String,
      max: 50,
    },
  },
  { timestamps: false },
);

const RestaurantModel = mongoose.model('restaurant', RestaurantSchema);

export default RestaurantModel;
