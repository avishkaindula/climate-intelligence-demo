import React from "react";
import {
  Checkbox,
  CheckboxGroup,
  CheckboxIcon,
  CheckboxIndicator,
  CheckboxLabel,
} from "../ui/checkbox";
import { VStack } from "../ui/vstack";
import { Heading } from "../ui/heading";
import { CheckIcon } from "../ui/icon";

const PlaceTypeSection = () => {
  const sidebarFiltersPlaceType = [
    {
      label: "Entire place",
      value: "entirePlace",
    },
    {
      label: "Private room",
      value: "privateRoom",
    },
    {
      label: "Shared room",
      value: "sharedRoom",
    },
  ];

  const [values, setValues] = React.useState(["entirePlace"]);

  return (
    <VStack className="space-y-2">
      <Heading size="sm">Type of place</Heading>
      <CheckboxGroup
        value={values}
        onChange={setValues}
        accessibilityLabel="place-type"
      >
        {sidebarFiltersPlaceType.map((placeType: any) => {
          return (
            <Checkbox
              value={placeType.value}
              size="sm"
              className="my-2 justify-start"
              key={placeType.value}
              accessibilityLabel={placeType.value}
            >
              <CheckboxIndicator>
                <CheckboxIcon as={CheckIcon}></CheckboxIcon>
              </CheckboxIndicator>
              <CheckboxLabel className="ml-2">{placeType.label}</CheckboxLabel>
            </Checkbox>
          );
        })}
      </CheckboxGroup>
    </VStack>
  );
};
export default PlaceTypeSection;
