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

	const copyToClipboard = () => {
		navigator.clipboard.writeText(password).then(
			() => {
				console.log('clipboard successfully set')
			},
			() => {
				throw new Error('clipboard write failed')
			}
		)
	}

	return (
		<div className='flex flex-col gap-5'>
			<section className='flex gap-2'>
				<div className='grow border rounded h-14'>
					<p className='h-full p-4 flex items-center justify-center text-lg'>{password}</p>
				</div>
				<div className='flex-none self-center cursor-pointer' onClick={copyToClipboard}>
					<svg fill='white' xmlns='http://www.w3.org/2000/svg' height='48' width='48'>
						<path d='M9 43.95q-1.2 0-2.1-.9-.9-.9-.9-2.1V10.8h3v30.15h23.7v3Zm6-6q-1.2 0-2.1-.9-.9-.9-.9-2.1v-28q0-1.2.9-2.1.9-.9 2.1-.9h22q1.2 0 2.1.9.9.9.9 2.1v28q0 1.2-.9 2.1-.9.9-2.1.9Zm0-3h22v-28H15v28Zm0 0v-28 28Z' />
					</svg>
				</div>
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
