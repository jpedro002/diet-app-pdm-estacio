import { FontAwesome } from '@expo/vector-icons'
import { Tabs } from 'expo-router'
import {
	ClipboardList,
	House,
	MessagesSquare,
	UtensilsCrossed,
} from 'lucide-react-native'
import React from 'react'
import { StatusBar, View } from 'react-native'

const AppLayout = () => {
	return (
		<View className="flex-1">
			<StatusBar translucent backgroundColor="transparent" />

			<Tabs
				screenOptions={{
					tabBarActiveTintColor: '#20B2AA',
					tabBarInactiveTintColor: 'gray',
					tabBarShowLabel: false,
					headerShown: false,
				}}
			>
				<Tabs.Screen
					name="(home)"
					options={{
						tabBarIcon: ({ color }) => <House size={20} color={color} />,
					}}
				/>
				<Tabs.Screen
					name="food"
					options={{
						tabBarIcon: ({ color }) => (
							<UtensilsCrossed size={20} color={color} />
						),
					}}
				/>

				<Tabs.Screen
					name="communication"
					options={{
						tabBarIcon: ({ color }) => (
							<MessagesSquare size={20} color={color} />
						),
					}}
				/>
				<Tabs.Screen
					name="followUp"
					options={{
						tabBarIcon: ({ color }) => (
							<ClipboardList size={20} color={color} />
						),
					}}
				/>
			</Tabs>
		</View>
	)
}

export default AppLayout
