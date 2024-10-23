import { Button, ButtonText } from '@/components/ui/button'
import { Input, InputField, InputSlot } from '@/components/ui/input'
import { Text } from '@/components/ui/text'
import { VStack } from '@/components/ui/vstack'
import useAuth from '@/hooks/useAuth'
import { useAppSelector } from '@/store'
import {
	Radio,
	RadioGroup,
	RadioIcon,
	RadioIndicator,
	RadioLabel,
} from '@components/ui/radio'
import { zodResolver } from '@hookform/resolvers/zod'
import { Link, useRouter } from 'expo-router'
import { EyeIcon, EyeOffIcon } from 'lucide-react-native'
import { CircleIcon } from 'lucide-react-native'
import React, { useState } from 'react'
import { Controller, useForm } from 'react-hook-form'
import { ScrollView, View } from 'react-native'
import { z } from 'zod'

const registrationSchema = z.object({
	email: z
		.string()
		.min(1, 'Campo obrigatório')
		.email('Endereço de email inválido.'),
	password: z.string().min(1, 'Campo obrigatório'),
	firstName: z.string().min(1, 'Campo obrigatório'),
	lastName: z.string().min(1, 'Campo obrigatório'),
	userType: z.enum(['user', 'nutritionist'], {
		message: 'Tipo de usuário inválido',
	}),
})

export type RegistrationFormData = z.infer<typeof registrationSchema>

function Registration() {
	const [showPassword, setShowPassword] = useState(false)
	const [userType, setUserType] = useState('user')

	const { registerUser } = useAuth()

	const isLoading = useAppSelector((s) => s.user.loading)

	const {
		control,
		handleSubmit,
		formState: { errors },
	} = useForm<RegistrationFormData>({
		resolver: zodResolver(registrationSchema),
		defaultValues: {
			firstName: '',
			lastName: '',
			email: '',
			password: '',
			userType: 'user',
		},
	})

	const handleState = () => {
		setShowPassword((prevState) => !prevState)
	}

	const onSubmit = async (data: RegistrationFormData) => {
		console.log(data)

		if (isLoading) return

		await registerUser(data)
	}

	return (
		<ScrollView style={{ flex: 1 }}>
			<VStack space="xl" className="h-fit p-4">
				<Text className="font-roboto-bold text-3xl">Cadastrar</Text>

				<VStack space="xs">
					<Text className="text-typography-500 leading-1">Nome</Text>
					<Controller
						control={control}
						name="firstName"
						render={({ field: { onChange, onBlur, value } }) => (
							<Input>
								<InputField
									type="text"
									placeholder="Seu nome"
									onBlur={onBlur}
									onChangeText={onChange}
									value={value}
									autoCapitalize="words"
								/>
							</Input>
						)}
					/>
					{errors.firstName && (
						<Text className="text-red-500">{errors.firstName.message}</Text>
					)}
				</VStack>

				<VStack space="xs">
					<Text className="text-typography-500 leading-1">Sobrenome</Text>
					<Controller
						control={control}
						name="lastName"
						render={({ field: { onChange, onBlur, value } }) => (
							<Input>
								<InputField
									type="text"
									placeholder="Seu sobrenome"
									onBlur={onBlur}
									onChangeText={onChange}
									value={value}
								/>
							</Input>
						)}
					/>
					{errors.lastName && (
						<Text className="text-red-500">{errors.lastName.message}</Text>
					)}
				</VStack>

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
					<Text className="text-typography-500 leading-1">Senha</Text>
					<Controller
						control={control}
						name="password"
						render={({ field: { onChange, onBlur, value } }) => (
							<Input className="text-center">
								<InputField
									type={showPassword ? 'text' : 'password'}
									placeholder="Coloque sua senha"
									onBlur={onBlur}
									onChangeText={onChange}
									value={value}
								/>
								<InputSlot className="pr-3" onPress={handleState}>
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

				<VStack space="xs">
					<Text className="text-typography-500 leading-1">
						Selecione o tipo de usuário
					</Text>

					<Controller
						control={control}
						name="userType"
						defaultValue={'user'}
						render={({ field: { onChange } }) => (
							<View>
								<RadioGroup
									value={userType}
									onChange={(value) => {
										setUserType(value)
										onChange(value)
									}}
								>
									<Radio value="user">
										<RadioIndicator>
											<RadioIcon as={CircleIcon} />
										</RadioIndicator>
										<RadioLabel>Usuário</RadioLabel>
									</Radio>
									<Radio value="nutritionist">
										<RadioIndicator>
											<RadioIcon as={CircleIcon} />
										</RadioIndicator>
										<RadioLabel>Nutricionista</RadioLabel>
									</Radio>
								</RadioGroup>
							</View>
						)}
					/>
				</VStack>

				<Button onPress={handleSubmit(onSubmit)} disabled={isLoading}>
					<ButtonText className="text-typography-0">Cadastrar</ButtonText>
				</Button>
				<Link href="/auth" asChild>
					<Button variant="link" className="justify-start">
						<ButtonText className="text-black">
							Login {isLoading && 'abc'}
						</ButtonText>
					</Button>
				</Link>
			</VStack>
		</ScrollView>
	)
}

export default Registration
