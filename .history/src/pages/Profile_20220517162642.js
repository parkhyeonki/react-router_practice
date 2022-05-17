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

  return <div></div>;
};

export default Profile;
