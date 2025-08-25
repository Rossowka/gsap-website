import gsap from 'gsap'
import { ScrollTrigger, SplitText } from 'gsap/all'
import NavBar from './components/NavBar'
import Hero from './components/Hero'

gsap.registerPlugin(ScrollTrigger, SplitText) // you only have to do it once to make sure the plugins are used globally - putting it in App file is the way to go

const App = () => {
	return (
		<main>
			<NavBar />
			<Hero />
		</main>
	)
}

export default App
