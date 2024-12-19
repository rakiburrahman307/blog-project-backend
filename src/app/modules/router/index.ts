import express from 'express';
import { userRoute } from '../user/user.routs';
const routers = express.Router();

const routes = [
  {
    path: '/auth',
    route: userRoute,
  },
];

routes.forEach((element) => {
  if (element?.path && element?.route) {
    routers.use(element.path, element.route);
  }
});

export default routers;
