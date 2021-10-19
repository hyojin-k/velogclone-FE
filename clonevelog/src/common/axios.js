import axios from 'axios';

const instance = axios.create({
    // baseURL:'http://54.180.148.132',

    baseURL: 'http://localhost:4000',

    headers: {
        'content-type': 'application/json;charset=UTF-8',
        accept: 'application/json',
      },
})

export const apis = {
    // 게시물 불러오기
    getPostAX: () => instance.get('/posting'),
    // 게시물 작성하기
    createPostAX: (post) => instance.post('/posting', post),
    // 게시물 수정하기
    editPostAX: (id, title, content) => instance.put(`/posting/${id}`, {title, content}),
    // 게시물 삭제하기
    delPostAX: (id) => instance.delete(`/posting/${id}`),
}