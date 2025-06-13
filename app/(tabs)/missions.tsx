import React from "react";
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
import { Badge } from "@/components/ui/badge";
import { Progress } from "@/components/ui/progress";
import { useLanguage } from "@/components/i18n/LanguageContext";
import { Target, Clock, Users, Award } from "lucide-react-native";

const MissionsPage = () => {
  const { t } = useLanguage();

  const activeMissions = [
    {
      id: 1,
      title: "Temperature Data Collection",
      description: "Help collect temperature readings across urban areas",
      progress: 65,
      participants: 234,
      deadline: "5 days left",
      reward: "50 points",
      difficulty: "Easy",
    },
    {
      id: 2,
      title: "Air Quality Monitoring",
      description: "Document air quality in industrial zones",
      progress: 32,
      participants: 156,
      deadline: "12 days left",
      reward: "100 points",
      difficulty: "Medium",
    },
    {
      id: 3,
      title: "Flood Impact Assessment",
      description: "Report flood damage and recovery progress",
      progress: 78,
      participants: 89,
      deadline: "2 days left",
      reward: "150 points",
      difficulty: "Hard",
    },
  ];

  const getDifficultyColor = (difficulty: string) => {
    switch (difficulty) {
      case "Easy":
        return "success";
      case "Medium":
        return "warning";
      case "Hard":
        return "error";
      default:
        return "info";
    }
  };

  return (
    <SafeAreaView
      style={{ flex: 1 }}
      className="bg-white dark:bg-background-dark"
    >
      <ScrollView className="flex-1">
        <Box className="p-6">
          {/* Header */}
          <VStack space="lg" className="mb-8">
            <HStack space="lg" className="items-center">
              <Icon as={Target} size="xl" className="text-primary-500" />
              <VStack space="sm">
                <Heading
                  size="xl"
                  className="text-typography-900 dark:text-typography-950"
                >
                  {t("missions")}
                </Heading>
                <Text
                  size="sm"
                  className="text-typography-600 dark:text-typography-750"
                >
                  Contribute to climate research and action
                </Text>
              </VStack>
            </HStack>
          </VStack>

          {/* Stats */}
          <Card className="p-6 mb-6 bg-gradient-to-r from-primary-50 to-secondary-50 dark:from-primary-900/20 dark:to-secondary-900/20">
            <HStack className="justify-between items-center">
              <VStack className="items-center">
                <Text
                  size="2xl"
                  className="font-bold text-primary-600 dark:text-primary-400"
                >
                  12
                </Text>
                <Text
                  size="sm"
                  className="text-typography-600 dark:text-typography-300"
                >
                  Completed
                </Text>
              </VStack>
              <VStack className="items-center">
                <Text
                  size="2xl"
                  className="font-bold text-secondary-600 dark:text-secondary-400"
                >
                  3
                </Text>
                <Text
                  size="sm"
                  className="text-typography-600 dark:text-typography-300"
                >
                  Active
                </Text>
              </VStack>
              <VStack className="items-center">
                <Text
                  size="2xl"
                  className="font-bold text-green-600 dark:text-green-400"
                >
                  850
                </Text>
                <Text
                  size="sm"
                  className="text-typography-600 dark:text-typography-300"
                >
                  Points Earned
                </Text>
              </VStack>
            </HStack>
          </Card>

          {/* Active Missions */}
          <VStack className="space-y-4 mb-6">
            <Heading
              size="md"
              className="text-typography-900 dark:text-typography-950"
            >
              {t("activeMissions")}
            </Heading>

            {activeMissions.map((mission) => (
              <Card key={mission.id} className="p-4">
                <VStack className="space-y-4">
                  <HStack className="justify-between items-start">
                    <VStack className="flex-1 space-y-2">
                      <Text className="font-semibold text-typography-900 dark:text-typography-950">
                        {mission.title}
                      </Text>
                      <Text
                        size="sm"
                        className="text-typography-600 dark:text-typography-300"
                      >
                        {mission.description}
                      </Text>
                    </VStack>
                    <Badge
                      variant="solid"
                      action={getDifficultyColor(mission.difficulty)}
                      className="ml-2"
                    >
                      <Text size="xs">{mission.difficulty}</Text>
                    </Badge>
                  </HStack>

                  <VStack className="space-y-2">
                    <HStack className="justify-between">
                      <Text
                        size="sm"
                        className="text-typography-600 dark:text-typography-300"
                      >
                        Progress
                      </Text>
                      <Text
                        size="sm"
                        className="text-typography-600 dark:text-typography-300"
                      >
                        {mission.progress}%
                      </Text>
                    </HStack>
                    <Progress value={mission.progress} className="h-2" />
                  </VStack>

                  <HStack className="justify-between items-center">
                    <HStack className="space-x-4">
                      <HStack className="items-center space-x-1">
                        <Icon
                          as={Users}
                          size="sm"
                          className="text-typography-500"
                        />
                        <Text
                          size="sm"
                          className="text-typography-600 dark:text-typography-300"
                        >
                          {mission.participants}
                        </Text>
                      </HStack>
                      <HStack className="items-center space-x-1">
                        <Icon
                          as={Clock}
                          size="sm"
                          className="text-typography-500"
                        />
                        <Text
                          size="sm"
                          className="text-typography-600 dark:text-typography-300"
                        >
                          {mission.deadline}
                        </Text>
                      </HStack>
                      <HStack className="items-center space-x-1">
                        <Icon
                          as={Award}
                          size="sm"
                          className="text-typography-500"
                        />
                        <Text
                          size="sm"
                          className="text-typography-600 dark:text-typography-300"
                        >
                          {mission.reward}
                        </Text>
                      </HStack>
                    </HStack>
                    <Button size="sm">
                      <Text>{t("joinMission")}</Text>
                    </Button>
                  </HStack>
                </VStack>
              </Card>
            ))}
          </VStack>

          {/* Completed Missions */}
          <VStack className="space-y-4">
            <Heading
              size="md"
              className="text-typography-900 dark:text-typography-950"
            >
              {t("completedMissions")}
            </Heading>

            <Card className="p-4">
              <HStack className="justify-between items-center">
                <VStack>
                  <Text className="font-semibold text-typography-900 dark:text-typography-950">
                    Rainfall Pattern Documentation
                  </Text>
                  <Text
                    size="sm"
                    className="text-typography-600 dark:text-typography-300"
                  >
                    Completed 1 week ago
                  </Text>
                </VStack>
                <Badge variant="solid" action="success">
                  <Text size="xs">Completed</Text>
                </Badge>
              </HStack>
            </Card>

            <Card className="p-4">
              <HStack className="justify-between items-center">
                <VStack>
                  <Text className="font-semibold text-typography-900 dark:text-typography-950">
                    Wildlife Migration Tracking
                  </Text>
                  <Text
                    size="sm"
                    className="text-typography-600 dark:text-typography-300"
                  >
                    Completed 2 weeks ago
                  </Text>
                </VStack>
                <Badge variant="solid" action="success">
                  <Text size="xs">Completed</Text>
                </Badge>
              </HStack>
            </Card>
          </VStack>
        </Box>
      </ScrollView>
    </SafeAreaView>
  );
};

export default MissionsPage;
