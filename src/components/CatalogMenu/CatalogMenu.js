import React, { useState } from 'react'
import { NavLink } from 'react-router-dom'

import { withCameraStoreService } from '../Hoc'

const CatalogMenu = ({ camerastoreService }) => {

	const [catalogIsOpen, setCatalogIsOpen] = useState(false)

	const catalogMenu = camerastoreService.getCatalogMenu()

	return (
		<aside className={catalogIsOpen ? "main__menu" : "main__menu main__menu-with-border"} >
			<div className="main__to-main-link-block">
				<NavLink to="/" className="main__to-main-page-link">Главная</NavLink>
				<h2 className="main__menu-title " onClick={() => setCatalogIsOpen(!catalogIsOpen)}>
					Каталог
								<span className={catalogIsOpen ? "arrow active" : "arrow"}></span>
				</h2>
			</div>
			<ul className={catalogIsOpen ? "main__menu-list  active" : "main__menu-list"}>
				<h2 className="main__menu-title" >
					Каталог
					</h2>
				{
					catalogMenu.map(({ link, label }, index) => {
						return (
							<li className="main__menu-list-item" key={index}><NavLink to={`/${link}`} className="main__menu-list-item-link">{label}</NavLink></li>
						)
					})
				}
			</ul>
		</aside>
	)
}

export default withCameraStoreService()(CatalogMenu)

