import React from "react";
import {
  Actionsheet,
  ActionsheetDragIndicatorWrapper,
  ActionsheetDragIndicator,
  ActionsheetScrollView,
  ActionsheetBackdrop,
  ActionsheetContent,
} from "./ui/actionsheet";
import { Box } from "./ui/box";
import Sidebar from "./Sidebar";

const MobileSidebarActionsheet = ({
  actionsheetVisible,
  setActionsheetVisible,
}: any) => {
  const handleClose = () => {
    setActionsheetVisible(false);
  };
  return (
    <Actionsheet
      isOpen={actionsheetVisible}
      onClose={handleClose}
      snapPoints={[80]}
    >
      <ActionsheetBackdrop />
      <ActionsheetContent className="dark:bg-gray-950">
        <Box className="h-full w-full">
          <ActionsheetDragIndicatorWrapper>
            <ActionsheetDragIndicator />
          </ActionsheetDragIndicatorWrapper>
          <ActionsheetScrollView>
            <Box className="w-full">
              <Sidebar />
            </Box>
          </ActionsheetScrollView>
        </Box>
      </ActionsheetContent>
    </Actionsheet>
  );
};
export default MobileSidebarActionsheet;
