import MenuBookingModel from '@/models/menuBookingModel';
import MenuModel from '@/models/menuModel';

export const createMenu = async (req, res) => {
  try {
    const { nameMenu, price, profilePicture, desc, city } = req.body;
    const newMenu = new MenuModel({
      nameMenu,
      price,
      profilePicture,
      desc,
      city,
    });
    const createNewMenu = await MenuModel.create(newMenu);
    return res.status(200).json(createNewMenu);
  } catch (error) {
    console.log(error);

    return res.status(500).json({ message: 'Internal Server Error' });
  }
};

export const createMenuBooking = async (req, res) => {
  try {
    const { nameBooking, nameMenu, desc, city } = req.body;
    const newBookingMenu = new MenuBookingModel({
      nameBooking,
      nameMenu,
      desc,
      city,
    });
    const createNewMenuBooking = await MenuBookingModel.create(newBookingMenu);
    return res.status(200).json(createNewMenuBooking);
  } catch (error) {
    console.log(error);
    return res.status(500).json({ message: 'Internal Server Error' });
  }
};
