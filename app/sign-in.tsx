import { router } from "expo-router";
import React from "react";
import { SafeAreaView } from "react-native";
import { Box } from "@/components/ui/box";
import { Text } from "@/components/ui/text";
import { Heading } from "@/components/ui/heading";
import { VStack } from "@/components/ui/vstack";
import { HStack } from "@/components/ui/hstack";
import { Icon } from "@/components/ui/icon";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { LogIn, Shield } from "lucide-react-native";

import { useSession } from "@/ctx";

export default function SignIn() {
  const { signIn } = useSession();
  
  return (
    <SafeAreaView
      style={{ flex: 1 }}
      className="bg-white dark:bg-background-dark"
    >
      <Box className="flex-1 justify-center p-6">
        <VStack space="xl" className="items-center">
          {/* Header */}
          <VStack space="lg" className="items-center mb-8">
            <Box className="p-4 bg-primary-100 dark:bg-primary-900/30 rounded-full">
              <Icon as={Shield} size="xl" className="text-primary-500" />
            </Box>
            <VStack space="xs" className="items-center">
              <Heading
                size="2xl"
                className="text-typography-900 dark:text-typography-950 text-center"
              >
                Welcome Back
              </Heading>
              <Text
                size="lg"
                className="text-typography-600 dark:text-typography-750 text-center"
              >
                Sign in to continue your climate action journey
              </Text>
            </VStack>
          </VStack>

          {/* Sign In Card */}
          <Card className="w-full max-w-sm p-8">
            <VStack space="lg" className="items-center">
              <VStack space="md" className="items-center">
                <Heading
                  size="lg"
                  className="text-typography-900 dark:text-typography-950"
                >
                  Climate Intelligence Network
                </Heading>
                <Text
                  size="sm"
                  className="text-typography-600 dark:text-typography-750 text-center"
                >
                  Join thousands of climate scientists and environmental enthusiasts making a difference
                </Text>
              </VStack>
              
              <Button
                variant="solid"
                action="primary"
                size="lg"
                className="w-full"
                onPress={() => {
                  signIn();
                  // Navigate after signing in. You may want to tweak this to ensure sign-in is
                  // successful before navigating.
                  router.replace("/");
                }}
              >
                <HStack space="md" className="items-center">
                  <Icon
                    as={LogIn}
                    size="md"
                    className="text-white"
                  />
                  <Text size="lg" className="text-white font-semibold">
                    Sign In
                  </Text>
                </HStack>
              </Button>
              
              <VStack space="xs" className="items-center">
                <Text
                  size="xs"
                  className="text-typography-500 dark:text-typography-300 text-center"
                >
                  By signing in, you agree to our Terms of Service and Privacy Policy
                </Text>
              </VStack>
            </VStack>
          </Card>

          {/* Features */}
          <VStack space="md" className="w-full max-w-sm">
            <Text
              size="sm"
              className="text-typography-600 dark:text-typography-750 text-center font-semibold"
            >
              What you'll get:
            </Text>
            <VStack space="xs">
              <HStack space="md" className="items-center">
                <Box className="w-2 h-2 bg-green-500 rounded-full" />
                <Text
                  size="sm"
                  className="text-typography-600 dark:text-typography-750"
                >
                  Access to climate missions and data collection
                </Text>
              </HStack>
              <HStack space="md" className="items-center">
                <Box className="w-2 h-2 bg-blue-500 rounded-full" />
                <Text
                  size="sm"
                  className="text-typography-600 dark:text-typography-750"
                >
                  Connect with a global community of researchers
                </Text>
              </HStack>
              <HStack space="md" className="items-center">
                <Box className="w-2 h-2 bg-purple-500 rounded-full" />
                <Text
                  size="sm"
                  className="text-typography-600 dark:text-typography-750"
                >
                  Track your environmental impact and achievements
                </Text>
              </HStack>
            </VStack>
          </VStack>
        </VStack>
      </Box>
    </SafeAreaView>
  );
}
