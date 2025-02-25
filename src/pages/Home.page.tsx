import { useEffect, useRef, useState } from 'react';
import { Button, Card, Container, Group, Select, SimpleGrid, Text, TextInput, Title, } from '@mantine/core';
import { Welcome } from '../components/Welcome/Welcome';
import { MathJax, MathJaxContext } from 'better-react-mathjax';
import Confetti from "react-confetti";
import ToggleThemeModal from '@/components/ThemeToggleModal/ThemeToggleModal';
import { Notebook } from 'tabler-icons-react';
import { Math as MathLol } from 'tabler-icons-react';
import { Difficulty, Problem } from "@/components/Problem/Problem";

export function HomePage() {
  const [difficulty, setDifficulty] = useState<Difficulty>('Medium');
  const [score, setScore] = useState(0);
  const [correct, setCorrect] = useState(false);

  useEffect(() => {
    if (correct == false) {
      return;
    }

    setScore(score + 1);
  }, [correct]);

  return (

    <>
      <ToggleThemeModal />

      <div style={{ position: 'absolute', top: 20, right: 20 }}>
        <Select
          value={difficulty} // set diff
          onChange={(value) => {
            if (value != null) {
              setDifficulty(value as Difficulty)
            }
          }}
          data={['Easy', 'Medium', 'Hard']}
          placeholder="Choose a difficulty"
          style={{ width: 200 }}
        />
      </div>

      <div style={{ position: 'absolute', padding: "0px", margin: "0px", bottom: -10, right: 20 }}>
        <h1>
          {"x" + score}
        </h1>
      </div>

      <Welcome />

      <Group justify='center' mt="2px" mb="54px">
        <Title order={3}>
          A minimal application for accelerating your knowledge of LaTex!
        </Title>
      </Group>

      <Problem difficulty={difficulty} onChange={(correct) => { setCorrect(correct) }} />

      <Button
        component="a"
        href="https://www.youtube.com/watch?v=Y65FRxE7uMc"
        leftSection={<MathLol size={18} />}
        target="_blank"
        color='yellow'
        size="md"
        style={{
          position: "fixed",
          bottom: 20,
          left: 240,
          zIndex: 1000,
        }}
      >
        Why LaTeX?
      </Button>

      <Button
        component="a"
        href="https://quickref.me/latex"
        target="_blank"
        leftSection={<Notebook size={18} />}
        color='yellow'
        size="md"
        style={{
          position: "fixed",
          bottom: 20,
          left: 20,
          zIndex: 1000,
        }}
      >
        LaTeX Cheat Sheet
      </Button>
    </>
  );
}
