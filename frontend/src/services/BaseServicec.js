import axios from "axios";

axios.defaults.baseURL = "http://localhost:3001/";

export default class PostService {
  getAllTree() {
    return axios.get("/api/member_data");
  }

  getTree(number) {
    return axios.get(`/tree/${number}`);
  }
}
