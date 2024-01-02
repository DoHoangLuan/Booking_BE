import jwt from 'jsonwebtoken'


export const authStaffMiddleware = (req, res, next) => {
    const token = req.headers["access-token"]
    if (!token) {
        res.status(400).json({
            message: " Token chưa được cung cấp "
        })
    }
    try {
        const decoded = jwt.verify(token, process.env.SECRET_KEY)
        req.staffs = decoded
        next()
    } catch (error) {
        if (error instanceof jwt.TokenExpiredError) {
            return res.status(403).json({
                message: "Token đã hết hạn"
            })
        }
        return res.status(403).json({
            message: "Mã token không hợp lệ"
        })
    }
}