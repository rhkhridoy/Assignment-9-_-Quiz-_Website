import React from "react";
import { Link } from "react-router-dom";

const Topic = ({ topic }) => {
  const { id, name, logo, total } = topic;
  return (
    <div className="py-9">
      <div className="card w-full rounded-md bg-blue-100 shadow-xl">
        <figure>
          <img src={logo} alt="Shoes" />
        </figure>
        <div className="card-body flex-row justify-between">
          <h2 className="card-title">{name} Quiz: <span className="text-blue-600">{total}</span></h2>
          <div className="card-actions">
            <Link to={`/topic/${id}`} className="btn btn-primary">Start Quiz</Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Topic;
