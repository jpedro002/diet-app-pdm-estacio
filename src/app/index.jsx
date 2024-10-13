import { Text, View } from 'react-native'

export default function HomeScreen() {
	return (
		<View className="flex-1 items-center justify-center bg-white">
			<Text className="text-blue-500 text-2xl font-roboto-regular">
				Hello, NativeWind v4!
			</Text>
			<Text className="text-blue-500 text-2xl bg-black font-roboto-bold">
				Hello, NativeWind v4! test
			</Text>
		</View>
	)
}
