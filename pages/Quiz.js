/* eslint-disable */ 
import React, { useState } from "react";
import { gql, useQuery } from "@apollo/client";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCheck } from "@fortawesome/free-solid-svg-icons";

const GET_QUIZ_QUESTIONS = gql`
  query GetQuizQuestions($difficulty: Difficulty!) {
    quizQuestions(where: { difficulty: $difficulty }) {
      id
      questionTitle
      options
      correctAnswer
    }
  }
`;

function Quiz() {
  const [difficulty, setDifficulty] = useState("Easy");
  const [started, setStarted] = useState(false);
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [selectedOption, setSelectedOption] = useState(null);
  const [showAnswer, setShowAnswer] = useState(false);
  const [answers, setAnswers] = useState({});
  const [name, setName] = useState("");
  const [submitted, setSubmitted] = useState(false);

  const { loading, error, data } = useQuery(GET_QUIZ_QUESTIONS, {
    variables: { difficulty },
    skip: !started,
  });

  const quizQuestions = data?.quizQuestions;

  const handleDifficultyChange = (event) => {
    setDifficulty(event.target.value);
  };

  const handleStartClick = () => {
    setStarted(true);
  };

  const handleNextQuestion = () => {
    if (!selectedOption) return;
    if (currentQuestionIndex < quizQuestions.length - 1) {
      setCurrentQuestionIndex(currentQuestionIndex + 1);
      setSelectedOption(null);
      setShowAnswer(false);
    } else {
      setSubmitted(true);
    }
  };

  const handleOptionSelect = (option) => {
    setSelectedOption(option);
    setShowAnswer(true);

    // Determine whether selected option is correct or incorrect
    const isCorrect =
      quizQuestions[currentQuestionIndex].correctAnswer === option;

    // Add "correct" or "incorrect" class to selected option
    const selectedOptionIndex =
      quizQuestions[currentQuestionIndex].options.indexOf(option);
    const updatedAnswers = { ...answers };
    updatedAnswers[currentQuestionIndex] = {
      selectedOptionIndex,
      isCorrect,
    };
    setAnswers(updatedAnswers);
  };

  const calculateResult = () => {
    const correctAnswers = Object.values(answers).filter(
      (answer) => answer.isCorrect
    ).length;
    const totalQuestions = quizQuestions.length;
    const percentage = (correctAnswers / totalQuestions) * 100;
    return {
      correctAnswers,
      totalQuestions,
      percentage: percentage.toFixed(2),
    };
  };

  const handleRestart = () => {
    setStarted(false);
    setCurrentQuestionIndex(0);
    setSelectedOption(null);
    setShowAnswer(false);
    setAnswers({});
    setName("");
    setSubmitted(false);
  };

  if (!started) {
    return (
      <div className="quizpage">
        <form className="bg-gray-100 text-black my-4 p-8 border-double border-2 border-black shadow-md rounded-2xl shadow-slate-400 width-30 max-md:w-4/5">
          <label
            htmlFor="name"
            className="my-4 border-black border-b-2 font-cursive"
          >
            <p className="border-black border-solid border-b-2 font-semibold">
              Enter your name:
            </p>
            <input
              type="text"
              id="name"
              value={name}
              placeholder="Your Name Here"
              onChange={(event) => setName(event.target.value)}
              required
              className="text-black my-4"
            />
          </label>
          <label className="my-2 pb-4 border-black border-b-2 font-cursive">
            Select difficulty:
            <select
              value={difficulty}
              onChange={handleDifficultyChange}
              style={{ color: "black" }}
            >
              <option value="Easy">Easy</option>
              <option value="Medium">Medium</option>
              <option value="Hard">Hard</option>
            </select>
          </label>
        </form>
        <button
          onClick={handleStartClick}
          id="start-btn"
          className="btn bg-pink-600 mt-2 px-2 rounded-full border-black border-2 shadow-md shadow-black hover:bg-pink-500 hover:text-white hover:shadow-pink-800 transition-transform hover:border-y-transparent"
        >
          Start
        </button>
      </div>
    );
  }

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error :(</p>;

  if (submitted) {
    const { correctAnswers, totalQuestions, percentage } = calculateResult();
    return (
      <div className="result-page flex flex-col items-center justify-center h-screen bg-gray-100">
        <div className="bg-white p-8 rounded-lg shadow-lg">
          <h1 className="text-3xl font-bold mb-4">Result</h1>
          <p className="text-xl">
            Name: <span className="font-semibold">{name}</span>
          </p>
          <p className="text-xl">
            Correct Answers:{" "}
            <span className="font-semibold">{correctAnswers}</span>
          </p>
          <p className="text-xl">
            Total Questions:{" "}
            <span className="font-semibold">{totalQuestions}</span>
          </p>
          <p className="text-xl">
            Percentage: <span className="font-semibold">{percentage}%</span>
          </p>
          <div className="flex justify-center">
          <button
            onClick={handleRestart}
            className="btn bg-blue-500 hover:bg-blue-600 text-white font-semibold py-2 px-4 rounded-md mt-4"
          >
            Restart Quiz
          </button>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="flex flex-col items-center pt-8">
      <div className="container w-1/2 flex-col rounded-xl bg-gray-500 p-4 my-2">
        <h2 className="text-lg font-semibold">
          Question {currentQuestionIndex + 1}:{" "}
          {quizQuestions[currentQuestionIndex].questionTitle}
        </h2>
        <ul>
          {quizQuestions[currentQuestionIndex].options.map((option, index) => {
            const isCorrect =
              quizQuestions[currentQuestionIndex].correctAnswer === option;
            const isSelected = selectedOption === option;
            let optionClasses = "option-button";
            if (isSelected) {
              optionClasses += isCorrect ? " correct" : " incorrect";
            } else if (showAnswer && isCorrect) {
              optionClasses += " correct";
            }
            return (
              <li
                key={index}
                className={optionClasses}
                onClick={() => {
                  if (!selectedOption) {
                    handleOptionSelect(option);
                  }
                }}
              >
                {option} {" "}
                {showAnswer && isCorrect && <FontAwesomeIcon icon={faCheck} />}
              </li>
            );
          })}
        </ul>
      </div>
      <button
        onClick={handleNextQuestion}
        className="text-lg border-solid border-black border-y-2 rounded-full bg-pink-600 text-white hover:bg-white hover:text-black transition duration-700 p-0.5 px-2 mt-2"
      >
        {currentQuestionIndex < quizQuestions.length - 1
          ? "Next Question"
          : "Submit"}
      </button>
    </div>
  );
}

export default Quiz;
