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
import {
  Avatar,
  AvatarImage,
  AvatarFallbackText,
} from "@/components/ui/avatar";
import { Badge } from "@/components/ui/badge";
import { useLanguage } from "@/components/i18n/LanguageContext";
import {
  Users,
  MessageCircle,
  Calendar,
  BookOpen,
  Heart,
} from "lucide-react-native";

const CommunityPage = () => {
  const { t } = useLanguage();

  const discussions = [
    {
      id: 1,
      title: "Sustainable farming in drought conditions",
      author: "Maria Santos",
      authorAvatar:
        "https://images.unsplash.com/photo-1494790108755-2616b612d5c5?w=100&h=100&fit=crop&crop=face",
      replies: 23,
      likes: 45,
      timeAgo: "2 hours ago",
      tags: ["Agriculture", "Drought", "Solutions"],
    },
    {
      id: 2,
      title: "Community-based flood early warning systems",
      author: "João Silva",
      authorAvatar:
        "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100&h=100&fit=crop&crop=face",
      replies: 15,
      likes: 32,
      timeAgo: "5 hours ago",
      tags: ["Flooding", "Technology", "Prevention"],
    },
    {
      id: 3,
      title: "Urban heat island mitigation strategies",
      author: "Ana Rodriguez",
      authorAvatar:
        "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=100&h=100&fit=crop&crop=face",
      replies: 18,
      likes: 56,
      timeAgo: "1 day ago",
      tags: ["Urban Planning", "Heat", "Green Infrastructure"],
    },
  ];

  const events = [
    {
      id: 1,
      title: "Climate Data Workshop",
      date: "June 20, 2025",
      time: "14:00 UTC",
      participants: 34,
      type: "Virtual",
    },
    {
      id: 2,
      title: "Community Tree Planting",
      date: "June 25, 2025",
      time: "09:00 Local",
      participants: 12,
      type: "In-person",
    },
  ];

  return (
    <SafeAreaView
      style={{ flex: 1 }}
      className="bg-white dark:bg-background-dark"
    >
      <ScrollView className="flex-1">
        <Box className="p-6">
          {/* Header */}
          <VStack space="lg" className="mb-8">
            <HStack space="md" className="items-center">
              <Icon as={Users} size="xl" className="text-primary-500" />
              <VStack space="xs">
                <Heading
                  size="xl"
                  className="text-typography-900 dark:text-typography-950"
                >
                  {t("community")}
                </Heading>
                <Text
                  size="sm"
                  className="text-typography-600 dark:text-typography-750"
                >
                  Connect, learn, and act together
                </Text>
              </VStack>
            </HStack>
          </VStack>

          {/* Community Stats */}
          <Card className="p-6 mb-6 bg-gradient-to-r from-purple-50 to-pink-50 dark:from-purple-900/20 dark:to-pink-900/20">
            <HStack className="justify-between items-center">
              <VStack className="items-center">
                <Text
                  size="2xl"
                  className="font-bold text-purple-600 dark:text-purple-400"
                >
                  2.1k
                </Text>
                <Text
                  size="sm"
                  className="text-typography-600 dark:text-typography-750"
                >
                  Members
                </Text>
              </VStack>
              <VStack className="items-center">
                <Text
                  size="2xl"
                  className="font-bold text-blue-600 dark:text-blue-400"
                >
                  156
                </Text>
                <Text
                  size="sm"
                  className="text-typography-600 dark:text-typography-750"
                >
                  {t("discussions")}
                </Text>
              </VStack>
              <VStack className="items-center">
                <Text
                  size="2xl"
                  className="font-bold text-green-600 dark:text-green-400"
                >
                  23
                </Text>
                <Text
                  size="sm"
                  className="text-typography-600 dark:text-typography-750"
                >
                  {t("events")}
                </Text>
              </VStack>
            </HStack>
          </Card>

          {/* Quick Actions */}
          <HStack space="md" className="mb-6">
            <Button variant="solid" className="flex-1">
              <Icon as={MessageCircle} size="sm" className="text-white mr-2" />
              <Text className="text-white">Start Discussion</Text>
            </Button>
            <Button variant="outline" className="flex-1">
              <Icon as={Calendar} size="sm" className="mr-2" />
              <Text>Create Event</Text>
            </Button>
          </HStack>

          {/* Recent Discussions */}
          <VStack className="space-y-4 mb-6">
            <Heading
              size="md"
              className="text-typography-900 dark:text-typography-950"
            >
              Recent {t("discussions")}
            </Heading>

            {discussions.map((discussion) => (
              <Card key={discussion.id} className="p-4">
                <VStack className="space-y-3">
                  <Text className="font-semibold text-typography-900 dark:text-typography-950">
                    {discussion.title}
                  </Text>

                  <HStack className="items-center space-x-3">
                    <Avatar size="sm">
                      <AvatarImage source={{ uri: discussion.authorAvatar }} />
                      <AvatarFallbackText>
                        {discussion.author}
                      </AvatarFallbackText>
                    </Avatar>
                    <VStack className="flex-1">
                      <Text
                        size="sm"
                        className="text-typography-600 dark:text-typography-750"
                      >
                        {discussion.author}
                      </Text>
                      <Text
                        size="xs"
                        className="text-typography-500 dark:text-typography-500"
                      >
                        {discussion.timeAgo}
                      </Text>
                    </VStack>
                  </HStack>

                  <HStack className="flex-wrap space-x-2">
                    {discussion.tags.map((tag, index) => (
                      <Badge key={index} variant="outline" className="mb-1">
                        <Text size="xs">{tag}</Text>
                      </Badge>
                    ))}
                  </HStack>

                  <HStack className="justify-between items-center">
                    <HStack className="space-x-4">
                      <HStack className="items-center space-x-1">
                        <Icon
                          as={MessageCircle}
                          size="sm"
                          className="text-typography-500"
                        />
                        <Text
                          size="sm"
                          className="text-typography-600 dark:text-typography-750"
                        >
                          {discussion.replies}
                        </Text>
                      </HStack>
                      <HStack className="items-center space-x-1">
                        <Icon
                          as={Heart}
                          size="sm"
                          className="text-typography-500"
                        />
                        <Text
                          size="sm"
                          className="text-typography-600 dark:text-typography-750"
                        >
                          {discussion.likes}
                        </Text>
                      </HStack>
                    </HStack>
                    <Button size="sm" variant="outline">
                      <Text>Join Discussion</Text>
                    </Button>
                  </HStack>
                </VStack>
              </Card>
            ))}
          </VStack>

          {/* Upcoming Events */}
          <VStack className="space-y-4 mb-6">
            <Heading
              size="md"
              className="text-typography-900 dark:text-typography-950"
            >
              Upcoming {t("events")}
            </Heading>

            {events.map((event) => (
              <Card key={event.id} className="p-4">
                <VStack className="space-y-3">
                  <HStack className="justify-between items-start">
                    <VStack className="flex-1">
                      <Text className="font-semibold text-typography-900 dark:text-typography-950">
                        {event.title}
                      </Text>
                      <Text
                        size="sm"
                        className="text-typography-600 dark:text-typography-750"
                      >
                        {event.date} at {event.time}
                      </Text>
                    </VStack>
                    <Badge
                      variant="solid"
                      action={event.type === "Virtual" ? "info" : "success"}
                    >
                      <Text size="xs">{event.type}</Text>
                    </Badge>
                  </HStack>

                  <HStack className="justify-between items-center">
                    <HStack className="items-center space-x-1">
                      <Icon
                        as={Users}
                        size="sm"
                        className="text-typography-500"
                      />
                      <Text
                        size="sm"
                        className="text-typography-600 dark:text-typography-750"
                      >
                        {event.participants} attending
                      </Text>
                    </HStack>
                    <Button size="sm">
                      <Text>Join Event</Text>
                    </Button>
                  </HStack>
                </VStack>
              </Card>
            ))}
          </VStack>

          {/* Community Stories */}
          <VStack className="space-y-4">
            <Heading
              size="md"
              className="text-typography-900 dark:text-typography-950"
            >
              Community {t("stories")}
            </Heading>

            <Card className="p-4">
              <VStack className="space-y-3">
                <HStack className="items-center space-x-2">
                  <Icon as={BookOpen} size="md" className="text-blue-500" />
                  <Text className="font-semibold text-typography-900 dark:text-typography-950">
                    Featured Story
                  </Text>
                </HStack>
                <Text className="text-typography-900 dark:text-typography-950">
                  "How our community reduced flood risk by 40%"
                </Text>
                <Text
                  size="sm"
                  className="text-typography-600 dark:text-typography-750"
                >
                  Learn how residents of Vila Verde implemented an early warning
                  system and natural flood management...
                </Text>
                <Button size="sm" variant="outline">
                  <Text>Read Full Story</Text>
                </Button>
              </VStack>
            </Card>
          </VStack>
        </Box>
      </ScrollView>
    </SafeAreaView>
  );
};

export default CommunityPage;
