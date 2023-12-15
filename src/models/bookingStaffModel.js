import mongoose from 'mongoose';

const UserSchema = new mongoose.Schema(
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

const UserModel = mongoose.model('bookingStaff', UserSchema);

export default UserModel;
