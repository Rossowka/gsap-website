import { useGSAP } from '@gsap/react'
import gsap, { SplitText } from 'gsap/all'
import { useRef } from 'react'
import { useMediaQuery } from 'react-responsive'

const Hero = () => {
	const videoRef = useRef()

	const isMobile = useMediaQuery({ maxWidth: 767 })

	useGSAP(() => {
		const heroSplit = new SplitText('.title', { type: 'chars, words' })
		const paragraphSplit = new SplitText('.subtitle', { type: 'lines' })

		heroSplit.chars.forEach((char) => char.classList.add('text-gradient'))

		gsap.from(heroSplit.chars, {
			yPercent: 100,
			duration: 1.8,
			ease: 'expo.out',
			stagger: 0.05,
		})

		gsap.from(paragraphSplit.lines, {
			opacity: 0,
			yPercent: 100,
			duration: 1.8,
			ease: 'expo.out',
			stagger: 0.06,
			delay: 1,
		})

		gsap
			.timeline({
				scrollTrigger: {
					trigger: '#hero',
					start: 'top top',
					end: 'bottom top',
					scrub: true,
				},
			})
			.to('.right-leaf', { y: 200 }, 0)
			.to('.left-leaf', { y: -200 }, 0)

		const startValue = isMobile ? 'top 50%' : 'center 60%' // when the top of the video reaches 50% of the screen on mobile or - center of the video reaches 60%
		const endValue = isMobile ? '120% top' : 'bottom top'

		let tl = gsap.timeline({
			scrollTrigger: {
				trigger: 'video',
				start: startValue,
				end: endValue,
				scrub: true, // the video will play on scroll - for now the video jumps every couple seconds, catching keyframes and skimming through the frames. For scrub based animations we need every single frame to be a keyframe (use ffmpeg)
				pin: true, // pins the video to stay in place as you scroll
			},
		})
		// command for converting the video
		// ffmpeg -i input.mp4 -vf scale=960:-1 -movflags faststart -vcodec libx264 -crf 20 -g 1 -pix_fmt yuv420p output.mp4
		//run it in the folder where the video is placed

		videoRef.current.onloadedmetadata = () => {
			tl.to(videoRef.current, {
				currentTime: videoRef.current.duration,
			})
		}
	}, [])
	return (
		<>
			<section
				id='hero'
				className='noisy'
			>
				<h1 className='title'>mojito</h1>

				<img
					src='/images/hero-left-leaf.png'
					alt='left-leaf'
					className='left-leaf'
				/>
				<img
					src='/images/hero-right-leaf.png'
					alt='right-leaf'
					className='right-leaf'
				/>

				<div className='body'>
					<div className='content'>
						<div className='space-y-5 hidden md:block'>
							<p>Cool. Crisp. Classic.</p>
							<p className='subtitle'>
								Sip the Spirit <br /> of Summer
							</p>
						</div>

						<div className='view-cocktails'>
							<p className='subtitle'>
								Every cocktail on our menu is a blend of premium ingredients, creative flair, and
								timeless recipes — designed to delight your senses.
							</p>
							<a href='#cocktails'>View cocktails</a>
						</div>
					</div>
				</div>
			</section>

			<div className='video absolute inset-0'>
				<video
					ref={videoRef}
					src='/videos/output.mp4'
					muted
					playsInline // without the typical video controls
					preload='auto'
				/>
			</div>
		</>
	)
}

export default Hero
