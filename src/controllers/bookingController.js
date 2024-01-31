import BookingModel from '@/models/bookingModel';
import UserModel from '@/models/userModel';

import RestaurantModel from './../models/restaurantModel';

class BookingController {
  async createBooking(req, res) {
    try {
      const { status, dateBooking, restaurantId, userName } = req.body;
      const { id } = req.users;
      const currentUser = await UserModel.findById(id);
      const currentRestaurant = await RestaurantModel.findOne({ restaurantId });
      console.log(currentUser, restaurantId, currentRestaurant);
      if (!currentUser) {
        res.status(400);
        throw new Error('Không tìm thấy User');
      }
      if (!currentRestaurant) {
        res.status(400);
        throw new Error('Không tìm thấy cửa hàng', id);
      }
      const newBooking = new BookingModel({
        status,
        dateBooking,
        nameRestaurant: restaurantId,
        userName,
      });

      await newBooking.save();
      res.json({
        data: newBooking,
        message: 'Đã đặt bàn thành công',
      });
      console.log('newBooking', newBooking);
    } catch (err) {
      res.json({ message: err.message });
    }
  }

  async getBookingById(req, res) {
    const bookingId = req.params.id;

    try {
      const booking = await BookingModel.findById(bookingId);
      res.status(200).json(booking);
    } catch (err) {
      res.json(500).json(err);
    }
  }
}

const bookingController = new BookingController();

export default bookingController;
