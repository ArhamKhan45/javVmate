// export const catchAsyncError = (passedfunc) => (req, res) => {
//   return Promise.resolve(passedfunc(req, res)).catch((err) => {
//     return res.status(500).json({
//       message: err.message,
//     });
//   });
// };

// export const errorHandler = (response, statusCode, errmessage) => {
//   return response.status(statusCode).json({
//     succes: false,
//     message: errmessage,
//   });
// };
