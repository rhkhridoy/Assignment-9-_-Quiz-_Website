import { EyeIcon } from "@heroicons/react/24/solid";
import React, { useState } from "react";
import { useLoaderData } from "react-router-dom";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const TopicQuiz = () => {
  const quizLoad = useLoaderData();
  const quizData = quizLoad.data;
  const quizQuestion = quizData.questions;
  const [count, setCount] = useState(0);
  
 

  return (
    <div className="py-5 pb-9 md:w-9/12 mx-auto">
      <div className="text-center py-4">
        <h3 className="text-4xl text-blue-700 font-bold">
          Quiz of {quizData.name} || <span className="tex-3xl">Right Answer: {count}</span>
        </h3>
      </div>
      <div className="question">
        {quizQuestion.map((singleQus, index) => (
          <div className="bg-base-100 shadow-lg py-5 px-2 rounded-md mb-6">
            <h2 className="flex justify-between items-center mb-2 text-xl font-semibold text-blue-600">
              <span className="w-11/12">
                Quiz: {index + 1} {(singleQus.question.replace(/<[^>]+>/g, ''))}
              </span>
              <button onClick={() => {
                toast(singleQus.correctAnswer)
              }}>
                <EyeIcon className="h-6 w-6 text-blue-500" />
              </button>
            </h2>

            <div className="options grid md:grid-cols-2 gap-4 p-4 text-left">

              {singleQus.options.map((option, index) => (
                <div className="form-control" key={index}>

                  <label className="label justify-start cursor-pointer">
                    <input
                      type="radio"
                      name="radio"
                      onChange={() => {
                        if (singleQus.correctAnswer === option) {
                          setCount(count + 1);
                          toast("Your Answer is Right!");
                        } else {
                          toast("Sorry! Your Answer is wrong!");
                        }
                      }}
                      className="radio checked:bg-red-500"
                    />
                    <span className="label-text ml-2">{option}</span>
                  </label>

                  <ToastContainer />
                </div>
              ))}
              
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default TopicQuiz;
