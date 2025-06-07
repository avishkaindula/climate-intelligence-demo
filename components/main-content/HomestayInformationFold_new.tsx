import React from "react";
import { Box } from "../ui/box";
import { Button } from "../ui/button";
import { HStack } from "../ui/hstack";
import { Icon, ChevronRightIcon, FavouriteIcon, StarIcon } from "../ui/icon";
import { Image } from "../ui/image";
import { Pressable } from "../ui/pressable";
import { Text } from "../ui/text";
import { VStack } from "../ui/vstack";
import { Tooltip, TooltipContent, TooltipText } from "../ui/tooltip";
import { AnimatePresence, Motion } from "@legendapp/motion";
import { ScrollView } from "react-native";

const homestayInfoData = [
  {
    title: "ImageView Inn",
    src: require("../../assets/display/image16.png"),
    location: "401 Platte River Rd, Gothenburg, United States",
    price: "$1,481",
    rating: 4.9,
  },
  {
    title: "Spinner Resort",
    src: require("../../assets/display/image17.png"),
    location: "1502 Silica Ave, Sacramento California",
    price: "$1,381",
    rating: 4.89,
  },
  {
    title: "DropDown Den",
    src: require("../../assets/display/image18.png"),
    location: "2945 Entry Point Blvd, Kissimmee, Florida",
    price: "$2,481",
    rating: 4.6,
  },
];

const tabsData = [
  {
    title: "Tropical",
  },
  {
    title: "Amazing views",
  },
  {
    title: "Caves",
  },
  {
    title: "Mansions",
  },
  {
    title: "Amazing pools",
  },
  {
    title: "Cabins",
  },
  {
    title: "Beachfront",
  },
  {
    title: "Countryside",
  },
  {
    title: "Tiny homes",
  },
  {
    title: "National parks",
  },
];

const HomestayInformationFold = () => {
  return (
    <Box className="pb-8 px-4 md:px-0">
      <HomestayInfoTabs tabsData={tabsData} />
      <TabPanelData />
    </Box>
  );
};

const HomestayInfoTabs = ({ tabsData }: any) => {
  const [activeTab, setActiveTab] = React.useState(tabsData[0]);
  return (
    <Box className="border-b border-gray-50 md:border-transparent md:border-b-0 dark:border-gray-900">
      <Box className="py-5">
        <ScrollView horizontal showsHorizontalScrollIndicator={false}>
          <HStack className="space-x-6 mx-0.5">
            {tabsData.map((tab: any) => {
              return (
                <Pressable
                  key={tab.title}
                  className={`my-0.5 py-1 ${
                    activeTab === tab 
                      ? 'border-b-4 border-gray-900 dark:border-gray-100' 
                      : 'border-b-0 hover:border-b-4 hover:border-gray-200 dark:hover:border-gray-700'
                  }`}
                  onPress={() => setActiveTab(tab)}
                >
                  <Text
                    size="sm"
                    className={`font-medium ${
                      activeTab === tab 
                        ? 'text-gray-900 dark:text-gray-50' 
                        : 'text-gray-600 dark:text-gray-400'
                    }`}
                  >
                    {tab.title}
                  </Text>
                </Pressable>
              );
            })}
          </HStack>
        </ScrollView>
      </Box>
    </Box>
  );
};

const TabPanelData = () => {
  const [likes, setLikes]: any = React.useState([]);
  return (
    <VStack className="justify-between lg:flex-row">
      {homestayInfoData.map((image: any, index: any) => {
        return (
          <Box
            key={index}
            className={`flex-1 my-2 lg:my-0 ${
              index === 0 ? 'lg:ml-0' : 'lg:ml-2'
            } ${
              index === homestayInfoData.length - 1 ? 'lg:mr-0' : 'lg:mr-2'
            }`}
          >
            <Pressable className="w-full">
              {(props: any) => {
                return (
                  <>
                    <Box className="overflow-hidden rounded-md h-72">
                      <Image
                        source={image.src}
                        className="h-72 w-full"
                        style={{
                          transform: [{ scale: props.hovered ? 1.04 : 1 }],
                          opacity: props.hovered ? 0.9 : 1,
                        }}
                        alt="Explore"
                      />
                    </Box>
                    {props.hovered && (
                      <Box className="absolute bg-gray-950 opacity-30 w-full h-full" />
                    )}
                    <Box
                      className={`absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 z-10 ${
                        props.hovered ? 'flex' : 'hidden'
                      }`}
                    >
                      <Button variant="outline" className="bg-transparent border-white">
                        <Text className="text-white mr-2">Explore</Text>
                        <Icon as={ChevronRightIcon} className="text-white" />
                      </Button>
                    </Box>
                  </>
                );
              }}
            </Pressable>
            <Pressable
              onPress={() => {
                if (likes.includes(image.title)) {
                  const newLikes = likes.filter(
                    (like: any) => like !== image.title
                  );
                  setLikes(newLikes);
                  return;
                } else {
                  setLikes([...likes, image.title]);
                }
              }}
              className="absolute top-3 right-4 h-6 w-6 justify-center items-center"
            >
              <AnimatePresence>
                <Motion.View
                  key={likes.includes(image.title) ? "liked" : "unliked"}
                  initial={{
                    scale: 1.3,
                  }}
                  animate={{
                    scale: 1,
                  }}
                  exit={{
                    scale: 0.9,
                  }}
                  transition={{
                    type: "spring",
                    mass: 0.9,
                    damping: 9,
                    stiffness: 300,
                  }}
                  style={{
                    position: "absolute",
                  }}
                >
                  <Icon
                    as={FavouriteIcon}
                    size="lg"
                    className={
                      likes.includes(image.title) === true ? "text-red-500" : "text-white"
                    }
                    style={{
                      fill: likes.includes(image.title) === true ? "red" : "gray",
                    }}
                  />
                </Motion.View>
              </AnimatePresence>
            </Pressable>
            <HStack className="justify-between py-2 items-start">
              <VStack className="space-y-2 flex-1">
                <Text className="font-semibold text-gray-900 dark:text-gray-200">
                  {image.title}
                </Text>
                <Text size="sm" className="text-gray-500 dark:text-gray-500">
                  {image.location}
                </Text>
                <HStack>
                  <Text
                    size="sm"
                    className="font-semibold text-gray-900 dark:text-gray-200"
                  >
                    {image.price}
                  </Text>
                  <Text
                    size="sm"
                    className="pl-1 text-gray-900 dark:text-gray-200"
                  >
                    night
                  </Text>
                </HStack>
              </VStack>
              <Tooltip
                trigger={(triggerProps: any) => {
                  return (
                    <Pressable {...triggerProps}>
                      <HStack className="items-center justify-start">
                        <Icon
                          as={StarIcon}
                          size="sm"
                          className="text-black dark:text-gray-50"
                          style={{ fill: "currentColor" }}
                        />
                        <Text
                          className="pl-1 text-gray-900 dark:text-gray-200"
                          size="sm"
                        >
                          {image.rating}
                        </Text>
                      </HStack>
                    </Pressable>
                  );
                }}
              >
                <TooltipContent>
                  <TooltipText className="text-white px-2 py-1">
                    Ratings
                  </TooltipText>
                </TooltipContent>
              </Tooltip>
            </HStack>
          </Box>
        );
      })}
    </VStack>
  );
};

export default HomestayInformationFold;
