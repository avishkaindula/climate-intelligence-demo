import React from "react";
import { CircleIcon } from "../ui/icon";
import { Heading } from "../ui/heading";
import {
  Radio,
  RadioGroup,
  RadioIndicator,
  RadioLabel,
  RadioIcon,
} from "../ui/radio";
import { VStack } from "../ui/vstack";

const SortBySection = () => {
  const sidebarFiltersCustomerRatings = [
    {
      label: "Top ratings",
      value: "Top ratings",
    },
    {
      label: "Best price",
      value: "Best price",
    },
    {
      label: "Discount",
      value: "Discount",
    },
    {
      label: "What’s new",
      value: "What’s new",
    },
  ];
  const [values, setValues] = React.useState("Top ratings");

  return (
    <VStack className="space-y-2">
      <Heading size="sm">Sort by</Heading>
      <RadioGroup
        value={values}
        onChange={setValues}
        accessibilityLabel="sort-by filter"
        className="space-y-2"
      >
        {sidebarFiltersCustomerRatings.map((placeType: any) => {
          return (
            <Radio
              value={placeType.value}
              className="justify-start my-2"
              size="sm"
              key={placeType.value}
            >
              <RadioIndicator>
                <RadioIcon as={CircleIcon} />
              </RadioIndicator>
              <RadioLabel className="ml-2">{placeType.label}</RadioLabel>
            </Radio>
          );
        })}
      </RadioGroup>
    </VStack>
  );
};
export default SortBySection;
