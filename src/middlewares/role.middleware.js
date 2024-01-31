import jwt from 'jsonwebtoken';

const restaurant = ['http://localhost:3001/api/v1/auth/register-staff','http://localhost:3001/api/v1/auth/login-staff'];
const staff = [];

const isPermissionMdw = (req, res, next) => {
  console.log(req);
  const localhost = "http://localhost:3001"
  const baseUrlPath = `${localhost}${req.baseUrl}${req.path}`;
  const token = req.headers['access-token'];
  const decodedToken = jwt.verify(token, process.env.SECRET_KEY_STAFF);
  console.log("baseUrlPath",baseUrlPath);
  if (decodedToken.role === 'ADMIN') {
    next();
  }
  if (decodedToken.role === 'RESTAURANT') {
    const path = restaurant.some((path) => path === baseUrlPath)
      if (path) {
        console.log(baseUrlPath);
        next();
      } else {
        return res.status(403).json({
          message: 'Chưa được cấp quyền truy cập',
        });
      }
    };
  
  if (decodedToken.role == 'STAFF') {
    const path = staff.some((path) => path === baseUrlPath)
      if (path) {
        next();
      } else {
        return res.status(403).json({
          message: 'Chưa được cấp quyền truy cập',
        });
      }
    };
  }


export default isPermissionMdw;
