import { formatISO } from 'date-fns';
import mongoose from 'mongoose';

const BookingSchema = new mongoose.Schema(
  {
    nameRestaurant: {
      type: String,
      ref: 'restaurant',
      required: true,
    },
    nameBooking: {
      type: String,
      ref: 'booking',
      required: true,
    },
    size: {
      type: Number,
    },
    date: {
      type: Date,
      default: formatISO(Date.now()),
    },
  },
  { timestamps: true },
);

const BookingModel = mongoose.model('bookings', BookingSchema, 'bookings');

export default BookingModel;
