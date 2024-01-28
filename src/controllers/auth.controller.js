import bcrypt from 'bcrypt';
import jwt from 'jsonwebtoken';

import UserModel from '@/models/userModel';
import { findUserByEmail, saveNewUser } from '@/service/authService';

export const authController = {
  async login(req, res, next) {
    const { email, password } = req.body;
    try {
      const existingUser = await findUserByEmail(email);

      if (!existingUser) {
        return res.status(401).json({
          statusCode: 401,
          message: 'Email or password wrong',
        });
      }

      const isMatchPassword = await bcrypt.compare(password, existingUser.password);
      if (!isMatchPassword) {
        return res.status(401).json({
          statusCode: 401,
          message: 'Email or password wrong',
        });
      }

      const jwtPayLoad = {
        username: existingUser.username,
        id: existingUser.id,
        email: existingUser.email,
      };

      const SECRET_KEY = process.env.SECRET_KEY || 'trinvm';
      const token = jwt.sign(jwtPayLoad, SECRET_KEY, {
        expiresIn: '1h',
      });

      existingUser.password = undefined;

      return res.status(200).json({
        statusCode: 200,
        message: 'Login Successfully',
        data: {
          user: existingUser,
          accessToken: token,
        },
      });
    } catch (error) {
      next(error);
    }
  },

  async register(req, res, next) {
    try {
      const { email, username, password } = req.body;
      if (!email || !username || !password) {
        return res.status(422).json({
          statusCode: 422,
          message: 'Missing required key',
        });
      }
      const existingUser = await findUserByEmail(email);
      if (existingUser) {
        return res.status(400).json({
          statusCode: 400,
          message: 'User has a already',
        });
      }

      const salt = await bcrypt.genSalt(10);
      const hashedPassword = await bcrypt.hash(password, salt);

      await saveNewUser(email, username, hashedPassword);

      return res.status(200).json({
        statusCode: 200,
        message: 'Register successfully',
        data: true,
      });
    } catch (error) {
      next(error);
    }
  },

  async info(req, res) {
    const { id } = req.users;
    const currentUser = await UserModel.findById(id).select('-password');
    res.status(200).json({
      statusCode: 200,
      message: 'Get Info user successfully',
      data: currentUser,
    });
  },
};
