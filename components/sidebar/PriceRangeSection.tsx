import React from "react";
import {
  Checkbox,
  CheckboxGroup,
  CheckboxIndicator,
  CheckboxLabel,
  CheckboxIcon,
} from "../ui/checkbox";
import { Slider, SliderTrack, SliderFilledTrack, SliderThumb } from "../ui/slider";
import { Text } from "../ui/text";
import { Tooltip, TooltipContent, TooltipText } from "../ui/tooltip";
import { VStack } from "../ui/vstack";
import { Heading } from "../ui/heading";
import { CheckIcon } from "../ui/icon";

const PriceRangeSection = () => {
  const [sliderValue, setSliderValue] = React.useState(3500);
  const [values, setValues] = React.useState(["entirePlace"]);
  const handleChange = (value: any) => {
    setSliderValue(value);
  };

  const sidebarFiltersPriceRange = [
    {
      label: "below ₹2001",
      value: "below ₹2001",
    },
    {
      label: "₹2001 - ₹3000",
      value: "₹2001 - ₹3000",
    },
    {
      label: "₹3001 - ₹4001",
      value: "₹3001 - ₹4001",
    },
    {
      label: "above ₹3001",
      value: "above ₹3001",
    },
  ];

  return (
    <VStack className="space-y-4">
      <Heading size="sm">Price Range</Heading>
      <Slider
        minValue={800}
        maxValue={5000}
        className="w-full"
        size="sm"
        value={sliderValue}
        onChange={(value: any) => {
          handleChange(value);
        }}
      >
        <SliderTrack>
          <SliderFilledTrack />
        </SliderTrack>
        <Tooltip
          pointerEvents={"none"}
          placement="bottom"
          trigger={(triggerProps: any) => {
            return <SliderThumb {...triggerProps} pointerEvents={"auto"} />;
          }}
        >
          <TooltipContent>
            <TooltipText className="text-white">₹{sliderValue}</TooltipText>
          </TooltipContent>
        </Tooltip>
      </Slider>
      <CheckboxGroup
        value={values}
        onChange={setValues}
        className="mt-3"
        accessibilityLabel="price filter"
      >
        {sidebarFiltersPriceRange.map((priceRange: any) => {
          return (
            <Checkbox
              value={priceRange.value}
              size="sm"
              className="my-2"
              key={priceRange.value}
              accessibilityLabel={priceRange.value}
            >
              <CheckboxIndicator>
                <CheckboxIcon as={CheckIcon} />
              </CheckboxIndicator>
              <CheckboxLabel className="ml-2">{priceRange.label}</CheckboxLabel>
            </Checkbox>
          );
        })}
      </CheckboxGroup>
    </VStack>
  );
};
export default PriceRangeSection;
