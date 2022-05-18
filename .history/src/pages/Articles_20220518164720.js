import React from "react";
import { NavLink, Outlet } from "react-router-dom";

const Articles = () => {
  return (
    <div>
      <Outlet />
      <ul>
        <li>
          <NavLink to="/articles/1" style={({ isActive }) => (isActive ? ActiveStyle : undefined)}>
            게시글 1
          </NavLink>
        </li>
        <li>
          <NavLink to="/articles/2" style={({ isActive }) => (isActive ? ActiveStyle : undefined)}>
            게시글 2
          </NavLink>
        </li>
        <li>
          <NavLink to="/articles/3" style={({ isActive }) => (isActive ? ActiveStyle : undefined)}>
            게시글 3
          </NavLink>
        </li>
      </ul>
    </div>
  );
};

const ArticleItem = () => {
  const ActiveStyle = {
    color: "green",
    fontSize: 21,
  };
  return <li></li>;
};

export default Articles;
