import { useEffect, useState } from "react";
import { Container, Button, Modal, Switch, Text, useMantineColorScheme } from "@mantine/core";
import { useMantineTheme } from "@mantine/core";
import { Moon, Sun } from "tabler-icons-react"; // Optional: icons for dark/light theme

export default function ToggleThemeModal() {
  const [darkTheme, setDarkTheme] = useState(true); // State to manage theme
  const { colorScheme, setColorScheme } = useMantineColorScheme(); // Access current color scheme and setter

  useEffect(() => {
    setTimeout(() => setColorScheme(darkTheme ? "dark" : "light"), 100);
  }, [darkTheme]); //

  return (
    <Switch
      checked={darkTheme}
      onChange={(event) => setDarkTheme(event.currentTarget.checked)}
      size="lg"
      style={{ width: 0 }}
      color="yellow" // Optional: adjust color
      label={darkTheme ? "Dark" : "Light"} // Switch label based on theme
      p="lg"
    />
  );
}



