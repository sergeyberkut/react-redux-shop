const onItemToBasketAdded = payload => ({ type: 'ON_ITEM_TO_BASKET_ADDED', payload })
const basketLoaded = payload => ({ type: 'FETCH_BASKET_SUCCESS', payload })
const basketItemCountChange = payload => ({ type: 'ON_BASKET_ITEM_COUNT_CHANGE', payload })


const fetchCatalogHome = (camerastoreService, dispatch) => () => {
	camerastoreService.getCatalogHome()
		.then(data => dispatch(catalogHomeLoaded(data)))
		.catch(err => dispatch(catalogHomeError(err)))
}
const catalogHomeLoaded = payload => ({ type: 'FETCH_CATALOG-HOME-SUCCESS', payload })
const catalogHomeError = payload => ({ type: 'FETCH_CATALOG-HOME-FAILURE', payload })



export {
	fetchCatalogHome,
	onItemToBasketAdded,
	basketLoaded,
	basketItemCountChange
}