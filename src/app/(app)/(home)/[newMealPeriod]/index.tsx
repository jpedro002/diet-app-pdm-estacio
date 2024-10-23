import { useLocalSearchParams } from 'expo-router'
import React from 'react'
import { Text, View } from 'react-native'

const registeNewMeal = () => {
	const { newMealPeriod } = useLocalSearchParams<{ newMealPeriod: string }>()
	return (
		<View className="flex-1 justify-center items-center bg-slate-800">
			<Text className="text-4xl font-bold text-white">
				Hello {newMealPeriod}
			</Text>
		</View>
	)
}

export default registeNewMeal
