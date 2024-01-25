import axios from "axios";
import config from "./utils/config";

axios.defaults.baseURL = config.API.url;

export default axios;
