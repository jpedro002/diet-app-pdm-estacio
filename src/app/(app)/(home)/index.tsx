import { HomeCarousel } from '@/components/Home/HomeCarousel'
import { HomeHeader } from '@/components/Home/HomeHeader'
import { ScrollView } from 'react-native'

export default function HomeScreen() {
	return (
		<ScrollView className="flex-1 py-4 pt-6  ">
			<HomeHeader />
			<HomeCarousel />
		</ScrollView>
	)
}
