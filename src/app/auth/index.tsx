import { Button, ButtonText } from '@/components/ui/button'
import { Input, InputField, InputIcon, InputSlot } from '@/components/ui/input'
import { Text } from '@/components/ui/text'
import { VStack } from '@/components/ui/vstack'
import { zodResolver } from '@hookform/resolvers/zod'
import { Link, useGlobalSearchParams } from 'expo-router' // Import Link from expo-router
import { EyeIcon, EyeOffIcon } from 'lucide-react-native'
import React, { useState } from 'react'
import { Controller, useForm } from 'react-hook-form'
import { View } from 'react-native'
import { z } from 'zod'

const loginSchema = z.object({
	email: z
		.string()
		.min(1, 'Campo obrigatório')
		.email('Endereço de email inválido.'),
	password: z.string().min(1, 'Campo obrigatório'),
})

type LoginFormData = z.infer<typeof loginSchema>

function App() {
	const [showPassword, setShowPassword] = useState(false)
	const params = useGlobalSearchParams()
	const email = params.email as string

	const {
		control,
		handleSubmit,
		formState: { errors },
	} = useForm<LoginFormData>({
		resolver: zodResolver(loginSchema),
		defaultValues: {
			email: email || '',
			password: '',
		},
	})

	const handleState = () => {
		setShowPassword((prevState) => !prevState)
	}

	const onSubmit = (data: LoginFormData) => {
		console.log(data)
	}

	return (
		<View style={{ flex: 1, justifyContent: 'center' }}>
			<VStack space="xl" className="h-fit p-4">
				<Text className="font-roboto-bold text-3xl ">Login</Text>

				<VStack space="xs">
					<Text className="text-typography-500 leading-1">Email</Text>
					<Controller
						control={control}
						name="email"
						render={({ field: { onChange, onBlur, value } }) => (
							<Input>
								<InputField
									type="text"
									placeholder="example@gmail.com"
									onBlur={onBlur}
									onChangeText={onChange}
									value={value}
								/>
							</Input>
						)}
					/>
					{errors.email && (
						<Text className="text-red-500">{errors.email.message}</Text>
					)}
				</VStack>

				<VStack space="xs">
					<Text className="text-typography-500 leading-1">Password</Text>
					<Controller
						control={control}
						name="password"
						render={({ field: { onChange, onBlur, value } }) => (
							<Input className="text-center">
								<InputField
									type={showPassword ? 'text' : 'password'}
									placeholder="coloque sua senha"
									onBlur={onBlur}
									onChangeText={onChange}
									value={value}
								/>
								<InputSlot className="pr-3 " onPress={handleState}>
									{showPassword ? (
										<EyeIcon size={16} color="black" />
									) : (
										<EyeOffIcon size={16} color="black" />
									)}
								</InputSlot>
							</Input>
						)}
					/>
					{errors.password && (
						<Text className="text-red-500">{errors.password.message}</Text>
					)}
				</VStack>

				<View className="flex-row w-full justify-between">
					<Button onPress={handleSubmit(onSubmit)}>
						<ButtonText className="text-typography-0">Login</ButtonText>
					</Button>

					<Link href="/auth/register" asChild>
						<Button variant="link">
							<ButtonText className="text-black">Cadastrar</ButtonText>
						</Button>
					</Link>
				</View>
			</VStack>
		</View>
	)
}

export default App
