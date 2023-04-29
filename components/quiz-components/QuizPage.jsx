/* eslint-disable */
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

function QuizApp() {
  const [name, setName] = useState("");
  const [difficulty, setDifficulty] = useState("Easy");
  const [started, setStarted] = useState(false);
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [selectedOption, setSelectedOption] = useState(null);
  const [showAnswer, setShowAnswer] = useState(false);
  const [answers, setAnswers] = useState({});

  const { loading, error, data } = useQuery(GET_QUIZ_QUESTIONS, {
    variables: { difficulty },
    skip: !started,
  });

  const quizQuestions = data?.quizQuestions;

  const handleNameChange = (event) => {
    setName(event.target.value);
  };

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

  const handleQuizSubmit = (event) => {
    event.preventDefault();
    // Do something with name and answers (e.g. submit to server)
    console.log(name, answers);
  };

  if (!started) {
    return (
      <div>
        <form>
          <label>
            Name:
            <input type="text" value={name} onChange={handleNameChange} />
          </label>
          <br />
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
    );
  }

  if (!quizQuestions) return null;

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error :(</p>;

  return (
    <div>
      {!name ? (
        <div>
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
        <div>
          <h2>Question {currentQuestionIndex + 1}</h2>
          <h3>{quizQuestions[currentQuestionIndex].questionTitle}</h3>
          <ul>
            {quizQuestions[currentQuestionIndex].options.map(
              (option, index) => {
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
                    {option}
                    {showAnswer && isCorrect && (
                      <FontAwesomeIcon icon={faCheck} />
                    )}
                  </li>
                );
              }
            )}
          </ul>
          {currentQuestionIndex < quizQuestions.length - 1 ? (
            <button onClick={handleNextQuestion}>Next Question</button>
          ) : (
            <div>
              <p>
                Congratulations {name}! You have completed the quiz.{" "}
                {calculateResult()}
              </p>
              <button onClick={handleRestart}>Restart Quiz</button>
            </div>
          )}
        </div>
      )}
    </div>
  );
}

export default QuizApp;
