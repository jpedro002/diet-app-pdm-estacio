import { Button, ButtonSpinner, ButtonText } from '@/components/ui/button'
import { useAppSelector } from '@/store'
import { increment } from '@/store/slices/counterSlice'
import { Link } from 'expo-router'
import { Text, View } from 'react-native'
import { useDispatch } from 'react-redux'
import colors from 'tailwindcss/colors'

export default function HomeScreen() {
	const counter = useAppSelector((state) => state.counter.value)
	const dispatch = useDispatch()

	const abc = () => dispatch(increment())

	return (
		<View className="flex-1 items-center justify-center bg-white">
			<Text className="text-blue-500 text-2xl font-roboto-regular">
				Hello, NativeWind v4!
			</Text>
			<Text className="text-blue-500 text-2xl bg-black font-roboto-bold">
				Hello, NativeWind v4!
			</Text>

			<Link href={'/auth'} asChild>
				<Button className="p-2 rounded-xl w-fit mt-2 " size="lg">
					<ButtonText className="font-medium text-sm  ml-2">
						Please wait...
					</ButtonText>
				</Button>
			</Link>
			<Button className="p-2 rounded-xl w-fit mt-2 " size="lg" onPress={abc}>
				<ButtonText className="font-medium text-sm  ml-2">
					counter {counter}
				</ButtonText>
			</Button>
		</View>
	)
}
