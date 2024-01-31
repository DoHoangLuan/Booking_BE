import contactModel from '@/models/contactModel';

export const contactController = {
  async createContact(req, res) {
    try {
      const nameContact = req.body.data.name;
      const phoneContact = req.body.data.phone;
      const emailContact = req.body.data.email;
      const messageContact = req.body.data.message;
      const statusContact = false;
      const saveDBContact = await contactModel.create({
        nameContact,
        phoneContact,
        emailContact,
        messageContact,
        statusContact,
      });
      return res.status(200).json({
        status: 'success',
        message: 'Nhận thông tin contact thành công',
        data: saveDBContact,
      });
    } catch (error) {
      return res.status(400).json({
        status: 'error',
        message: 'Nhận thông tin contact thất bại',
        data: '',
      });
    }
  },
};
