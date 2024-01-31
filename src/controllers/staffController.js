import bcrypt from 'bcrypt';

import StaffModel from '@/models/staffModel';

import { StaffRole } from './../enums/staff';
import { findStaffByEmail, saveNewStaff } from './../service/authService';

class StaffController {
  async LoginStaff(req, res) {
    const { email, password } = req.body;
    try {
      if (!email || !password) {
        return res.status(404).json({
          message: 'Missing required key',
        });
      }
      const existingStaff = await findStaffByEmail(email);
      if (!existingStaff) {
        return res.status(401).json({
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
        staffName: existingStaff.username,
        id: existingStaff.id,
        email: existingStaff.email,
      };
      const token = jwt.sign(jwtPayload, process.env.SECRET_KEY, {
        expiresIn: '10000000000h',
      });
      res.status(200).json({
        accessToken: token,
        message: 'Login Successfully',
      });
    } catch (err) {
      res.status(500).json({
        message: err.message,
      });
    }
  }
  async RegisterStaff(req, res) {
    const { email, staffName, password, role } = req.body;
    try {
      if (req.role !== StaffRole.ADMIN && req.role !== StaffRole.MANAGER) {
        return response.status(404).json({ message: 'Bạn không có quyền tạo tại khoản' });
      }
      const newRole =
        req.role === StaffRole.ADMIN
          ? StaffRole.MANAGER
          : req.user.role === StaffRole.MANAGER
          ? StaffRole.STAFF
          : role;

      if ((!email || !username, !password)) {
        return res.status(400).json({
          message: 'Missing required key',
        });
      }
      const existingStaff = await findStaffByEmail(email);
      if (existingUser) {
        return res.status(400).json({
          message: 'User has a already',
        });
      }
      const salt = await bcrypt.genSalt(10);
      const hashedPassword = await bcrypt.hash(password, salt);
      await saveNewStaff(staffName, email, hashedPassword, newRole);
      res.status(200).json({
        message: 'API Register',
      });
    } catch (err) {
      return res.status(500).json({
        message: err.message,
      });
    }
  }
  async Me(req, res) {
    const { id } = req.staffs;
    const currentStaff = await StaffModel.findById(id).select('-password');
    res.status(200).json({
      Userinfo: currentStaff,
    });
  }
}

const staffController = new StaffController();

export default staffController;
