import { useEffect, useState } from 'react';
import styled from 'styled-components';
import Widget from '../Widget';
import Button from '../Button';
import Label from '../Label';

const Question = ({
  question, currentQuestion, totalQuestions, onSubmit,
}) => {
  const [alternativeSelected, setAlternativeSelected] = useState(-1);
  const [rightAlternative, setRightAlternative] = useState(-1);

  useEffect(() => {
    setAlternativeSelected(-1);
    setRightAlternative(-1);
  }, [question]);

  useEffect(() => {
    if (rightAlternative === -1) return;
    setTimeout(() => {
      onSubmit(alternativeSelected === question.answer);
    }, 1000);
  }, [rightAlternative]);

  return (
    <Widget>
      <Widget.Title>
        {`Pergunta ${currentQuestion + 1} de ${totalQuestions}`}
      </Widget.Title>
      <img
        src={question.image}
        alt={question.description}
        style={{
          width: '100%',
          height: '200px',
          objectFit: 'cover',
        }}
      />
      <Widget.Content>
        <Question.Title>{question.title}</Question.Title>
        <p>{question.description}</p>
        <form onSubmit={(e) => {
          e.preventDefault();
          setRightAlternative(question.answer);
        }}
        >
          {question.alternatives.map((alternative, i) => (
            <Label key={alternative} htmlFor={`alternative__${i}`} selected={i === alternativeSelected} showRightAlternative={rightAlternative === i} onClick={() => setAlternativeSelected(i)}>
              <input type="radio" name="question" id={`alternative__${i}`} value={i} style={{ display: 'none' }} />
              {alternative}
            </Label>
          ))}
          <Button type="submit" disabled={alternativeSelected === -1}>Confirmar</Button>
        </form>
      </Widget.Content>
    </Widget>
  );
};

Question.Title = styled.h2`
  font-size: 20px;
`;

export default Question;
