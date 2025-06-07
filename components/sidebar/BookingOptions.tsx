import React from "react";
import { Box } from "../ui/box";
import { HStack } from "../ui/hstack";
import { Heading } from "../ui/heading";
import { Switch } from "../ui/switch";
import { Text } from "../ui/text";
import { VStack } from "../ui/vstack";

const BookingOptions = () => {
  const [selfCheckIn, setSelfCheckIn] = React.useState(false);
  const [mealsIncluded, setMealsIncluded] = React.useState(false);

  return (
    <VStack className="space-y-4">
      <Heading size="sm">Booking Options</Heading>
      <VStack className="w-full">
        <HStack className="space-x-6 w-full">
          <VStack className="flex-1">
            <Text
              size="sm"
              className="text-gray-900 dark:text-gray-100"
            >
              Self check-in
            </Text>
            <Text size="xs" className="text-gray-500">
              Access a place without needing the Host
            </Text>
          </VStack>
          <Switch
            size="sm"
            value={selfCheckIn}
            onValueChange={(val: any) => setSelfCheckIn(val)}
          />
        </HStack>
      </VStack>
      <VStack className="w-full">
        <HStack className="space-x-6 w-full">
          <VStack className="flex-1">
            <Text
              size="sm"
              className="text-gray-900 dark:text-gray-100"
            >
              Meals included
            </Text>
            <Text size="xs" className="text-gray-500">
              Have a prefered meal for your comfy stay
            </Text>
          </VStack>
          <Switch
            size="sm"
            value={mealsIncluded}
            onValueChange={(val: any) => setMealsIncluded(val)}
          />
        </HStack>
      </VStack>
    </VStack>
  );
};
export default BookingOptions;
