import { Header } from './components/Header/Header'
import { Hero } from './components/Hero/Hero'

export default function App() {
	return (
		<div className='app'>
			<Header />
			<Hero
				heading='UnixStudio DIGITAL AGENCY'
				description='We won 50+ desgin awards in 2022 stand alone, some of which had us share the stage  with Google, Netflix, and Spotify'
			/>
		</div>
	)
}
