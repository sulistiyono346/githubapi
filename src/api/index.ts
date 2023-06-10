import axios from "api/middleware";
import { DetailParam } from "interface/detail";
import { SearchParam } from "interface/search";

export const BASE_URL = "https://api.github.com";

export const getSearch = (params: SearchParam) => {
  return axios.get(`${BASE_URL}/search/users`, { params: params });
};

export const getReposDetail = (userid: DetailParam) => {
  return axios.get(`${BASE_URL}/users/${userid.userid}/repos`);
};
