import mongoose from 'mongoose';

const contactSchema = new mongoose.Schema(
  {
    nameContact: String,
    phoneContact: String,
    emailContact: String,
    messageContact: String,
    statusContact: Boolean,
  },
  { timestamps: true },
);

const contactModel = mongoose.model('contact', contactSchema, `contact`);

export default contactModel;
