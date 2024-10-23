import { Stack } from 'expo-router'
import React from 'react'
import { Text, TouchableOpacity, View } from 'react-native'
import colors from 'tailwindcss/colors'

const HomeLayout = () => {
	return (
		<Stack
			screenOptions={{
				headerTintColor: colors.teal[500],
				headerTitleAlign: 'center',
				contentStyle: {
					height: 10,
				},
				headerTitle: ({ children }) => (
					<View
						style={{
							height: 30,
						}}
					>
						<Text
							style={{
								fontWeight: 'bold',
								color: colors.teal[500],
								fontSize: 20,
							}}
						>
							{children}
						</Text>
					</View>
				),
			}}
		>
			<Stack.Screen name="index" options={{ headerShown: false }} />
			<Stack.Screen name="notifications" options={{}} />
			<Stack.Screen name="registeNewMeal" options={{}} />
		</Stack>
	)
}

export default HomeLayout
