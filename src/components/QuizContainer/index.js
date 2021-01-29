import styled from 'styled-components';

const QuizContainer = styled.div`
  max-width: 400px;
  margin-left: 50px;
  margin-top: 50px;

  @media(max-width: 500px) {
    margin-left: 0;
    max-width: 100%;
  }
`;

export default QuizContainer;
