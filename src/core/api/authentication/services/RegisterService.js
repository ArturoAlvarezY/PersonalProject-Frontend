import RegisterRepository from "../repository/RegisterRepository";

export default class RegisterService {
  constructor() {
    this.registerRepository = new RegisterRepository();
  }

  async register(user) {
    try {
      const response = await this.registerRepository.registerToLocalDB(
        user.username,
        user.password
      );
      return {
        success: true,
        message: "User registered successfully.",
      };
    } 
    catch (error) {
      if (error.response) {
        return {
          success: false,
          message: error.response.data.message || "Error registering user.",
        };
      } 
      else if (error.request) {
        return {
          success: false,
          message: "No response from server.",
        };
      }
       else {
        return {
          success: false,
          message: "Error: " + error.message,
        };
      }
    }
  }
}
