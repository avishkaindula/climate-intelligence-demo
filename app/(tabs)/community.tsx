import React from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import { ScrollView, TouchableOpacity } from "react-native";
import { Box } from "@/components/ui/box";
import { Text } from "@/components/ui/text";
import { Heading } from "@/components/ui/heading";
import { VStack } from "@/components/ui/vstack";
import { HStack } from "@/components/ui/hstack";
import { Icon } from "@/components/ui/icon";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Image } from "@/components/ui/image";
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
  TrendingUp,
  MapPin,
  Star,
  UserPlus,
  Eye,
  Award,
  Activity,
} from "lucide-react-native";

export default function CommunityScreen() {
  const { t } = useLanguage();

  const featuredCommunities = [
    {
      id: 1,
      name: "Lions Club",
      members: 2400,
      image: "@/assets/display/image1.png",
      description: "Service above self - join Lions in making a difference",
      category: "Service",
      rating: 4.9,
      isJoined: false,
      activeMembers: 1850,
    },
    {
      id: 2,
      name: "Rotaract",
      members: 1800,
      image: "@/assets/display/image2.png",
      description: "Young professionals creating positive change",
      category: "Youth Service",
      rating: 4.8,
      isJoined: true,
      activeMembers: 1200,
    },
    {
      id: 3,
      name: "Green Warriors",
      members: 3200,
      image: "@/assets/display/image3.png",
      description: "Environmental action starts here",
      category: "Environment",
      rating: 4.7,
      isJoined: false,
      activeMembers: 2100,
    },
    {
      id: 4,
      name: "Youth for Climate",
      members: 2800,
      image: "@/assets/display/image4.png",
      description: "Young voices for climate action",
      category: "Climate",
      rating: 4.9,
      isJoined: false,
      activeMembers: 1950,
    },
  ];

  const recentDiscussions = [
    {
      id: 1,
      title: "Best practices for community tree planting",
      author: "Sarah Chen",
      replies: 23,
      lastActive: "2h ago",
      avatar: "@/assets/display/image5.png",
      category: "Environment",
    },
    {
      id: 2,
      title: "Organizing climate awareness workshops",
      author: "Miguel Santos",
      replies: 18,
      lastActive: "5h ago",
      avatar: "@/assets/display/image6.png",
      category: "Education",
    },
    {
      id: 3,
      title: "Partnership opportunities with local businesses",
      author: "Emma Johnson",
      replies: 31,
      lastActive: "1d ago",
      avatar: "@/assets/display/image7.png",
      category: "Partnerships",
    },
  ];

  const upcomingEvents = [
    {
      id: 1,
      title: "Community Beach Cleanup",
      date: "Dec 15",
      time: "9:00 AM",
      location: "Santa Monica Beach",
      attendees: 45,
      community: "Green Warriors",
    },
    {
      id: 2,
      title: "Climate Action Summit",
      date: "Dec 18",
      time: "2:00 PM",
      location: "City Hall",
      attendees: 120,
      community: "Youth for Climate",
    },
  ];

  const CommunityCard = ({ community }: { community: any }) => (
    <TouchableOpacity>
      <Card className="w-72 mr-4 bg-white dark:bg-gray-900 border border-gray-200 dark:border-gray-800">
        <VStack space="sm" className="p-4">
          {/* Community Image and Badge */}
          <Box className="relative">
            <Image
              source={community.image}
              alt={community.name}
              className="w-full h-32 rounded-lg"
            />
            <Badge className="absolute top-2 right-2 bg-blue-100 dark:bg-blue-900">
              <Text className="text-blue-800 dark:text-blue-200 text-xs font-medium">
                {community.category}
              </Text>
            </Badge>
          </Box>

          {/* Community Info */}
          <VStack space="xs">
            <HStack className="justify-between items-start">
              <Heading className="text-gray-900 dark:text-white text-lg font-bold flex-1">
                {community.name}
              </Heading>
              <HStack space="xs" className="items-center">
                <Icon as={Star} size="sm" className="text-yellow-500" />
                <Text className="text-gray-600 dark:text-gray-400 text-sm font-medium">
                  {community.rating}
                </Text>
              </HStack>
            </HStack>

            <Text className="text-gray-600 dark:text-gray-400 text-sm line-clamp-2">
              {community.description}
            </Text>

            {/* Stats */}
            <HStack space="md" className="items-center">
              <HStack space="xs" className="items-center">
                <Icon as={Users} size="sm" className="text-gray-500 dark:text-gray-400" />
                <Text className="text-gray-600 dark:text-gray-400 text-sm">
                  {community.members.toLocaleString()}
                </Text>
              </HStack>
              <HStack space="xs" className="items-center">
                <Icon as={Activity} size="sm" className="text-green-500" />
                <Text className="text-gray-600 dark:text-gray-400 text-sm">
                  {community.activeMembers.toLocaleString()} {t("active")}
                </Text>
              </HStack>
            </HStack>

            {/* Action Button */}
            <Button
              size="sm"
              variant={community.isJoined ? "outline" : "solid"}
              className={
                community.isJoined
                  ? "border-gray-300 dark:border-gray-600"
                  : "bg-blue-600 dark:bg-blue-700"
              }
            >
              <HStack space="xs" className="items-center">
                <Icon
                  as={community.isJoined ? Eye : UserPlus}
                  size="sm"
                  className={
                    community.isJoined
                      ? "text-gray-700 dark:text-gray-300"
                      : "text-white"
                  }
                />
                <Text
                  className={
                    community.isJoined
                      ? "text-gray-700 dark:text-gray-300 font-medium"
                      : "text-white font-medium"
                  }
                >
                  {community.isJoined ? t("view") : t("join")}
                </Text>
              </HStack>
            </Button>
          </VStack>
        </VStack>
      </Card>
    </TouchableOpacity>
  );

  return (
    <SafeAreaView className="flex-1 bg-gray-50 dark:bg-black">
      <ScrollView className="flex-1" showsVerticalScrollIndicator={false}>
        <VStack space="lg" className="p-4">
          {/* Header */}
          <VStack space="sm">
            <Heading className="text-gray-900 dark:text-white text-2xl font-bold">
              {t("community")}
            </Heading>
            <Text className="text-gray-600 dark:text-gray-400 text-base">
              {t("communitySubtitle")}
            </Text>
          </VStack>

          {/* Quick Actions */}
          <HStack space="sm" className="items-center">
            <Button
              size="md"
              className="bg-blue-600 dark:bg-blue-700 flex-1"
            >
              <HStack space="xs" className="items-center">
                <Icon as={MessageCircle} size="sm" className="text-white" />
                <Text className="text-white font-medium">
                  {t("startDiscussion")}
                </Text>
              </HStack>
            </Button>
            <Button
              size="md"
              variant="outline"
              className="border-gray-300 dark:border-gray-600 flex-1"
            >
              <HStack space="xs" className="items-center">
                <Icon as={Calendar} size="sm" className="text-gray-700 dark:text-gray-300" />
                <Text className="text-gray-700 dark:text-gray-300 font-medium">
                  {t("createEvent")}
                </Text>
              </HStack>
            </Button>
          </HStack>

          {/* Featured Communities */}
          <VStack space="sm">
            <HStack className="justify-between items-center">
              <Heading className="text-gray-900 dark:text-white text-xl font-bold">
                {t("featuredCommunities")}
              </Heading>
              <TouchableOpacity>
                <Text className="text-blue-600 dark:text-blue-400 text-sm font-medium">
                  {t("viewAll")}
                </Text>
              </TouchableOpacity>
            </HStack>
            <ScrollView horizontal showsHorizontalScrollIndicator={false}>
              <HStack space="sm" className="px-1">
                {featuredCommunities.map((community) => (
                  <CommunityCard key={community.id} community={community} />
                ))}
              </HStack>
            </ScrollView>
          </VStack>

          {/* Recent Discussions */}
          <VStack space="sm">
            <HStack className="justify-between items-center">
              <Heading className="text-gray-900 dark:text-white text-xl font-bold">
                {t("recentDiscussions")}
              </Heading>
              <TouchableOpacity>
                <Text className="text-blue-600 dark:text-blue-400 text-sm font-medium">
                  {t("viewAll")}
                </Text>
              </TouchableOpacity>
            </HStack>
            <VStack space="sm">
              {recentDiscussions.map((discussion) => (
                <TouchableOpacity key={discussion.id}>
                  <Card className="bg-white dark:bg-gray-900 border border-gray-200 dark:border-gray-800">
                    <HStack space="sm" className="p-4 items-start">
                      <Avatar size="md">
                        <AvatarImage source={{ uri: discussion.avatar }} alt={discussion.author} />
                        <AvatarFallbackText>{discussion.author}</AvatarFallbackText>
                      </Avatar>
                      <VStack className="flex-1" space="xs">
                        <HStack className="justify-between items-start">
                          <Text className="text-gray-900 dark:text-white font-semibold flex-1">
                            {discussion.title}
                          </Text>
                          <Badge className="bg-green-100 dark:bg-green-900 ml-2">
                            <Text className="text-green-800 dark:text-green-200 text-xs font-medium">
                              {discussion.category}
                            </Text>
                          </Badge>
                        </HStack>
                        <HStack space="md" className="items-center">
                          <Text className="text-gray-600 dark:text-gray-400 text-sm">
                            {t("by")} {discussion.author}
                          </Text>
                          <HStack space="xs" className="items-center">
                            <Icon as={MessageCircle} size="xs" className="text-gray-500 dark:text-gray-400" />
                            <Text className="text-gray-600 dark:text-gray-400 text-sm">
                              {discussion.replies} {t("replies")}
                            </Text>
                          </HStack>
                          <Text className="text-gray-500 dark:text-gray-500 text-sm">
                            {discussion.lastActive}
                          </Text>
                        </HStack>
                      </VStack>
                    </HStack>
                  </Card>
                </TouchableOpacity>
              ))}
            </VStack>
          </VStack>

          {/* Upcoming Events */}
          <VStack space="sm">
            <HStack className="justify-between items-center">
              <Heading className="text-gray-900 dark:text-white text-xl font-bold">
                {t("upcomingEvents")}
              </Heading>
              <TouchableOpacity>
                <Text className="text-blue-600 dark:text-blue-400 text-sm font-medium">
                  {t("viewAll")}
                </Text>
              </TouchableOpacity>
            </HStack>
            <VStack space="sm">
              {upcomingEvents.map((event) => (
                <TouchableOpacity key={event.id}>
                  <Card className="bg-white dark:bg-gray-900 border border-gray-200 dark:border-gray-800">
                    <HStack space="sm" className="p-4 items-center">
                      {/* Date Box */}
                      <VStack className="bg-blue-100 dark:bg-blue-900 rounded-lg p-3 items-center min-w-16">
                        <Text className="text-blue-800 dark:text-blue-200 text-lg font-bold">
                          {event.date.split(' ')[1]}
                        </Text>
                        <Text className="text-blue-600 dark:text-blue-400 text-xs font-medium">
                          {event.date.split(' ')[0]}
                        </Text>
                      </VStack>
                      
                      {/* Event Details */}
                      <VStack className="flex-1" space="xs">
                        <Text className="text-gray-900 dark:text-white font-semibold">
                          {event.title}
                        </Text>
                        <HStack space="md" className="items-center">
                          <HStack space="xs" className="items-center">
                            <Icon as={MapPin} size="xs" className="text-gray-500 dark:text-gray-400" />
                            <Text className="text-gray-600 dark:text-gray-400 text-sm">
                              {event.location}
                            </Text>
                          </HStack>
                          <Text className="text-gray-500 dark:text-gray-500 text-sm">
                            {event.time}
                          </Text>
                        </HStack>
                        <HStack space="md" className="items-center">
                          <Text className="text-blue-600 dark:text-blue-400 text-sm font-medium">
                            {event.community}
                          </Text>
                          <HStack space="xs" className="items-center">
                            <Icon as={Users} size="xs" className="text-gray-500 dark:text-gray-400" />
                            <Text className="text-gray-600 dark:text-gray-400 text-sm">
                              {event.attendees} {t("attending")}
                            </Text>
                          </HStack>
                        </HStack>
                      </VStack>

                      {/* Action Button */}
                      <Button size="sm" variant="outline" className="border-gray-300 dark:border-gray-600">
                        <Text className="text-gray-700 dark:text-gray-300 font-medium">
                          {t("join")}
                        </Text>
                      </Button>
                    </HStack>
                  </Card>
                </TouchableOpacity>
              ))}
            </VStack>
          </VStack>

          {/* My Communities Stats */}
          <Card className="bg-gradient-to-r from-blue-500 to-purple-600 border-0">
            <VStack space="sm" className="p-6">
              <HStack className="justify-between items-center">
                <Heading className="text-white text-xl font-bold">
                  {t("myCommunities")}
                </Heading>
                <Icon as={Award} size="lg" className="text-white" />
              </HStack>
              <HStack space="md" className="items-center">
                <VStack className="items-center">
                  <Text className="text-white text-2xl font-bold">3</Text>
                  <Text className="text-blue-100 text-sm">{t("joined")}</Text>
                </VStack>
                <VStack className="items-center">
                  <Text className="text-white text-2xl font-bold">28</Text>
                  <Text className="text-blue-100 text-sm">{t("discussions")}</Text>
                </VStack>
                <VStack className="items-center">
                  <Text className="text-white text-2xl font-bold">15</Text>
                  <Text className="text-blue-100 text-sm">{t("events")}</Text>
                </VStack>
                <VStack className="items-center">
                  <Text className="text-white text-2xl font-bold">850</Text>
                  <Text className="text-blue-100 text-sm">{t("impactPoints")}</Text>
                </VStack>
              </HStack>
            </VStack>
          </Card>
        </VStack>
      </ScrollView>
    </SafeAreaView>
  );
}
