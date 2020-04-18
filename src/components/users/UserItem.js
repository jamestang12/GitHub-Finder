import React from "react";
import ProTypes from "prop-types";
import { Link } from "react-router-dom";

//user was passed in from Users.js
const UserItem = ({ user: { login, avatar_url, html_url } }) => {
  return (
    <div className="card text-center">
      <img src={avatar_url} className="round-img" style={{ width: "60px" }} />
      <h3>{login}</h3>
      <div>
        <Link to={`/user/${login}`} className="btn btn-dark btn-sm my-1">
          More
        </Link>
      </div>
    </div>
  );
};

UserItem.propTypes = {
  user: ProTypes.object.isRequired,
};

export default UserItem;
