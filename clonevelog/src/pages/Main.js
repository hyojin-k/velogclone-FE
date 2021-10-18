import React from "react";
import styled from 'styled-components';
import Header from '../shared/Header';
import Post from "../components/Post";

import { history } from '../redux/configureStore';

const Main = (props) => {
  return (
    <React.Fragment>
      <Header />
      <PostList>
        <Post />
        <Post />
        <Post />
        <Post />
        <Post />
      </PostList>
    </React.Fragment>
);
};

const PostList = styled.div`
  display: flex;
  flex-wrap: wrap;
  /* gap: 20px 20px; */
  /* justify-content: space-between; */
  max-width: 1024px;
  margin: 0 auto;
  border: 1px solid green; 
  box-sizing: border-box;
`

export default Main;
