import React from "react";
import { Box } from "../ui/box";
import { Button, ButtonIcon, ButtonText } from "../ui/button";
import { Heading } from "../ui/heading";
import { HStack } from "../ui/hstack";
import { Text } from "../ui/text";
import ListYourPlaceModal from "./ListYourPlaceModal";

const MainContentHeader = ({ setActiveTab, activeTab }: any) => {
  const [modalVisible, setModalVisible] = React.useState(false);
  return (
    <Box className="pt-6 pb-2.5 px-4 md:px-0">
      <HStack className="w-full items-center justify-between">
        <Heading size="xl">New this week</Heading>
        {/* Hidden for mobile screens */}
        <Button
          className="hidden md:flex ml-auto"
          variant="outline"
          action="secondary"
          onPress={() => {
            setModalVisible(true);
          }}
        >
          <ButtonIcon>
            <Text>📝</Text>
          </ButtonIcon>
          <ButtonText className="pl-2 text-gray-800 dark:text-gray-300">
            List your place
          </ButtonText>
        </Button>
      </HStack>
      {modalVisible && (
        // list your place modal
        <ListYourPlaceModal
          modalVisible={modalVisible}
          setModalVisible={setModalVisible}
          setActiveTab={setActiveTab}
          activeTab={activeTab}
        />
      )}
    </Box>
  );
};

export default MainContentHeader;
