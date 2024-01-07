import UserModel from '@/models/userModel.js';
import bcrypt from 'bcrypt';
import jwt from 'jsonwebtoken';
import { findUserByEmail, saveNewUser } from '@/service/authService';

class AuthController {
  async LoginUser(req, res) {
    const { email, password } = req.body;
    try {
      if (!email || !password) {
        return res.status(400).json({
          message: 'Missing required key',
        });
      }
      const existingUser = await findUserByEmail(email);
      if (!existingUser) {
        return res.status(401).json({
          message: 'User chưa tồn tại',
        });
      }
      const isMatchPassword = await bcrypt.compare(password, existingUser.password);
      if (!isMatchPassword) {
        return res.status(401).json({
          message: 'Mật khẩu không đúng ',
        });
      }
      const jwtPayLoad = {
        username: existingUser.username,
        id: existingUser.id,
        email: existingUser.email,
      };
      const token = jwt.sign(jwtPayLoad, process.env.SECRET_KEY, {
        expiresIn: '10000000000h',
      });
      res.status(200).json({
        accessToken: token,
        message: 'Login Successfully',
      });
    } catch (error) {
      console.log('🚀 ~ file: auth.route.js:50 ~ routerAuth.post ~ error:', error);
      res.status(500).json({
        message: error,
      });
    }
  }

  async RegisterUser(req, res) {
    try {
      const { email, username, password} = req.body;
      if ((!email || !username, !password )) {
        return res.status(400).json({
          message: 'Missing required key',
        });
      }
      const existingUser = await findUserByEmail(email);
      if (existingUser) {
        return res.status(400).json({
          message: 'User has a already',
        });
      }

      const salt = await bcrypt.genSalt(10);
      const hashedPassword = await bcrypt.hash(password, salt);

      await saveNewUser(email, username, hashedPassword);

      res.status(200).json({
        message: 'API Register',
      });
    } catch (err) {
      res.status(500).json({
        message: err,
      });
    }
  }

  async Me(req, res) {
    const { id } = req.users;
    const currentUser = await UserModel.findById(id).select('-password');
    res.status(200).json({
      Userinfo: currentUser,
    });
  }
}

const authController = new AuthController();

export default authController;
