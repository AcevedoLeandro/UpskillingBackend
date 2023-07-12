module.exports = (res, statusCode, data) => {
  res.status(statusCode).json({
    error: false,
    length: data ? data.length : 0,
    data,
  });
};
