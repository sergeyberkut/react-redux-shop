const onItemToBasketAdded = payload => ({ type: 'ON_ITEM_TO_BASKET_ADDED', payload })
const basketLoaded = payload => ({ type: 'FETCH_BASKET_SUCCESS', payload })
const basketItemCountChange = payload => ({ type: 'ON_BASKET_ITEM_COUNT_CHANGE', payload })
const onModalVisibleToggle = () => ({ type: 'ON_MODAL-VISIBLE_TOGGLE' })


const fetchCatalogHome = (camerastoreService, dispatch) => () => {
	dispatch(catalogHomeRequested())
	camerastoreService.getCatalogHome()
		.then(data => dispatch(catalogHomeLoaded(data)))
		.catch(err => dispatch(catalogHomeError(err)))
}
const catalogHomeLoaded = payload => ({ type: 'FETCH_CATALOG-HOME_SUCCESS', payload })
const catalogHomeError = payload => ({ type: 'FETCH_CATALOG-HOME_FAILURE', payload })
const catalogHomeRequested = () => ({ type: 'FETCH_CATALOG-HOME_REQUESTED' })


const fetchCatalogMenu = (camerastoreService, dispatch) => () => {
	camerastoreService.getCatalogMenu()
		.then(data => dispatch(catalogMenuLoaded(data)))
		.catch(err => dispatch(catalogMenuError(err)))
}
const catalogMenuLoaded = payload => ({ type: 'FETCH_CATALOG-MENU_SUCCESS', payload })
const catalogMenuError = payload => ({ type: 'FETCH_CATALOG-MENU_FAILURE', payload })

const fetchGoodsToShow = (camerastoreService, dispatch) => categoryName => {
	// dispatch(GoodsToShowRequested())
	// если стоит настройка выше, то при клике на корзину 
	// у товара появляется лоадер
	camerastoreService.getGoodList(categoryName)
		.then(data => dispatch(GoodsToShowLoaded(data)))
		.catch(err => dispatch(GoodsToShowError(err)))
}
const GoodsToShowLoaded = payload => ({ type: 'FETCH_GOODS-TO-SHOW_SUCCESS', payload })
const GoodsToShowError = payload => ({ type: 'FETCH_GOODS-TO-SHOW_FAILURE', payload })
const GoodsToShowRequested = () => ({ type: 'FETCH_GOODS-TO-SHOW_REQUESTED' })



export {
	fetchCatalogHome,
	onModalVisibleToggle,
	fetchGoodsToShow,
	fetchCatalogMenu,
	onItemToBasketAdded,
	basketLoaded,
	basketItemCountChange
}