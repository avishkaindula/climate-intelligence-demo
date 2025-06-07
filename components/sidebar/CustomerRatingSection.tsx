import React from "react";
import {
  Checkbox,
  CheckboxGroup,
  CheckboxIcon,
  CheckboxIndicator,
  CheckboxLabel,
} from "../ui/checkbox";
import { Heading } from "../ui/heading";
import { Icon, CheckIcon, StarIcon } from "../ui/icon";
import { VStack } from "../ui/vstack";

const CustomerRatingSection = () => {
  const sidebarFiltersCustomerRatings = [
    {
      label: "5 stars",
      value: "5 stars",
    },
    {
      label: "4+ stars",
      value: "4+ stars",
    },
    {
      label: "3+ stars",
      value: "3+ stars",
    },
    {
      label: "2+ stars",
      value: "2+ stars",
    },
  ];
  const [values, setValues] = React.useState(["wifi", "air-conditioning"]);

  return (
    <VStack className="w-full space-y-4">
      <Heading size="sm">Customer Ratings</Heading>
      <CheckboxGroup
        value={values}
        onChange={setValues}
        accessibilityLabel="rating"
      >
        {sidebarFiltersCustomerRatings.map((placeType: any, index: any) => {
          return (
            <Checkbox
              value={placeType.value}
              size="sm"
              className="my-2"
              key={index}
              accessibilityLabel={placeType.value}
            >
              <CheckboxIndicator>
                <CheckboxIcon as={CheckIcon} />
              </CheckboxIndicator>
              <CheckboxLabel className="ml-2">
                <Icon
                  as={StarIcon}
                  size="xs"
                  className="text-black dark:text-white"
                />{" "}
                {placeType.label}
              </CheckboxLabel>
            </Checkbox>
          );
        })}
      </CheckboxGroup>
    </VStack>
  );
};
export default CustomerRatingSection;
