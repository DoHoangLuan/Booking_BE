import jwt, { verify } from 'jsonwebtoken';

const authStaffMiddleware = {
  verifyTokenStaff: (req, res,next) => {
    const tokenStaff = req.headers['access-token'];
    if (!tokenStaff) {
      res.status(400).json({
        message: ' Token chưa được cung cấp ',
      });
    }
    try {
      const decoded = jwt.verify(tokenStaff, process.env.SECRET_KEY_STAFF);
      req.staffs = decoded;
      next();
    } catch (error) {
      if (error instanceof jwt.TokenExpiredError) {
        return res.status(403).json({
          message: 'Token đã hết hạn',
        });
      }
      return res.status(403).json({
        message: 'Mã token không hợp lệ',
      });
    }
  },
  verifyTokenAndAdminAuth : (req,res,next) => {
    authStaffMiddleware.verifyTokenStaff(req,res, () => {
        if(req.staffs.id == req.params.id || req.staffs.role == "ADMIN") {
            next()
        }
        else {
            res.status(403).json(" You're not allowed to deleted other")
        }
    })
  }
};
export default authStaffMiddleware;
