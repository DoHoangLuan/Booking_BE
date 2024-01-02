import { StaffRole } from '@/enums/staff';
import mongoose from 'mongoose';

const StaffSchema = new mongoose.Schema(
  {
    username: {
      type: String,
      required: true,
      min: 3,
      max: 20,
      unique: true,
    },
    phone: {
      type: Number,
      required: true,
    },
    email: {
      type: String,
      required: true,
      max: 50,
      unique: true,
    },
    password: {
      type: String,
      min: 6,
      required: true,
    },
    role : {
      type: String,
      default: StaffRole.STAFF,
      required:true,
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

const StaffModel = mongoose.model('staff', StaffSchema);

export default StaffModel;
