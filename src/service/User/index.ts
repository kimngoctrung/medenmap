import createService from "./create.service";
import updateService from "./update.service";
import getDetailService from "./get-detail.servics";
import removeService from "./delete.service";
import loginService from "./login.service";
const userService = {
  createService,
  updateService,
  getDetailService,
  removeService,
  loginService,
};
export default userService;
