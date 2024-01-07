import BookingModel from '@/models/bookingModel';

export const createBooking = async (req, res) => {
    try {
        const reqData = req.body.data;
        const booking = {
            nameBooking: reqData.nameBooking,
            nameRestaurant: reqData.location,
            size: reqData.sliderValue,
            date: reqData.selectedDate,
            city: 'HCM',
        };

        // Using async/await to handle the promise returned by create
        const response = await BookingModel.create(booking);

        return res.status(200).json({ status: "sucess", message: response });
    } catch (error) {
        // Handle errors appropriately (send a meaningful error response)
        console.error('Error creating booking:', error);
        return res.status(500).json({ error: 'Internal Server Error' });
    }
};
