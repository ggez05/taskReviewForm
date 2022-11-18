import React from "react";
import { useSelector } from "react-redux";
import "./showdetails.styles.css";

const ShowDetails = () => {
  const { user } = useSelector((user) => ({ ...user }));

  return (
    <div className="show_reviews">
      {user.review}
      <div className="comment_user">{user.comment}</div>
      <div className="savedat_user">{user.savedAt}</div>
    </div>
  );
};

export default ShowDetails;
