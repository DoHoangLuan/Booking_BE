import bcrypt from 'bcrypt';
import { findStaffByEmail, saveNewStaff } from './../service/authService';
import jwt from 'jsonwebtoken';
import StaffModel from '@/models/staffModel';
import { Responser } from '@/utils';
import RestaurantModel from '@/models/restaurantModel';

class StaffController {
  async LoginStaff(req, res) {
    try {
      const { email, password } = req.body;
      const resposer = new Responser(res);

      if (!email || !password) {
        return res.status(404).json({
          message: 'Missing required key',
        });
      }

      const existingStaff = await findStaffByEmail(email);
      if (!existingStaff) {
        return resposer.response(401, {
          message: 'Tài khoản này chưa tồn tại',
        });
      }

      const isMatchPassword = await bcrypt.compare(password, existingStaff.password);
      if (!isMatchPassword) {
        return res.status(401).json({
          message: 'Mật khẩu không đúng',
        });
      }

      const jwtPayload = {
        staffname: existingStaff.staffname,
        id: existingStaff.id,
        email: existingStaff.email,
        role: existingStaff.role,
      };

      const tokenStaff = jwt.sign(jwtPayload, process.env.SECRET_KEY_STAFF, {
        expiresIn: '10000000000h',
      });

      await StaffModel.updateOne({ email: existingStaff.email }, { token: tokenStaff });

      res.status(200).json({
        id: existingStaff.id,
        staffname: existingStaff.staffname,
        email: existingStaff.email,
        role: existingStaff.role,
        accessToken: tokenStaff,
        message: 'Login Successfully',
      });
    } catch (err) {
      res.status(500).json({
        message: err.message,
      });
    }
  }

  async RegisterStaff(req, res) {
    try {
      const { email, staffname, password, role } = req.body;
      if ((!email || !staffname, !password, !role)) {
        return res.status(400).json({
          message: 'Missing required key',
        });
      }

      const existingStaff = await findStaffByEmail(email);
      if (existingStaff) {
        return res.status(400).json({
          message: 'User has a already',
        });
      }

      const salt = await bcrypt.genSalt(10);
      const hashedPassword = await bcrypt.hash(password, salt);

      if (role === 'RESTAURANT') {
        const newRes =  new RestaurantModel({
          restaurantName: staffname,
        });
        const restaurant = await newRes.save()
        console.log(restaurant);
        const staff = await saveNewStaff(email, staffname, hashedPassword, role, restaurant.id);
        res.status(200).json({
          message: staff,
        });
      }
      if(role === "STAFF") {
        const staff = await saveNewStaff(email, staffname, hashedPassword, role);
        res.status(200).json({
          message: staff,
        });
      }
      
    } catch (err) {
      res.status(500).json({
        message: err,
      });
    }
  }

  async DeleteStaff(req, res) {
    const staffId = req.params.id;
    console.log(staffId);
    try {
      const staffDelete = await StaffModel.findById(staffId);
      console.log(staffDelete);
      await staffDelete.deleteOne();
      res.status(200).json('Delete SuccessFully');
    } catch (error) {
      res.status(500).json({
        message: error,
      });
    }
  }
  async Me(req, res) {
    const { id } = req.staffs;
    const currentStaff = await StaffModel.findById(id).select('-password');
    res.status(200).json({
      staffInfo: currentStaff,
    });
  }
}

const staffController = new StaffController();

export default staffController;
