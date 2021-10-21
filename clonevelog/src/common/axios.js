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
console.log(instance);

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
  getPostAX: () => instance.get("/api/posting"),
  // 유저 게시물 불러오기
  // getMyPostAX: (userName) => instance.get(`/api/mypage/${userName}`),
  // 게시물 작성하기
  createPostAX: (post) => instance.post("/api/posting", post,{
    headers: {
      "content-type": "application/json",
      "X-AUTH-TOKEN": `${getCookie("token")}`,
    },
  }),
  // 게시물 수정하기
  editPostAX: (id, title, content) =>
    instance.put(`/api/posting/${id}`, { title, content }),
  // 게시물 삭제하기
  delPostAX: (id) => instance.delete(`/api/posting/${id}`),
};
