import React from "react";

import { HStack } from "./ui/hstack";
import { Text } from "./ui/text";
import { Heading } from "./ui/heading";
import { Avatar, AvatarImage, AvatarFallbackText } from "./ui/avatar";
import { VStack } from "./ui/vstack";
import { Link } from "./ui/link";
import { Icon, ChevronRightIcon } from "./ui/icon";
import { Pressable } from "./ui/pressable";
import { Divider } from "./ui/divider";
import { Button, ButtonText } from "./ui/button";
import { ScrollView } from "react-native";
import LogoutAlertDialog from "./LogoutAlertDialog";

const MobileProfilePage = ({ isActive }: any) => {
  const [openLogoutAlertDialog, setOpenLogoutAlertDialog] =
    React.useState(false);
  return (
    <ScrollView style={{ display: isActive ? "flex" : "none" }}>
      <VStack className="px-5 py-4 space-y-6 flex-1">
        <Heading>Profile</Heading>
        <ProfileCard />
        <Divider />
        <PersonalInfoSection />
        <Divider />
        <HostingSection />
        <Divider />
        <SupportSection />
        <Divider />
        <LogoutButton
          openLogoutAlertDialog={openLogoutAlertDialog}
          setOpenLogoutAlertDialog={setOpenLogoutAlertDialog}
        />
      </VStack>
      <LogoutAlertDialog
        setOpenLogoutAlertDialog={setOpenLogoutAlertDialog}
        openLogoutAlertDialog={openLogoutAlertDialog}
      />
    </ScrollView>
  );
};

const ProfileCard = () => {
  return (
    <HStack className="justify-between items-center">
      <HStack className="space-x-4">
        <Avatar className="bg-blue-600">
          <AvatarFallbackText>Henry Stan</AvatarFallbackText>
          <AvatarImage
            source={{
              uri: "https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8dXNlcnxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=800&q=60",
            }}
          />
        </Avatar>
        <VStack>
          <Text>Henry Stan</Text>
          <Link>
            <Text className="text-gray-500 text-sm">Show Profile</Text>
          </Link>
        </VStack>
      </HStack>
      <Pressable>
        <Icon as={ChevronRightIcon} />
      </Pressable>
    </HStack>
  );
};

const PersonalInfoSection = () => {
  return (
    <VStack className="space-y-4">
      <HStack className="justify-between">
        <HStack className="space-x-4">
          <Text>👤</Text>
          <Text>Personal Info</Text>
        </HStack>
        <Pressable>
          <Icon as={ChevronRightIcon} />
        </Pressable>
      </HStack>
      <HStack className="justify-between">
        <HStack className="space-x-4">
          <Text>⚙️</Text>
          <Text>Account</Text>
        </HStack>
        <Pressable>
          <Icon as={ChevronRightIcon} />
        </Pressable>
      </HStack>
    </VStack>
  );
};

const HostingSection = () => {
  return (
    <VStack className="space-y-4">
      <Heading>Hosting</Heading>
      <HStack className="justify-between">
        <HStack className="space-x-4">
          <Text>🏠</Text>
          <Text>Host a home</Text>
        </HStack>
        <Pressable>
          <Icon as={ChevronRightIcon} />
        </Pressable>
      </HStack>
      <HStack className="justify-between">
        <HStack className="space-x-4">
          <Text>📱</Text>
          <Text>Host an experience</Text>
        </HStack>
        <Pressable>
          <Icon as={ChevronRightIcon} />
        </Pressable>
      </HStack>
    </VStack>
  );
};

const SupportSection = () => {
  return (
    <VStack className="space-y-4">
      <Heading>Support</Heading>
      <HStack className="justify-between">
        <HStack className="space-x-4">
          <Text>🤝</Text>
          <Text>Get Help</Text>
        </HStack>
        <Pressable>
          <Icon as={ChevronRightIcon} />
        </Pressable>
      </HStack>
      <HStack className="justify-between">
        <HStack className="space-x-4">
          <Text>🎧</Text>
          <Text>Give us feedback</Text>
        </HStack>
        <Pressable>
          <Icon as={ChevronRightIcon} />
        </Pressable>
      </HStack>
    </VStack>
  );
};

const LogoutButton = ({ setOpenLogoutAlertDialog }: any) => {
  return (
    <Button
      action="secondary"
      variant="outline"
      onPress={() => {
        setOpenLogoutAlertDialog(true);
      }}
    >
      <ButtonText>Logout</ButtonText>
    </Button>
  );
};

export default MobileProfilePage;
