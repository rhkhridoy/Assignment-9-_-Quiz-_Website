import React, { useContext } from "react";
import HeroImg from '../heroimg.jpg';
import { TopicContext } from "../Root";
import Topic from "./Topic";


const Home = () => {
  const topicsData = useContext(TopicContext);
  const topics = topicsData.data;
  return (
    <div className="mb-9">
      <div className="topics-head py-5 mt-3 text-center md:flex items-center justify-center">
        <h2 className="text-4xl text-center text-blue-700 font-bold">Welcome to Quiz App</h2>
        <img className="w-[200px] mx-auto md:mx-0 md:ml-5 mt-8" src={HeroImg} alt="" srcset="" />
      </div>
      <div className="grid gap-5 grid-cols-1 md:grid-cols-2 xl:grid-cols-4">
        {topics.map((topic) => (
          <Topic key={topic.id} topic={topic} />
        ))}
      </div>
    </div>
  );
};

export default Home;
