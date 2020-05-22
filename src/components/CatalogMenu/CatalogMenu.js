import React, { useState, useEffect } from 'react'
import { NavLink } from 'react-router-dom'
import Spinner from '../Spinner'
import { withCameraStoreService } from '../Hoc'
import { connect } from 'react-redux'
import { compose } from '../../utils'
import { fetchCatalogMenu } from '../../store/actions'


const CatalogMenu = ({ fetchCatalogMenu, catalogMenu, loadingMenu }) => {

	useEffect(() => {
		fetchCatalogMenu()
	}, [fetchCatalogMenu])

	const [catalogIsOpen, setCatalogIsOpen] = useState(false)

	return (
		<aside className={catalogIsOpen ? "main__menu" : "main__menu main__menu-with-border"} >
			<div className="main__to-main-link-block">
				<NavLink to="/" className="main__to-main-page-link">Главная</NavLink>
				<h2 className="main__menu-title " onClick={() => setCatalogIsOpen(!catalogIsOpen)}>
					Каталог
								<span className={catalogIsOpen ? "arrow active" : "arrow"}></span>
				</h2>
				<NavLink to="/" className="main__to-main-page-link">Назад</NavLink>

			</div>
			<ul className={catalogIsOpen ? "main__menu-list  active" : "main__menu-list"}>
				<h2 className="main__menu-title" >
					Каталог
					</h2>
				{loadingMenu
					? <Spinner />
					: catalogMenu.map(({ link, label }, index) => {
						return (
							<li className="main__menu-list-item" key={index}><NavLink to={`/${link}`} className="main__menu-list-item-link">{label}</NavLink></li>
						)
					})
				}
			</ul>
		</aside>
	)
}


const mapStateToProps = ({ catalogMenu, loadingMenu }) => ({ catalogMenu, loadingMenu })

const mapDispatchToProps = (dispatch, { camerastoreService }) => {
	return {
		fetchCatalogMenu: fetchCatalogMenu(camerastoreService, dispatch)
	}
}

export default compose(
	withCameraStoreService(),
	connect(mapStateToProps, mapDispatchToProps)
)(CatalogMenu)