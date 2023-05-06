/* eslint-disable */
import React from "react";
import { gql, useQuery } from "@apollo/client";
import { useState } from "react";
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
    setCurrentQuestionIndex(currentQuestionIndex + 1);
    setSelectedOption(null);
    setShowAnswer(false);
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
    return `You answered ${correctAnswers} out of ${totalQuestions} questions correctly (${percentage.toFixed(
      2
    )}%)`;
  };

  // const handleSubmit = (event) => {
  //   event.preventDefault();
  //   // Submit the quiz results and name to the server here
  //   console.log(name, answers);
  // };

  const handleRestart = () => {
    setStarted(false);
    setCurrentQuestionIndex(0);
    setSelectedOption(null);
    setShowAnswer(false);
    setAnswers({});
    setName("");
  };

  if (!started) {
    return (
      <div className=" quizpage ">
        <form className=" bg-gray-100 text-black my-4 p-8 border-double border-2  border-black shadow-md rounded-2xl shadow-slate-400 width-30 ">
          <label
            for="name"
            className="my-4 border-black  border-b-2 font-cursive"
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
          <label className="my-2 pb-4 border-black  border-b-2 font-cursive ">
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
          class="btn"
          className="bg-pink-600 mt-2 p-2 rounded-full border-black border-2 shadow-md shadow-black hover:bg-pink-500 hover:text-white hover:shadow-pink-800"
        >
          Start
        </button>
      </div>
    );
  }

  if (!quizQuestions) return null;

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error :(</p>;

  return (
    <div>
      {!name ? (
        <div className="container quizpage">
          <form>
            <label>
              Please enter your name:
              <input
                type="text"
                value={inputName}
                onChange={(event) => setInputName(event.target.value)}
              />
            </label>
          </form>
          <button onClick={handleNameSubmit}>Submit</button>
        </div>
      ) : !started ? (
        <div>
          <form>
            <label>
              Select difficulty:
              <select value={difficulty} onChange={handleDifficultyChange}>
                <option value="Easy">Easy</option>
                <option value="Medium">Medium</option>
                <option value="Hard">Hard</option>
              </select>
            </label>
          </form>
          <button onClick={handleStartClick}>Start</button>
        </div>
      ) : !quizQuestions ? null : (
        <div className="flex flex-col items-center">
          <div className="container w-1/2 flex-col rounded-xl bg-gray-500 p-4 my-2">
            <h2 className="text-lg font-semibold">
              Question {currentQuestionIndex + 1}
              {" : "}
              {quizQuestions[currentQuestionIndex].questionTitle}
            </h2>
            <ul>
              {quizQuestions[currentQuestionIndex].options.map(
                (option, index) => {
                  const isCorrect =
                    quizQuestions[currentQuestionIndex].correctAnswer ===
                    option;
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
                       {option}
                      {showAnswer && isCorrect && (
                        <FontAwesomeIcon icon={faCheck} />
                      )}
                    </li>
                  );
                }
              )}
            </ul>
          </div>
          {currentQuestionIndex < quizQuestions.length - 1 ? (
            <button onClick={handleNextQuestion}>Next Question</button>
          ) : (
            <div className=" w-1/2 my-4 py-4 border-black border-2 flex flex-col items-center rounded-xl">
              <p className="font-bold mb-2 px-2 rounded-full border-b-2 border-dashed border-black text-center">
                Hey {name} ! You have completed the quiz.{" "}
              </p>
              <p className="font-bold mb-2 px-2 rounded-full border-b-2 border-dashed border-black text-center">
                {calculateResult()}
              </p>
              <button
                onClick={handleRestart}
                className="bg-pink-600 mt-2 p-2 rounded-full border-black border-2 shadow-md shadow-black hover:bg-pink-500 hover:text-white hover:shadow-pink-800 transition-transform hover:border-y-transparent "
              >
                Restart Quiz
              </button>
            </div>
          )}
        </div>
      )}
    </div>
  );
}

export default Quiz;
