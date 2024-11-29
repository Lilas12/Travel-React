import React, { useState } from "react";
import styled from "styled-components";

import quiz2 from "../assets/images/quiz2.mp4";

const Content = styled.div`
  position: absolute;
  top: 61%;
  left: 53%;
  transform: translate(-50%, -50%);
  text-align: center;
  z-index: 2;
  bottom: 40px;
`;

const StyledVideo = styled.video`
  width: 100%;
  height: auto;
`;

const QuizContainer = styled.div`
  text-align: center;
  margin-top: 100px;
  /* margin-bottom: 50px; */
  background: #f8f2f8;
`;

const Heading = styled.h1`
  color: #fff;
  font-family: "Noto Sans Sora Sompeng";
  font-size: 100px;
  background-color: rgba(0, 0, 0, 0.8);
  box-shadow: 0 7px 30px rgba(0, 0, 0, 0.5);

  @media (max-width: 768px) {
    font-size: 60px;
    margin-top: -100px;
  }
`;

const Heading2 = styled.h1`
  color: #000;
  font-family: "Noto Sans Sora Sompeng";
  font-size: 50px;
`;

const QuestionCard = styled.div`
  margin: 0 auto;
  width: 50%;
  height: auto;
  min-height: 500px;
  background-color: #f8f2f8;
  padding: 20px;
  border-radius: 16px;
  color: #000;
  box-shadow: rgba(0, 0, 0, 0.3) 20px 18px 36px 18px;
  margin-bottom: 30px;

  @media (max-width: 768px) {
    width: 80%;
  }
`;

const OptionList = styled.ul`
  list-style: none;
`;

const OptionItem = styled.li`
  margin-top: 20px;
  background-color: #bb8c98;
  padding: 16px;
  border-radius: 20px;
  font-size: 18px;
  border: 4px solid #bb8c98;
  width: 90%;

  @media (max-width: 768px) {
    max-width: 70%;
  }
`;

const QuestionText = styled.h3`
  color: #1f2041;
  font-size: 24px;
`;

const ResultsContainer = styled.div`
  margin: 0 auto;
  width: 50%;
  height: auto;
  min-height: 300px;
  margin-top: 64px;
  margin-bottom: 5px;
  background-color: #f8f2f8;
  padding: 16px;
  border-radius: 16px;
  color: #000;
  font-family: "Inter";
  box-shadow: rgba(0, 0, 0, 0.3) 20px 18px 36px 18px;
`;

const Button = styled.button`
  background-color: #bb8c98;
  border: none;
  color: #000;
  padding: 16px 24px;
  text-align: center;
  text-decoration: none;
  display: inline-block;
  font-size: 16px;
  font-weight: bold;
  border-radius: 24px;
  &:hover {
    opacity: 0.8;
    transform: scale(1.2);
  }
`;

function Quiz() {
  const [Results, setResults] = useState(false);
  const [Question, setQuestion] = useState(0);
  const [score, setShowResultat] = useState(0);

  const questions = [
    {
      text: "In which year did second World War start?",
      options: [
        { id: 0, text: "1939", isCorrect: true },
        { id: 1, text: "1916", isCorrect: false },
        { id: 2, text: "1935", isCorrect: false },
        { id: 3, text: "1930", isCorrect: false },
      ],
    },
    {
      text: "What is the highest mountain in the world?",
      options: [
        { id: 0, text: "Mount Everest", isCorrect: true },
        { id: 1, text: "K2", isCorrect: false },
        { id: 2, text: "Kangchenjunga", isCorrect: false },
        { id: 3, text: "Makalu", isCorrect: false },
      ],
    },

    {
      text: "Which country has the largest population in the world?",
      options: [
        { id: 0, text: "India", isCorrect: false },
        { id: 1, text: "USA", isCorrect: false },
        { id: 2, text: "China", isCorrect: true },
        { id: 3, text: "Brazil", isCorrect: false },
      ],
    },
    {
      text: "What is the largest ocean in the world?",
      options: [
        { id: 0, text: "Indian Ocean", isCorrect: false },
        { id: 1, text: "Atlantic Ocean", isCorrect: false },
        { id: 2, text: "Pacific Ocean", isCorrect: true },
        { id: 3, text: "Arctic Ocean", isCorrect: false },
      ],
    },
    {
      text: "What is the capital of Spain?",
      options: [
        { id: 0, text: "Rome", isCorrect: false },
        { id: 1, text: "Paris", isCorrect: false },
        { id: 2, text: "Madrid", isCorrect: true },
        { id: 3, text: "London", isCorrect: false },
      ],
    },

    {
      text: "What is the capital of Japan?",
      options: [
        { id: 0, text: "Osaka", isCorrect: false },
        { id: 1, text: "Tokyo", isCorrect: true },
        { id: 2, text: "Kyoto", isCorrect: false },
        { id: 3, text: "Nagoya", isCorrect: false },
      ],
    },

    {
      text: "What is the longest river in the world?",
      options: [
        { id: 0, text: "Amazon River", isCorrect: false },
        { id: 1, text: "Nile", isCorrect: true },
        { id: 2, text: "Yangtze", isCorrect: false },
        { id: 3, text: "Mississippi", isCorrect: false },
      ],
    },
    {
      text: "Which planet is closest to the sun?",
      options: [
        { id: 0, text: "Venus", isCorrect: false },
        { id: 1, text: "Mercury", isCorrect: true },
        { id: 2, text: "Mars", isCorrect: false },
        { id: 3, text: "Earth", isCorrect: false },
      ],
    },
    {
      text: "What is the largest lake in Sweden?",
      options: [
        { id: 0, text: "Vänern", isCorrect: true },
        { id: 1, text: "Vättern", isCorrect: false },
        { id: 2, text: "Mälaren", isCorrect: false },
        { id: 3, text: "Hjälmaren", isCorrect: false },
      ],
    },

    {
      text: "What is the largest lake in Sweden?",
      options: [
        { id: 0, text: "Vänern", isCorrect: true },
        { id: 1, text: "Vättern", isCorrect: false },
        { id: 2, text: "Mälaren", isCorrect: false },
        { id: 3, text: "Hjälmaren", isCorrect: false },
      ],
    },
  ];

  const Clicked = (isCorrect) => {
    if (isCorrect) {
      setShowResultat(score + 1);
    }

    if (Question + 1 < questions.length) {
      setQuestion(Question + 1);
    } else {
      setResults(true);
    }
  };

  const restartGame = () => {
    setShowResultat(0);
    setQuestion(0);
    setResults(false);
  };

  return (
    <>
      <QuizContainer>
        <StyledVideo autoPlay loop muted>
          <source src={quiz2} type="video/mp4" />
        </StyledVideo>

        <Content>
          <Heading>Quiz 🧠</Heading>
        </Content>

        <Heading2>Results: {score}</Heading2>

        {Results ? (
          <ResultsContainer>
            <h1>"Final result"</h1>
            <h2>
              "You have answered correctly" {score} of {questions.length}{" "}
              questions.
            </h2>
            {score === questions.length && (
              <h3>
                "Congratulations 🎉! you get a discount for your trip. Contact
                us for more info."
              </h3>
            )}

            <Button onClick={() => restartGame()}>Restart the game</Button>
          </ResultsContainer>
        ) : (
          <QuestionCard>
            <h2>
              Questions: {Question + 1} of{questions.length}
            </h2>
            <QuestionText>{questions[Question].text}</QuestionText>

            <OptionList>
              {questions[Question].options.map((option) => {
                return (
                  <OptionItem
                    key={option.id}
                    onClick={() => Clicked(option.isCorrect)}
                  >
                    {option.text}
                  </OptionItem>
                );
              })}
            </OptionList>
          </QuestionCard>
        )}
      </QuizContainer>
    </>
  );
}

export default Quiz;
