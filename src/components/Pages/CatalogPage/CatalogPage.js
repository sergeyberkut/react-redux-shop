import React, { useEffect } from 'react'
import { connect } from 'react-redux'
import Spinner from '../../Spinner'
import { compose } from '../../../utils'
import { withCameraStoreService } from '../../Hoc'
import { fetchGoodsToShow } from '../../../store/actions'
import CatalogColumn from '../../CatalogColumn'


function CatalogPage({ categoryName, categoryTitle, fetchGoodsToShow, goodsToShow, loadingGoods }) {

	useEffect(() => {
		fetchGoodsToShow(categoryName)
	}, [fetchGoodsToShow, categoryName])


	// При клике на иконку корзины происходит перерендер
	// исправить

	return (
		<div className="main__goods">
			<h1 className="main__title">{categoryTitle}</h1>
			<div className="main__goods-row">
				{
					loadingGoods
						? <Spinner />
						: <CatalogColumn goodsToShow={goodsToShow} />
				}
			</div >
		</div >
	)
}


const mapStateToProps = ({ goodsToShow, loadingGoods }) => ({ goodsToShow, loadingGoods })

const mapDispatchToProps = (dispatch, { camerastoreService }) => {
	return {
		fetchGoodsToShow: fetchGoodsToShow(camerastoreService, dispatch)
	}
}

export default compose(
	withCameraStoreService(),
	connect(mapStateToProps, mapDispatchToProps)
)(CatalogPage)