import React from "react";
import { SearchIcon } from "../ui/icon";
import { HStack } from "../ui/hstack";
import { Icon } from "../ui/icon";
import { Pressable } from "../ui/pressable";
import { Text } from "../ui/text";

const HeaderTabs = () => {
  const [selectedTab, setSelectedTab] = React.useState("Anywhere");
  return (
    <HStack className="h-20 items-center justify-between">
      <HStack className="rounded-full p-1.5 items-center border border-border-light-200 dark:border-border-dark-900">
        <Pressable
          className={`rounded-full px-3 py-1.5 ${
            selectedTab === "Anywhere" 
              ? "bg-background-light-100 dark:bg-background-dark-700" 
              : "bg-transparent"
          }`}
          onPress={() => setSelectedTab("Anywhere")}
        >
          <Text size="sm" className="font-medium">
            Anywhere
          </Text>
        </Pressable>
        <Pressable
          className={`rounded-full px-3 py-1.5 ${
            selectedTab === "Anyweek" 
              ? "bg-background-light-100 dark:bg-background-dark-700" 
              : "bg-transparent"
          }`}
          onPress={() => setSelectedTab("Anyweek")}
        >
          <Text size="sm" className="font-medium">
            Anyweek
          </Text>
        </Pressable>
        <Pressable
          className={`rounded-full px-3 py-1.5 ${
            selectedTab === "Add guests" 
              ? "bg-background-light-100 dark:bg-background-dark-700" 
              : "bg-transparent"
          }`}
          onPress={() => setSelectedTab("Add guests")}
        >
          <Text size="sm" className="font-medium">
            Add guests
          </Text>
        </Pressable>
        <Pressable className="ml-3 p-2 bg-primary-500 rounded-full">
          <Icon as={SearchIcon} className="text-white w-4 h-4" />
        </Pressable>
      </HStack>
    </HStack>
  );
};
export default HeaderTabs;
