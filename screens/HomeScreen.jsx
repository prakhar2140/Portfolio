import { StatusBar } from "expo-status-bar";
import {
  Text,
  View,
  Image,
  TouchableOpacity,
  ScrollView,
  Linking,
} from "react-native";
import { useSafeAreaInsets } from "react-native-safe-area-context";
import { LinearGradient } from "expo-linear-gradient";
import { Feather, Ionicons } from "@expo/vector-icons";

export default function HomeScreen() {
  const insets = useSafeAreaInsets();

  const openLink = (url) => {
    Linking.openURL(url).catch((err) =>
      console.error("Couldn't load page", err)
    );
  };

  return (
    <LinearGradient
      colors={["#0f172a", "#020617"]}
      start={{ x: 0, y: 0 }}
      end={{ x: 1, y: 1 }}
      className="flex-1"
    >
      <StatusBar style="light" />

      <View
        style={{
          flex: 1,
          paddingTop: insets.top,
          paddingLeft: insets.left + 15,
          paddingRight: insets.right + 15,
        }}
      >
        <ScrollView
          contentContainerStyle={{ paddingBottom: 120 }}
          showsVerticalScrollIndicator={false}
        >
          {/* --- TOP HEADER --- */}
          <View className="items-center mt-6">
            <Text className="text-gray-400 text-xs font-bold tracking-[4px] uppercase">
              Portfolio
            </Text>
          </View>

          {/* --- HERO SECTION --- */}
          <View className="items-center mt-12">
            <View className="relative">
              <View className="absolute top-4 left-4 w-28 h-28 bg-cyan-500 rounded-full blur-2xl opacity-40" />
              <Image
                source={require("../assets/Photo.jpg")}
                className="w-40 h-40 rounded-full"
                resizeMode="cover"
              />
            </View>

            <Text className="text-white text-5xl font-extrabold mt-6 tracking-tight text-center">
              Hi, I'm <Text className="text-cyan-400">Prakhar Shukla</Text>
            </Text>

            <Text className="text-gray-400 text-center text-lg mt-4 leading-7 font-medium px-4">
              I am a React Native developer focused on building modern,
              high-performance mobile applications. I specialize in creating
              clean UI, responsive layouts, and smooth user experiences using
              JavaScript and modern frameworks. I am continuously improving my
              skills to deliver scalable and reliable mobile solutions.
            </Text>
            <View className="flex-row gap-4 mt-8 w-full px-2">
              {/* Button 1: Projects (Solid Cyan) */}
              <TouchableOpacity
                className="flex-1 bg-cyan-400 py-4 rounded-2xl shadow-lg shadow-cyan-500/40 flex-row justify-center items-center"
                activeOpacity={0.8}
              >
                <Feather name="folder" size={20} color="#0f172a" />
                <Text className="text-slate-900 font-bold text-lg ml-2">
                  Projects
                </Text>
              </TouchableOpacity>

              {/* Button 2: About (Outline / Transparent) */}
              <TouchableOpacity
                className="flex-1 bg-transparent border border-cyan-400 py-4 rounded-2xl flex-row justify-center items-center"
                activeOpacity={0.6}
              >
                <Feather name="user" size={20} color="#22d3ee" />
                <Text className="text-white font-bold text-lg ml-2">About</Text>
              </TouchableOpacity>
            </View>
          </View>

          {/* --- STATS GRID --- */}
          <View className="flex-row justify-between gap-3 mt-12">
            <View className="flex-1 bg-slate-800/50 border border-slate-700/50 p-4 rounded-3xl items-center justify-center ">
              <Feather name="briefcase" size={40} color="#22d3ee" />
              <Text className="text-white text-xl font-bold mt-2">3+</Text>
              <Text className="text-gray-500 text-[10px] uppercase font-bold mt-1 text-center">
                Years Exp.
              </Text>
            </View>

            <View className="flex-1 bg-slate-800/80 border border-cyan-500/30 p-4 rounded-3xl items-center justify-center shadow-lg shadow-cyan-900/20">
              <Ionicons name="layers-outline" size={40} color="#22d3ee" />
              <Text className="text-white text-xl font-bold mt-2">15+</Text>
              <Text className="text-gray-400 text-[10px] uppercase font-bold mt-1 text-center">
                Apps Done
              </Text>
            </View>

            <View className="flex-1 bg-slate-800/50 border border-slate-700/50 p-4 rounded-3xl items-center justify-center">
              <Feather name="github" size={40} color="#22d3ee" />
              <Text className="text-white text-xl font-bold mt-2">5</Text>
              <Text className="text-gray-500 text-[10px] uppercase font-bold mt-1 text-center">
                Open Source
              </Text>
            </View>
          </View>

          {/* --- KEY SKILLS SECTION (New Addition) --- */}
          <View className="mt-12 w-full px-1">
            <View className="flex-row justify-between items-center mb-4 px-2">
              <Text className="text-white text-xl font-bold">Key Skills</Text>
              <TouchableOpacity>
                <Text className="text-cyan-400 text-sm font-bold">
                  View All {">"}
                </Text>
              </TouchableOpacity>
            </View>

            {/* Skill 1: React Native */}
            <TouchableOpacity className="flex-row items-center bg-slate-800/50 p-4 rounded-3xl mb-3 border border-slate-700 active:border-cyan-500/50">
              <View className="w-12 h-12 bg-slate-700/50 rounded-2xl items-center justify-center mr-4">
                <Feather name="smartphone" size={24} color="#22d3ee" />
              </View>
              <View className="flex-1">
                <Text className="text-white font-bold text-lg">
                  React Native
                </Text>
                <Text className="text-gray-500 text-xs">
                  Tap to explore projects
                </Text>
              </View>
              <Feather name="chevron-right" size={20} color="#64748b" />
            </TouchableOpacity>

            {/* Skill 2: Node.js/APIs */}
            <TouchableOpacity className="flex-row items-center bg-slate-800/50 p-4 rounded-3xl mb-3 border border-slate-700 active:border-cyan-500/50">
              <View className="w-12 h-12 bg-slate-700/50 rounded-2xl items-center justify-center mr-4">
                <Feather name="server" size={24} color="#22d3ee" />
              </View>
              <View className="flex-1">
                <Text className="text-white font-bold text-lg">
                  Node.js/APIs
                </Text>
                <Text className="text-gray-500 text-xs">
                  Tap to explore projects
                </Text>
              </View>
              <Feather name="chevron-right" size={20} color="#64748b" />
            </TouchableOpacity>

            {/* Skill 3: TypeScript */}
            <TouchableOpacity className="flex-row items-center bg-slate-800/50 p-4 rounded-3xl mb-3 border border-slate-700 active:border-cyan-500/50">
              <View className="w-12 h-12 bg-slate-700/50 rounded-2xl items-center justify-center mr-4">
                <Feather name="code" size={24} color="#22d3ee" />
              </View>
              <View className="flex-1">
                <Text className="text-white font-bold text-lg">TypeScript</Text>
                <Text className="text-gray-500 text-xs">
                  Tap to explore projects
                </Text>
              </View>
              <Feather name="chevron-right" size={20} color="#64748b" />
            </TouchableOpacity>
          </View>

          {/* --- SOCIAL ICONS SECTION --- */}
          <View className="items-center mt-8">
            <View className="flex-row gap-5">
              <TouchableOpacity
                onPress={() =>
                  openLink("www.linkedin.com/in/prakhar-shukla-14157b252")
                }
                className="w-14 h-14 bg-slate-800/50 border border-slate-700 rounded-2xl items-center justify-center active:bg-slate-700 active:border-cyan-400/50"
              >
                <Feather name="linkedin" size={24} color="#22d3ee" />
              </TouchableOpacity>
              <TouchableOpacity
                onPress={() => openLink("https://github.com/prakhar2140")}
                className="w-14 h-14 bg-slate-800/50 border border-slate-700 rounded-2xl items-center justify-center active:bg-slate-700 active:border-cyan-400/50"
              >
                <Feather name="github" size={24} color="#22d3ee" />
              </TouchableOpacity>
              <TouchableOpacity
                onPress={() => openLink("https://x.com/parkhar2140")}
                className="w-14 h-14 bg-slate-800/50 border border-slate-700 rounded-2xl items-center justify-center active:bg-slate-700 active:border-cyan-400/50"
              >
                <Feather name="twitter" size={24} color="#22d3ee" />
              </TouchableOpacity>
              <TouchableOpacity
                onPress={() => openLink("mailto:shuklavinay2140@gmail.com")}
                className="w-14 h-14 bg-slate-800/50 border border-slate-700 rounded-2xl items-center justify-center active:bg-slate-700 active:border-cyan-400/50"
              >
                <Feather name="mail" size={24} color="#22d3ee" />
              </TouchableOpacity>
            </View>
          </View>

          <View className="mt-10 w-full px-1">
            <View className="flex-row justify-between items-center mb-4 px-2">
              <Text className="text-white text-xl font-bold">
                Featured Projects
              </Text>
              <TouchableOpacity>
                <Text className="text-cyan-400 text-sm font-bold">
                  All {">"}
                </Text>
              </TouchableOpacity>
            </View>

            {/* Project 1: Readers Community App */}
            <TouchableOpacity className="bg-slate-800/50 border border-slate-700 rounded-3xl p-4 mb-6 active:border-cyan-500/50">
              {/* Image Placeholder */}

              <Image
                source={require("../assets/Screenshot 2025-12-14 103324.png")}
                className="h-40 w-full bg-slate-700/50 rounded-2xl items-center justify-center mb-4 overflow-hidden relative"
                resizeMode="cover"
              />

              <Text className="text-cyan-400 text-xl font-bold">
                Readers Community App
              </Text>
              <Text className="text-gray-400 text-sm mt-2 leading-5">
                A social platform for book lovers to connect, share reviews, and
                track reading progress.
              </Text>

              {/* Tech Stack Tags */}
              <View className="flex-row flex-wrap mt-4 gap-2">
                <View className="bg-slate-900 px-3 py-1 rounded-full border border-slate-700">
                  <Text className="text-cyan-400 text-xs font-bold">
                    React Native
                  </Text>
                </View>
                <View className="bg-slate-900 px-3 py-1 rounded-full border border-slate-700">
                  <Text className="text-cyan-400 text-xs font-bold">
                    Node.js
                  </Text>
                </View>
                <View className="bg-slate-900 px-3 py-1 rounded-full border border-slate-700">
                  <Text className="text-cyan-400 text-xs font-bold">
                    MongoDB
                  </Text>
                </View>
              </View>
            </TouchableOpacity>

            {/* Project 2: Canteen Management System */}

            <TouchableOpacity className="bg-slate-800/50 border border-slate-700 rounded-3xl p-4 mb-6 active:border-cyan-500/50">
              {/* Image Placeholder */}
              <Image
                source={require("../assets/Screenshot 2025-12-14 103523.png")}
                className="h-44 w-full bg-slate-700/50 rounded-2xl items-center justify-center mb-4 overflow-hidden relative"
                resizeMode="cover"
              />

              <Text className="text-cyan-400 text-xl font-bold">
                Canteen Management System
              </Text>
              <Text className="text-gray-400 text-sm mt-2 leading-5">
                Digital solution for streamlining food ordering, payments, and
                inventory management in canteens.
              </Text>

              {/* Tech Stack Tags */}
              <View className="flex-row flex-wrap mt-4 gap-2">
                <View className="bg-slate-900 px-3 py-1 rounded-full border border-slate-700">
                  <Text className="text-cyan-400 text-xs font-bold">
                    Python
                  </Text>
                </View>
                <View className="bg-slate-900 px-3 py-1 rounded-full border border-slate-700">
                  <Text className="text-cyan-400 text-xs font-bold">
                    Tkinter
                  </Text>
                </View>
                <View className="bg-slate-900 px-3 py-1 rounded-full border border-slate-700">
                  <Text className="text-cyan-400 text-xs font-bold">
                    Sqllite3
                  </Text>
                </View>
              </View>
            </TouchableOpacity>
          </View>

          <TouchableOpacity className="flex-row items-center bg-slate-800/50 p-4 rounded-3xl mb-3 border border-slate-700 active:border-cyan-500/50">
            <View className="w-12 h-12 bg-slate-700/50 rounded-2xl items-center justify-center mr-4">
              <Feather name="code" size={24} color="#22d3ee" />
            </View>
            <View className="flex-1">
              <Text className="text-cyan-400 font-bold text-2xl">
                Explore My Work
              </Text>
              <Text className="text-gray-500 text-xs">
                Browse Through my Portfolio of projects and see What I build.
              </Text>
            </View>
            <Feather name="chevron-right" size={20} color="#64748b" />
          </TouchableOpacity>
          <TouchableOpacity className="flex-row items-center bg-slate-800/50 p-4 rounded-3xl mb-3 border border-slate-700 active:border-cyan-500/50">
            <View className="w-12 h-12 bg-slate-700/50 rounded-2xl items-center justify-center mr-4">
              <Feather name="user" size={24} color="#22d3ee" />
            </View>
            <View className="flex-1">
              <Text className="text-cyan-400 font-bold text-2xl">
                Know About Me
              </Text>
              <Text className="text-gray-500 text-xs">
                Discover my background, experience and professional journey .
              </Text>
            </View>
            <Feather name="chevron-right" size={20} color="#64748b" />
          </TouchableOpacity>


          <TouchableOpacity className="flex-row items-center bg-slate-800/50 p-4 rounded-3xl mb-3 border border-slate-700 active:border-cyan-500/50">
            <View className="w-12 h-12 bg-slate-700/50 rounded-2xl items-center justify-center mr-4">
              <Feather name="mail" size={24} color="#22d3ee" />
            </View>
            <View className="flex-1">
              <Text className="text-cyan-400 font-bold text-2xl">
                Get in Touch
              </Text>
              <Text className="text-gray-500 text-xs">
                Have a Project in mind? Let's connect and discuss opportunities.
              </Text>
            </View>
            <Feather name="chevron-right" size={20} color="#64748b" />
          </TouchableOpacity>
        </ScrollView>
      </View>
    </LinearGradient>
  );
}
