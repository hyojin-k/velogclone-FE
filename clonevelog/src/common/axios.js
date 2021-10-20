import axios from "axios";
import { getCookie } from "../shared/Cookie";
// http://54.180.148.132/api/posting
const instance = axios.create({
  baseURL: "http://54.180.148.132",
  headers: {
    "content-type": "application/json;charset=UTF-8",
    accept: "application/json",
    "Access-Control-Allow-Origin": "*",
    "X-AUTH-TOKEN": `${getCookie("token")}`,
  },
});

export const apis = {
  //SignUp
  signup: (userId, password, userName) =>
    instance.post(
      "/user/signup",
      {
        userId: userId,
        password: password,
        userName: userName,
      },
      {
        headers: {
          "content-type": "application/json",
          "X-AUTH-TOKEN": `${getCookie("token")}`,
        },
      }
    ),
  //LogIn
  signin: (userId, password) =>
    instance.post(
      "/user/login",
      {
        userId: userId,
        password: password,
      },
      {
        headers: {
          "content-type": "application/json",
          "X-AUTH-TOKEN": `${getCookie("token")}`,
        },
      }
    ),

  // 게시물 불러오기
  getPost: () => instance.get("/posts"),
  // 게시물 작성하기
  createPost: (contents) => instance.post("/posts", contents),
  // 게시물 수정하기
  editPost: (id, title, content) =>
    instance.put(`posts/${id}`, { title, content }),
  // 게시물 삭제하기
  delPost: (id) => instance.delete(`posts/${id}`),
};
