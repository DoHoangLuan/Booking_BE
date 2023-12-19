import mongoose from 'mongoose';

const BookingSchema = new mongoose.Schema(
  {
    nameRestaurant: {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'restaurant',
      required: true,
    },
    Bookingname: {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'Booking',
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

const BookingModel = mongoose.model('booking', BookingSchema);

export default BookingModel;
