import React from "react";
import { HStack } from "./ui/hstack";
import { Icon } from "./ui/icon";
import { Pressable } from "./ui/pressable";
import { Text } from "./ui/text";
import { VStack } from "./ui/vstack";
import ListYourPlaceModal from "./main-content/ListYourPlaceModal";
import MobileSidebarActionsheet from "./MobileSidebarActionsheet";

const MobileBottomTabs = ({ bottomTabs, activeTab, setActiveTab }: any) => {
  const [modalVisible, setModalVisible] = React.useState(false);
  const [actionsheetVisible, setActionsheetVisible] = React.useState(false);

  return (
    <>
      <HStack
        className="items-center absolute bottom-0 justify-between w-full py-3 px-6 md:hidden"
      >
        {bottomTabs.map((tab: any) => {
          return (
            <Pressable
              key={tab.label}
              onPress={() => {
                if (tab.label !== "Listing" && tab.label !== "Filter") {
                  setActiveTab(tab.label);
                }
                if (tab.label === "Listing") {
                  setModalVisible(true);
                }
                if (tab.label === "Filter") {
                  setActionsheetVisible(true);
                }
              }}
              disabled={tab.disabled}
              className={tab.disabled ? "opacity-50" : "opacity-100"}
            >
              <VStack className="items-center">
                <Icon
                  as={tab.icon}
                  className={
                    activeTab === tab.label 
                      ? "text-blue-500" 
                      : "text-gray-400"
                  }
                  size="sm"
                />
                <Text
                  className={`text-xs ${
                    activeTab === tab.label 
                      ? "text-gray-900 dark:text-gray-100" 
                      : "text-gray-400"
                  }`}
                >
                  {tab.label}
                </Text>
              </VStack>
            </Pressable>
          );
        })}
      </HStack>
      {modalVisible && (
        <ListYourPlaceModal
          modalVisible={modalVisible}
          setModalVisible={setModalVisible}
        />
      )}
      {actionsheetVisible && (
        <MobileSidebarActionsheet
          actionsheetVisible={actionsheetVisible}
          setActionsheetVisible={setActionsheetVisible}
        />
      )}
    </>
  );
};

export default MobileBottomTabs;
