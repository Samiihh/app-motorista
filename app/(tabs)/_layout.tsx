import { Ionicons } from "@expo/vector-icons";
import { Tabs } from "expo-router";
import React from "react";

/**
 * TabsLayout - Layout do grupo (tabs)
 * Aqui nasce a barra inferior (bottom tabs).
 * Cada arquivo dentro de app/(tabs) vira uma aba (ou tela dentro das abas).
 */
export default function TabsLayout() {
  return (
    <Tabs
      screenOptions={{
        headerShown: false,

        // Estilo da barra inferior
        tabBarStyle: {
          position: "absolute",
          left: 16,
          right: 16,
          bottom: 0,
          paddingTop: 6,
          paddingBottom: 10,

          height: 74,
          borderTopLeftRadius: 30,
          borderTopRightRadius: 30,

          backgroundColor: "#0B63CE",
          borderTopWidth: 0,

          // sombra iOS
          shadowColor: "#000",
          shadowOffset: { width: 0, height: 8 },
          shadowOpacity: 0.15,
          shadowRadius: 10,

          // sombra Android
          elevation: 10,
        },

        tabBarIconStyle: { marginTop: 4 },

        // Cores do ícone ativo/inativo
        tabBarActiveTintColor: "#FFFFFF",
        tabBarInactiveTintColor: "#D7E8FF",

        // Some com o texto (fica só ícone igual seu print)
        tabBarShowLabel: false,
      }}
    >
      {/* Home/Dashboard */}
      <Tabs.Screen
        name="index"
        options={{
          tabBarIcon: ({ color, size, focused }) => (
            <Ionicons
              name="home-outline"
              size={focused ? 30 : 26}
              color={color}
            />
          ),
        }}
      />

      {/* Veículos */}
      <Tabs.Screen
        name="vehicles"
        options={{
          tabBarIcon: ({ color, size, focused }) => (
            <Ionicons
              name="car-outline"
              size={focused ? 30 : 26}
              color={color}
            />
          ),
        }}
      />

      {/* Mapas */}
      <Tabs.Screen
        name="maps"
        options={{
          tabBarIcon: ({ color, size, focused }) => (
            <Ionicons
              name="map-outline"
              size={focused ? 30 : 26}
              color={color}
            />
          ),
        }}
      />

      {/* Alertas */}
      <Tabs.Screen
        name="alerts"
        options={{
          tabBarIcon: ({ color, size, focused }) => (
            <Ionicons
              name="notifications-outline"
              size={focused ? 30 : 26}
              color={color}
            />
          ),
        }}
      />

      {/* Config */}
      <Tabs.Screen
        name="settings"
        options={{
          tabBarIcon: ({ color, size, focused }) => (
            <Ionicons
              name="options-outline"
              size={focused ? 30 : 26}
              color={color}
            />
          ),
        }}
      />
      <Tabs.Screen
        name="explore"
        options={{
          href: null,
        }}
      />
    </Tabs>
  );
}
