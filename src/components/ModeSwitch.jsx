import { useMode } from '../mode/ModeContext'
import { MODES } from '../mode/modes'
import styles from './ModeSwitch.module.css'

const OPTIONS = [
	{ value: MODES.DIRECT, label: 'Accès direct' },
	{ value: MODES.ADVENTURE, label: 'Mode aventure' },
]

export default function ModeSwitch() {
	const { mode, setMode } = useMode()

	return (
		<div role="group" aria-label="Mode de visite" className={styles.switch}>
			{OPTIONS.map((option) => (
				<button
					key={option.value}
					type="button"
					aria-pressed={mode === option.value}
					className={styles.option}
					data-value={option.value}
					onClick={() => setMode(option.value)}
				>
					{option.label}
				</button>
			))}
		</div>
	)
}
