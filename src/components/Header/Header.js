import React, { useState } from 'react'
import { NavLink } from 'react-router-dom'
import { connect } from 'react-redux'

const Header = ({ basket }) => {

	const [menuIsOpen, setMenuIsOpen] = useState(false)

	const body = document.body

	if (menuIsOpen) {
		body.classList.add('lock')
	} else {
		body.classList.remove('lock')
	}

	window.onresize = () => {
		if (body.clientWidth > 767.98) {
			body.classList.remove('lock')
		} else if (body.clientWidth < 767.98 && menuIsOpen) {
			body.classList.add('lock')
		}
	}

	return (

		<header className="header">
			<div className='container'>
				<div className="header__body">
					<div className="header__row">
						<div className="header__column header__column--logo">
							<NavLink to="/">Logo</NavLink>
						</div>
						<div className="header__column">
							<div className="column-icon">
								<i className="fa fa-envelope"></i>
							</div>
							<div className="column-textblock">
								<p className="column-title">Наша почта</p>
								<b>serezha2145@gmail.com</b>
							</div>
						</div>
						<div className="header__column column" data-da="header__menu-list, 0, 768">
							<div className="column-icon">
								<i className="fa fa-envelope"></i>
							</div>
							<div className="column-textblock">
								<p className="column-title">Режим работы</p>
								<b>Пн-Сб: 09.30 - 19.00</b>
							</div>
						</div>
						<div className="header__column column">
							<div className="column-icon">
								<i className="fa fa-phone"></i>
							</div>
							<div className="column-textblock">
								<p className="column-title">Позвоните нам</p>
								<b><a href="tel:+375333052571">+375333052571</a></b>
							</div>
						</div>
						<div className="header__column header__column--basket-and-icons">
							<div className="column-basket header__column-basket">
								<NavLink to="/basket"><i className="fa fa-shopping-basket"></i>
									<span className="column-basket-count">{basket.length}</span></NavLink>
							</div>
							<p className="column-icons">
								<a href="tel:+375333052571"><i className="fa fa-phone"></i></a>
								<a href="https://instagram.com/callmeberkut" target="_blank" rel="noopener noreferrer"><i className="fa fa-instagram"></i></a>
								<a href="https://vk.com/callmeberkut1" target="_blank" rel="noopener noreferrer"><i className="fa fa-vk"></i></a>
							</p>
						</div>

						<div className="header__column header__column-burger"
							onClick={({ target: { classList: { value } } }) => {
								if (
									value.includes('header__column-burger-icon') ||
									value.includes('burger-line')
								) {
									setMenuIsOpen(!menuIsOpen)
								}
							}}
						>
							<div className={menuIsOpen ? "header__column-burger-icon active" : "header__column-burger-icon"}>
								<span className="burger-line"></span>
								<span className="burger-line"></span>
								<span className="burger-line"></span>
							</div>
							<nav className={menuIsOpen ? "header__hiddenmenu active" : "header__hiddenmenu"}>
								<div className="header__menu-list">
									<div className="header__column header__column--basket-and-icons" data-da="header__menu-list, 0, 768">
										<div className="column-basket header__column-basket" data-da="header__row, 2, 768">
											<NavLink to="/basket" onClick={() => setMenuIsOpen(false)}><i className="fa fa-shopping-basket"></i>
												<span className="column-basket-count">{basket.length}</span></NavLink>
										</div>
										<p className="column-icons">
											<a href="tel:+375333052571"><i className="fa fa-phone"></i></a>
											<a href="https://instagram.com/callmeberkut" target="_blank" rel="noopener noreferrer"><i className="fa fa-instagram"></i></a>
											<a href="https://vk.com/callmeberkut1" target="_blank" rel="noopener noreferrer"><i className="fa fa-vk"></i></a>
										</p>
									</div>
									<div className="header__column" data-da="header__menu-list, 0, 768">
										<div className="column-icon">
											<i className="fa fa-envelope"></i>
										</div>
										<div className="column-textblock">
											<p className="column-title">Наша почта</p>
											<b>serezha2145@gmail.com</b>
										</div>
									</div>
									<div className="header__column column" data-da="header__menu-list, 0, 768">
										<div className="column-icon">
											<i className="fa fa-envelope"></i>
										</div>
										<div className="column-textblock">
											<p className="column-title">Режим работы</p>
											<b>Пн-Сб: 09.30 - 19.00</b>
										</div>
									</div>
								</div>
							</nav>
						</div>
					</div>
				</div>
			</div>
		</header>

	)
}

const mapStateToProps = ({ basket }) => ({ basket })

const mapDispatchToProps = {}

export default connect(mapStateToProps, mapDispatchToProps)(Header)