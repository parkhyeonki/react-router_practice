import React from "react";
import { useParams } from "react-router-dom";
const data = {
  mocha: {
    name: "박현기",
    description: "예비 개발자",
  },
  velopert: {
    name: "김민준",
    description: "리액트를 다루는 기술 저자",
  },
};
const Profile = () => {
  const params = useParams();
  const profile = data[params.username];

  return (
    <div>
      <h1>사용자 프로필</h1>
      {profile ? (
        <div>
          <h2>{profile.name}</h2>
          <p>{profile.description}</p>
        </div>
      ) : (
        <p>존재하지 않는 프로필입니다.</p>
      )}
    </div>
  );
};

export default Profile;
