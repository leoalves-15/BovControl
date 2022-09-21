import axios from "axios";
import { BASE_URL } from "../constants/contants";
import { task } from "../types/Task.type"

export const updateTask = async (data: task, id: number) => {
  var config = {
    method: "put",
    url: `${BASE_URL}v1/checkList/${id}`,
    headers: {
      "Content-Type": "application/json",
    },
    data: data,
  };

  try {
    const response = await axios(config);

    return response.data;
  } catch (error) {
    return console.log("error", error);
  }
};
