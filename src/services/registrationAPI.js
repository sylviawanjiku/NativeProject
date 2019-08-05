import axios from "axios";
import { resolveBaseUrl } from ".";

const baseUrl = resolveBaseUrl();

const entry = axios.create({
  baseURL: baseUrl,
  headers: {
    "Content-Type": "application/json"
  }
});

class RegistrationAPI {
  static register(userData) {
    return entry.post("/register/", userData);
  }
}

export default RegistrationAPI;
