import React from "react";
import { Button } from "@/components/ui/button";
import { Icon } from "@/components/ui/icon";
import { HStack } from "@/components/ui/hstack";
import { Text } from "@/components/ui/text";
import { useTheme } from "@/components/hooks/useTheme";
import { Moon, Sun } from "lucide-react-native";

const ThemeToggleButton = () => {
  const { colorMode, toggleColorMode } = useTheme();

  return (
    <Button variant="outline" onPress={toggleColorMode} className="w-full">
      <HStack className="items-center space-x-2">
        <Icon
          as={colorMode === "dark" ? Sun : Moon}
          size="sm"
          className="text-typography-600 dark:text-typography-400"
        />
        <Text
          size="sm"
          className="text-typography-600 dark:text-typography-400"
        >
          {colorMode === "dark" ? "Light Mode" : "Dark Mode"}
        </Text>
      </HStack>
    </Button>
  );
};

export default ThemeToggleButton;
