import React from "react";
import { HStack } from "./ui/hstack";
import { Link, LinkText } from "./ui/link";
import { Text } from "./ui/text";

const Banner = () => {
  return (
    <HStack
      className="justify-center items-center space-x-2 h-16 bg-gray-100 dark:bg-gray-800"
    >
      <Text className="text-sm text-white">
        Show total prices up front
      </Text>
      <Link href="https://ui.gluestack.io">
        <LinkText className="text-white dark:text-gray-200 font-semibold text-sm">
          Learn more
        </LinkText>
      </Link>
    </HStack>
  );
};
export default Banner;
