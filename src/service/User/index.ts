import createService from "./create.service";
import updateService from "./update.service";
import getDetailService from "./get-detail.service";
import removeService from "./delete.service";
import loginService from "./login.service";
import getListUserService from "./get-list-user.service";
const userService = {
  createService,
  updateService,
  getDetailService,
  removeService,
  loginService,
  getListUserService,
};
export default userService;
