import { StyleSheet, Text, View } from "react-native";

import * as SplashScreen from "expo-splash-screen";
import { useFonts } from "expo-font";
import { useEffect } from "react";

import RegistrationScreen from "./screens/RegistrationScreen";

SplashScreen.preventAutoHideAsync();

export default function App() {
	const [fontsLoaded] = useFonts({
		"Roboto-Regular": require("./assets/fonts/Roboto-Regular.ttf"),
		"Roboto-Bold": require("./assets/fonts/Roboto-Bold.ttf"),
		"Roboto-Light": require("./assets/fonts/Roboto-Light.ttf"),
		"Roboto-Medium": require("./assets/fonts/Roboto-Medium.ttf"),
	});

	useEffect(() => {
		if (fontsLoaded) {
			SplashScreen.hideAsync();
		}
	}, [fontsLoaded]);

	return <RegistrationScreen />;
}
