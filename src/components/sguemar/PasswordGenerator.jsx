import { useState } from 'react'

import './styles/styles.css'

const letters = 'abcdefghijklmnñopqrstuvwyz'

const PasswordGenerator = () => {
	const [passLength, setPassLength] = useState(8)
	const [password, setPassword] = useState('')

	const handleChangeLength = (e) => {
		const newLength = e.target.value
		setPassLength(newLength)
		generateNewPassword()
	}

	const generateNewPassword = () => {
		let newPassword = ''
		for (let i = 0; i < passLength; i++) {
			const position = Math.floor(Math.random() * letters.length)
			const newChar = letters.charAt(position)
			newPassword = `${newPassword}${newChar}`
		}
		setPassword(newPassword)
	}

	return (
		<div className='flex flex-col gap-5'>
			<section className='border rounded h-14'>
				<p className='h-full p-4 flex items-center justify-center text-lg'>{password}</p>
			</section>
			<p>Length {passLength}</p>
			<input
				className='h-1 rounded bg-indigo-700 appearance-none'
				max={16}
				min={8}
				step={1}
				name='password-length'
				onChange={handleChangeLength}
				type='range'
				value={passLength}
			/>
			<button className='magic-button' type='button' onClick={generateNewPassword}>
				Generate password
			</button>
		</div>
	)
}

export default PasswordGenerator
