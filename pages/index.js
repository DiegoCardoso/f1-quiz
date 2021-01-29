import styled from 'styled-components';
import { useRouter } from 'next/router';

import { useState } from 'react';
import db from '../api/db.json';
import Widget from '../src/components/Widget';
import Button from '../src/components/Button';

const Input = styled.input`
  padding: ${({ theme }) => theme.sizes.medium};
  background: #ffffff21;
  border: 1px solid ${({ theme }) => theme.colors.primary};
  color: white;
  margin-top: ${({ theme }) => theme.sizes.medium};
  border-radius: ${({ theme }) => theme.borderRadius};
  outline: none;
  display: block;
  width: 100%;
  font-size: 14px;

  &::placeholder {
    color: #ffffffb8;
  }

  &:focus {
    background: #ffffff42;
  }
`;

export default function Home() {
  const router = useRouter();
  const [name, setName] = useState('');
  return (

    <Widget>
      <Widget.Title>
        {db.title}
      </Widget.Title>
      <Widget.Content>
        {db.description}
        <form onSubmit={(e) => {
          e.preventDefault();

          if (name.length) {
            router.push(`/quiz?name=${name}`);
          }
        }}
        >
          <Input placeholder="Diz aí o seu nome" name="name" onChange={(e) => setName(e.target.value)} />
          <Button type="submit" disabled={name.length === 0}>Começar</Button>
        </form>
      </Widget.Content>
    </Widget>
  );
}
