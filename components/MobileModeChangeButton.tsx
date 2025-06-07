import React from "react";
import { Fab, FabIcon } from "./ui/fab";
import { Moon, Sun } from "lucide-react-native";
import { useTheme } from "./hooks/useTheme";

const MobileModeChangeButton = () => {
  const { colorMode, toggleColorMode } = useTheme();
  return (
    <>
      <Fab
        className="md:hidden"
        placement="bottom right"
        onPress={toggleColorMode}
      >
        <FabIcon as={colorMode === "light" ? Moon : Sun} className="fill-current" />
      </Fab>
    </>
  );
};

export default MobileModeChangeButton;
