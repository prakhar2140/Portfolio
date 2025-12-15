import {
  TextInput,
  Text,
  View,
  ScrollView,
  TouchableOpacity,
  Image,
} from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import { Feather, Ionicons } from "@expo/vector-icons";
import { useState } from "react";
import { useSafeAreaInsets } from "react-native-safe-area-context";

export default function ProjectScreen({ navigation }) {
  const insets = useSafeAreaInsets();
  const [searchQuery, setSearchQuery] = useState("");

  const projects = [
    {
      title: "Readers Community App",
      description:
        "A social platform for book lovers to connect, share reviews, and track reading progress.",
      image: require("../assets/Screenshot 2025-12-14 103324.png"),
      techStack: ["React Native", "Node.js", "MongoDB"],
    },
    {
      title: "Canteen Management System",
      description:
        "Digital solution for streamlining food ordering, payments, and inventory management in canteens.",
      image: require("../assets/Screenshot 2025-12-14 103523.png"),
      techStack: ["Python", "Tkinter", "SQLite3"],
    },
  ];

  const filteredProjects = projects.filter((p) =>
    p.title.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <LinearGradient
      colors={["#0f172a", "#020617"]}
      start={{ x: 0, y: 0 }}
      end={{ x: 1, y: 1 }}
      style={{ flex: 1 }}
    >
      {/* HEADER */}
      <View
        style={{ paddingTop: insets.top }}
        className="flex-row items-center px-4 py-3"
      >
        <TouchableOpacity
          onPress={() => navigation?.goBack?.()}
          className="w-10 h-10 rounded-xl bg-slate-800/60 border border-slate-700 items-center justify-center"
        >
          <Ionicons name="chevron-back" size={22} color="white" />
        </TouchableOpacity>

        <Text className="flex-1 text-center text-white text-xl font-bold">
          Projects
        </Text>

        <View className="w-10 h-10" />
      </View>

      <ScrollView
        contentContainerStyle={{ padding: 16, paddingBottom: 40 }}
        showsVerticalScrollIndicator={false}
      >
        {/* SEARCH BAR */}
        <View className="mb-6">
          <View className="flex-row items-center bg-slate-800/60 border border-slate-700 rounded-2xl px-4 py-3">
            <Feather name="search" size={20} color="#22d3ee" />
            <TextInput
              value={searchQuery}
              onChangeText={setSearchQuery}
              placeholder="Search projects..."
              placeholderTextColor="#64748b"
              className="flex-1 ml-3 text-white text-base"
            />
            {searchQuery.length > 0 && (
              <TouchableOpacity onPress={() => setSearchQuery("")}>
                <Feather name="x" size={18} color="#94a3b8" />
              </TouchableOpacity>
            )}
          </View>
        </View>

        {/* PROJECT CARDS */}
        {filteredProjects.map((project, index) => (
          <TouchableOpacity
            key={index}
            className="bg-slate-800/50 border border-slate-700 rounded-3xl p-4 mb-6 active:border-cyan-500/50"
            activeOpacity={0.85}
          >
            {/* Project Image */}
            <Image
              source={project.image}
              className="h-44 w-full bg-slate-700/50 rounded-2xl mb-4"
              resizeMode="cover"
            />

            {/* Title */}
            <Text className="text-cyan-400 text-xl font-bold">
              {project.title}
            </Text>

            {/* Description */}
            <Text className="text-gray-400 text-sm mt-2 leading-5">
              {project.description}
            </Text>

            {/* Tech Stack */}
            <View className="flex-row flex-wrap mt-4 gap-2">
              {project.techStack.map((tech, i) => (
                <View
                  key={i}
                  className="bg-slate-900 px-3 py-1 rounded-full border border-slate-700"
                >
                  <Text className="text-cyan-400 text-xs font-bold">
                    {tech}
                  </Text>
                </View>
              ))}
            </View>
          </TouchableOpacity>
        ))}

        {filteredProjects.length === 0 && (
          <Text className="text-gray-500 text-center mt-12">
            No projects found
          </Text>
        )}
      </ScrollView>
    </LinearGradient>
  );
}
