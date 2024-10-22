import { HomeCarousel } from '@/components/Home/HomeCarousel'
import { HomeHeader } from '@/components/HomeHeader'
import { ScrollView, Text, View } from 'react-native'

export default function HomeScreen() {
	return (
		<ScrollView className="flex-1 py-4 pt-6  ">
			<HomeHeader />
			<HomeCarousel />
		</ScrollView>
	)
}
