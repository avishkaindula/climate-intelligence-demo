import React from "react";
import { Box } from "./ui/box";
import { HStack } from "./ui/hstack";
import { Input, InputField, InputIcon, InputSlot } from "./ui/input";
import { SearchIcon } from "./ui/icon";
import HeaderTabs from "./header/HeaderTabs";
import HomestayLogo from "./header/HomestayLogo";
import ToggleMode from "./header/ToggleMode";
import UserProfile from "./header/UserProfile";

const Header = React.memo(() => {
  return (
    <Box>
      {/* big screen */}
      <Box className="px-16 w-full border-b hidden md:flex border-border-light-100 dark:border-border-dark-900"
      >
        <HStack className="items-center justify-between mx-auto w-full">
          <HomestayLogo />
          <HeaderTabs />
          <HStack space="lg" className="items-center pr-1.5">
            <ToggleMode />
            <UserProfile />
          </HStack>
        </HStack>
      </Box>
      {/* small screen */}
      <Box className="p-5 md:hidden w-full">
        <Input variant="rounded" size="sm" className="w-full">
          <InputField placeholder="Anywhere • Any week • Add guests" />
          <InputSlot className="bg-primary-500 rounded-full h-6 w-6 m-1.5">
            <InputIcon as={SearchIcon} className="text-white" size="sm" />
          </InputSlot>
        </Input>
      </Box>
    </Box>
  );
});
export default Header;
