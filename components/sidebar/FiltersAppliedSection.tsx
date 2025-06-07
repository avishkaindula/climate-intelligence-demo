import React from "react";
import {
  Badge,
  BadgeText,
} from "../ui/badge";
import { Box } from "../ui/box";
import { HStack } from "../ui/hstack";
import { Icon, CloseIcon } from "../ui/icon";
import { Pressable } from "../ui/pressable";
import { Text } from "../ui/text";

const FiltersAppliedSection = () => {
  const filters = ["Private room", "Wifi", "Air conditioning"];
  const [appliedFilters, setAppliedFilters]: any = React.useState(filters);
  return (
    <Box className="border border-gray-100 rounded-md p-4 dark:border-gray-900">
      <HStack className="justify-between items-center">
        <Text size="sm" className="font-medium">
          Filters applied
        </Text>
        <Pressable
          className={`${appliedFilters.length === 0 ? 'hidden' : 'flex'} p-0`}
          onPress={() => {
            setAppliedFilters([]);
          }}
        >
          <Text className="text-blue-600 underline text-xs">Clear all</Text>
        </Pressable>
      </HStack>
      <HStack className="flex-wrap space-x-2">
        {appliedFilters.map((item: any) => (
          <Badge
            key={item}
            action="muted"
            className="rounded-full px-2.5 py-2 mt-3 items-center flex-row"
          >
            <BadgeText className="text-black dark:text-gray-300 normal-case">
              {item}
            </BadgeText>
            <Pressable
              className="ml-2 rounded-full"
              onPress={() => {
                const newFilters = appliedFilters.filter((item1: any) => {
                  return item1 !== item;
                });
                setAppliedFilters(newFilters);
              }}
            >
              <Icon
                as={CloseIcon}
                size="sm"
                className="text-gray-600 dark:text-gray-300"
              />
            </Pressable>
          </Badge>
        ))}
      </HStack>
    </Box>
  );
};
export default FiltersAppliedSection;
