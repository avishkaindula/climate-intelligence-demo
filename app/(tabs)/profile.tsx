import React, { useState } from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import { ScrollView } from "react-native";
import { Box } from "@/components/ui/box";
import { Text } from "@/components/ui/text";
import { Heading } from "@/components/ui/heading";
import { VStack } from "@/components/ui/vstack";
import { HStack } from "@/components/ui/hstack";
import { Icon } from "@/components/ui/icon";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import {
  Avatar,
  AvatarImage,
  AvatarFallbackText,
} from "@/components/ui/avatar";
import { Badge } from "@/components/ui/badge";
import { Divider } from "@/components/ui/divider";
import { useLanguage } from "@/components/i18n/LanguageContext";
import LanguageSettings from "@/components/settings/LanguageSettings";
import { useColorScheme } from "nativewind";
import {
  User,
  Award,
  Target,
  BarChart3,
  Settings,
  Globe,
  Bell,
  Shield,
  Moon,
  Sun,
} from "lucide-react-native";

const ProfilePage = () => {
  const { t, currentLanguage } = useLanguage();
  const [showLanguageModal, setShowLanguageModal] = useState(false);
  const { colorScheme, toggleColorScheme } = useColorScheme();

  const getCurrentLanguageName = () => {
    const languageNames = {
      en: "English",
      es: "Español",
      pt: "Português",
    };
    return languageNames[currentLanguage] || "English";
  };

  const achievements = [
    {
      id: 1,
      title: "Data Pioneer",
      description: "First 100 data points",
      icon: BarChart3,
      earned: true,
    },
    {
      id: 2,
      title: "Community Leader",
      description: "Started 5 discussions",
      icon: User,
      earned: true,
    },
    {
      id: 3,
      title: "Mission Master",
      description: "Completed 10 missions",
      icon: Target,
      earned: false,
    },
    {
      id: 4,
      title: "Climate Champion",
      description: "1 year of participation",
      icon: Award,
      earned: false,
    },
  ];

  const stats = [
    { label: "Missions Completed", value: "12", color: "text-green-600" },
    { label: "Data Points Contributed", value: "245", color: "text-blue-600" },
    { label: "Community Contributions", value: "8", color: "text-purple-600" },
    { label: "Points Earned", value: "850", color: "text-orange-600" },
  ];

  return (
    <SafeAreaView
      style={{ flex: 1 }}
      className="bg-white dark:bg-background-dark"
    >
      <ScrollView className="flex-1">
        <Box className="p-6">
          {/* Header */}
          <VStack className="space-y-4 mb-8">
            <HStack className="items-center space-x-3">
              <Icon as={User} size="xl" className="text-primary-500" />
              <VStack>
                <Heading
                  size="xl"
                  className="text-typography-900 dark:text-typography-100"
                >
                  {t("profile")}
                </Heading>
                <Text
                  size="sm"
                  className="text-typography-600 dark:text-typography-400"
                >
                  Your climate action journey
                </Text>
              </VStack>
            </HStack>
          </VStack>

          {/* Profile Info */}
          <Card className="p-6 mb-6">
            <VStack className="space-y-4">
              <HStack className="items-center space-x-4">
                <Avatar size="xl">
                  <AvatarImage
                    source={{
                      uri: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=150&h=150&fit=crop&crop=face",
                    }}
                  />
                  <AvatarFallbackText>Carlos Mendoza</AvatarFallbackText>
                </Avatar>
                <VStack className="flex-1">
                  <Heading
                    size="lg"
                    className="text-typography-900 dark:text-typography-100"
                  >
                    Carlos Mendoza
                  </Heading>
                  <Text className="text-typography-600 dark:text-typography-400">
                    Environmental Scientist
                  </Text>
                  <Text
                    size="sm"
                    className="text-typography-500 dark:text-typography-500"
                  >
                    São Paulo, Brazil
                  </Text>
                  <HStack className="items-center space-x-2 mt-2">
                    <Badge variant="solid" action="success">
                      <Text size="xs">Level 3</Text>
                    </Badge>
                    <Badge variant="outline">
                      <Text size="xs">850 points</Text>
                    </Badge>
                  </HStack>
                </VStack>
              </HStack>
              <Button variant="outline">
                <Text>{t("editProfile")}</Text>
              </Button>
            </VStack>
          </Card>

          {/* Stats */}
          <Card className="p-6 mb-6">
            <VStack className="space-y-4">
              <Heading
                size="md"
                className="text-typography-900 dark:text-typography-100"
              >
                {t("contributions")}
              </Heading>
              <VStack className="space-y-3">
                {stats.map((stat, index) => (
                  <HStack key={index} className="justify-between items-center">
                    <Text className="text-typography-600 dark:text-typography-400">
                      {stat.label}
                    </Text>
                    <Text
                      className={`font-bold ${
                        stat.color
                      } dark:${stat.color.replace("text-", "text-")}`}
                    >
                      {stat.value}
                    </Text>
                  </HStack>
                ))}
              </VStack>
            </VStack>
          </Card>

          {/* Achievements */}
          <Card className="p-6 mb-6">
            <VStack className="space-y-4">
              <Heading
                size="md"
                className="text-typography-900 dark:text-typography-100"
              >
                {t("achievements")}
              </Heading>
              <VStack className="space-y-3">
                {achievements.map((achievement) => (
                  <HStack
                    key={achievement.id}
                    className="items-center space-x-3"
                  >
                    <Box
                      className={`p-2 rounded-full ${
                        achievement.earned
                          ? "bg-green-100 dark:bg-green-900/30"
                          : "bg-gray-100 dark:bg-gray-800"
                      }`}
                    >
                      <Icon
                        as={achievement.icon}
                        size="md"
                        className={
                          achievement.earned
                            ? "text-green-600 dark:text-green-400"
                            : "text-gray-400"
                        }
                      />
                    </Box>
                    <VStack className="flex-1">
                      <Text
                        className={`font-semibold ${
                          achievement.earned
                            ? "text-typography-900 dark:text-typography-100"
                            : "text-typography-500 dark:text-typography-500"
                        }`}
                      >
                        {achievement.title}
                      </Text>
                      <Text
                        size="sm"
                        className="text-typography-600 dark:text-typography-400"
                      >
                        {achievement.description}
                      </Text>
                    </VStack>
                    {achievement.earned && (
                      <Badge variant="solid" action="success">
                        <Text size="xs">Earned</Text>
                      </Badge>
                    )}
                  </HStack>
                ))}
              </VStack>
            </VStack>
          </Card>

          {/* Recent Activity */}
          <Card className="p-6 mb-6">
            <VStack className="space-y-4">
              <Heading
                size="md"
                className="text-typography-900 dark:text-typography-100"
              >
                Recent Activity
              </Heading>
              <VStack className="space-y-3">
                <HStack className="items-center space-x-3">
                  <Box className="w-2 h-2 bg-green-500 rounded-full" />
                  <VStack className="flex-1">
                    <Text className="text-typography-900 dark:text-typography-100">
                      Completed Temperature Monitoring Mission
                    </Text>
                    <Text
                      size="sm"
                      className="text-typography-600 dark:text-typography-400"
                    >
                      2 days ago
                    </Text>
                  </VStack>
                </HStack>
                <HStack className="items-center space-x-3">
                  <Box className="w-2 h-2 bg-blue-500 rounded-full" />
                  <VStack className="flex-1">
                    <Text className="text-typography-900 dark:text-typography-100">
                      Contributed 15 data points
                    </Text>
                    <Text
                      size="sm"
                      className="text-typography-600 dark:text-typography-400"
                    >
                      1 week ago
                    </Text>
                  </VStack>
                </HStack>
                <HStack className="items-center space-x-3">
                  <Box className="w-2 h-2 bg-purple-500 rounded-full" />
                  <VStack className="flex-1">
                    <Text className="text-typography-900 dark:text-typography-100">
                      Started community discussion
                    </Text>
                    <Text
                      size="sm"
                      className="text-typography-600 dark:text-typography-400"
                    >
                      2 weeks ago
                    </Text>
                  </VStack>
                </HStack>
              </VStack>
            </VStack>
          </Card>

          {/* Settings */}
          <Card className="p-6">
            <VStack className="space-y-4">
              <Heading
                size="md"
                className="text-typography-900 dark:text-typography-100"
              >
                {t("settings")}
              </Heading>
              {/* <VStack className="space-y-3">
                <VStack className="space-y-3">
                  <HStack className="items-center space-x-3">
                    <Icon
                      as={Settings}
                      size="md"
                      className="text-typography-500"
                    />
                    <Text className="text-typography-900 dark:text-typography-100">
                      Theme
                    </Text>
                  </HStack>
                  <Button
                    variant="outline"
                    onPress={toggleColorScheme}
                    className="w-full"
                  >
                    <HStack className="items-center space-x-2">
                      <Icon
                        as={colorScheme === "dark" ? Sun : Moon}
                        size="sm"
                        className="text-typography-600 dark:text-typography-400"
                      />
                      <Text
                        size="sm"
                        className="text-typography-600 dark:text-typography-400"
                      >
                        {colorScheme === "dark" ? "Light Mode" : "Dark Mode"}
                      </Text>
                    </HStack>
                  </Button>
                </VStack>

                <Divider className="my-2" />

                <HStack className="justify-between items-center">
                  <HStack className="items-center space-x-3">
                    <Icon
                      as={Globe}
                      size="md"
                      className="text-typography-500"
                    />
                    <Text className="text-typography-900 dark:text-typography-100">
                      {t("language")}
                    </Text>
                  </HStack>
                  <Button
                    size="sm"
                    variant="outline"
                    onPress={() => setShowLanguageModal(true)}
                  >
                    <Text>{getCurrentLanguageName()}</Text>
                  </Button>
                </HStack>

                <Divider className="my-2" />

                <HStack className="justify-between items-center">
                  <HStack className="items-center space-x-3">
                    <Icon as={Bell} size="md" className="text-typography-500" />
                    <Text className="text-typography-900 dark:text-typography-100">
                      {t("notifications")}
                    </Text>
                  </HStack>
                  <Button size="sm" variant="outline">
                    <Text>Manage</Text>
                  </Button>
                </HStack>

                <Divider className="my-2" />

                <HStack className="justify-between items-center">
                  <HStack className="items-center space-x-3">
                    <Icon
                      as={Shield}
                      size="md"
                      className="text-typography-500"
                    />
                    <Text className="text-typography-900 dark:text-typography-100">
                      {t("privacy")}
                    </Text>
                  </HStack>
                  <Button size="sm" variant="outline">
                    <Text>Settings</Text>
                  </Button>
                </HStack>

                <Divider className="my-2" />

                <HStack className="justify-between items-center">
                  <HStack className="items-center space-x-3">
                    <Icon
                      as={Settings}
                      size="md"
                      className="text-typography-500"
                    />
                    <Text className="text-typography-900 dark:text-typography-100">
                      {t("about")}
                    </Text>
                  </HStack>
                  <Button size="sm" variant="outline">
                    <Text>Info</Text>
                  </Button>
                </HStack>
              </VStack> */}
            </VStack>
          </Card>
        </Box>
      </ScrollView>

      {/* Language Settings */}
      {showLanguageModal && (
        <LanguageSettings onClose={() => setShowLanguageModal(false)} />
      )}
    </SafeAreaView>
  );
};

export default ProfilePage;
