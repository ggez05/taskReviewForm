import React from "react";
import { useSelector } from "react-redux";
import "./showdetails.styles.css";

const ShowDetails = () => {
  const { user } = useSelector((user) => ({ ...user }));

  return (
    <div className="review_wrapper">
      DETAILS OF YOUR REVIEW
      <div className="show_reviews">
        THE REVIEW ITSELF - {user.review}
        <div className="comment_user">YOUR COMMENT - {user.comment}</div>
        <div className="savedat_user">
          THE DATE TIME YOU SAVE AT - {user.savedAt}
        </div>
        <div className="objectid_user">OBJECT ID OF MONGO DB - {user.id}</div>
      </div>
    </div>
  );
};

export default ShowDetails;
