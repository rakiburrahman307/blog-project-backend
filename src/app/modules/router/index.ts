import express from 'express';
import { userRoute } from '../user/user.routs';
import { blogRoute } from '../blog/blog.routs';
const routers = express.Router();

const routes = [
  {
    path: '/auth',
    route: userRoute,
  },
  {
    path: '/',
    route: blogRoute,
  },
];

routes.forEach((element) => {
  if (element?.path && element?.route) {
    routers.use(element.path, element.route);
  }
});

export default routers;
