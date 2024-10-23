import { Stack } from 'expo-router'
import React from 'react'
import { Text, TouchableOpacity, View } from 'react-native'
import colors from 'tailwindcss/colors'

const AuthLayout = () => {
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
			<Stack.Screen name="login" options={{ headerShown: false }} />

			<Stack.Screen
				name="register"
				options={{
					headerTitle: 'Cadastre-se',
				}}
			/>
		</Stack>
	)
}

export default AuthLayout
