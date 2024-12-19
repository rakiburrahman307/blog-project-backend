import catchAsync from '../../utils/catchAsync';
import sendResponse from '../../utils/sendResponse';
import userService from './user.service';
import status from 'http-status';

const registerUser = catchAsync(async (req, res) => {
  const result = await userService.register(req?.body);
  // register logic here
  sendResponse(res, {
    success: true,
    message: "User registered successfully",
    statusCode: status.CREATED,
    data: result,
  })
});

const loginUser = () => {};

const userController = {
  registerUser,
  loginUser,
};

export default userController;
