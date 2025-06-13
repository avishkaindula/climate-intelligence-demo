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
import { useLanguage } from "@/components/i18n/LanguageContext";
import { Globe, Thermometer, Users, Target } from "lucide-react-native";

const HomePage = () => {
  const { t } = useLanguage();

  return (
    <SafeAreaView
      style={{ flex: 1 }}
      className="bg-white dark:bg-background-950"
    >
      <ScrollView className="flex-1">
        <Box className="p-6">
          {/* Header */}
          <VStack className="space-y-4 mb-8">
            <HStack className="items-center space-x-3">
              <Icon as={Globe} size="xl" className="text-primary-500" />
              <VStack>
                <Heading
                  size="xl"
                  className="text-typography-900 dark:text-typography-100"
                >
                  {t("climateIntel")}
                </Heading>
                <Text
                  size="sm"
                  className="text-typography-600 dark:text-typography-400"
                >
                  {t("empoweringClimateAction")}
                </Text>
              </VStack>
            </HStack>
          </VStack>

          {/* Welcome Section */}
          <Card className="p-6 mb-6 bg-primary-50 dark:bg-primary-900/20 border-primary-200 dark:border-primary-800">
            <VStack className="space-y-3">
              <Heading
                size="lg"
                className="text-primary-900 dark:text-primary-100"
              >
                {t("homeWelcome")}
              </Heading>
              <Text className="text-primary-800 dark:text-primary-200">
                {t("homeDescription")}
              </Text>
            </VStack>
          </Card>

          {/* Quick Actions */}
          <VStack className="space-y-4 mb-6">
            <Heading
              size="md"
              className="text-typography-900 dark:text-typography-100"
            >
              Quick Actions
            </Heading>

            <VStack className="space-y-3">
              <Card className="p-4">
                <HStack className="items-center space-x-4">
                  <Box className="p-3 bg-green-100 dark:bg-green-900/30 rounded-full">
                    <Icon
                      as={Target}
                      size="md"
                      className="text-green-600 dark:text-green-400"
                    />
                  </Box>
                  <VStack className="flex-1">
                    <Text className="font-semibold text-typography-900 dark:text-typography-100">
                      Join Active Mission
                    </Text>
                    <Text
                      size="sm"
                      className="text-typography-600 dark:text-typography-400"
                    >
                      Contribute to ongoing climate research
                    </Text>
                  </VStack>
                  <Button size="sm" variant="outline">
                    <Text>Join</Text>
                  </Button>
                </HStack>
              </Card>

              <Card className="p-4">
                <HStack className="items-center space-x-4">
                  <Box className="p-3 bg-blue-100 dark:bg-blue-900/30 rounded-full">
                    <Icon
                      as={Thermometer}
                      size="md"
                      className="text-blue-600 dark:text-blue-400"
                    />
                  </Box>
                  <VStack className="flex-1">
                    <Text className="font-semibold text-typography-900 dark:text-typography-100">
                      Report Climate Data
                    </Text>
                    <Text
                      size="sm"
                      className="text-typography-600 dark:text-typography-400"
                    >
                      Share observations from your area
                    </Text>
                  </VStack>
                  <Button size="sm" variant="outline">
                    <Text>Report</Text>
                  </Button>
                </HStack>
              </Card>

              <Card className="p-4">
                <HStack className="items-center space-x-4">
                  <Box className="p-3 bg-purple-100 dark:bg-purple-900/30 rounded-full">
                    <Icon
                      as={Users}
                      size="md"
                      className="text-purple-600 dark:text-purple-400"
                    />
                  </Box>
                  <VStack className="flex-1">
                    <Text className="font-semibold text-typography-900 dark:text-typography-100">
                      Connect with Community
                    </Text>
                    <Text
                      size="sm"
                      className="text-typography-600 dark:text-typography-400"
                    >
                      Engage with fellow climate advocates
                    </Text>
                  </VStack>
                  <Button size="sm" variant="outline">
                    <Text>Connect</Text>
                  </Button>
                </HStack>
              </Card>
            </VStack>
          </VStack>

          {/* Recent Activity */}
          <VStack className="space-y-4">
            <Heading
              size="md"
              className="text-typography-900 dark:text-typography-100"
            >
              Recent Activity
            </Heading>

            <Card className="p-4">
              <VStack className="space-y-3">
                <Text className="font-semibold text-typography-900 dark:text-typography-100">
                  Temperature monitoring mission completed
                </Text>
                <Text
                  size="sm"
                  className="text-typography-600 dark:text-typography-400"
                >
                  You contributed to collecting 15 temperature readings this
                  week
                </Text>
                <Text
                  size="xs"
                  className="text-typography-500 dark:text-typography-500"
                >
                  2 days ago
                </Text>
              </VStack>
            </Card>

            <Card className="p-4">
              <VStack className="space-y-3">
                <Text className="font-semibold text-typography-900 dark:text-typography-100">
                  New community discussion started
                </Text>
                <Text
                  size="sm"
                  className="text-typography-600 dark:text-typography-400"
                >
                  "Sustainable farming practices in drought conditions"
                </Text>
                <Text
                  size="xs"
                  className="text-typography-500 dark:text-typography-500"
                >
                  1 week ago
                </Text>
              </VStack>
            </Card>
          </VStack>
        </Box>
      </ScrollView>
    </SafeAreaView>
  );
};

export default HomePage;
