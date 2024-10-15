import { Button, ButtonSpinner, ButtonText } from '@/components/ui/button'
import { Text, View } from 'react-native'
import colors from 'tailwindcss/colors'

export default function HomeScreen() {
	return (
		<View className="flex-1 items-center justify-center bg-white">
			<Text className="text-blue-500 text-2xl font-roboto-regular">
				Hello, NativeWind v4!
			</Text>
			<Text className="text-blue-500 text-2xl bg-black font-roboto-bold">
				Hello, NativeWind v4!
			</Text>

			<Button className="p-2 rounded-xl w-fit mt-2 " size="lg">
				<ButtonSpinner color={colors.gray[400]} />
				<ButtonText className="font-medium text-sm  ml-2">
					Please wait...
				</ButtonText>
			</Button>
		</View>
	)
}
