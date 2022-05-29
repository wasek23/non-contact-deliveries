import { StatusBar } from 'expo-status-bar';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { useFonts } from 'expo-font';
import { StyleSheet, View } from 'react-native';

import Home from './src/screens/Home/Home';
import Product from './src/screens/Product/Product';
import Text from './src/components/Text/Text';

const Stack = createNativeStackNavigator();

export default function App() {
	const [loaded] = useFonts({
		'SFPro-Display': require('./assets/fonts/sf-pro-display-bold.otf'),
		'SFPro-Text': require('./assets/fonts/sf-pro-text-regular.ttf'),
	});

	if (!loaded) {
		<View>
			<Text>Fonts Loading...</Text>
		</View>
	}

	return <>
		<StatusBar style='light' />
		<NavigationContainer>
			<Stack.Navigator screenOptions={{ headerShown: false }}>
				<Stack.Screen name='Home' component={Home} />
				<Stack.Screen name='Product' component={Product} />
			</Stack.Navigator>
		</NavigationContainer>
	</>;
}
