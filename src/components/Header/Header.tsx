import './Header.style.scss'
import MenuButton from '../../assets/icons/MenuButton.svg?react'

export const Header = () => {
	return (
		<header className='header'>
			<div className='logo'>
				<h2>UnixStudio</h2>
			</div>
			<nav>
				<ul className='menu'>
					<li className='menu-item'>
						<a href='#'>
							<p>CASE</p>
						</a>
					</li>
					<li className='menu-item'>
						<a href='#'>
							<p>SERVICES</p>
						</a>
					</li>
					<li className='menu-item'>
						<a href='#'>
							<p>ABOUT</p>
						</a>
					</li>
					<li className='menu-item'>
						<a href='#'>
							<p>CONTACT</p>
						</a>
					</li>
					<li className='menu-item'>
						<a href='#'>
							<p>NEWS</p>
						</a>
					</li>
				</ul>
			</nav>
			<button className='menuButton'>
				<MenuButton />
			</button>
		</header>
	)
}
