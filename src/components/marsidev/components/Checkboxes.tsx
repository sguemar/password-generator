/** @jsxImportSource solid-js */
import type { Component } from 'solid-js'
import '@components/marsidev/styles/checkbox.css'
import { usePassword } from '@components/marsidev/context/PasswordContext'
import { Checkbox } from '@components/marsidev/components/Checkbox'

export const Checkboxes: Component = () => {
	const {
		lowercase,
		uppercase,
		numbers,
		symbols,
		dictionary,
		onToggleUppercase,
		onToggleLowercase,
		onToggleNumbers,
		onToggleSymbols
	} = usePassword()

	return (
		<div class='flex flex-col items-start	justify-start px-2 font-semibold text-black'>
			<Checkbox
				checked={uppercase()}
				disabled={uppercase() && dictionary().length === 1}
				id='marsidev-upper-checkbox'
				onChange={onToggleUppercase}
				label='Mayúsculas'
			/>

			<Checkbox
				checked={lowercase()}
				disabled={lowercase() && dictionary().length === 1}
				id='marsidev-lower-checkbox'
				onChange={onToggleLowercase}
				label='Minúsculas'
			/>

			<Checkbox
				checked={numbers()}
				disabled={numbers() && dictionary().length === 1}
				id='marsidev-numbers-checkbox'
				onChange={onToggleNumbers}
				label='Números'
			/>

			<Checkbox
				checked={symbols()}
				disabled={symbols() && dictionary().length === 1}
				id='marsidev-symbols-checkbox'
				onChange={onToggleSymbols}
				label='Símbolos'
			/>
		</div>
	)
}
