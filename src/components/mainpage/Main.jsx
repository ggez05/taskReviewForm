import React, { useState } from "react";
import axios from "axios";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";

import "./main.styles.css";

const Main = ({ setLoading }) => {
  const [showcomment, setShowComment] = useState(false);
  const [review, setReview] = useState(0);
  const [comment, setComment] = useState("");
  const [error, setError] = useState("");
  const dispatch = useDispatch();

  const submithandler = async () => {
    try {
      setLoading(true);
      const { data } = await axios.post(
        "https://review-app-form.herokuapp.com/givereview",
        {
          review,
          comment,
        }
      );

      dispatch({ type: "SUBMIT", payload: data });
      setLoading(false);
    } catch (error) {
      setError(error.response.data.message);
    }
  };

  return (
    <div className="main_div">
      <div className="wrapper">
        <div className="heading">Leave a review</div>
        <div className="review_div" onClick={() => setShowComment(true)}>
          <div
            className={review >= 1 ? "gold_review" : "review_bar"}
            onClick={() => setReview(1)}
          ></div>
          <div
            className={review >= 2 ? "gold_review" : "review_bar"}
            onClick={() => setReview(2)}
          ></div>
          <div
            className={review >= 3 ? "gold_review" : "review_bar"}
            onClick={() => setReview(3)}
          ></div>
          <div
            className={review >= 4 ? "gold_review" : "review_bar"}
            onClick={() => setReview(4)}
          ></div>
          <div
            className={review >= 5 ? "gold_review" : "review_bar"}
            onClick={() => setReview(5)}
          ></div>
        </div>
        {showcomment ? (
          <div className="comment_box">
            <textarea onChange={(e) => setComment(e.target.value)}></textarea>
          </div>
        ) : (
          ""
        )}
        <div className="submit_button">
          <button onClick={submithandler}>SUBMIT</button>
        </div>
        <div className="error_div">{error ? error : ""}</div>
      </div>
    </div>
  );
};

export default Main;
