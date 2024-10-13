import { Slot } from 'expo-router'
import '../global.css'
import {
	Roboto_400Regular,
	Roboto_700Bold,
	useFonts,
} from '@expo-google-fonts/roboto'
import { ActivityIndicator, View } from 'react-native'

export default function LayoutMain() {
	const [fontsLoaded] = useFonts({
		Roboto_400Regular,
		Roboto_700Bold,
	})

	if (!fontsLoaded) {
		return (
			<View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
				<ActivityIndicator size="large" />
			</View>
		)
	}

	return <Slot />
}
