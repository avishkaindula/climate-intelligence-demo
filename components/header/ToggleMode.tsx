import React from "react";
import { Icon, MoonIcon, SunIcon } from "../ui/icon";
import { Button } from "../ui/button";
import { useTheme } from "../hooks/useTheme";

const ToggleMode = () => {
  const { colorMode, toggleColorMode } = useTheme();
  return (
    <Button className="p-0 bg-transparent" onPress={toggleColorMode}>
      <Icon
        as={colorMode === "dark" ? SunIcon : MoonIcon}
        size="xl"
        className="text-background-700 dark:text-background-300 fill-current"
      />
    </Button>
  );
};
export default ToggleMode;
