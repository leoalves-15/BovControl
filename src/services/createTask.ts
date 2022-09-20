import axios from "axios";
import { BASE_URL } from "../constants/contants";
import { task } from "../types/Task.type";

export const createTask = async (data: task[]) => {
  var config = {
    method: "post",
    url: `${BASE_URL}/v1/checkList/`,
    headers: {
      "Content-Type": "application/json",
    },
    data: {
      checklists: data,
    },
  };

  try {
    const response = await axios(config);

    return response.data;
  } catch (error) {
    return console.log("error", error);
  }
};
