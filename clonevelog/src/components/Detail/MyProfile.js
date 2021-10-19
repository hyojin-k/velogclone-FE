import React from 'react';
import styled from 'styled-components';

const MyProfile = (props) => {
  return (
    <Profile>
      <Profile2>
        <ImageDetail>
          <ProfileImage
            src="https://media.vlpt.us/images/jeon3029/profile/81d64f8c-6b15-4551-a623-c09596311d58/social.jpeg?w=240"
            alt="profile"
          />
          <ProfileNick>
            <UserName>
              <UserNameDetail>류띵똥</UserNameDetail>
              <UserNameDescription>🛳 뱃놈에서 코린이로</UserNameDescription>
            </UserName>
          </ProfileNick>
        </ImageDetail>
      </Profile2>
    </Profile>
  );
};

const Profile = styled.div`
  margin-top: 2rem;
  margin-bottom: 3rem;
  width: 100%;
  margin-left: auto;
  margin-right: auto;
`;

const Profile2 = styled.div`
  padding-left: 1rem;
  padding-right: 1rem;
`;

const ImageDetail = styled.div`
  flex-direction: column;
  align-items: flex-start;
  display: flex;
  -webkit-box-align: center;
`;

const ProfileImage = styled.img`
  color: -webkit-link;
  cursor: pointer;
  text-decoration: underline;
  border-radius: 50%;
  object-fit: cover;
  box-shadow: rgb(0 0 0 / 6%) 0px 0px 4px 0px;
  width: 5rem;
  height: 5rem;
`;

const ProfileNick = styled.div`
  margin-left: 0px;
  margin-top: 1rem;
  display: flex;
  flex-direction: column;
  -webkit-box-pack: center;
  justify-content: center;
`;

const UserName = styled.div`
  font-size: 1.125rem;
  line-height: 1.5;
  font-weight: bold;
  color: rgb(33, 37, 41);
`;

const UserNameDetail = styled.p`
  color: inherit;
  text-decoration: none;
  cursor: pointer;
  font-size: 1.125rem;
  line-height: 1.5;
  font-weight: bold;
`;

const UserNameDescription = styled.div`
  margin-top: 0.5rem;
  font-size: 0.875rem;
  letter-spacing: -0.004em;
  white-space: pre-wrap;
  line-height: 1.5;
  color: rgb(73, 80, 87);
`;

export default MyProfile;
