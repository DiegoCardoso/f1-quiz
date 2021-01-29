import { useRouter } from 'next/router';
import { useEffect, useState } from 'react';
import db from '../api/db.json';
import Button from '../src/components/Button';
import Question from '../src/components/Question';
import Widget from '../src/components/Widget';

const QuizStates = {
  LOADING: 'LOADING',
  QUIZ: 'QUIZ',
  COMPLETED: 'COMPLETED',
};

export default function QuizPage() {
  const router = useRouter();
  const [points, setPoints] = useState(0);
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [quizState, setQuizState] = useState(QuizStates.LOADING);

  const { name } = router.query;
  const { questions } = db;
  const totalQuestions = questions.length;
  const question = questions[currentQuestion];

  useEffect(() => {
    const timeout = setTimeout(() => {
      setQuizState(QuizStates.QUIZ);
    }, 1000);

    return () => clearTimeout(timeout);
  }, []);

  function handleQuestionSubmit(isRightAnswer) {
    if (isRightAnswer) {
      setPoints(points + 1);
    }
    if ((currentQuestion + 1) < totalQuestions) {
      setCurrentQuestion(currentQuestion + 1);
    } else {
      setQuizState(QuizStates.COMPLETED);
    }
  }

  return (
    <>
      <h1>
        Vamos lá,
        {' '}
        {name}
        !
      </h1>
      {quizState === QuizStates.LOADING && <WidgetLoading />}
      {quizState === QuizStates.QUIZ
      && (
      <Question
        question={question}
        currentQuestion={currentQuestion}
        totalQuestions={totalQuestions}
        onSubmit={handleQuestionSubmit}
      />
      )}
      {quizState === QuizStates.COMPLETED && (
      <WidgetCompleted
        points={points}
        totalQuestions={totalQuestions}
        resetQuiz={() => {
          setCurrentQuestion(0);
          setQuizState(QuizStates.QUIZ);
          setPoints(0);
        }}
      />
      )}
    </>
  );
}

const WidgetLoading = () => (
  <Widget>
    <Widget.Title>Loading...</Widget.Title>
  </Widget>
);

const WidgetCompleted = ({ points, totalQuestions, resetQuiz }) => (
  <Widget>
    <Widget.Title>{`Parabéns! Você acertou ${points} de ${totalQuestions}.`}</Widget.Title>
    <Widget.Content>
      <Button onClick={() => resetQuiz()}>Iniciar novamente</Button>
    </Widget.Content>
  </Widget>
);
