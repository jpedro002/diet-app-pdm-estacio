import { OverlayProvider } from '@gluestack-ui/overlay'
import { ToastProvider } from '@gluestack-ui/toast'
import { colorScheme as colorSchemeNW } from 'nativewind'
import type { ReactNode } from 'react'
import {
	type ColorSchemeName,
	View,
	type ViewProps,
	useColorScheme,
} from 'react-native'
import { config } from './config'

type ModeType = 'light' | 'dark' | 'system'

const getColorSchemeName = (
	colorScheme: ColorSchemeName,
	mode: ModeType,
): 'light' | 'dark' => {
	if (mode === 'system') {
		return colorScheme ?? 'light'
	}
	return mode
}

export function GluestackUIProvider({
	mode = 'light',
	...props
}: {
	mode?: 'light' | 'dark' | 'system'
	children?: ReactNode
	style?: ViewProps['style']
}) {
	const colorScheme = useColorScheme()

	const colorSchemeName = getColorSchemeName(colorScheme, mode)

	colorSchemeNW.set(mode)

	return (
		<View
			style={[
				config[colorSchemeName],
				{ flex: 1, height: '100%', width: '100%' },
				props.style,
			]}
		>
			<OverlayProvider>
				<ToastProvider>{props.children}</ToastProvider>
			</OverlayProvider>
		</View>
	)
}