import axios from "axios";
import { BASE_URL } from "../constants/contants";

var config = {
  method: "get",
  url: `${BASE_URL}/v1/checkList`,
  headers: {},
};

export const getTasks = async () => {
  try {
    const response = await axios(config);

    return response.data;
  } catch (error) {
    return console.log("error", error);
  }
};
