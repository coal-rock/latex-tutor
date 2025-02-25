import { Accordion, Button, Card, CloseButton, Container, Drawer, Group, Input, MantineComponent, Paper, ScrollArea, Select, SimpleGrid, Text, TextInput, Title, } from '@mantine/core';
import { Welcome } from '../components/Welcome/Welcome';
import { MathJax, MathJaxContext } from 'better-react-mathjax';
import { useEffect, useRef, useState } from 'react';
import Confetti from "react-confetti";
import ToggleThemeModal from '@/components/ThemeToggleModal/ThemeToggleModal';
import { Notebook } from 'tabler-icons-react';
import { Math as MathLol } from 'tabler-icons-react';

export function HomePage() {
  type Difficulty = 'Easy' | 'Medium' | 'Hard';

  const ref1 = useRef<HTMLHeadingElement>(null);
  const ref2 = useRef<HTMLHeadingElement>(null);
  const textInput = useRef<HTMLInputElement>(null);
  const [isEqual, setIsEqual] = useState(false);
  const [latexInput, setLatexInput] = useState("");
  const [showConfetti, setShowConfetti] = useState(false);
  const [randomExpression, setRandomExpression] = useState("tutor!");
  const [difficulty, setDifficulty] = useState<Difficulty>('Medium');
  const [opened, setOpened] = useState(false);
  const [score, setScore] = useState(0);

  const config = {
    loader: { load: ["input/asciimath"] },
    renderMode: "pre",
  };

  let easy = [
    "W = \\Delta K",
    "3\\ln(x)",
    "f(x) = 8x + 4 - e*x",
    "\\Delta K + \\Delta U = 0",
    "\\int 12dx",
    "f'(x) = 6x - 20",
    "\\int (4x+2x-7)dx",
    "\\frac{1x}{2}",
    "12 \\times 4",
    "14 - 3 = 11",
    "50 \\div 10 = 5",
  ];

  let medium = [
    "f'(x) = \\frac{1}{\\sqrt{ 1-x^{2} }}-2\\sec^{2}(x)",
    "f'(x) = 23(0.85)^{x}(\\ln(0.85))",
    "\\Delta V = \\frac{Il}{\\sigma A}",
    "C = \\frac{k(\\varepsilon{0}A)}{d}",
    "V = k{e}\\sum{i} \\frac{q{i}}{r{i}}",
    "U = k{e} \\frac{q{1}q{2}}{r{12}}",
    "\\Delta V = \\frac{k{e}q}{r}",
    "1eV =1.60\\times{10^{-19}J}",
    "V = \\frac{U}{q{0}}",
    "f'(x) = \\frac{2}{\\sqrt[3]{x^{2}}}",
    "F{12} = k{e} \\frac{|q{1}||q{2}|}{r^2}",
    "|e| = 1.6 \\times 10^{-19} C",
    "C = 4\\pi \\varepsilon{0} r",
    "e^x = \\frac{d}{dx}f(u)^n",
    "q = \\pm Ne",
  ];

  let hard = [
    "{\\int^{Q}{0} \\frac{q}{C}dq = \\frac{Q^2}{2C}}",
    "V=k{e} \\frac{Q}{l}(\\frac{l+\\sqrt{ a^2+l^2}}{a})",
    "E{x} = -\\frac{dV}{dx}= 2\\pi k{e}\\sigma\\left[ 1-\\frac{x}{\\sqrt{{R^2+x^2}}} \\right]",
    "V{B} - V{A} = k{e}q\\left[ \\frac{1}{r{B}} - \\frac{1}{r{A}} \\right]",
    "V{B}-V{A} = -\\int^{B}{A}\\vec{E}\\times d \\vec{s}",
    "\\frac{\\Delta U}{q{0}} = -\\int \\vec{E}\\times d \\vec{s}",
    "W = \\int \\vec{F}\\times d\\vec{s} = -\\Delta U",
    "\\Delta U = -q{0}\\int \\vec{E}\\times d \\vec{s}",
    "\\Delta V = -\\int \\vec{E}\\times d \\vec{s}",
    "E = 2\\pi k{e}\\sigma\\left( 1-\\frac{z}{\\sqrt{ z^2+R^2 }} \\right)",
    "\\Phi{E}=(6.20\\times 10^5 N/C)(3.20m^2)\\cos 0\\degree",
    "\\int dV = \\frac{1}{4\\pi \\varepsilon{0}} \\int \\frac{dq}{r}",
    "\\oint E\\times dA = \\frac{Q}{\\varepsilon{0}}",
    "\\lim{ n \\to \\infty }{f(a)} - \\frac{i}{f(t)}-\\frac{d}{dx}f(u)",
    "(\\sqrt[n]{e^x})^n = \\frac{d}{dx}f(u)^n",
  ]

  useEffect(() => {
    // delay to wait for mathjax but i guess we don't need it 
    setTimeout(() => {
      if (ref1.current && ref2.current) {
        console.log(ref1.current.outerText);
        const equal = ref1.current.outerText === ref2.current.outerText
        setIsEqual(equal);

        if (equal && !showConfetti) {
          setShowConfetti(true);
          setScore(score + 1)

          setTimeout(() => {
            let expressions = easy;

            if (difficulty == "Easy") {
              expressions = easy;
            } else if (difficulty == "Medium") {
              expressions = medium;
            }
            else {
              expressions = hard;
            }

            const randomIndex = Math.floor(Math.random() * expressions.length);
            setShowConfetti(false);
            setLatexInput("");
            setRandomExpression(expressions[randomIndex])

            setTimeout(() => {
              textInput.current?.focus();
            }, 100);
          }, 2000);
        }
      }
    }, 0); // lol
  }, [latexInput]);

  useEffect(() => {
    let expressions = easy;

    if (difficulty == "Easy") {
      expressions = easy;
    } else if (difficulty == "Medium") {
      expressions = medium;
    }
    else {
      expressions = hard;
    }

    const randomIndex = Math.floor(Math.random() * expressions.length);
    setShowConfetti(false);
    setLatexInput("");
    setRandomExpression(expressions[randomIndex])

  }, [difficulty])

  return (

    <>
      <ToggleThemeModal />

      <div style={{ position: 'absolute', top: 20, right: 20 }}> <Select
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
      <Container>
        <Card withBorder radius="md" padding="12px">
          <Group justify='center' m="-20">
            <Text>
              <h1>
                Enter the correct LaTeX for the expression below:
              </h1>
            </Text>
          </Group>
          <Group justify='center' >
            <SimpleGrid cols={1} spacing="xs" verticalSpacing="xs" p="0" m="0" mih={"250"} mah={"250"}>
              <MathJaxContext config={config}>
                <MathJax inline={true}>
                  <h1 ref={ref1} style={{ marginBottom: '-58px' }}>
                    {"$$" + randomExpression + "$$"}
                  </h1>
                </MathJax>

                <MathJax color='red'>

                  {showConfetti && <Confetti />}
                  <h1 ref={ref2} color='red' style={{ marginTop: '0px' }}>
                    {isEqual === null ? "$$\\color{red}" + latexInput + "$$" : isEqual ? "$$\\color{green}" + latexInput + "$$" : "$$\\color{red}" + latexInput + "$$"}
                  </h1>
                </MathJax>
              </MathJaxContext>
            </SimpleGrid>
          </Group>
          <MathJaxContext>
            <MathJax>
              <TextInput ref={textInput} autoFocus={true} size="xl" value={latexInput} onChange={(event) => {
                setLatexInput(event.currentTarget.value)
              }} disabled={isEqual !== null && isEqual} />
            </MathJax>
          </MathJaxContext>
        </Card>
      </Container >

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
