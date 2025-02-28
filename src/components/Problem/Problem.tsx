import { useEffect, useRef, useState } from 'react';
import { Button, Card, Container, Group, HoverCard, Paper, SimpleGrid, Text, TextInput, useMantineTheme } from '@mantine/core';
import Confetti from "react-confetti";
import katex, { KatexOptions } from 'katex';
import 'katex/dist/katex.min.css';

export type Difficulty = 'Easy' | 'Medium' | 'Hard';

export type ProblemProps = {
  onChange: (correct: boolean) => void,
  difficulty: Difficulty,
}

export function Problem(props: ProblemProps) {

  // she blob on my json until i weakly typed programming
  const problems = {
    "Easy": [
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
    ],
    "Medium": [
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
    ],
    "Hard": [
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
  }

  const requestedExpression = useRef<HTMLElement>(null);
  const givenExpression = useRef<HTMLElement>(null);

  const textInput = useRef<HTMLInputElement>(null);

  const [isEqual, setIsEqual] = useState(false);
  const [latexInput, setLatexInput] = useState("");
  const [showConfetti, setShowConfetti] = useState(false);
  const [randomExpression, setRandomExpression] = useState("");

  const [isError, setIsError] = useState(false);
  const [errorMsg, setErrorMsg] = useState("");

  useEffect(() => {
    let options: KatexOptions = {
      output: "mathml",
      displayMode: false,
    };

    try {
      katex.render(latexInput, givenExpression.current!, options);
      givenExpression.current!.querySelector("span > math> semantics > annotation")!.remove();
      setIsError(false);
    } catch (error) {
      givenExpression.current!.innerHTML = "";
      setIsError(true);
      setErrorMsg(JSON.parse(JSON.stringify(error))["rawMessage"]);
    }

    if (requestedExpression.current && givenExpression.current) {
      const equal = requestedExpression.current!.innerHTML === givenExpression.current!.innerHTML;

      console.log(requestedExpression.current!.innerHTML);
      console.log(givenExpression.current!.innerHTML);

      console.log(equal)
      setIsEqual(equal);
      props.onChange(equal);

      if (equal && !showConfetti) {
        setShowConfetti(true);

        setTimeout(() => {
          const expressions = problems[props.difficulty];
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
  }, [latexInput]);

  useEffect(() => {
    let expressions = problems[props.difficulty];

    const randomIndex = Math.floor(Math.random() * expressions.length);
    setShowConfetti(false);
    setLatexInput("");
    setRandomExpression(expressions[randomIndex])

  }, [props.difficulty])

  useEffect(() => {
    let options: KatexOptions = {
      output: "mathml",
      displayMode: false,
    };

    katex.render(randomExpression, requestedExpression.current!, options);
    requestedExpression.current!.querySelector("span > math> semantics > annotation")!.remove();
  }, [randomExpression])

  return (
    <>
      <Container>
        <Card withBorder radius="md" padding="12px">
          <Group justify='center' m="-20">
            <h1>
              Enter the correct LaTeX for the expression below:
            </h1>
          </Group>
          <Group justify='center' >
            <SimpleGrid cols={1} spacing="xs" verticalSpacing="xs" p="0" m="0" mih={"250"} mah={"250"}>
              {showConfetti && <Confetti />}
              <div ref={requestedExpression as React.RefObject<HTMLDivElement>} />
              {
                isError ?
                  <HoverCard width={280} shadow="md">
                    <HoverCard.Target justify-content="center">
                      <Text size="sm" ta="center">
                        {"error"}
                      </Text>
                    </HoverCard.Target>
                    <HoverCard.Dropdown>
                      <Text size="sm">
                        {errorMsg}
                      </Text>
                    </HoverCard.Dropdown>
                  </HoverCard>
                  :
                  <></>
              }

              <span className="katex">
                <span className="katex-mathml">{"The KaTeX stylesheet is not loaded!"}</span>
                <span className="katex-version rule">{"KaTeX stylesheet version: "}</span>
              </span>
              <span className="katex-mathml" ref={givenExpression as React.RefObject<HTMLDivElement>} />
            </SimpleGrid>
          </Group>
          <TextInput ref={textInput} autoFocus={true} size="xl" value={latexInput} onChange={(event) => {
            setLatexInput(event.currentTarget.value)
          }} disabled={isEqual !== null && isEqual} />
        </Card>
      </Container >
    </>
  );
}
