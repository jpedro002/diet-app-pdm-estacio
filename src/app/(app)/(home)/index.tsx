import { HomeCarousel } from '@/components/Home/HomeCarousel'
import { HomeHeader } from '@/components/Home/HomeHeader'
import { useAppSelector } from '@/store'
import { useEffect } from 'react'
import { ScrollView } from 'react-native'

export default function HomeScreen() {
	const u = useAppSelector((s) => s.user)

	useEffect(() => {
		console.log(u)
	}, [u])
	return (
		<ScrollView className="flex-1 py-4 pt-6  ">
			<HomeHeader />
			<HomeCarousel />
		</ScrollView>
	)
}
