import mongoose from 'mongoose';

const BookingStaffSchema = new mongoose.Schema(
  {
    nameBooking: {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'booking',
      required: true,
    },
    staff: {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'staff',
      required: true,
    },
    desc: {
      type: String,
      max: 50,
    },
  },
  { timeStane: true },
);

const BookingStaffModel = mongoose.model('bookingStaff', BookingStaffSchema, 'bookingStaff');

export default BookingStaffModel;
