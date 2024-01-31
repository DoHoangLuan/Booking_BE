import mongoose from 'mongoose';

import { StaffRole } from '@/enums/staff';

const StaffSchema = new mongoose.Schema(
  {
    staffname: {
      type: String,
      required: true,
      min: 3,
      max: 20,
      unique: true,
    },
    phone: {
      type: Number,
      required: false,
    },
    email: {
      type: String,
      required: true,
      max: 50,
      unique: true,
    },
    restaurantId: {
      type:String
    },
    password: {
      type: String,
      min: 6,
      required: true,
    },
    role: {
      type: String,
    },
    desc: {
      type: String,
      max: 50,
    },
    token: {
      type: String,
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
