import axios from "axios";
import { BASE_URL } from "../constants/contants";

export const deleteTask = async (id: string) => {
  var config = {
    method: "delete",
    url: `${BASE_URL}v1/checkList/${id}`,
    headers: {},
  };

  try {
    const response = await axios(config);

    return response.data;
  } catch (error) {
    return console.log("error", error);
  }
};
