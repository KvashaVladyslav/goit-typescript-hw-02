import axios from "axios";
import { ImageInterface, ImagesResponse } from "./types";

axios.defaults.baseURL = "https://api.unsplash.com/";


export const getArticles = async (query: string, currentPage: number): Promise<ImageInterface[]> => {
  const response = await axios.get<ImagesResponse>("/search/photos", {
    params: {
      query: query,
      page: currentPage,
      per_page: 15,
      client_id: "QjChZzvQMy7V7KFwb70-Lxc0HII9m00Dt5nu89gmh7o",
    },
  });
  return response.data.results;
};

