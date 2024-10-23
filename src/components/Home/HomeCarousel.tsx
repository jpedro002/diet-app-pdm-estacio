import { ChevronRight, Utensils } from 'lucide-react-native'
import React from 'react'
import { Dimensions, Text, View } from 'react-native'
import { useSharedValue } from 'react-native-reanimated'
import Carousel from 'react-native-reanimated-carousel'

const renderItem = () => {
	return (
		<View className="bg-slate-100 rounded-lg h-40 p-3 mx-2">
			<View className="">
				<Text className="text-purple-800 text-lg font-roboto-bold">Qua</Text>
				<Text className="text-purple-800 text-lg font-roboto-regular">
					Desjejum
				</Text>
			</View>
			<View className="flex-1 items-center justify-end pb-2">
				<Text className="text-purple-800 text-lg font-roboto-bold">
					{' '}
					Registrar refeição{' '}
				</Text>
			</View>
		</View>
	)
}

const defaultDataWith6Colors = [
	'#B0604D',
	'#899F9C',
	'#B3C680',
	'#5C6265',
	'#F5D399',
	'#F1F1F1',
]

export const HomeCarousel = () => {
	const progress = useSharedValue<number>(0)

	const { width } = Dimensions.get('window')

	return (
		<View className="flex-1 h-64 bg-white py-6">
			<View className="flex-row justify-between  items-center  w-full px-4 pb-1">
				<View className="flex-row gap-3 items-center">
					<Utensils size={18} color={'#94a3b8'} />
					<Text className="text-lg font-roboto-regular text-slate-400">
						Plano alimentar
					</Text>
				</View>
				<ChevronRight size={22} color={'#94a3b8'} />
			</View>
			<Carousel
				autoPlayInterval={2000}
				data={defaultDataWith6Colors}
				height={258}
				loop={false}
				pagingEnabled={true}
				snapEnabled={true}
				width={width - 16}
				style={{
					width,
				}}
				mode="parallax"
				modeConfig={{
					parallaxScrollingScale: 0.9,
					parallaxScrollingOffset: 50,
				}}
				onProgressChange={(_, absoluteProgress) => {
					progress.value = absoluteProgress
				}}
				renderItem={renderItem}
			/>
		</View>
	)
}
