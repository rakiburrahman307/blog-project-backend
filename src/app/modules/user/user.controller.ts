import catchAsync from '../../utils/catchAsync';
import sendResponse from '../../utils/sendResponse';
import userService from './user.service';
import status from 'http-status';

const registerUser = catchAsync(async (req, res) => {
  const result = await userService.register(req?.body);
  // register logic here
  sendResponse(res, {
    success: true,
    message: 'User registered successfully',
    statusCode: status.CREATED,
    data: result,
  });
});

const loginUser = catchAsync(async (req, res) => {
  // send data to service function
  const result = await userService.login(req?.body);
  // response
  sendResponse(res, {
    success: true,
    message: 'Login successful',
    statusCode: status.OK,
    data: result,
  });
});

const userController = {
  registerUser,
  loginUser,
};

export default userController;
