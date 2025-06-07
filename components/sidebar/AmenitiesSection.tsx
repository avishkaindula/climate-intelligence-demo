import React from "react";
import {
  Checkbox,
  CheckboxGroup,
  CheckboxIcon,
  CheckboxIndicator,
  CheckboxLabel,
} from "../ui/checkbox";
import { HStack } from "../ui/hstack";
import { Heading } from "../ui/heading";
import { Icon, CheckIcon, ChevronDownIcon, ChevronUpIcon } from "../ui/icon";
import { Pressable } from "../ui/pressable";
import { Text } from "../ui/text";
import { VStack } from "../ui/vstack";

const AmenitiesSection = () => {
  const sidebarFiltersAmmenities = [
    {
      label: "Wifi",
      value: "wifi",
    },
    {
      label: "Washing machine",
      value: "washing-machine",
    },
    {
      label: "Air conditioning",
      value: "air-conditioning",
    },
    {
      label: "Kitchen",
      value: "kitchen",
    },
    {
      label: "Dryer",
      value: "dryer",
    },
    {
      label: "Iron",
      value: "iron",
    },
    {
      label: "Hair Dryer",
      value: "hair-dryer",
    },
  ];

  const [values, setValues] = React.useState(["wifi", "air-conditioning"]);
  const [viewAllComponents, setViewAllComponents] = React.useState(false);

  return (
    <VStack className="space-y-2">
      <Heading size="sm">Ammenities</Heading>
      <CheckboxGroup
        value={values}
        onChange={setValues}
        accessibilityLabel="ammenities"
      >
        {sidebarFiltersAmmenities.map((ammenity: any, index: any) => {
          if (index > 4 && !viewAllComponents) return null;
          return (
            <Checkbox
              value={ammenity.value}
              className="justify-start my-2"
              size="sm"
              key={ammenity.value}
              accessibilityLabel={ammenity.value}
            >
              <CheckboxIndicator>
                <CheckboxIcon as={CheckIcon} />
              </CheckboxIndicator>
              <CheckboxLabel className="ml-2">{ammenity.label}</CheckboxLabel>
            </Checkbox>
          );
        })}
      </CheckboxGroup>
      {viewAllComponents ? (
        <Pressable
          onPress={() => {
            setViewAllComponents(false);
          }}
        >
          <HStack className="justify-between">
            <Text size="sm" className="font-medium">
              Show less
            </Text>
            <Icon as={ChevronUpIcon} size="sm" />
          </HStack>
        </Pressable>
      ) : (
        <Pressable
          onPress={() => {
            setViewAllComponents(true);
          }}
        >
          <HStack className="justify-between">
            <Text size="sm" className="font-medium">
              Show more
            </Text>
            <Icon as={ChevronDownIcon} size="sm" />
          </HStack>
        </Pressable>
      )}
    </VStack>
  );
};
export default AmenitiesSection;
