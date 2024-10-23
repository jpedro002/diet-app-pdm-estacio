import { Link } from 'expo-router'
import { Bell } from 'lucide-react-native'
import React from 'react'
import { Text, View } from 'react-native'
import { Button } from '../ui/button'

export const HomeHeader = () => {
	return (
		<View className="h-fit flex-row gap-3 items-center p-4">
			<Link href={'/(home)/profile'}>
				<View className="size-14 bg-purple-800 rounded-full items-center justify-center ">
					<Text className="text-white text-2xl font-roboto-regular">JP</Text>
				</View>
			</Link>

			<View className="flex-1 pl-4">
				<Text className="text-2xl font-roboto-regular">John Doe</Text>
				<Text className="text-gray-500">Welcome back, John</Text>
			</View>
			<Link href={'/(home)/notifications'} asChild>
				<Button variant="link" className="px-3">
					<Bell size={16} color={'#6b21a8'} fill={'#6b21a8'} />
				</Button>
			</Link>
		</View>
	)
}
