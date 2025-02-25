import { useEffect, useState } from "react";
import { Switch, useMantineColorScheme } from "@mantine/core";
export default function ToggleThemeModal() {
  const [darkTheme, setDarkTheme] = useState(true);
  const { colorScheme, setColorScheme } = useMantineColorScheme();

  useEffect(() => {
    setTimeout(() => setColorScheme(darkTheme ? "dark" : "light"), 100);
  }, [darkTheme]);

  return (
    <Switch
      checked={darkTheme}
      onChange={(event) => setDarkTheme(event.currentTarget.checked)}
      size="lg"
      style={{ width: 0 }}
      color="yellow"
      label={darkTheme ? "Dark" : "Light"}
      p="lg"
    />
  );
}



