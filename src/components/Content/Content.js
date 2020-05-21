import React, { useEffect } from 'react'
import { connect } from 'react-redux'
import { Route, Switch } from 'react-router-dom'

import { HomePage, BasketPage, CatalogPage, GoodPage } from '../Pages'
import { basketLoaded } from '../../store/actions'
import { compose } from '../../utils'

import CatalogMenu from '../CatalogMenu'

import { withCameraStoreService } from '../Hoc'

const Content = ({ camerastoreService, basketLoaded }) => {

	useEffect(() => {
		basketLoaded(camerastoreService.getBasketItems())
	}, [basketLoaded, camerastoreService])

	const routerLinks = camerastoreService.getLinks()

	const createCategoryRoutes = () => {
		return routerLinks.map(type => {
			return (
				<Route key={type + type} path={`/${type}`} component={() => {
					const productList = camerastoreService.getGoodList(type)
					return (
						<div className="main__content">
							<CatalogMenu></CatalogMenu>
							<CatalogPage productList={productList} categoryName={type} categoryTitle={camerastoreService.getTitleByLink(type)}></CatalogPage>
						</div>
					)
				}} exact />
			)
		})
	}
	const createItemFromCategoryRoutes = () => {
		return routerLinks.map(type => {
			return (
				<Route key={type} path={`/${type}/:id`}
					component={({ match }) => {
						const id = +match.params.id.match(/-([0-9]*)$/)[1]
						const product = camerastoreService.getGoodByID(id)
						return (
							<div className="main__content">
								<CatalogMenu></CatalogMenu>
								<GoodPage product={product} categoryName={type} categoryTitle={camerastoreService.getTitleByLink(type)} />
							</div>
						)
					}} />
			)
		})
	}


	return (
		<main className="main">
			<div className='container'>
				<Switch>
					<Route path="/" component={HomePage} exact />
					<Route path="/basket" component={BasketPage} exact />
					{createItemFromCategoryRoutes()}
					{createCategoryRoutes()}
				</Switch>
			</div>
		</main >
	)
}

const mapStateToProps = ({ basket }) => ({ basket })

const mapDispatchToProps = { basketLoaded }

export default compose(
	withCameraStoreService(),
	connect(mapStateToProps, mapDispatchToProps)
)(Content)