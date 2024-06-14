import './Hero.style.scss'
import { HeroGraphic } from './HeroGraphic'
import { HeroVectors } from './HeroVectors'
import GetInTouch from '../../assets/icons/GetInTouch.svg?react'
import Star from '../../assets/icons/Star.svg?react'

export const Hero = ({
	heading,
	description,
}: {
	heading: string
	description: string
}) => {
	return (
		<section className='hero'>
			<h1 className='hero-heading'>
				{heading}
			</h1>
			<p className='hero-description'>{description}</p>
			<HeroVectors />
			<HeroGraphic />
			<div className='hero-borderGraphic'>
				<div className='hero-borderGraphic-1'></div>
				<div className='hero-borderGraphic-2'></div>
				<div className='hero-borderGraphic-3'></div>
				<div className='hero-borderGraphic-4'></div>
			</div>
			<GetInTouch className='getInTouch' />
				<Star className='star' />
		</section>
	)
}
