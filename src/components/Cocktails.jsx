import { useGSAP } from '@gsap/react'
import gsap from 'gsap/all'
import { cocktailLists, mockTailLists } from '../../constants'

const Cocktails = () => {
	useGSAP(() => {
		const parallaxTimeline = gsap.timeline({
			scrollTrigger: {
				trigger: '#cocktails',
				start: 'top 30%',
				end: 'bottom 80%',
				scrub: true,
			},
		})

		parallaxTimeline
			.from('#c-left-leaf', {
				x: -100,
				y: 100,
			})
			.from('#c-right-leaf', {
				x: 100,
				y: 100,
			})
	})

	return (
		<section
			id='cocktails'
			className='noisy'
		>
			<img
				src='/images/cocktail-left-leaf.png'
				alt='tropical leaf'
				id='c-left-leaf'
			/>
			<img
				src='/images/cocktail-right-leaf.png'
				alt='tropical leaf'
				id='c-right-leaf'
			/>
			<div className='list'>
				<div className='popular'>
					<h2>Most popular cocktails:</h2>

					<ul>
						{cocktailLists.map(({ name, ingredients, price }) => (
							<li key={name}>
								<div className='md:me-28'>
									<h3>{name}</h3>
									<p>{ingredients}</p>
								</div>
								<span>{price}</span>
							</li>
						))}
						{/* {cocktailLists.map((drink) => (
							<li key={drink.name}>
								<div className='md:me-28'>
									<h3>{drink.name}</h3>
									<p>{drink.ingredients}</p>
								</div>
							</li>
						))} */}
					</ul>
				</div>
				<div className='popular'>
					<h2>Most loved mocktails:</h2>

					<ul>
						{mockTailLists.map(({ name, ingredients, price }) => (
							<li key={name}>
								<div className='md:me-28'>
									<h3>{name}</h3>
									<p>{ingredients}</p>
								</div>
								<span>{price}</span>
							</li>
						))}
					</ul>
				</div>
			</div>
		</section>
	)
}

export default Cocktails
