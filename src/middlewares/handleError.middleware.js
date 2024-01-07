// eslint-disable-next-line no-unused-vars
export const errorHandlingMiddleware = (err, req, res, next) => {
  if (!err.statusCode) err.statusCode = 500;

  const responseError = {
    statusCode: err.statusCode,
    message: err.message || 500,
    stack: undefined,
  };

  res.status(responseError.statusCode).json(responseError);
};
