import apiPath from  "@/constants"
import bookingController from "./../controllers/bookingController";
import express from "express";


const bookingRoute = express.Router()

bookingRoute.post(apiPath.index,bookingController.createBooking)
bookingRoute.get(apiPath.id,bookingController.getBookingById)


export default bookingRoute
