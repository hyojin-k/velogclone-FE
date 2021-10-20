import axios from 'axios';

const instance = axios.create({
  baseURL: 'http://54.180.148.132/',
  headers: {
    'content-type': 'application/json;charset=UTF-8',
    accept: 'application/json',
  },
});

export const apis = {
  // 게시물 불러오기
  getPost: (url = '/') => instance.get(`${url}`),
  // 게시물 작성하기
  createPost: (contents) => instance.post('/posts', contents),
  // 게시물 수정하기
  editPost: (id, title, content) =>
    instance.put(`posts/${id}`, { title, content }),
  // 게시물 삭제하기
  delPost: (id) => instance.delete(`posts/${id}`),
};
