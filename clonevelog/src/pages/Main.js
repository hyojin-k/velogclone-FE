import React, { useEffect } from 'react';
import styled from 'styled-components';
import Header from '../shared/Header';
import Post from '../components/Post';

import { history } from '../redux/configureStore';
import { useDispatch, useSelector } from 'react-redux';
import { actionCreators as postActions } from '../redux/modules/post';

const Main = (props) => {
  const dispatch = useDispatch();
  const post_list = useSelector((state) => state.post.list);

  console.log(post_list);

  useEffect(() => {
    dispatch(postActions.getPostMW());
  }, []);

  return (
    <React.Fragment>
      <Header />
      <Recent>최신</Recent>
      <PostList>
        {post_list.map((p, idx) => {
          return <Post key={idx} {...p} />;
        })}
      </PostList>
    </React.Fragment>
  );
};

const Recent = styled.div`
  max-width: 1024px;
  font-size: 18px;
  color: rgb(134, 142, 150);
  margin: 20px auto;
`;

const PostList = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: auto;
  /* justify-content: space-around; */
  max-width: 1024px;
  margin: 0 auto;
  border: 1px solid green;
  box-sizing: border-box;
`;

export default Main;
