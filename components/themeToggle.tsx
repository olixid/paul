"use client";

import * as React from "react";
import { useTheme } from "next-themes";
import { ButtonIcon } from "./Button";
import { MoonIcon, SunIcon } from "lucide-react";

export function ThemeToggle() {
  const [mounted, setMounted] = React.useState(false);
  const { setTheme, theme } = useTheme();

  React.useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return null;
  }

  return (
    <ButtonIcon
      onClick={() => setTheme(theme === "light" ? "dark" : "light")}
      className="h-10 w-10 "
    >
      <SunIcon className="absolute tel:text-white text-black rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0" />
      <MoonIcon className="absolute tel:text-white text-black rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100" />
      <span className="sr-only">Toggle theme</span>
    </ButtonIcon>
  );
}
