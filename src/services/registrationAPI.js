import axios from "axios";
import Config from "react-native-config";

const baseUrl = Config.API_URL;
const entry = axios.create({
  baseURL: baseUrl,
  headers: {
    "Content-Type": "application/json"
  }
});

class RegistrationAPI {
  static register(userData) {
    return entry.post("register/", userData);
  }
}

export default RegistrationAPI;
