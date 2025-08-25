import { useGSAP } from '@gsap/react'
import { navLinks } from '../../constants/index.js'
import gsap from 'gsap'

const NavBar = () => {
	useGSAP(() => {
		const navTween = gsap.timeline({
			scrollTrigger: {
				trigger: 'nav',
				start: 'bottom top', // first property defines the elements position, second refers to viewport position - in this case, when the bottom of navbar reaches the top of viewport, that's when the animation will run
			},
		})

		navTween.fromTo(
			'nav',
			{ backgroundColor: 'transparent' },
			{
				backgroundColor: '#00000050',
				backgroundFilter: 'blur(10px)',
				duration: 1,
				ease: 'power1.inOut',
			}
		)
	})

	return (
		<nav>
			<div>
				<a
					href='#home'
					className='flex items-center gap-2'
				>
					<img
						src='/images/logo.png'
						alt='logo'
					/>
					<p>Velvet Pour</p>
				</a>
				<ul>
					{navLinks.map((link) => (
						<li key={link.id}>
							<a href={`#${link.id}`}>{link.title}</a>
						</li>
					))}
				</ul>
			</div>
		</nav>
	)
}

export default NavBar
