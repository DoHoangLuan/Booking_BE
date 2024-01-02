import { BookingStatus } from '@/enums/booking';
import { formatISO } from 'date-fns';
import mongoose from 'mongoose';

const BookingSchema = new mongoose.Schema(
  {
    nameRestaurant: {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'restaurant',
      required: true,
    },
    userName: {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'user',
      required: true,
    },
    createByStaff: {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'staff',
      required: true,
    },
    status: {
      type: String,
      default: BookingStatus.WAITING,
      required: true,
    },
    date: {
      type: Date,
      default: formatISO(Date.now()),
    },
  },
  { timeStane: true },
);

const BookingModel = mongoose.model('booking', BookingSchema);

export default BookingModel;
